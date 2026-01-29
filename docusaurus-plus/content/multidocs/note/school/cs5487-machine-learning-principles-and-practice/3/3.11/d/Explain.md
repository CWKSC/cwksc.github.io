---
title: Explain
---

## Detailed Explanation

We can analyze the behavior of the Bayesian update by looking at the "competition" between the Prior and the Likelihood.

### 1. The Role of Precision
In Bayesian inference for Gaussians, precisions (inverse variances) add up.
$$
\text{Posterior Precision} = \text{Prior Precision} + \text{Data Precision}
$$
$$
\hat{\Sigma}_\theta^{-1} = \frac{1}{\alpha} I + \frac{1}{\sigma^2} \Phi \Phi^T
$$

### 2. $\alpha \to \infty$ (Uninformative Prior)
*   The prior precision is $1/\alpha \approx 0$.
*   We add nothing to the data precision.
*   The result is entirely determined by the data. This connects Bayesian Regression back to Frequentist/Classical Regression (OLS). We have no bias, so we just fit the data.

### 3. $\alpha \to 0$ (Dogmatic Prior)
*   The prior precision is infinite.
*   No amount of data can change our mind.
*   We remain convinced that $\theta = 0$. The model learns nothing.

### 4. $\sigma^2 \to 0$ (Noise-Free Data)
*   The data precision is infinite.
*   The likelihood function becomes a delta function (or extremely sharp constraint) on the subspace satisfying $y = \Phi^T \theta$.
*   Unless the prior forbids it (which it doesn't here), the posterior collapses onto the single point that fits the data (and is closest to 0 if there are multiple solutions). The uncertainty goes to zero because the data leaves no room for doubt.
