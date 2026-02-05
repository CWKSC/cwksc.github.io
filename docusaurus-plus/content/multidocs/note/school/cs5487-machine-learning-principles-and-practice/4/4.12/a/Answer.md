---
title: Answer
---

## Prerequisites

* **Lagrange Multipliers**: A method for finding the local maxima and minima of a function subject to equality constraints. For maximizing $f(x)$ subject to $g(x)=0$, we construct the Lagrangian $L(x, \lambda) = f(x) + \lambda g(x)$ and set $\nabla L = 0$.
* **Derivatives**: Specifically, the derivative of $\log(x)$.

## Solution

We want to maximize the objective function:
$$ f(\{\pi_j\}) = \sum_{j=1}^K N_j \log \pi_j $$

Subject to the constraint:
$$ \sum_{j=1}^K \pi_j = 1 $$

We can rewrite the equality constraint as $g(\{\pi_j\}) = \sum_{j=1}^K \pi_j - 1 = 0$.

### Step 1: Form the Lagrangian

Construct the Lagrangian function $L(\{\pi_j\}, \lambda)$:
$$ L(\{\pi_j\}, \lambda) = \sum_{j=1}^K N_j \log \pi_j + \lambda \left( \sum_{j=1}^K \pi_j - 1 \right) $$

### Step 2: Take derivatives and set to zero

Take the partial derivative with respect to $\pi_j$ for any specific $j \in \{1, \dots, K\}$:

$$ \frac{\partial L}{\partial \pi_j} = \frac{\partial}{\partial \pi_j} (N_j \log \pi_j) + \frac{\partial}{\partial \pi_j} (\lambda \pi_j) $$
$$ \frac{\partial L}{\partial \pi_j} = \frac{N_j}{\pi_j} + \lambda $$

Set the derivative to zero to find the stationary point:
$$ \frac{N_j}{\pi_j} + \lambda = 0 \implies N_j = -\lambda \pi_j \implies \pi_j = -\frac{N_j}{\lambda} $$

### Step 3: Solve for the Lagrange multiplier $\lambda$

Use the constraint $\sum_{j=1}^K \pi_j = 1$ by substituting the expression for $\pi_j$:
$$ \sum_{j=1}^K \left( -\frac{N_j}{\lambda} \right) = 1 $$
$$ -\frac{1}{\lambda} \sum_{j=1}^K N_j = 1 $$

Solving for $\lambda$:
$$ \lambda = -\sum_{j=1}^K N_j $$

Let $N = \sum_{k=1}^K N_k$ denote the total count. Then $\lambda = -N$.

### Step 4: Substitute $\lambda$ back to find $\pi_j$

Substitute $\lambda = -\sum_{k=1}^K N_k$ back into the equation $\pi_j = -\frac{N_j}{\lambda}$:
$$ \pi_j = -\frac{N_j}{-\sum_{k=1}^K N_k} = \frac{N_j}{\sum_{k=1}^K N_k} $$

Thus, we have shown that the solution is:
$$ \pi_j = \frac{N_j}{\sum_{k=1}^K N_k} $$
