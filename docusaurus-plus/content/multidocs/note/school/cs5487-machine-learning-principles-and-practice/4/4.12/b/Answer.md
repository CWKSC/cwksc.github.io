---
title: Answer
---

### Prerequisites
- **Calculus**: Product rule and differentiation of logarithms.
- **Optimization**: The Method of Lagrange Multipliers for constrained optimization problems.
- **Probability Theory**: The constraint that categorical probabilities must sum to 1.
- **Softmax Function**: The mathematical operation that turns arbitrary sets of scalars into probabilities summing to one.

---

### Step-by-Step Derivation

**Step 1: Define the objective and constraint functions**
We want to maximize the new objective function:
$$ f(\pi) = \sum_{j=1}^K \pi_j (N_j - \log \pi_j) $$

subject to the equality constraint:
$$ \sum_{j=1}^K \pi_j = 1 \implies g(\pi) = \sum_{j=1}^K \pi_j - 1 = 0 $$

*(Note: As with part (a), we temporarily ignore the inequality constraint $\pi_j \ge 0$. We will find a stationary point and verify that the resulting solution mathematically produces non-negative values.)*

**Step 2: Form the Lagrangian**
Using the standard formulation $L(\pi, \lambda) = f(\pi) - \lambda g(\pi)$, we construct the Lagrangian function:

$$ L(\pi, \lambda) = \sum_{j=1}^K \pi_j(N_j - \log \pi_j) - \lambda \left(\sum_{j=1}^K \pi_j - 1\right) $$

**Step 3: Find the stationary point with respect to $\pi_j$**
We compute the partial derivative of $L$ with respect to a specific $\pi_j$. Note that we must use the product rule for the $-\pi_j \log \pi_j$ term:

$$ \frac{\partial L}{\partial \pi_j} = \frac{\partial}{\partial \pi_j} \left( \pi_j N_j - \pi_j \log \pi_j - \lambda \pi_j \right) $$
$$ \frac{\partial L}{\partial \pi_j} = N_j - \left( 1 \cdot \log \pi_j + \pi_j \cdot \frac{1}{\pi_j} \right) - \lambda $$
$$ \frac{\partial L}{\partial \pi_j} = N_j - \log \pi_j - 1 - \lambda $$

Setting this derivative to zero:
$$ N_j - \log \pi_j - 1 - \lambda = 0 $$

**Step 4: Express $\pi_j$ in terms of $\lambda$**
Rearranging the equation to solve for $\pi_j$:

$$ \log \pi_j = N_j - 1 - \lambda $$

Taking the exponent of both sides:
$$ \pi_j = \exp(N_j - 1 - \lambda) = \exp(N_j) \cdot \exp(-1-\lambda) $$

**Step 5: Enforce the equality constraint to solve for $\lambda$**
We substitute our expression for $\pi_j$ into the sum-to-one constraint:

$$ \sum_{j=1}^K \pi_j = \sum_{j=1}^K \left[ \exp(N_j) \exp(-1-\lambda) \right] = 1 $$

Since the term $\exp(-1-\lambda)$ does not depend on the index $j$, we factor it out:

$$ \exp(-1-\lambda) \sum_{j=1}^K \exp(N_j) = 1 $$

Solving for $\exp(-1-\lambda)$:

$$ \exp(-1-\lambda) = \frac{1}{\sum_{k=1}^K \exp(N_k)} $$
*(We use $k$ for the index in the denominator to avoid confusion during substitution.)*

**Step 6: Substitute back to find the final solution**
Substitute the result from Step 5 back into the expression for $\pi_j$ derived in Step 4:

$$ \pi_j = \exp(N_j) \cdot \exp(-1-\lambda) $$
$$ \pi_j = \exp(N_j) \cdot \frac{1}{\sum_{k=1}^K \exp(N_k)} $$
$$ \pi_j = \frac{\exp(N_j)}{\sum_{k=1}^K \exp(N_k)} $$

**Verification**: Given that the exponential function always produces strictly positive values ($\exp(x) > 0$ for all real $x$), we have $\pi_j > 0$. This inherently satisfies the non-negative strict bounds constraint. This final functional form is famously known as the **Softmax function**.
