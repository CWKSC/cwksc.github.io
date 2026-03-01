---
title: Answer
---
### Prerequisites
- Bayes' Theorem
- Multivariate Gaussian Distribution
- Completing the Square for Matrices

### Step-by-Step Derivation

1.  **Bayes' Theorem**:
    The posterior distribution of the parameters $\theta$ given the data $\mathcal{D}$ can be found using Bayes' rule:
    $$
    p(\theta | \mathcal{D}) = \frac{p(y | \theta, X) p(\theta)}{p(y | X)} \propto p(y | \theta, X) p(\theta)
    $$
    where $y$ contains the targets and $X$ contains all features. To find the posterior, we can work with the unnormalized log-posterior:
    $$
    \ln p(\theta | \mathcal{D}) = \ln p(y | \theta, X) + \ln p(\theta) + \text{const}
    $$

2.  **Likelihood and Prior**:
    From the model equation $y = \Phi^T \theta + \epsilon$ and $\epsilon \sim \mathcal{N}(0, \Sigma)$, the likelihood is $y|\theta, X \sim \mathcal{N}(\Phi^T \theta, \Sigma)$. Hence:
    $$
    \ln p(y | \theta, X) = -\frac{1}{2} (y - \Phi^T \theta)^T \Sigma^{-1} (y - \Phi^T \theta) + \text{const}
    $$
    The prior is $p(\theta) = \mathcal{N}(0, \Gamma)$, so:
    $$
    \ln p(\theta) = -\frac{1}{2} \theta^T \Gamma^{-1} \theta + \text{const}
    $$

3.  **Log-Posterior**:
    Adding the log-likelihood and log-prior:
    $$
    \begin{align*}
    \ln p(\theta | \mathcal{D}) &= -\frac{1}{2} \left( (y - \Phi^T \theta)^T \Sigma^{-1} (y - \Phi^T \theta) + \theta^T \Gamma^{-1} \theta \right) + \text{const} \\
    &= -\frac{1}{2} \left( y^T \Sigma^{-1} y - y^T \Sigma^{-1} \Phi^T \theta - \theta^T \Phi \Sigma^{-1} y + \theta^T \Phi \Sigma^{-1} \Phi^T \theta + \theta^T \Gamma^{-1} \theta \right) + \text{const}
    \end{align*}
    $$
    Noting that $y^T \Sigma^{-1} y$ is a constant with respect to $\theta$, and $y^T \Sigma^{-1} \Phi^T \theta = (\theta^T \Phi \Sigma^{-1} y)^T$ is a scalar (so they are identical), we collect the terms quadratic and linear in $\theta$:
    $$
    \ln p(\theta | \mathcal{D}) = -\frac{1}{2} \left[ \theta^T (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T) \theta - 2 \theta^T \Phi \Sigma^{-1} y \right] + \text{const}
    $$

4.  **Completing the Square**:
    We want to express this in the form of a general normal distribution log-pdf:
    $$
    \ln \mathcal{N}(\theta | \hat{\mu}_\theta, \hat{\Sigma}_\theta) = -\frac{1}{2} (\theta - \hat{\mu}_\theta)^T \hat{\Sigma}_\theta^{-1} (\theta - \hat{\mu}_\theta) + \text{const}'
    $$
    Expanding this form yields:
    $$
    -\frac{1}{2} \left( \theta^T \hat{\Sigma}_\theta^{-1} \theta - 2 \theta^T \hat{\Sigma}_\theta^{-1} \hat{\mu}_\theta + \hat{\mu}_\theta^T \hat{\Sigma}_\theta^{-1} \hat{\mu}_\theta \right) + \text{const}'
    $$
    Comparing the quadratic term in $\theta$:
    $$
    \hat{\Sigma}_\theta^{-1} = \Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T \implies \hat{\Sigma}_\theta = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1}
    $$
    Comparing the linear term in $\theta$:
    $$
    \hat{\Sigma}_\theta^{-1} \hat{\mu}_\theta = \Phi \Sigma^{-1} y \implies \hat{\mu}_\theta = \hat{\Sigma}_\theta \Phi \Sigma^{-1} y = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$

5.  **Conclusion**:
    Thus, the posterior is a Gaussian distribution $p(\theta|\mathcal{D}) = \mathcal{N}(\theta|\hat{\mu}_\theta, \hat{\Sigma}_\theta)$ with the required mean and covariance.
