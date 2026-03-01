---
title: Answer ZH
---

# 先備知識 (Prerequisites)

*   **期望最大化演算法 (Expectation-Maximization Algorithm, EM):** 一種迭代方法，用於在統計模型（尤其是模型依賴於未觀察到的隱藏變量時）找出參數的最大概似估計 (Maximum Likelihood Estimates)。
*   **卜瓦松分佈 (Poisson Distribution):** 一種離散機率分佈，表示在固定時間間隔或空間內發生特定事件次數的機率。
*   **完整資料對數概似函數 (Complete-Data Log-Likelihood):** 將觀察到的變量和未觀察到的隱藏變量結合構造出的對數概似函數。

# 逐步推導 (Step-by-Step Derivation)

令 $X = \{x_1, \dots, x_n\}$ 為我們的觀測集合，其中每一個 $x_i \in \{0, 1, 2, \dots\}$。
令 $Z = \{z_1, \dots, z_n\}$ 為未觀察到的隱藏變量 (Latent variables / cluster assignments)，其中 $z_i \in \{1, \dots, K\}$ 指示 $x_i$ 是由哪一個卜瓦松分量生成的。
隱藏變量的機率由混合權重定義：$p(z_i = j) = \pi_j$，且 $\sum_{j=1}^K \pi_j = 1$。

給定樣本來自於分量 $j$ 之下，觀測值 $x_i$ 的機率為：
$$p(x_i | z_i = j, \theta) = \frac{e^{-\lambda_j} \lambda_j^{x_i}}{x_i!}$$

一個觀測值 $(x_i, z_i)$ 的完整資料對數概似函數為：
$$\log p(x_i, z_i = j | \theta) = \log(p(z_i = j) p(x_i | z_i=j, \theta)) = \log \pi_j - \lambda_j + x_i \log \lambda_j - \log(x_i!)$$

因此，所有 $n$ 個樣本的總完整資料對數概似函數，通常使用指標函數 (Indicator function) $\mathbb{I}(z_i = j)$ 來表示：
$$\mathcal{L}_c(\theta) = \sum_{i=1}^n \sum_{j=1}^K \mathbb{I}(z_i = j) \left( \log \pi_j - \lambda_j + x_i \log \lambda_j - \log(x_i!) \right)$$

### 1. E 步 (E-step, Expectation)

在 E 步中，我們計算給定目前參數估計值 $\theta^{(t)}$ 和觀測值之下，隱藏變量 $Z$ 的後驗分佈對完整資料對數概似函數的期望值。

這相當於對指標變量 $\mathbb{I}(z_i = j)$ 取期望值，這將得到後驗責任值 (Posterior responsibilities) $\gamma_{ij}$：
$$\gamma_{ij} = p(z_i = j | x_i, \theta^{(t)}) = \frac{p(z_i = j | \theta^{(t)}) p(x_i | z_i = j, \theta^{(t)})}{\sum_{m=1}^K p(z_i = m | \theta^{(t)}) p(x_i | z_i = m, \theta^{(t)})}$$

代入卜瓦松密度函數：
$$\gamma_{ij}^{(t)} = \frac{\pi_j^{(t)} \frac{e^{-\lambda_j^{(t)}} (\lambda_j^{(t)})^{x_i}}{x_i!}}{\sum_{m=1}^K \pi_m^{(t)} \frac{e^{-\lambda_m^{(t)}} (\lambda_m^{(t)})^{x_i}}{x_i!}} = \frac{\pi_j^{(t)} e^{-\lambda_j^{(t)}} (\lambda_j^{(t)})^{x_i}}{\sum_{m=1}^K \pi_m^{(t)} e^{-\lambda_m^{(t)}} (\lambda_m^{(t)})^{x_i}}$$

我們獲得在下一步要最大化的輔助函數 (Auxiliary function) $Q(\theta, \theta^{(t)})$：
$$Q(\theta, \theta^{(t)}) = \sum_{i=1}^n \sum_{j=1}^K \gamma_{ij}^{(t)} \left( \log \pi_j - \lambda_j + x_i \log \lambda_j - \log(x_i!) \right)$$

### 2. M 步 (M-step, Maximization)

在 M 步中，我們相對於參數 $\theta = (\pi, \lambda)$ 最大化 $Q(\theta, \theta^{(t)})$。

**最大化 $\pi_j$ (混合比例 Mixing proportions)：**
我們使用拉格朗日乘數 (Lagrange multiplier) 來強制滿足 $\sum_{j=1}^K \pi_j = 1$ 的約束條件：
$$L(\pi, \alpha) = \sum_{i=1}^n \sum_{j=1}^K \gamma_{ij}^{(t)} \log \pi_j + \alpha \left(1 - \sum_{j=1}^K \pi_j \right)$$

對 $\pi_j$ 取導數並設為零：
$$\frac{\partial}{\partial \pi_j} L(\pi, \alpha) = \frac{\sum_{i=1}^n \gamma_{ij}^{(t)}}{\pi_j} - \alpha = 0 \implies \pi_j = \frac{1}{\alpha} \sum_{i=1}^n \gamma_{ij}^{(t)}$$

對所有的 $j$ 加總，可得 $\alpha = n$。令 $N_j = \sum_{i=1}^n \gamma_{ij}^{(t)}$ 為預期被分配到分量 $j$ 的樣本數。更新規則為：
$$\pi_j^{(t+1)} = \frac{N_j}{n}$$

**最大化 $\lambda_j$ (卜瓦松率 Poisson rates)：**
我們分離 $Q$ 函數中包含 $\lambda_j$ 的項，並對 $\lambda_j$ 取導數：
$$\frac{\partial Q}{\partial \lambda_j} = \sum_{i=1}^n \gamma_{ij}^{(t)} \left( -1 + \frac{x_i}{\lambda_j} \right) = 0$$

重排表達式以求解 $\lambda_j$：
$$\sum_{i=1}^n \gamma_{ij}^{(t)} = \sum_{i=1}^n \gamma_{ij}^{(t)} \frac{x_i}{\lambda_j}$$
$$N_j = \frac{1}{\lambda_j} \sum_{i=1}^n \gamma_{ij}^{(t)} x_i \implies \lambda_j^{(t+1)} = \frac{\sum_{i=1}^n \gamma_{ij}^{(t)} x_i}{N_j}$$

### 與單一卜瓦松的 MLE 的關聯

對於單一卜瓦松分佈的標準最大概似估計 (ML estimate)（第 2.1 題），更新規則為 $\lambda = \frac{1}{n} \sum_{i=1}^n x_i$（資料的算術平均數）。

在這裡的 M 步中，更新規則 $\lambda_j^{(t+1)} = \frac{\sum_{i=1}^n \gamma_{ij}^{(t)} x_i}{\sum_{i=1}^n \gamma_{ij}^{(t)}}$ 實質上是一個**加權**的最大概似估計 (Weighted ML estimate)。相對於將每個資料點平等對待（權重為 1），這裡每個樣本觀測值 $x_i$ 僅以其責任值 $\gamma_{ij}$ 的比例對分量 $j$ 做出貢獻。總權重之和 $N_j$ 替代了全體的樣本總量 $n$。