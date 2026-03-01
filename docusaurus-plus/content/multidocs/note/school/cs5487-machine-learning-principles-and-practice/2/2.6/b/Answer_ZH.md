---
title: Answer ZH
---

# 解答：協方差 $\Sigma$ 的最大似然估計

## 先備知識
* **多變量高斯分佈 (Multivariate Gaussian Distribution)**
* **最大似然估計 (Maximum Likelihood Estimation, MLE)**
* **矩陣代數中的跡數技巧 (Trace Trick)**: $x^T A x = \text{tr}(x^T A x) = \text{tr}(A x x^T)$
* **矩陣微積分 (Matrix Calculus)**

## 逐步推導 (Step-by-Step Derivation)

**1. 回顧對數似然函數 (Log-Likelihood Function)**
根據第 (a) 部分的推導，來自多變量高斯分佈的 $N$ 個 i.i.d. 樣本的對數似然函數為：
$$
\ell(\mu, \Sigma) = \sum_{i=1}^N \left( -\frac{d}{2} \log(2\pi) - \frac{1}{2} \log |\Sigma| - \frac{1}{2} (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) \right)
$$
我們希望相對於 $\Sigma$ 將其最大化。提取出只包含 $\Sigma$ 的項：
$$
J(\Sigma) = -\frac{N}{2} \log |\Sigma| - \frac{1}{2} \sum_{i=1}^N (x_i - \mu)^T \Sigma^{-1} (x_i - \mu)
$$

**2. 應用跡數技巧 (Trace Trick)**
項 $(x_i - \mu)^T \Sigma^{-1} (x_i - \mu)$ 是一個標量 (scalar)。標量的跡數 (trace) 等於它本身。根據跡運算的循環性質 $\text{tr}(ABC) = \text{tr}(CAB) = \text{tr}(BCA)$，我們可以重新排列因子：
$$
(x_i - \mu)^T \Sigma^{-1} (x_i - \mu) = \text{tr} \left( (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) \right) = \text{tr} \left( (x_i - \mu)(x_i - \mu)^T \Sigma^{-1} \right)
$$
現在，將其代回 $J(\Sigma)$ 並交換求和與跡數操作（因為跡數是一個線性算子）：
$$
J(\Sigma) = -\frac{N}{2} \log |\Sigma| - \frac{1}{2} \text{tr} \left( \sum_{i=1}^N (x_i - \mu)(x_i - \mu)^T \Sigma^{-1} \right)
$$
我們定義散佈矩陣 (scatter matrix) $S = \sum_{i=1}^N (x_i - \mu)(x_i - \mu)^T$。請注意 $S$ 是一個 $d \times d$ 的對稱矩陣。目標函數簡化為：
$$
J(\Sigma) = -\frac{N}{2} \log |\Sigma| - \frac{1}{2} \text{tr} (S \Sigma^{-1})
$$

**3. 計算矩陣導數 (Compute Matrix Derivative)**
現在我們對 $J(\Sigma)$ 關於矩陣 $\Sigma$ 求偏導。
使用提示給出的公式：
* $\frac{\partial}{\partial \Sigma} \log |\Sigma| = \Sigma^{-T}$
* $\frac{\partial}{\partial \Sigma} \text{tr}(S \Sigma^{-1}) = - (\Sigma^{-T} S^T \Sigma^{-T})$

應用這些規則：
$$
\frac{\partial}{\partial \Sigma} J(\Sigma) = -\frac{N}{2} \Sigma^{-T} - \frac{1}{2} \left( - (\Sigma^{-T} S^T \Sigma^{-T}) \right)
$$
由於 $\Sigma$ 是對稱矩陣，$\Sigma^T = \Sigma$，因此 $\Sigma^{-T} = (\Sigma^{-1})^T = \Sigma^{-1}$。
由於 $S$ 是外積項 $(x_i-\mu)(x_i-\mu)^T$ 的和，$S$ 同樣是對稱的 ($S^T = S$)。
因此，方程式可以簡化為：
$$
\frac{\partial \ell}{\partial \Sigma} = -\frac{N}{2} \Sigma^{-1} + \frac{1}{2} \Sigma^{-1} S \Sigma^{-1}
$$

**4. 設為零並求解 $\hat{\Sigma}$**
將導數設為零矩陣：
$$
-\frac{N}{2} \Sigma^{-1} + \frac{1}{2} \Sigma^{-1} S \Sigma^{-1} = 0
$$
$$
\frac{N}{2} \Sigma^{-1} = \frac{1}{2} \Sigma^{-1} S \Sigma^{-1}
$$
在等式兩側分別從左邊乘上 $\Sigma$，然後再從右邊乘上 $\Sigma$：
$$
N \Sigma \Sigma^{-1} \Sigma = \Sigma \Sigma^{-1} S \Sigma^{-1} \Sigma
$$
$$
N \Sigma = S
$$
求解估計值 $\hat{\Sigma}$：
$$
\hat{\Sigma}_{ML} = \frac{1}{N} S = \frac{1}{N} \sum_{i=1}^N (x_i - \mu)(x_i - \mu)^T
$$
假設我們用第 (a) 部分推導出來的最大似然估計 $\hat{\mu}$ 來替換真實的均值 $\mu$，那麼最終協方差矩陣的最大似然估計為：
$$
\hat{\Sigma}_{ML} = \frac{1}{N} \sum_{i=1}^N (x_i - \hat{\mu})(x_i - \hat{\mu})^T
$$