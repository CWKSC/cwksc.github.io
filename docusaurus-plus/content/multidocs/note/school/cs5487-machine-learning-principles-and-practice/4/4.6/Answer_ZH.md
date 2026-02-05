---
title: Answer ZH
---

## 先備知識

* **混合模型 (Mixture Models)**：理解機率密度如何表示為分量密度的加權和。
* **指數分佈 (Exponential Distribution)**：機率密度函數 (PDF) 為 $p(x|\lambda) = \lambda e^{-\lambda x}$。
* **最大概似估計 (MLE)**：尋找使概似函數最大化的參數值。
* **期望最大化 (EM) 演算法**：一種迭代方法，用於在統計模型（特別是具有隱變量的模型）中尋找參數的 MLE 或 MAP 估計值。
* **延森不等式 (Jensen's Inequality)**：用於推導 EM 演算法的下界。
* **拉格朗日乘數法 (Lagrange Multipliers)**：用於約束優化（特別是用於 $\sum \pi_j = 1$）。

## 逐步推導

### 1. 模型設定與完整數據概似函數

設觀測數據為 $X = \{x_1, \dots, x_n\}$。
我們引入隱變量 (Latent Variables) $Z = \{z_1, \dots, z_n\}$，其中 $z_i \in \{1, \dots, K\}$ 表示哪個分量生成了 $x_i$。
使用 1-of-K 編碼方案，若 $x_i$ 屬於分量 $j$，則 $z_{ij} = 1$，否則為 0。

完整數據概似函數 (Complete Data Likelihood) 為：
$$
P(X, Z | \theta) = \prod_{i=1}^n \prod_{j=1}^K [\pi_j p(x_i | \lambda_j)]^{z_{ij}}
$$

完整數據對數概似函數 (Complete Data Log-Likelihood) 為：
$$
\ln P(X, Z | \theta) = \sum_{i=1}^n \sum_{j=1}^K z_{ij} \left( \ln \pi_j + \ln(\lambda_j e^{-\lambda_j x_i}) \right)
$$
$$
\ln P(X, Z | \theta) = \sum_{i=1}^n \sum_{j=1}^K z_{ij} \left( \ln \pi_j + \ln \lambda_j - \lambda_j x_i \right)
$$

### 2. E 步驟 (期望 Expectation)

我們計算在給定當前參數 $\theta^{(t)}$ 下，隱變量 $z_{ij}$ 的期望值。這即是數據點 $x_i$ 由分量 $j$ 生成的後驗機率 (Responsibility)：

$$
\gamma_{ij}^{(t)} = E[z_{ij} | x_i, \theta^{(t)}] = P(z_i = j | x_i, \theta^{(t)})
$$

利用貝氏定理：
$$
\gamma_{ij}^{(t)} = \frac{\pi_j^{(t)} p(x_i | \lambda_j^{(t)})}{\sum_{k=1}^K \pi_k^{(t)} p(x_i | \lambda_k^{(t)})}
$$

代入指數密度函數：
$$
\gamma_{ij}^{(t)} = \frac{\pi_j^{(t)} \lambda_j^{(t)} e^{-\lambda_j^{(t)} x_i}}{\sum_{k=1}^K \pi_k^{(t)} \lambda_k^{(t)} e^{-\lambda_k^{(t)} x_i}}
$$

### 3. M 步驟 (最大化 Maximization)

我們針對參數 $\theta = \{\pi_j, \lambda_j\}$ 最大化期望完整數據對數概似函數 (Q 函數)。
Q 函數為：
$$
Q(\theta, \theta^{(t)}) = E_Z [\ln P(X, Z | \theta) | X, \theta^{(t)}] = \sum_{i=1}^n \sum_{j=1}^K \gamma_{ij}^{(t)} \left( \ln \pi_j + \ln \lambda_j - \lambda_j x_i \right)
$$

#### 針對 $\pi_j$ 優化

我們需要最大化 $\sum_{i=1}^n \sum_{j=1}^K \gamma_{ij}^{(t)} \ln \pi_j$，並受限於 $\sum_{j=1}^K \pi_j = 1$。
使用拉格朗日乘數法，拉格朗日函數為：
$$
L(\pi, \alpha) = \sum_{i=1}^n \sum_{j=1}^K \gamma_{ij}^{(t)} \ln \pi_j + \alpha \left( \sum_{j=1}^K \pi_j - 1 \right)
$$
對 $\pi_j$ 微分並設為 0：
$$
\frac{\partial L}{\partial \pi_j} = \sum_{i=1}^n \frac{\gamma_{ij}^{(t)}}{\pi_j} + \alpha = 0 \implies \pi_j = -\frac{\sum_{i=1}^n \gamma_{ij}^{(t)}}{\alpha}
$$
對 $j$ 求和：
$$
\sum_{j=1}^K \pi_j = -\frac{\sum_{i=1}^n \sum_{j=1}^K \gamma_{ij}^{(t)}}{\alpha} \implies 1 = -\frac{n}{\alpha} \implies \alpha = -n
$$
因此：
$$
\pi_j^{(t+1)} = \frac{1}{n} \sum_{i=1}^n \gamma_{ij}^{(t)}
$$

#### 針對 $\lambda_j$ 優化

我們考慮 Q 函數中包含 $\lambda_j$ 的項：
$$
Q_{\lambda_j} = \sum_{i=1}^n \gamma_{ij}^{(t)} (\ln \lambda_j - \lambda_j x_i)
$$
對 $\lambda_j$ 微分並設為 0：
$$
\frac{\partial Q}{\partial \lambda_j} = \sum_{i=1}^n \gamma_{ij}^{(t)} \left( \frac{1}{\lambda_j} - x_i \right) = 0
$$
$$
\frac{1}{\lambda_j} \sum_{i=1}^n \gamma_{ij}^{(t)} = \sum_{i=1}^n \gamma_{ij}^{(t)} x_i
$$
$$
\lambda_j^{(t+1)} = \frac{\sum_{i=1}^n \gamma_{ij}^{(t)}}{\sum_{i=1}^n \gamma_{ij}^{(t)} x_i}
$$

## 最終 EM 演算法

1. **初始化**：選擇 $\pi_j^{(0)}$ 和 $\lambda_j^{(0)}$ 的初始值。
2. **E 步驟**：計算責任值 (Responsibilities)：
    $$
    \gamma_{ij}^{(t)} = \frac{\pi_j^{(t)} \lambda_j^{(t)} e^{-\lambda_j^{(t)} x_i}}{\sum_{k=1}^K \pi_k^{(t)} \lambda_k^{(t)} e^{-\lambda_k^{(t)} x_i}}
    $$
3. **M 步驟**：更新參數：
    $$
    \pi_j^{(t+1)} = \frac{1}{n} \sum_{i=1}^n \gamma_{ij}^{(t)}
    $$
    $$
    \lambda_j^{(t+1)} = \frac{\sum_{i=1}^n \gamma_{ij}^{(t)}}{\sum_{i=1}^n \gamma_{ij}^{(t)} x_i}
    $$
4. **迭代**：重複步驟 2 和 3 直到收斂。
