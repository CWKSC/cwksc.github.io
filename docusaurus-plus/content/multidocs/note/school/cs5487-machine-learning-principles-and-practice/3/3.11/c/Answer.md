---
title: Answer
---

### Prerequisites

- MAP Estimation for Linear Regression
- Regularization (Ridge Regression / L2 Penalty)
- Matrix Calculus

### Step-by-Step Derivation

1.  **Substituting the i.i.d. assumptions into the MAP estimate**:
    From part (b), the MAP estimate is:

    $$
    \hat{\theta}_{MAP} = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$

    We are given that $\Gamma = \alpha I$ and $\Sigma = \sigma^2 I$. Let's substitute these into the MAP equation.
    The inverses are $\Gamma^{-1} = \frac{1}{\alpha} I$ and $\Sigma^{-1} = \frac{1}{\sigma^2} I$.

    $$
    \hat{\theta}_{MAP} = \left(\frac{1}{\alpha} I + \Phi \left(\frac{1}{\sigma^2} I\right) \Phi^T\right)^{-1} \Phi \left(\frac{1}{\sigma^2} I\right) y
    $$

2.  **Simplifying the algebraic expression**:
    Pull out the scalar $\frac{1}{\sigma^2}$ from the inverse term:

    $$
    \hat{\theta}_{MAP} = \left[ \frac{1}{\sigma^2} \left( \frac{\sigma^2}{\alpha} I + \Phi \Phi^T \right) \right]^{-1} \Phi \left(\frac{1}{\sigma^2} I\right) y
    $$

    Apply the property $(cA)^{-1} = \frac{1}{c} A^{-1}$ where $c$ is a scalar:

    $$
    \hat{\theta}_{MAP} = \sigma^2 \left( \frac{\sigma^2}{\alpha} I + \Phi \Phi^T \right)^{-1} \frac{1}{\sigma^2} \Phi y
    $$

    The $\sigma^2$ terms cancel out:

    $$
    \hat{\theta}_{MAP} = \left( \Phi \Phi^T + \frac{\sigma^2}{\alpha} I \right)^{-1} \Phi y
    $$

    By defining $\lambda = \frac{\sigma^2}{\alpha}$, we get the desired form:

    $$
    \hat{\theta}_{MAP} = (\Phi \Phi^T + \lambda I)^{-1} \Phi y
    $$

    Since $\alpha$ (prior variance) and $\sigma^2$ (noise variance) must be non-negative, $\lambda \ge 0$. This proves the first part.

3.  **Solving the Regularized Least-Squares Problem**:
    We want to show that the objective function in equation (3.49) leads to the same solution.
    Let $J(\theta)$ be the objective function to minimize:

    $$
    J(\theta) = \lVert y - \Phi^T \theta \rVert^2 + \lambda \lVert \theta \rVert^2
    $$

    Expand the norms into vector dot products ($||x||^2 = x^Tx$):

    $$
    J(\theta) = (y - \Phi^T \theta)^T (y - \Phi^T \theta) + \lambda \theta^T \theta
    $$

    $$
    J(\theta) = y^T y - y^T \Phi^T \theta - \theta^T \Phi y + \theta^T \Phi \Phi^T \theta + \lambda \theta^T \theta
    $$

    Note that $y^T \Phi^T \theta = (\theta^T \Phi y)^T$. Since the result is a scalar, it equals its transpose.

    $$
    J(\theta) = y^T y - 2 \theta^T \Phi y + \theta^T (\Phi \Phi^T + \lambda I) \theta
    $$

4.  **Taking the derivative and setting to zero**:
    To minimize $J(\theta)$, we take the gradient with respect to the vector $\theta$ and set it to zero:
    $$
    \nabla_\theta J(\theta) = -2 \Phi y + 2 (\Phi \Phi^T + \lambda I) \theta = 0
    $$
    $$
    (\Phi \Phi^T + \lambda I) \theta = \Phi y
    $$
    Solving for $\theta$:
    $$
    \hat{\theta} = (\Phi \Phi^T + \lambda I)^{-1} \Phi y
    $$
    This is identical to equation (3.48), proving that the Bayesian MAP estimate with isotropic Gaussian priors is mathematically equivalent to solving the frequentist $L_2$ regularized least-squares problem (Ridge regression).
