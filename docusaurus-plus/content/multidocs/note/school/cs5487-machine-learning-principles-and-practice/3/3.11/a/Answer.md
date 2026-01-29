---
title: Answer
---

## Pre-required Knowledge

1.  **Bayes' Theorem for Continuous Variables**:
    $$
    p(\theta | \mathcal{D}) = \frac{p(\mathcal{D} | \theta) p(\theta)}{p(\mathcal{D})} \propto p(\mathcal{D} | \theta) p(\theta)
    $$
2.  **Multivariate Gaussian Distribution**:
    $$
    \mathcal{N}(x | \mu, \Sigma) \propto \exp \left( -\frac{1}{2} (x - \mu)^T \Sigma^{-1} (x - \mu) \right)
    $$
3.  **Completing the Square in Matrix Form**:
    If a quadratic form in $\theta$ looks like $-\frac{1}{2} (\theta^T A \theta - 2 \theta^T b)$, it corresponds to a Gaussian with covariance $A^{-1}$ and mean $A^{-1}b$ (ignoring constants).

## Step-by-Step Answer

1.  **Identify the Likelihood function $p(\mathcal{D}|\theta)$**:
    From the model $y = \Phi^T \theta + \epsilon$, where $\epsilon \sim \mathcal{N}(0, \Sigma)$, we have that $y$ given $\theta$ follows a Gaussian distribution:
    $$
    p(y | \theta) = \mathcal{N}(y | \Phi^T \theta, \Sigma) \propto \exp \left( -\frac{1}{2} (y - \Phi^T \theta)^T \Sigma^{-1} (y - \Phi^T \theta) \right)
    $$
    Here $\mathcal{D} = (X, y)$, but since $X$ is fixed (discriminative setting), we look at $p(y|\theta)$.

2.  **Identify the Prior distribution $p(\theta)$**:
    $$
    p(\theta) = \mathcal{N}(\theta | 0, \Gamma) \propto \exp \left( -\frac{1}{2} \theta^T \Gamma^{-1} \theta \right)
    $$

3.  **Formulate the Posterior $p(\theta|\mathcal{D})$**:
    Using Bayes' rule, the posterior is proportional to the product of the likelihood and the prior:
    $$
    p(\theta | \mathcal{D}) \propto p(y | \theta) p(\theta)
    $$
    Substitute the exponentials:
    $$
    \propto \exp \left( -\frac{1}{2} (y - \Phi^T \theta)^T \Sigma^{-1} (y - \Phi^T \theta) \right) \exp \left( -\frac{1}{2} \theta^T \Gamma^{-1} \theta \right)
    $$
    Combine the exponents into a single expression $E$:
    $$
    E = -\frac{1}{2} \left[ (y - \Phi^T \theta)^T \Sigma^{-1} (y - \Phi^T \theta) + \theta^T \Gamma^{-1} \theta \right]
    $$

4.  **Expand and Group Terms w.r.t $\theta$**:
    Expand the first term (note that $(y - \Phi^T \theta)^T = y^T - \theta^T \Phi$):
    $$
    (y - \Phi^T \theta)^T \Sigma^{-1} (y - \Phi^T \theta) = y^T \Sigma^{-1} y - y^T \Sigma^{-1} \Phi^T \theta - \theta^T \Phi \Sigma^{-1} y + \theta^T \Phi \Sigma^{-1} \Phi^T \theta
    $$
    Since the result is a scalar, $y^T \Sigma^{-1} \Phi^T \theta = (\theta^T \Phi \Sigma^{-1} y)^T = \theta^T \Phi \Sigma^{-1} y$ (assuming $\Sigma$ is symmetric).
    So, the cross terms are $-2 \theta^T \Phi \Sigma^{-1} y$.

    Now substitute back into $E$ and group by powers of $\theta$:
    $$
    -2E = \theta^T \Phi \Sigma^{-1} \Phi^T \theta - 2 \theta^T \Phi \Sigma^{-1} y + y^T \Sigma^{-1} y + \theta^T \Gamma^{-1} \theta
    $$
    Group quadratic terms ($\theta^T A \theta$) and linear terms ($-2 \theta^T b$):
    $$
    -2E = \theta^T (\Phi \Sigma^{-1} \Phi^T + \Gamma^{-1}) \theta - 2 \theta^T (\Phi \Sigma^{-1} y) + \text{const}
    $$
    where "const" involves terms independent of $\theta$ (like $y^T \Sigma^{-1} y$).

5.  **Complete the Square**:
    We compare this to the exponent of a Gaussian $\mathcal{N}(\theta | \hat{\mu}, \hat{\Sigma})$:
    $$
    -\frac{1}{2} (\theta - \hat{\mu})^T \hat{\Sigma}^{-1} (\theta - \hat{\mu}) = -\frac{1}{2} [\theta^T \hat{\Sigma}^{-1} \theta - 2 \theta^T \hat{\Sigma}^{-1} \hat{\mu} + \hat{\mu}^T \hat{\Sigma}^{-1} \hat{\mu}]
    $$
    Comparing the quadratic term $\theta^T (\dots) \theta$:
    $$
    \hat{\Sigma}_\theta^{-1} = \Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T
    $$
    So,
    $$
    \hat{\Sigma}_\theta = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1}
    $$
    Comparing the linear term $-2 \theta^T (\dots)$:
    $$
    \hat{\Sigma}_\theta^{-1} \hat{\mu}_\theta = \Phi \Sigma^{-1} y
    $$
    $$
    \hat{\mu}_\theta = \hat{\Sigma}_\theta (\Phi \Sigma^{-1} y) = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$

6.  **Conclusion**:
    The posterior is indeed Gaussian with the derived mean and covariance:
    $$
    p(\theta|\mathcal{D}) = \mathcal{N}(\theta|\hat{\mu}_\theta, \hat{\Sigma}_\theta)
    $$
