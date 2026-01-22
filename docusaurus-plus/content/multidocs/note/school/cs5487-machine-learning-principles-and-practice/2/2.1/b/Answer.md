---
title: Answer
---

# Problem 2.1 (b)

## Pre-required Knowledge

- **Expectation Properties**: Linearity of expectation $\mathbb{E}[aX + bY] = a\mathbb{E}[X] + b\mathbb{E}[Y]$.
- **Variance Properties**: For independent variables, $\text{var}(\sum X_i) = \sum \text{var}(X_i)$. Also $\text{var}(aX) = a^2 \text{var}(X)$.
- **Unbiased Estimator**: An estimator $\hat{\theta}$ is unbiased if its expected value equals the true parameter value, i.e., $\mathbb{E}[\hat{\theta}] = \theta$.
- **I.I.D.**: Independent and Identically Distributed. Since $k_i$ are i.i.d samples from Poisson($\lambda$), $\mathbb{E}[k_i] = \lambda$ and $\text{var}(k_i) = \lambda$.

## Step-by-Step Answer

1. **Recall the ML Estimator:**
    From part (a), the estimator is:
    $$ \hat{\lambda} = \frac{1}{N} \sum_{i=1}^{N} k_i $$

2. **Show Unbiasedness:**
    We calculate the expectation of $\hat{\lambda}$:
    $$
    \begin{aligned}
    \mathbb{E}[\hat{\lambda}] &= \mathbb{E}\left[ \frac{1}{N} \sum_{i=1}^{N} k_i \right] \\
    &= \frac{1}{N} \sum_{i=1}^{N} \mathbb{E}[k_i] \quad \text{(Linearity of Expectation)}
    \end{aligned}
    $$
    Since each $k_i$ is drawn from a Poisson distribution with parameter $\lambda$, we know $\mathbb{E}[k_i] = \lambda$.
    $$
    \begin{aligned}
    \mathbb{E}[\hat{\lambda}] &= \frac{1}{N} \sum_{i=1}^{N} \lambda \\
    &= \frac{1}{N} (N\lambda) \\
    &= \lambda
    \end{aligned}
    $$
    Since $\mathbb{E}[\hat{\lambda}] = \lambda$, the estimator is **unbiased**.

3. **Calculate the Variance:**
    We calculate the variance of $\hat{\lambda}$:
    $$
    \begin{aligned}
    \text{var}(\hat{\lambda}) &= \text{var}\left( \frac{1}{N} \sum_{i=1}^{N} k_i \right) \\
    &= \frac{1}{N^2} \text{var}\left( \sum_{i=1}^{N} k_i \right) \quad \text{(Property: var(aX) = a^2 var(X))}
    \end{aligned}
    $$
    Since the $k_i$ samples are independent, the variance of the sum is the sum of the variances:
    $$
    \begin{aligned}
    \text{var}(\hat{\lambda}) &= \frac{1}{N^2} \sum_{i=1}^{N} \text{var}(k_i)
    \end{aligned}
    $$
    For a Poisson distribution, the variance is equal to the mean, so $\text{var}(k_i) = \lambda$.
    $$
    \begin{aligned}
    \text{var}(\hat{\lambda}) &= \frac{1}{N^2} \sum_{i=1}^{N} \lambda \\
    &= \frac{1}{N^2} (N\lambda) \\
    &= \frac{\lambda}{N}
    \end{aligned}
    $$
    Thus, the estimator variance is $\frac{\lambda}{N}$.
