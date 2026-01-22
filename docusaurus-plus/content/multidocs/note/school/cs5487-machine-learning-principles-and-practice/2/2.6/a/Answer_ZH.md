---
title: Answer_ZH.md
---

## 預備知識

1. **多變量高斯分佈機率密度函數 (PDF)**:
    具有均值 $\mu$ 和協方差矩陣 $\Sigma$ 的 $d$-維高斯分佈的機率密度函數為：
    $$ p(x|\mu, \Sigma) = \frac{1}{(2\pi)^{d/2} |\Sigma|^{1/2}} \exp\left( -\frac{1}{2} (x-\mu)^T \Sigma^{-1} (x-\mu) \right) $$

2. **似然函數 (Likelihood Function)**:
    假設樣本 $\{x_1, \dots, x_N\}$ 是獨立同分佈 (i.i.d.) 的，則似然函數為：
    $$ L(\mu, \Sigma) = \prod_{i=1}^N p(x_i|\mu, \Sigma) $$

3. **對數似然函數 (Log-Likelihood Function)**:
    通常最大化對數似然函數會比較容易：
    $$ \ell(\mu, \Sigma) = \log L(\mu, \Sigma) = \sum_{i=1}^N \log p(x_i|\mu, \Sigma) $$

4. **矩陣/向量導數** (題目給定):
    * $\frac{\partial}{\partial x} x^T A x = (A + A^T)x$。由於 $\Sigma^{-1}$ 是對稱的，故 $\frac{\partial}{\partial x} x^T \Sigma^{-1} x = 2\Sigma^{-1}x$。

## 逐步解答

1. **寫下對數似然函數**：
    $$
    \begin{aligned}
    \ell(\mu, \Sigma) &= \sum_{i=1}^N \left[ -\frac{d}{2}\log(2\pi) - \frac{1}{2}\log|\Sigma| - \frac{1}{2}(x_i - \mu)^T \Sigma^{-1} (x_i - \mu) \right] \\
    &= -\frac{Nd}{2}\log(2\pi) - \frac{N}{2}\log|\Sigma| - \frac{1}{2} \sum_{i=1}^N (x_i - \mu)^T \Sigma^{-1} (x_i - \mu)
    \end{aligned}
    $$

2. **對 $\mu$ 進行微分**：
    我們要針對 $\mu$ 最大化 $\ell(\mu, \Sigma)$。我們可以忽略不含 $\mu$ 的項。
    令 $J(\mu) = - \frac{1}{2} \sum_{i=1}^N (x_i - \mu)^T \Sigma^{-1} (x_i - \mu)$。
    使用連鎖律和導數公式 $\frac{\partial}{\partial z} z^T A z = (A + A^T)z$：
    令 $z_i = x_i - \mu$。則 $\frac{\partial z_i}{\partial \mu} = -I$。
    該項的形式為 $z_i^T \Sigma^{-1} z_i$。由於 $\Sigma$ 是對稱的，$\Sigma^{-1}$ 也是對稱的。
    對 $z_i$ 的導數為 $2\Sigma^{-1}z_i$。
    所以，$\frac{\partial}{\partial \mu} (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) = 2\Sigma^{-1}(x_i - \mu) \cdot (-1) = -2\Sigma^{-1}(x_i - \mu)$。

    因此：
    $$
    \frac{\partial \ell}{\partial \mu} = -\frac{1}{2} \sum_{i=1}^N \left[ -2\Sigma^{-1}(x_i - \mu) \right] = \sum_{i=1}^N \Sigma^{-1}(x_i - \mu)
    $$

3. **將導數設為零並解出 $\hat{\mu}$**：
    $$
    \begin{aligned}
    \sum_{i=1}^N \Sigma^{-1}(x_i - \hat{\mu}) &= 0 \\
    \Sigma^{-1} \sum_{i=1}^N (x_i - \hat{\mu}) &= 0
    \end{aligned}
    $$
    假設 $\Sigma$ 是正定矩陣（可逆），我們可以左乘 $\Sigma$ 消去它：
    $$
    \begin{aligned}
    \sum_{i=1}^N (x_i - \hat{\mu}) &= 0 \\
    \sum_{i=1}^N x_i - \sum_{i=1}^N \hat{\mu} &= 0 \\
    \sum_{i=1}^N x_i - N\hat{\mu} &= 0 \\
    N\hat{\mu} &= \sum_{i=1}^N x_i \\
    \hat{\mu} &= \frac{1}{N} \sum_{i=1}^N x_i
    \end{aligned}
    $$

    這就是樣本均值 (sample mean)。
