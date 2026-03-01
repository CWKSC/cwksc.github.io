---
title: Answer ZH
---

# 解答：均值 $\mu$ 的最大似然估計

## 先備知識

- **多變量高斯分佈 (Multivariate Gaussian Distribution)**
- **最大似然估計 (Maximum Likelihood Estimation, MLE)**
- **矩陣微積分 (Matrix Calculus)**

## 逐步推導 (Step-by-Step Derivation)

**1. 寫出似然函數 (Likelihood Function)**
來自多變量高斯分佈的單一樣本 $x_i \in \mathbb{R}^d$ 的概率密度函數 (Probability Density Function, PDF) 為：

$$
p(x_i | \mu, \Sigma) = \frac{1}{(2\pi)^{d/2} |\Sigma|^{1/2}} \exp\left( -\frac{1}{2} (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) \right)
$$

假設樣本 $\{x_1, \cdots, x_N\}$ 是獨立同分佈的 (i.i.d.)，則似然函數 $L(\mu, \Sigma)$ 是各個概率的乘積：

$$
L(\mu, \Sigma) = \prod_{i=1}^N p(x_i | \mu, \Sigma)
$$

**2. 建立對數似然函數 (Log-Likelihood)**
為了簡化求導過程，我們對似然函數取自然對數，得到對數似然函數 $\ell(\mu, \Sigma)$：

$$
\ell(\mu, \Sigma) = \log L(\mu, \Sigma) = \sum_{i=1}^N \log p(x_i | \mu, \Sigma)
$$

$$
\ell(\mu, \Sigma) = \sum_{i=1}^N \left( -\frac{d}{2} \log(2\pi) - \frac{1}{2} \log |\Sigma| - \frac{1}{2} (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) \right)
$$

去掉不依賴於 $\mu$ 的常數項，與 $\mu$ 相關的目標函數為：

$$
J(\mu) = -\frac{1}{2} \sum_{i=1}^N (x_i - \mu)^T \Sigma^{-1} (x_i - \mu)
$$

**3. 展開二次項 (Quadratic Term)**
我們展開 $(x_i - \mu)^T \Sigma^{-1} (x_i - \mu)$ 這一項：

$$
(x_i - \mu)^T \Sigma^{-1} (x_i - \mu) = x_i^T \Sigma^{-1} x_i - x_i^T \Sigma^{-1} \mu - \mu^T \Sigma^{-1} x_i + \mu^T \Sigma^{-1} \mu
$$

因為 $\Sigma$ 是對稱矩陣 (symmetric matrix) ($\Sigma = \Sigma^T$)，其逆矩陣 $\Sigma^{-1}$ 也是對稱的。因此，內積結果為標量，有 $x_i^T \Sigma^{-1} \mu = (\mu^T \Sigma^{-1} x_i)^T = \mu^T \Sigma^{-1} x_i$：

$$
(x_i - \mu)^T \Sigma^{-1} (x_i - \mu) = x_i^T \Sigma^{-1} x_i - 2 \mu^T \Sigma^{-1} x_i + \mu^T \Sigma^{-1} \mu
$$

**4. 對 $\mu$ 求偏導 (Compute Derivative)**
對 $J(\mu)$ 關於 $\mu$ 求偏導數：

$$
\frac{\partial}{\partial \mu} J(\mu) = -\frac{1}{2} \sum_{i=1}^N \frac{\partial}{\partial \mu} \left( x_i^T \Sigma^{-1} x_i - 2 (\Sigma^{-1} x_i)^T \mu + \mu^T \Sigma^{-1} \mu \right)
$$

利用提示中給出的恆等式：

- $\frac{\partial}{\partial \mu} x_i^T \Sigma^{-1} x_i = 0$ (對 $\mu$ 而言是常數)
- $\frac{\partial}{\partial \mu} \left( -2 (\Sigma^{-1} x_i)^T \mu \right) = -2 \Sigma^{-1} x_i$
- $\frac{\partial}{\partial \mu} (\mu^T \Sigma^{-1} \mu) = \Sigma^{-1} \mu + (\Sigma^{-1})^T \mu = 2 \Sigma^{-1} \mu$ (因為 $\Sigma^{-1}$ 係對稱的)

將這些結果代入求和公式：

$$
\frac{\partial \ell}{\partial \mu} = -\frac{1}{2} \sum_{i=1}^N \left( -2 \Sigma^{-1} x_i + 2 \Sigma^{-1} \mu \right) = \sum_{i=1}^N \Sigma^{-1} (x_i - \mu)
$$

**5. 導數設為零並求解 $\hat{\mu}$**
為了尋找極大值，將導數設為零向量：

$$
\sum_{i=1}^N \Sigma^{-1} (x_i - \hat{\mu}) = 0
$$

因為 $\Sigma^{-1}$ 是一個常數矩陣 (且可逆)，我們可以將等式兩邊同時左乘 $\Sigma$：

$$
\sum_{i=1}^N (x_i - \hat{\mu}) = 0
$$

$$
\sum_{i=1}^N x_i - N \hat{\mu} = 0 \implies N \hat{\mu} = \sum_{i=1}^N x_i
$$

$$
\hat{\mu}_{ML} = \frac{1}{N} \sum_{i=1}^N x_i
$$

這證明了均值的最大似然估計正好就是樣本均值 (Sample Mean)。
