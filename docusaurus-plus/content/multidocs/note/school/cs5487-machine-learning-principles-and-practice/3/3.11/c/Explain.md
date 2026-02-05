---
title: Explain
---

## Detailed Explanation

This section creates the bridge between **Probabilistic Modeling** (Bayesian regression) and **Optimization-based Machine Learning** (Ridge Regression).

### 1. The Regularization Parameter $\lambda$

We found that $\lambda = \frac{\sigma^2}{\alpha}$.
* $\sigma^2$: Noise variance. High noise means we trust data less.
* $\alpha$: Prior variance. High variance means a "flat" or weak prior.
* **Interpretation**:
  * If noise $\sigma^2$ is high, $\lambda$ increases. We rely more on the prior (regularization) because data is noisy.
  * If prior variance $\alpha$ is high, $\lambda$ decreases. We rely less on the prior because it is uninformative.
  * So, $\lambda$ balances the trade-off between fitting the data and keeping parameters small.

### 2. Ridge Regression / Tikhonov Regularization

The optimization problem $\operatorname{argmin}_\theta \|y - \Phi^T \theta\|^2 + \lambda \|\theta\|^2$ has two parts:
1. **Data Fidelity**: $\|y - \Phi^T \theta\|^2$. Try to predict $y$ well.
2. **Regularization**: $\lambda \|\theta\|^2$. Try to keep weights $\theta$ small (close to 0).

The Bayesian derivation provides a *justification* for why we add the $\lambda \|\theta\|^2$ term: it corresponds mathematically to assuming a Gaussian prior on the weights.

Isotropic Gaussian Prior $\iff$ $L_2$ Regularization (Ridge).
Laplace Prior $\iff$ $L_1$ Regularization (Lasso).

### 3. Numerical Advantage

The matrix $\Phi \Phi^T$ is often singular or close to singular. Adding $\lambda I$ adds a small positive number to the diagonal elements. This ensures the eigenvalues are all positive, making the matrix invertible and the solution stable.
