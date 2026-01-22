---
title: Answer.md
---

## Pre-required Knowledge

1. **Log-Likelihood Function**:
    From part (a), the log-likelihood is:
    $$ \ell(\mu, \Sigma) = -\frac{Nd}{2}\log(2\pi) - \frac{N}{2}\log|\Sigma| - \frac{1}{2} \sum_{i=1}^N (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) $$
2. **Trace Method**:
    The scalar value $a^T B a$ is equivalent to $\text{tr}(a^T B a) = \text{tr}(B a a^T)$. This is useful for moving vectors inside the summation into a matrix form.
3. **Matrix Derivatives** (Given):
    * $\frac{\partial}{\partial X} \log |X| = X^{-T}$. Since $\Sigma$ is symmetric, $\frac{\partial}{\partial \Sigma} \log |\Sigma| = \Sigma^{-1}$.
    * $\frac{\partial}{\partial X} \text{tr}(X^{-1}A) = -(X^{-T} A^T X^{-T})$. Since $\Sigma$ and $A$ (which will be the scatter matrix) are symmetric, this simplifies to $-\Sigma^{-1} A \Sigma^{-1}$.

## Step-by-Step Answer

1. **Substitute the ML estimate of $\mu$**:
    We substitute $\mu$ with $\hat{\mu}_{ML} = \frac{1}{N} \sum_{i=1}^N x_i$. Let $S = \sum_{i=1}^N (x_i - \hat{\mu})(x_i - \hat{\mu})^T$ be the scatter matrix.

2. **Rewrite the Log-Likelihood using Trace**:
    The term in the summation is a scalar:
    $$ (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) = \text{tr}\left( (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) \right) = \text{tr}\left( \Sigma^{-1} (x_i - \mu)(x_i - \mu)^T \right) $$
    Summing over $i$:
    $$ \sum_{i=1}^N (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) = \text{tr}\left( \Sigma^{-1} \sum_{i=1}^N (x_i - \mu)(x_i - \mu)^T \right) = \text{tr}(\Sigma^{-1} S) $$

    So the relevant part of the log-likelihood (ignoring constants) is:
    $$ \ell(\Sigma) \propto - \frac{N}{2}\log|\Sigma| - \frac{1}{2}\text{tr}(\Sigma^{-1} S) $$

3. **Differentiate with respect to $\Sigma$**:
    Using the provided identities:
    * $\frac{\partial}{\partial \Sigma} \log|\Sigma| = \Sigma^{-T} = \Sigma^{-1}$ (since symmetric).
    * $\frac{\partial}{\partial \Sigma} \text{tr}(\Sigma^{-1} S) = -(\Sigma^{-T} S^T \Sigma^{-T})$. Since $S$ and $\Sigma$ are symmetric, this is $-\Sigma^{-1} S \Sigma^{-1}$.

    $$
    \frac{\partial \ell}{\partial \Sigma} = -\frac{N}{2} \Sigma^{-1} - \frac{1}{2} (-\Sigma^{-1} S \Sigma^{-1}) = -\frac{N}{2} \Sigma^{-1} + \frac{1}{2} \Sigma^{-1} S \Sigma^{-1}
    $$

4. **Set derivative to zero and solve**:
    $$
    \begin{aligned}
    -\frac{N}{2} \Sigma^{-1} + \frac{1}{2} \Sigma^{-1} S \Sigma^{-1} &= 0 \\
    \Sigma^{-1} S \Sigma^{-1} &= N \Sigma^{-1}
    \end{aligned}
    $$
    Multiply by $\Sigma$ on the left and right:
    $$
    \begin{aligned}
    \Sigma (\Sigma^{-1} S \Sigma^{-1}) \Sigma &= \Sigma (N \Sigma^{-1}) \Sigma \\
    S &= N \Sigma \\
    \Sigma &= \frac{1}{N} S
    \end{aligned}
    $$

    So,
    $$ \hat{\Sigma}_{ML} = \frac{1}{N} \sum_{i=1}^N (x_i - \hat{\mu})(x_i - \hat{\mu})^T $$
