---
title: Answer
---

### Prerequisites

- **Calculus**: Partial differentiation of logarithmic sums.
- **Optimization**: The Method of Lagrange Multipliers for constrained optimization problems.
- **Probability Theory**: The constraint that categorical probabilities must sum to 1.

---

### Step-by-Step Derivation

**Step 1: Define the objective and constraint functions**
We want to maximize the objective function:
$$ f(\pi) = \sum\_{j=1}^K N_j \log \pi_j $$

subject to the equality constraint:
$$ \sum*{j=1}^K \pi_j = 1 \implies g(\pi) = \sum*{j=1}^K \pi_j - 1 = 0 $$

_(Note: While there is also an inequality constraint $\pi_j \ge 0$, we can proceed by ignoring it temporarily to find a stationary point, and then verify that our solution satisfies it since $N_j \ge 0$.)_

**Step 2: Form the Lagrangian**
Using the formulation $L(\pi, \lambda) = f(\pi) - \lambda g(\pi)$ (or using addition $f(\pi) + \lambda' g(\pi)$, the resulting scalar multiplier just changes sign), we construct the Lagrangian function. Let's use subtraction to match common conventions that yield a positive scale, though either is computationally identical:

$$ L(\pi, \lambda) = \sum*{j=1}^K N_j \log \pi_j - \lambda \left(\sum*{j=1}^K \pi_j - 1\right) $$

**Step 3: Find the stationary point with respect to $\pi_j$**
We take the partial derivative of the Lagrangian with respect to a specific component $\pi_j$ and set it to zero:

$$ \frac{\partial L}{\partial \pi_j} = \frac{\partial}{\partial \pi_j} \left( N_j \log \pi_j - \lambda \pi_j \right) = \frac{N_j}{\pi_j} - \lambda = 0 $$

**Step 4: Express $\pi_j$ in terms of $\lambda$**
Rearranging the equation to solve for $\pi_j$:

$$ \frac{N_j}{\pi_j} = \lambda \implies \pi_j = \frac{N_j}{\lambda} $$

**Step 5: Enforce the equality constraint to solve for $\lambda$**
We substitute our expression for $\pi_j$ back into the original constraint $\sum_{j=1}^K \pi_j = 1$:

$$ \sum\_{j=1}^K \frac{N_j}{\lambda} = 1 $$

Since $\lambda$ is a constant multiplier that does not depend on $j$, we can pull it out of the summation:

$$ \frac{1}{\lambda} \sum*{j=1}^K N_j = 1 \implies \lambda = \sum*{j=1}^K N_j $$

**Step 6: Substitute $\lambda$ back to find the final solution**
Plugging $\lambda = \sum_{k=1}^K N_k$ (using index $k$ to avoid confusion with the specific $j$) back into our expression for $\pi_j$ from Step 4:

$$ \pi*j = \frac{N_j}{\sum*{k=1}^K N_k} $$

**Verification**: Given that $N_j \ge 0$ for all $j$, it is clear that $\pi_j \ge 0$, thus satisfying the bounds constraint. The solution is complete.
