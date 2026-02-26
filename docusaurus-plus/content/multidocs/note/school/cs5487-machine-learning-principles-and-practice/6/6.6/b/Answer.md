---
title: Answer
---

## Prerequisites

* **Linear Discriminant Functions**: From part (a), we know $g_k(x) = w_k^T x + b_k$ for any class $k$.
* **Decision Boundary**: The boundary between two classes $i$ and $j$ is the set of points $x$ where the classifier is indifferent between the two classes, meaning their discriminant functions are equal: $g_i(x) = g_j(x)$.
* **Hyperplane Equation**: A hyperplane in $d$-dimensional space can be defined by the equation $w^T x + b = 0$, where $w$ is the normal vector to the hyperplane and $b$ is the bias (or offset).

## Step-by-Step Derivation

1. **Set Discriminant Functions Equal**:
    The decision boundary is defined by the condition where the scores for class $i$ and class $j$ are identical:
    $$g_i(x) = g_j(x)$$

2. **Substitute the Linear Forms**:
    Using the results from part (a), substitute the linear equations for $g_i(x)$ and $g_j(x)$:
    $$w_i^T x + b_i = w_j^T x + b_j$$

3. **Rearrange into Hyperplane Form**:
    Move all terms involving $x$ to one side and the constant terms to the other side to match the standard hyperplane equation $w^T x + b = 0$:
    $$(w_i - w_j)^T x + (b_i - b_j) = 0$$
    Let $w = w_i - w_j$ and $b = b_i - b_j$.

4. **Derive the Expression for $w$**:
    Substitute the definitions of $w_i$ and $w_j$ from part (a):
    $$w = \Sigma^{-1}\mu_i - \Sigma^{-1}\mu_j$$
    Factor out $\Sigma^{-1}$:
    $$w = \Sigma^{-1}(\mu_i - \mu_j)$$
    This matches the required expression for $w$.

5. **Derive the Expression for $b$**:
    Substitute the definitions of $b_i$ and $b_j$ from part (a):
    $$b = \left( -\frac{1}{2}\mu_i^T\Sigma^{-1}\mu_i + \log \pi_i \right) - \left( -\frac{1}{2}\mu_j^T\Sigma^{-1}\mu_j + \log \pi_j \right)$$
    Group the quadratic terms and the logarithmic terms:
    $$b = -\frac{1}{2}(\mu_i^T\Sigma^{-1}\mu_i - \mu_j^T\Sigma^{-1}\mu_j) + (\log \pi_i - \log \pi_j)$$

6. **Simplify the Logarithmic Term**:
    Using the quotient rule for logarithms ($\log A - \log B = \log \frac{A}{B}$):
    $$\log \pi_i - \log \pi_j = \log \frac{\pi_i}{\pi_j}$$

7. **Simplify the Quadratic Term**:
    We need to show that $\mu_i^T\Sigma^{-1}\mu_i - \mu_j^T\Sigma^{-1}\mu_j = (\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j)$.
    Let's expand the right side of this proposed equality:
    $$(\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j) = (\mu_i^T + \mu_j^T) (\Sigma^{-1}\mu_i - \Sigma^{-1}\mu_j)$$
    $$= \mu_i^T\Sigma^{-1}\mu_i - \mu_i^T\Sigma^{-1}\mu_j + \mu_j^T\Sigma^{-1}\mu_i - \mu_j^T\Sigma^{-1}\mu_j$$
    Since $\Sigma$ is a symmetric covariance matrix, its inverse $\Sigma^{-1}$ is also symmetric. Therefore, the scalar value $\mu_i^T\Sigma^{-1}\mu_j$ is equal to its transpose $\mu_j^T\Sigma^{-1}\mu_i$.
    This means the two middle terms cancel each other out:
    $$-\mu_i^T\Sigma^{-1}\mu_j + \mu_j^T\Sigma^{-1}\mu_i = 0$$
    Leaving us with:
    $$(\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j) = \mu_i^T\Sigma^{-1}\mu_i - \mu_j^T\Sigma^{-1}\mu_j$$

8. **Final Substitution**:
    Substitute the simplified logarithmic and quadratic terms back into the equation for $b$:
    $$b = -\frac{1}{2}(\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j) + \log \frac{\pi_i}{\pi_j}$$
    This matches the required expression for $b$, completing the proof.
