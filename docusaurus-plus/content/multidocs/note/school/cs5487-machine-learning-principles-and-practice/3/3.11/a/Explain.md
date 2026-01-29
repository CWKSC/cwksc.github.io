---
title: Explain
---

## Detailed Explanation

The goal of this problem is to perform **Bayesian Linear Regression**. Unlike the standard maximum likelihood estimation (which leads to Least Squares), in the Bayesian approach, we treat the parameters $\theta$ as random variables with a **prior distribution**.

### 1. The Model and Prior

*   **Likelihood**: The relationship between inputs and outputs is linear (in feature space) with added Gaussian noise. This means that if we know $\theta$, the probability of observing $y$ follows a Gaussian distribution centered at the prediction $\Phi^T \theta$.
*   **Prior**: Before seeing any data, we assume $\theta$ follows a Gaussian distribution centered at 0 with covariance $\Gamma$. This encodes our belief that the weights shouldn't be too large (regularization).

### 2. Deriving the Posterior

We want to find $p(\theta | \mathcal{D})$, which represents our updated belief about the parameters after seeing the data. We use Bayes' rule:

$$
\text{Posterior} \propto \text{Likelihood} \times \text{Prior}
$$

Since both the likelihood and the prior are Gaussian, the posterior will also be Gaussian. This is a property of conjugated distributions (Gaussian is conjugate to itself for the mean).

The derivation primarily involves linear algebra manipulation inside the exponential function:

1.  **Exponentials**: We multiply the exponential functions of the prior and likelihood. Due to logarithmic rules ($\exp(A)\exp(B) = \exp(A+B)$), this corresponds to adding the arguments inside the exponentials.
2.  **Quadratic Form**: The argument of a multivariate Gaussian exponential is a quadratic form: $-\frac{1}{2}(\theta - \mu)^T \Sigma^{-1} (\theta - \mu)$.
3.  **Completing the Square**: We expand the sum of the prior and likelihood arguments and group all terms that contain $\theta$.
    *   The terms scaling with $\theta^T \dots \theta$ (quadratic) determine the **Precision Matrix** (inverse variance). We find that the posterior precision is the sum of the prior precision ($\Gamma^{-1}$) and the data precision ($\Phi \Sigma^{-1} \Phi^T$).
    *   The terms linear in $\theta$ help us find the **Posterior Mean**.
4.  **Result**:
    *   **Posterior Covariance ($\hat{\Sigma}_\theta$)**: It shrinks as we get more data (the $\Phi \Sigma^{-1} \Phi^T$ term grows).
    *   **Posterior Mean ($\hat{\mu}_\theta$)**: It is a weighted combination of the prior mean (0) and the data estimate.

This result is fundamental to Bayesian learning. It shows how data updates our uncertainty ($\Sigma$) and our best guess ($\mu$) about the model parameters.
