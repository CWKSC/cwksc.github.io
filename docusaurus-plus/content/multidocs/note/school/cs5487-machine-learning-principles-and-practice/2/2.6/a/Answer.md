---
title: Answer.md
---

## Pre-required Knowledge

1. **Multivariate Gaussian Distribution PDF**:
    The probability density function for a $d$-dimensional Gaussian distribution with mean $\mu$ and covariance matrix $\Sigma$ is:
    $$ p(x|\mu, \Sigma) = \frac{1}{(2\pi)^{d/2} |\Sigma|^{1/2}} \exp\left( -\frac{1}{2} (x-\mu)^T \Sigma^{-1} (x-\mu) \right) $$

2. **Likelihood Function**:
    Assuming the samples $\{x_1, \dots, x_N\}$ are independent and identically distributed (i.i.d.), the likelihood function is:
    $$ L(\mu, \Sigma) = \prod_{i=1}^N p(x_i|\mu, \Sigma) $$

3. **Log-Likelihood Function**:
    It is usually easier to maximize the log-likelihood:
    $$ \ell(\mu, \Sigma) = \log L(\mu, \Sigma) = \sum_{i=1}^N \log p(x_i|\mu, \Sigma) $$

4. **Matrix/Vector Derivatives** (Given in problem):
    * $\frac{\partial}{\partial x} x^T A x = (A + A^T)x$. Since $\Sigma^{-1}$ is symmetric, $\frac{\partial}{\partial x} x^T \Sigma^{-1} x = 2\Sigma^{-1}x$.

## Step-by-Step Answer

1. **Write down the Log-Likelihood Function**:
    $$
    \begin{aligned}
    \ell(\mu, \Sigma) &= \sum_{i=1}^N \left[ -\frac{d}{2}\log(2\pi) - \frac{1}{2}\log|\Sigma| - \frac{1}{2}(x_i - \mu)^T \Sigma^{-1} (x_i - \mu) \right] \\
    &= -\frac{Nd}{2}\log(2\pi) - \frac{N}{2}\log|\Sigma| - \frac{1}{2} \sum_{i=1}^N (x_i - \mu)^T \Sigma^{-1} (x_i - \mu)
    \end{aligned}
    $$

2. **Differentiate with respect to $\mu$**:
    We want to maximize $\ell(\mu, \Sigma)$ w.r.t $\mu$. We can ignore terms that do not depend on $\mu$.
    Let $J(\mu) = - \frac{1}{2} \sum_{i=1}^N (x_i - \mu)^T \Sigma^{-1} (x_i - \mu)$.
    Using the chain rule and the derivative $\frac{\partial}{\partial z} z^T A z = (A + A^T)z$:
    Let $z_i = x_i - \mu$. Then $\frac{\partial z_i}{\partial \mu} = -I$.
    The term is of the form $z_i^T \Sigma^{-1} z_i$. Since $\Sigma$ is symmetric, $\Sigma^{-1}$ is symmetric.
    The derivative w.r.t $z_i$ is $2\Sigma^{-1}z_i$.
    So, $\frac{\partial}{\partial \mu} (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) = 2\Sigma^{-1}(x_i - \mu) \cdot (-1) = -2\Sigma^{-1}(x_i - \mu)$.

    Therefore:
    $$
    \frac{\partial \ell}{\partial \mu} = -\frac{1}{2} \sum_{i=1}^N \left[ -2\Sigma^{-1}(x_i - \mu) \right] = \sum_{i=1}^N \Sigma^{-1}(x_i - \mu)
    $$

3. **Set the derivative to zero and solve for $\hat{\mu}$**:
    $$
    \begin{aligned}
    \sum_{i=1}^N \Sigma^{-1}(x_i - \hat{\mu}) &= 0 \\
    \Sigma^{-1} \sum_{i=1}^N (x_i - \hat{\mu}) &= 0
    \end{aligned}
    $$
    Assuming $\Sigma$ is positive definite (invertible), we can multiply by $\Sigma$ on the left:
    $$
    \begin{aligned}
    \sum_{i=1}^N (x_i - \hat{\mu}) &= 0 \\
    \sum_{i=1}^N x_i - \sum_{i=1}^N \hat{\mu} &= 0 \\
    \sum_{i=1}^N x_i - N\hat{\mu} &= 0 \\
    N\hat{\mu} &= \sum_{i=1}^N x_i \\
    \hat{\mu} &= \frac{1}{N} \sum_{i=1}^N x_i
    \end{aligned}
    $$

    Ideally, this is the sample mean.
