---
title: Explain
---

## Detailed Explanation

The core concept in this question is connecting the optimization formulation of regularization with Bayesian statistics.

### MAP Estimation

In Bayesian estimation, we have detailed that:
$$ \text{Posterior} \propto \text{Likelihood} \times \text{Prior} $$
Taking the negative logarithm turns the product into a sum:
$$ -\log(\text{Posterior}) = -\log(\text{Likelihood}) - \log(\text{Prior}) + C $$
Minimizing the objective function $\frac{1}{2}E + \lambda R$ is essentially performing MAP estimation where $E$ comes from the likelihood and $R$ comes from the prior.

* **L2 Regularization (Ridge)** uses $R(\theta) = \|\theta\|^2$, which corresponds to a **Gaussian** prior.
* **L1 Regularization (LASSO)** uses $R(\theta) = \|\theta\|_1$, which corresponds to a **Laplacian** prior.

### Why Sparsity?

Visually, if we plot the contours of the likelihood (ellipses) and the contours of the prior (constraint region), the solution is where they touch.
* For **L2**, the constraint region ($\sum \theta_i^2 \le C$) is a **circle/sphere**. The likelihood ellipses usually touch the circle at a predictable point on the curve, rarely exactly on an axis (where a weight is 0).
* For **L1**, the constraint region ($\sum |\theta_i| \le C$) is a **diamond/cross-polytope**. This shape has "corners" on the axes. Geometric probability dictates that the expanding likelihood ellipses are very likely to hit the "corners" first. Since corners lie on the axes, other coordinates are zero, leading to a sparse solution.

Mathematically, the derivative of $|\theta|$ is $\text{sign}(\theta)$, which is $+1$ or $-1$. It does not go to 0 as $\theta$ gets small. This constant force pushes coefficients all the way to 0. The derivative of $\theta^2$ is $2\theta$, which goes to 0 as $\theta$ gets small, providing diminishing force.
