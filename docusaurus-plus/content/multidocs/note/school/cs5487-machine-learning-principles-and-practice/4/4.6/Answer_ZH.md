---
title: Answer ZH
---

## 預備知識 (Prerequisites)
* **期望最大化演算法 (Expectation-Maximization Algorithm, EM)**：一種迭代方法，用於尋找統計模型中依賴未觀察到的潛在變數 (latent variables) 的參數的最大概似估計 (Maximum Likelihood Estimates)。
* **最大概似估計 (Maximum Likelihood Estimation, MLE)**：一種給定觀察數據來估計統計模型參數的方法。
* **指數分佈 (Exponential Distribution)**：一種由速率參數 (rate parameter) $\lambda$ 參數化的連續機率分佈。其機率密度函數 (Probability Density Function, PDF) 為 $f(x; \lambda) = \lambda e^{-\lambda x}$。
* **拉格朗日乘數法 (Lagrange Multipliers)**：一種尋找在方程式約束下函數局部最大值與最小值的策略。

## 推導步驟 (Step-by-Step Derivation)

為了推導指數混合模型的 EM 演算法，我們首先為每個樣本 $x_i$ 引入一個潛在變數 (latent variable) $z_i \in \{1, \dots, K\}$，指出 $x_i$ 是從哪個成分 (component) 生成的。我們將 $z_i$ 表示為 one-hot 向量，如果 $x_i$ 屬於成分 $j$，則 $z_{ij} = 1$，否則為 $0$。

給定完整數據 (complete data) $(X, Z) = \{(x_i, z_i)\}_{i=1}^n$ 的對數概似函數 (log-likelihood) 為：

$$\ell_c(\theta) = \sum_{i=1}^n \log p(x_i, z_i | \theta) = \sum_{i=1}^n \sum_{j=1}^K I(z_i = j) \log (\pi_j \lambda_j e^{-\lambda_j x_i})$$

其中 $I(z_i = j)$ 是一個指示函數 (indicator function)，當 $z_i = j$ 時等於 1，反之為 0。

### 1. 期望步 (E-Step)

在 E 步 (Expectation) 中，我們計算在給定數據 $X$ 以及目前參數估計值 $\theta^{(t)} = \{\pi_j^{(t)}, \lambda_j^{(t)}\}_{j=1}^K$ 時，潛在變數 $z_i$ 的期望值。

我們定義責任值 (responsibility) $\gamma_{ij}$ 為樣本 $x_i$ 由成分 $j$ 生成的後驗機率 (posterior probability)：

$$\gamma_{ij} = E[I(z_i=j) | x_i, \theta^{(t)}] = p(z_i=j | x_i, \theta^{(t)})$$

使用貝氏定理 (Bayes' theorem)：

$$\gamma_{ij} = \frac{p(z_i=j | \theta^{(t)}) p(x_i | z_i=j, \theta^{(t)})}{\sum_{m=1}^K p(z_i=m | \theta^{(t)}) p(x_i | z_i=m, \theta^{(t)})}$$

代入給定的分佈公式：

$$\gamma_{ij} = \frac{\pi_j^{(t)} \lambda_j^{(t)} e^{-\lambda_j^{(t)} x_i}}{\sum_{m=1}^K \pi_m^{(t)} \lambda_m^{(t)} e^{-\lambda_m^{(t)} x_i}}$$

我們構建期望的完整數據對數概似函數 (也就是 Q 函數)，將指示函數替換為它的期望值 $\gamma_{ij}$：

$$Q(\theta, \theta^{(t)}) = \sum_{i=1}^n \sum_{j=1}^K \gamma_{ij} (\log \pi_j + \log \lambda_j - \lambda_j x_i)$$

### 2. 最大化步 (M-Step)

在 M 步 (Maximization) 中，我們針對參數 $\theta = \{\pi_j, \lambda_j\}$ 對 Q 函數進行最大化，以找到更新後的參數 $\theta^{(t+1)}$。令 $N_j = \sum_{i=1}^n \gamma_{ij}$ 為分配給成分 $j$ 的有效樣本數。

**更新 $\pi_j$ (混合權重, Mixture Weights) :**

我們希望在約束條件 $\sum_{j=1}^K \pi_j = 1$ 的情況下對 $\pi_j$ 最大化 Q 函數。我們使用拉格朗日乘數 (Lagrange multiplier) $\alpha$ 來引入此約束：

$$\mathcal{L}(\pi, \alpha) = \sum_{i=1}^n \sum_{j=1}^K \gamma_{ij} \log \pi_j + \alpha \left(1 - \sum_{j=1}^K \pi_j\right)$$

對 $\pi_j$ 偏微分並將其設為零：

$$\frac{\partial \mathcal{L}}{\partial \pi_j} = \frac{1}{\pi_j} \sum_{i=1}^n \gamma_{ij} - \alpha = 0 \implies \pi_j = \frac{N_j}{\alpha}$$

對所有 $K$ 個成分求和以解出拉格朗日乘數 $\alpha$：

$$\sum_{j=1}^K \pi_j = \sum_{j=1}^K \frac{N_j}{\alpha} = \frac{1}{\alpha} \sum_{j=1}^K \sum_{i=1}^n \gamma_{ij} = \frac{n}{\alpha} = 1 \implies \alpha = n$$

因此，混合權重的更新規則為：

$$\pi_j^{(t+1)} = \frac{N_j}{n}$$

**更新 $\lambda_j$ (成分參數, Component Parameters) :**

我們求 Q 函數對 $\lambda_j$ 的偏微分，並將其設為零：

$$\frac{\partial Q}{\partial \lambda_j} = \sum_{i=1}^n \gamma_{ij} \left( \frac{1}{\lambda_j} - x_i \right) = 0$$

$$\frac{1}{\lambda_j} \sum_{i=1}^n \gamma_{ij} - \sum_{i=1}^n \gamma_{ij} x_i = 0$$

將責任值的總和替換為 $N_j$：

$$\frac{N_j}{\lambda_j} = \sum_{i=1}^n \gamma_{ij} x_i$$

重新整理以解出 $\lambda_j$，我們得到更新規則：

$$\lambda_j^{(t+1)} = \frac{N_j}{\sum_{i=1}^n \gamma_{ij} x_i}$$

### 推導出的 EM 演算法總結

給定初始參數 $\theta^{(0)} = \{\pi_j^{(0)}, \lambda_j^{(0)}\}_{j=1}^K$，迭代以下步驟直到收斂：

1. **E步 (E-step)**：計算針對 $i=1,\dots,n$ 和 $j=1,\dots,K$ 的責任值：
   $$\gamma_{ij} = \frac{\pi_j^{(t)} \lambda_j^{(t)} e^{-\lambda_j^{(t)} x_i}}{\sum_{m=1}^K \pi_m^{(t)} \lambda_m^{(t)} e^{-\lambda_m^{(t)} x_i}}$$

2. **M步 (M-step)**：利用責任值更新參數：
   $$N_j = \sum_{i=1}^n \gamma_{ij}$$
   $$\pi_j^{(t+1)} = \frac{N_j}{n}$$
   $$\lambda_j^{(t+1)} = \frac{N_j}{\sum_{i=1}^n \gamma_{ij} x_i}$$
