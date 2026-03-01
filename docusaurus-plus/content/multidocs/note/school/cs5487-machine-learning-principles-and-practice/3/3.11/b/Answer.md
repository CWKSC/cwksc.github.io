---
title: Answer
---

### Prerequisites

- Maximum A Posteriori (MAP) Estimation
- Least Squares and Weighted Least Squares

### Step-by-Step Derivation

1.  **Finding the MAP Estimate**:
    The Maximum A Posteriori (MAP) estimate is the mode of the posterior distribution $p(\theta|\mathcal{D})$. Since the posterior is a Gaussian distribution $\mathcal{N}(\hat{\mu}_\theta, \hat{\Sigma}_\theta)$ as derived in part (a), and the mode of a Gaussian distribution is equal to its mean, the MAP estimate is simply the posterior mean:

    $$
    \hat{\theta}_{MAP} = \hat{\mu}_\theta = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$

2.  **Comparison with Other Estimates**:
    - **Ordinary Least Squares (OLS)**: The standard least squares estimate is derived by assuming i.i.d. noise (i.e., $\Sigma = \sigma^2 I$) and no prior (or a uniform, improper prior representing no regularization). OLS yields:
      $$
      \hat{\theta}_{OLS} = (\Phi \Phi^T)^{-1} \Phi y
      $$
    - **Weighted Least Squares (WLS)**: Unweighted least squares can be extended to account for heteroscedastic or correlated noise $\Sigma$. The WLS estimate (which coincides with the Maximum Likelihood Estimate, MLE, under normal noise with covariance $\Sigma$) is:
      $$
      \hat{\theta}_{WLS} = (\Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
      $$
    - **Difference**: The MAP estimate differs from the WLS estimate exactly by the addition of the term $\Gamma^{-1}$ inside the inverse.

3.  **Role of the New Term ($\Gamma^{-1}$)**:
    The matrix $\Gamma^{-1}$ is the **precision matrix** (inverse of the covariance) of the prior distribution $p(\theta)$.
    - It acts as a **regularization term**.
    - Since our prior is centered at zero ($p(\theta) = \mathcal{N}(0, \Gamma)$), $\Gamma^{-1}$ mathematically penalizes parameter vectors $\theta$ that have large magnitudes.
    - Instead of letting the parameters grow unboundedly to perfectly fit the noise in the training set, $\Gamma^{-1}$ pulls the MAP estimate towards $0$.

4.  **Advantage of Non-Zero Prior Precision**:
    Yes, there are significant advantages to having a non-zero $\Gamma^{-1}$ (meaning a finite prior covariance):
    - **Prevents Overfitting**: By penalizing large parameter values, the model is less sensitive to noise in the training data, leading to better generalization on unseen data.
    - **Numerical Stability**: In cases where we fall into the $D > n$ regime (more features than data points), or when features are highly collinear, the matrix $\Phi \Sigma^{-1} \Phi^T$ can be non-invertible (singular) or ill-conditioned. Adding a positive-definite matrix $\Gamma^{-1}$ ensures that $(\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)$ is strictly positive-definite and safely invertible.
