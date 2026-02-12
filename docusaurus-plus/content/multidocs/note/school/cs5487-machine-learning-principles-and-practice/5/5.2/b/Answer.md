---
title: Answer
---

## Pre-required Knowledge

1. **Definition of Covariance**: For a random variable $x$ with mean $\mu$, the covariance is $\mathbb{E}[(x - \mu)(x - \mu)^T] = \mathbb{E}[xx^T] - \mu\mu^T$.
2. **Steiner's Translation Theorem (Parallel Axis Theorem) equivalent**: $\text{cov}(x) = \mathbb{E}[x x^T] - \mathbb{E}[x]\mathbb{E}[x]^T$.
3. **Kernel Properties**:
    * $\int \tilde{k}(u) du = 1$.
    * $\int u \tilde{k}(u) du = 0$ (Zero mean).
    * $\int u u^T \tilde{k}(u) du = H$ (From Eq 5.7, since mean is 0).

## Step-by-Step Proof

Let $\hat{\mu}$ be the mean of $\hat{p}(x)$ (derived in part (a)). The covariance is defined as:

$$
\hat{\Sigma} = \mathbb{E}_{\hat{p}}[(x - \hat{\mu})(x - \hat{\mu})^T] = \int (x - \hat{\mu})(x - \hat{\mu})^T \hat{p}(x) dx
$$

Alternatively, using the property $\text{cov}(x) = \mathbb{E}[xx^T] - \mathbb{E}[x]\mathbb{E}[x]^T$:
$$
\hat{\Sigma} = \int x x^T \hat{p}(x) dx - \hat{\mu}\hat{\mu}^T
$$

Let's compute the second moment term $\int x x^T \hat{p}(x) dx$:

1. **Substitute $\hat{p}(x)$:**
    $$
    \int x x^T \left( \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right) dx = \frac{1}{n} \sum_{i=1}^n \int x x^T \tilde{k}(x - x_i) dx
    $$

2. **Change of Variables:**
    Let $u = x - x_i$, so $x = u + x_i$.
    $$
    \int (u + x_i)(u + x_i)^T \tilde{k}(u) du
    $$
    Expand $(u + x_i)(u + x_i)^T = uu^T + ux_i^T + x_i u^T + x_i x_i^T$.

3. **Evaluate integral term by term:**
    $$
    \int (uu^T + ux_i^T + x_i u^T + x_i x_i^T) \tilde{k}(u) du
    $$
    * $\int uu^T \tilde{k}(u) du = H$ (By definition of Kernel covariance with zero mean).
    * $\int u x_i^T \tilde{k}(u) du = (\int u \tilde{k}(u) du) x_i^T = 0 \cdot x_i^T = 0$.
    * $\int x_i u^T \tilde{k}(u) du = x_i (\int u^T \tilde{k}(u) du) = x_i \cdot 0 = 0$.
    * $\int x_i x_i^T \tilde{k}(u) du = x_i x_i^T \int \tilde{k}(u) du = x_i x_i^T \cdot 1 = x_i x_i^T$.

    So, $\int x x^T \tilde{k}(x - x_i) dx = H + x_i x_i^T$.

4. **Summate the results:**
    $$
    \mathbb{E}_{\hat{p}}[x x^T] = \frac{1}{n} \sum_{i=1}^n (H + x_i x_i^T) = H + \frac{1}{n} \sum_{i=1}^n x_i x_i^T
    $$

5. **Calculate Covariance:**
    $$
    \hat{\Sigma} = \mathbb{E}_{\hat{p}}[x x^T] - \hat{\mu}\hat{\mu}^T
    $$
    $$
    \hat{\Sigma} = H + \frac{1}{n} \sum_{i=1}^n x_i x_i^T - \hat{\mu}\hat{\mu}^T
    $$

6. **Rearrange to sample covariance form:**
    Recall that sample covariance is $S = \frac{1}{n}\sum (x_i - \hat{\mu})(x_i - \hat{\mu})^T = (\frac{1}{n}\sum x_i x_i^T) - \hat{\mu}\hat{\mu}^T$.
    Therefore:
    $$
    \hat{\Sigma} = H + \left( \frac{1}{n} \sum_{i=1}^n x_i x_i^T - \hat{\mu}\hat{\mu}^T \right)
    $$
    $$
    \hat{\Sigma} = H + \frac{1}{n} \sum_{i=1}^n (x_i - \hat{\mu})(x_i - \hat{\mu})^T \quad \blacksquare
    $$
