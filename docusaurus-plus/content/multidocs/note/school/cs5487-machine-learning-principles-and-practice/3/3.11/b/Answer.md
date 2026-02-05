---
title: Answer
---

## Pre-required Knowledge

1. **MAP Estimation**: Maximum A Posteriori estimation finds the mode of the posterior distribution.
2. **Mode of Gaussian**: For a Gaussian distribution $\mathcal{N}(\mu, \Sigma)$, the mode is equal to the mean $\mu$.
3. **Least Squares Solution**: $\hat{\theta}_{LS} = (\Phi \Phi^T)^{-1} \Phi y$ (in the notation of this problem).
4. **Weighted Least Squares**: $\hat{\theta}_{WLS} = (\Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y$.

## Step-by-Step Answer

1. **Determine $\hat{\theta}_{MAP}$**:
    Since the posterior $p(\theta|\mathcal{D})$ is Gaussian with mean $\hat{\mu}_\theta$, the maximum of the density occurs exactly at the mean. Thus:
    $$
    \hat{\theta}_{MAP} = \hat{\mu}_\theta = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$

2. **Comparison to Weighted Least Squares (WLS)**:
    The WLS estimate arises from Maximum Likelihood estimation when counting for observation covariance $\Sigma$:
    $$
    \hat{\theta}_{WLS} = (\Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$
    **Difference**: The MAP estimate has an extra term **$\Gamma^{-1}$** added to the "scatter matrix" $\Phi \Sigma^{-1} \Phi^T$ inside the inverse.

3. **Comparison to Ordinary Least Squares (OLS)**:
    OLS assumes $\Sigma = \sigma^2 I$ (i.i.d noise, constant variance) and no prior.
    $$
    \hat{\theta}_{LS} = (\Phi \Phi^T)^{-1} \Phi y
    $$
    **Difference**: MAP includes the covariance structure of the noise $\Sigma^{-1}$ (handling heteroscedasticity or correlated noise) AND the prior precision $\Gamma^{-1}$.

4. **Role of the New Terms**:
    The term **$\Gamma^{-1}$** represents the **prior precision** (inverse covariance).
    * It acts as a regularizer.
    * It "pulls" the estimate towards the prior mean (which is 0 in this problem).
    * Mathematically, it effectively adds positive values to the diagonal (or eigenvalues) of the matrix being inverted.

5. **Advantage**:
    Yes, there is a significant advantage in setting $\Gamma^{-1}$ to something non-zero (i.e., using a prior):
    * **Regularization**: It prevents overfitting. When data is scarce or noisy, the prior constrains the parameters from exploding.
    * **Numerical Stability**: If $\Phi \Sigma^{-1} \Phi^T$ is singular or ill-conditioned (e.g., fewer data points than features, or collinear features), the inverse would not exist or be unstable for ML/LS. Adding $\Gamma^{-1}$ (which is positive definite) makes the matrix invertible ($\hat{\Sigma}_\theta$ always exists).
