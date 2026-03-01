---
title: Answer
---

# Answer: MLE of the mean $\mu$

## Prerequisites

- **Multivariate Gaussian Distribution (PDF)**
- **Maximum Likelihood Estimation (MLE)**
- **Matrix Calculus**

## Step-by-Step Derivation

**1. Write the Likelihood Function**
The probability density function for a single sample $x_i \in \mathbb{R}^d$ from a multivariate Gaussian is:

$$
p(x_i | \mu, \Sigma) = \frac{1}{(2\pi)^{d/2} |\Sigma|^{1/2}} \exp\left( -\frac{1}{2} (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) \right)
$$

Assuming the samples $\{x_1, \cdots, x_N\}$ are independent and identically distributed (i.i.d.), the likelihood function $L(\mu, \Sigma)$ is the product of individual probabilities:

$$
L(\mu, \Sigma) = \prod_{i=1}^N p(x_i | \mu, \Sigma)
$$

**2. Formulate the Log-Likelihood**
To simplify the derivative, we take the natural logarithm of the likelihood function to get the log-likelihood $\ell(\mu, \Sigma)$:

$$
\ell(\mu, \Sigma) = \log L(\mu, \Sigma) = \sum_{i=1}^N \log p(x_i | \mu, \Sigma)
$$

$$
\ell(\mu, \Sigma) = \sum_{i=1}^N \left( -\frac{d}{2} \log(2\pi) - \frac{1}{2} \log |\Sigma| - \frac{1}{2} (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) \right)
$$

Dropping the terms that do not depend on $\mu$, the objective functioning relative to $\mu$ is:

$$
J(\mu) = -\frac{1}{2} \sum_{i=1}^N (x_i - \mu)^T \Sigma^{-1} (x_i - \mu)
$$

**3. Expand the Quadratic Term**
Let's expand the term $(x_i - \mu)^T \Sigma^{-1} (x_i - \mu)$:

$$
(x_i - \mu)^T \Sigma^{-1} (x_i - \mu) = x_i^T \Sigma^{-1} x_i - x_i^T \Sigma^{-1} \mu - \mu^T \Sigma^{-1} x_i + \mu^T \Sigma^{-1} \mu
$$

Since $\Sigma$ is symmetric ($\Sigma = \Sigma^T$), its inverse $\Sigma^{-1}$ is also symmetric. Thus, the inner product is a scalar and $x_i^T \Sigma^{-1} \mu = (\mu^T \Sigma^{-1} x_i)^T = \mu^T \Sigma^{-1} x_i$:

$$
(x_i - \mu)^T \Sigma^{-1} (x_i - \mu) = x_i^T \Sigma^{-1} x_i - 2 \mu^T \Sigma^{-1} x_i + \mu^T \Sigma^{-1} \mu
$$

**4. Compute the Derivative with respect to $\mu$**
Taking the partial derivative of $J(\mu)$ with respect to $\mu$:

$$
\frac{\partial}{\partial \mu} J(\mu) = -\frac{1}{2} \sum_{i=1}^N \frac{\partial}{\partial \mu} \left( x_i^T \Sigma^{-1} x_i - 2 (\Sigma^{-1} x_i)^T \mu + \mu^T \Sigma^{-1} \mu \right)
$$

Using the hint identities:

- $\frac{\partial}{\partial \mu} x_i^T \Sigma^{-1} x_i = 0$ (constant w.r.t $\mu$)
- $\frac{\partial}{\partial \mu} \left( -2 (\Sigma^{-1} x_i)^T \mu \right) = -2 \Sigma^{-1} x_i$
- $\frac{\partial}{\partial \mu} (\mu^T \Sigma^{-1} \mu) = \Sigma^{-1} \mu + (\Sigma^{-1})^T \mu = 2 \Sigma^{-1} \mu$ (since $\Sigma^{-1}$ is symmetric)

Plugging these back into the sum:

$$
\frac{\partial \ell}{\partial \mu} = -\frac{1}{2} \sum_{i=1}^N \left( -2 \Sigma^{-1} x_i + 2 \Sigma^{-1} \mu \right) = \sum_{i=1}^N \Sigma^{-1} (x_i - \mu)
$$

**5. Set Derivative to Zero and Solve for $\hat{\mu}$**
To find the maximum, set the derivative equal to the zero vector:

$$
\sum_{i=1}^N \Sigma^{-1} (x_i - \hat{\mu}) = 0
$$

Since $\Sigma^{-1}$ is a constant matrix (and invertible), we can multiply both sides by $\Sigma$:

$$
\sum_{i=1}^N (x_i - \hat{\mu}) = 0
$$

$$
\sum_{i=1}^N x_i - N \hat{\mu} = 0 \implies N \hat{\mu} = \sum_{i=1}^N x_i
$$

$$
\hat{\mu}_{ML} = \frac{1}{N} \sum_{i=1}^N x_i
$$

This proves that the Maximum Likelihood Estimate for the mean is simply the sample mean.
