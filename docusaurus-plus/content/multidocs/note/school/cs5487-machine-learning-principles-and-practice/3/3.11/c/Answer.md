---
title: Answer
---

## Pre-required Knowledge

1.  **Matrix Inversion Properties**: $(kA)^{-1} = \frac{1}{k} A^{-1}$.
2.  **Vector Calculus**:
    $\nabla_\theta (\|y - \Phi^T \theta\|^2) = -2 \Phi (y - \Phi^T \theta)$.
    $\nabla_\theta (\theta^T \theta) = 2 \theta$.

## Step-by-Step Answer

### Part 1: Deriving MAP under i.i.d. assumptions

1.  **Substitute $\Gamma$ and $\Sigma$**:
    Start with the general MAP formula from (a)/(b):
    $$
    \hat{\theta}_{MAP} = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$
    Substitute $\Gamma = \alpha I$ and $\Sigma = \sigma^2 I$:
    $$
    \hat{\theta}_{MAP} = ((\alpha I)^{-1} + \Phi (\sigma^2 I)^{-1} \Phi^T)^{-1} \Phi (\sigma^2 I)^{-1} y
    $$
    Scalars come out of the inverse ($\alpha^{-1} = 1/\alpha$):
    $$
    \hat{\theta}_{MAP} = (\frac{1}{\alpha} I + \frac{1}{\sigma^2} \Phi \Phi^T)^{-1} \frac{1}{\sigma^2} \Phi y
    $$

2.  **Simplify**:
    Factor out $\frac{1}{\sigma^2}$ from the inverse term. Recall $(kA)^{-1} = \frac{1}{k} A^{-1}$, so $A^{-1} = \frac{1}{k} (k A)^{-1}$? No, let's just multiply the equation by identity.
    Let $A = \frac{1}{\alpha} I + \frac{1}{\sigma^2} \Phi \Phi^T$. We want $A^{-1}$.
    $A = \frac{1}{\sigma^2} (\frac{\sigma^2}{\alpha} I + \Phi \Phi^T)$.
    $A^{-1} = \sigma^2 (\frac{\sigma^2}{\alpha} I + \Phi \Phi^T)^{-1}$.

    Substitute back:
    $$
    \hat{\theta}_{MAP} = \left[ \sigma^2 (\frac{\sigma^2}{\alpha} I + \Phi \Phi^T)^{-1} \right] \frac{1}{\sigma^2} \Phi y
    $$
    The $\sigma^2$ and $\frac{1}{\sigma^2}$ cancel out:
    $$
    \hat{\theta}_{MAP} = (\Phi \Phi^T + \frac{\sigma^2}{\alpha} I)^{-1} \Phi y
    $$

3.  **Identify $\lambda$**:
    Setting $\lambda = \frac{\sigma^2}{\alpha}$, we get:
    $$
    \hat{\theta}_{MAP} = (\Phi \Phi^T + \lambda I)^{-1} \Phi y
    $$
    Since variances $\sigma^2$ and $\alpha$ are positive, $\lambda \ge 0$.

### Part 2: Solving Regularized Least Squares

1.  **Define Objective Function**:
    $$
    J(\theta) = \|y - \Phi^T \theta\|^2 + \lambda \|\theta\|^2
    $$
    $$
    J(\theta) = (y - \Phi^T \theta)^T (y - \Phi^T \theta) + \lambda \theta^T \theta
    $$

2.  **Calculate Gradient**:
    $$
    \nabla_\theta J(\theta) = \nabla_\theta (y^T y - 2y^T \Phi^T \theta + \theta^T \Phi \Phi^T \theta + \lambda \theta^T \theta)
    $$
    $$
    = -2 \Phi y + 2 \Phi \Phi^T \theta + 2 \lambda \theta
    $$

3.  **Set Gradient to Zero**:
    $$
    -2 \Phi y + 2 (\Phi \Phi^T + \lambda I) \theta = 0
    $$
    $$
    (\Phi \Phi^T + \lambda I) \theta = \Phi y
    $$

4.  **Solve for $\theta$**:
    $$
    \hat{\theta} = (\Phi \Phi^T + \lambda I)^{-1} \Phi y
    $$
    This matches the specific MAP estimate derived above.
