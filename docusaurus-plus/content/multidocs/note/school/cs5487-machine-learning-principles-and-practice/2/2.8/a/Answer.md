---
title: Answer
---

### Prerequisites

- **Matrix Calculus**: Rules for differentiating matrix expressions with respect to a vector.
- **Least-Squares Regression**: Minimization of the sum-squared-error.

### Step-by-Step Derivation

1. **Define the Objective Function**
   The problem asks us to find the parameter vector $\theta$ that minimizes the sum-squared-error, denoted as $J(\theta)$:

   $$
   J(\theta) = \| y - \Phi^T \theta \|^2
   $$

2. **Expand the Objective Function**
   We can express the squared $L_2$ norm as an inner product:

   $$
   \begin{aligned}
   J(\theta) &= (y - \Phi^T \theta)^T (y - \Phi^T \theta) \\
             &= (y^T - \theta^T \Phi)(y - \Phi^T \theta) \\
             &= y^T y - y^T \Phi^T \theta - \theta^T \Phi y + \theta^T \Phi \Phi^T \theta
   \end{aligned}
   $$

3. **Simplify the Expression**
   Note that $y^T \Phi^T \theta$ is a scalar quantity (dimension $1 \times n \cdot n \times D \cdot D \times 1 = 1 \times 1$). The transpose of a scalar is itself, so:

   $$
   (y^T \Phi^T \theta)^T = \theta^T \Phi y
   $$

   Therefore, the two middle terms are equal, and the objective function simplifies to:

   $$
   J(\theta) = y^T y - 2 \theta^T \Phi y + \theta^T \Phi \Phi^T \theta
   $$

4. **Compute the Derivative with Respect to $\theta$**
   To find the minimum, we take the gradient of $J(\theta)$ with respect to $\theta$ and set it to the zero vector. Using standard matrix calculus identities:
   - $\nabla_\theta (\theta^T A) = A$
   - $\nabla_\theta (\theta^T A \theta) = (A + A^T)\theta$

   For symmetric matrix $A = \Phi \Phi^T$, $\nabla_\theta (\theta^T (\Phi \Phi^T) \theta) = 2 \Phi \Phi^T \theta$. Thus:

   $$
   \frac{\partial J(\theta)}{\partial \theta} = - 2 \Phi y + 2 \Phi \Phi^T \theta
   $$

5. **Solve for $\theta$**
   Set the derivative to zero to find the optimal $\theta$:
   $$
   \begin{aligned}
   - 2 \Phi y + 2 \Phi \Phi^T \theta &= 0 \\
   \Phi \Phi^T \theta &= \Phi y
   \end{aligned}
   $$
   Assuming $\Phi \Phi^T$ is invertible, we multiply both sides by $(\Phi \Phi^T)^{-1}$:
   $$
   \hat{\theta}_{LS} = (\Phi \Phi^T)^{-1} \Phi y
   $$
