---
title: Explain
---

## Detailed Explanation

A **Quadratic Program (QP)** is an optimization problem with a quadratic objective function and linear constraints.
$$ \min_x \frac{1}{2} x^T H x + f^T x \quad \text{subject to } Ax \le b, A_{eq}x = b_{eq} $$

In our case:
* **Variable**: The variable size doubles from $D$ (for $\theta$) to $2D$ (for $\mathbf{x} = [\theta^+; \theta^-]$).
* **Hessian $H$**: The matrix is positive semi-definite (if $\Phi \Phi^T$ is), which ensures the problem is convex and has a global minimum. The block structure reflects the symmetry of how $\theta^+$ and $\theta^-$ affect the output (differing only by sign).
* **Linear term $f$**: Regulates the trade-off. $\lambda \mathbf{1}$ pushes all weights towards 0. The data term $-\Phi y$ pulls them towards fitting the data.
* **Constraints**: We have a simple lower bound constraint $\mathbf{x} \ge 0$.

This transformation allows the use of robust, off-the-shelf QP solvers instead of needing to write a custom gradient descent algorithm for the non-differentiable L1 cost.
