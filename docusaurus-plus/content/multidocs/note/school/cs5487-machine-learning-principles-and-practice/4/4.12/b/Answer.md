---
title: Answer
---

## Prerequisites

* **Lagrange Multipliers**
* **Derivatives**: Specifically, product rule and derivative of $x \log x$.
  * $\frac{d}{dx} (x \log x) = 1 \cdot \log x + x \cdot \frac{1}{x} = \log x + 1$.

## Solution

We maximize the objective function:
$$ f(\{\pi_j\}) = \sum_{j=1}^K \pi_j (N_j - \log \pi_j) = \sum_{j=1}^K ( \pi_j N_j - \pi_j \log \pi_j ) $$

Subject to:
$$ \sum_{j=1}^K \pi_j = 1 $$

### Step 1: Form the Lagrangian

$$ L(\{\pi_j\}, \lambda) = \sum_{j=1}^K ( \pi_j N_j - \pi_j \log \pi_j ) + \lambda \left( \sum_{j=1}^K \pi_j - 1 \right) $$

### Step 2: Take derivatives and set to zero

Take the partial derivative with respect to a specific $\pi_j$:
$$ \frac{\partial L}{\partial \pi_j} = \frac{\partial}{\partial \pi_j} (\pi_j N_j) - \frac{\partial}{\partial \pi_j} (\pi_j \log \pi_j) + \frac{\partial}{\partial \pi_j} (\lambda \pi_j) $$

Using the product rule for $\pi_j \log \pi_j$:
$$ \frac{\partial}{\partial \pi_j} (\pi_j \log \pi_j) = 1 \cdot \log \pi_j + \pi_j \cdot \frac{1}{\pi_j} = \log \pi_j + 1 $$

Substituting back:
$$ \frac{\partial L}{\partial \pi_j} = N_j - (\log \pi_j + 1) + \lambda $$

Set to zero:
$$ N_j - \log \pi_j - 1 + \lambda = 0 $$

### Step 3: Solve for $\pi_j$ in terms of $\lambda$

Rearrange the equation to isolate $\log \pi_j$:
$$ \log \pi_j = N_j - 1 + \lambda $$

Exponentiate both sides:
$$ \pi_j = \exp(N_j - 1 + \lambda) $$
$$ \pi_j = \exp(N_j) \cdot \exp(\lambda - 1) $$

### Step 4: Solve for the Lagrange multiplier term

Use the constraint $\sum \pi_j = 1$:
$$ \sum_{j=1}^K \left[ \exp(N_j) \cdot \exp(\lambda - 1) \right] = 1 $$

Since $\exp(\lambda - 1)$ does not depend on $j$, we can factor it out:
$$ \exp(\lambda - 1) \sum_{j=1}^K \exp(N_j) = 1 $$

Thus:
$$ \exp(\lambda - 1) = \frac{1}{\sum_{k=1}^K \exp(N_k)} $$

### Step 5: Substitute back to find $\pi_j$

Multiply $\exp(N_j)$ by the factor we just found:
$$ \pi_j = \exp(N_j) \cdot \frac{1}{\sum_{k=1}^K \exp(N_k)} $$
$$ \pi_j = \frac{\exp N_j}{\sum_{k=1}^K \exp N_k} $$
