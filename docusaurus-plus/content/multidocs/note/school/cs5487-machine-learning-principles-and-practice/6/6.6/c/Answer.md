---
title: Answer
---

## Prerequisites

* **Hyperplane Equation**: From part (b), the decision boundary is $w^T x + b = 0$.
* **Mahalanobis Distance**: The squared Mahalanobis distance between two vectors $u$ and $v$ with respect to covariance matrix $\Sigma$ is defined as $\|u - v\|_\Sigma^2 = (u - v)^T \Sigma^{-1} (u - v)$.
* **Vector Transpose Properties**: For a scalar value $c$ resulting from a vector product $u^T M v$, its transpose is equal to itself: $c = c^T = v^T M^T u$. If $M$ is symmetric (like $\Sigma^{-1}$), then $u^T M v = v^T M u$.

## Step-by-Step Derivation

1. **Target Form**:
    We want to rewrite the hyperplane equation $w^T x + b = 0$ into the form $w^T(x - x_0) = 0$.
    Expanding the target form gives:
    $$w^T x - w^T x_0 = 0$$
    Comparing this with $w^T x + b = 0$, we can see that we must satisfy the condition:
    $$w^T x_0 = -b$$

2. **Substitute Knowns**:
    From part (b), we have:
    $$w = \Sigma^{-1}(\mu_i - \mu_j)$$
    $$-b = \frac{1}{2}(\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j) - \log \frac{\pi_i}{\pi_j}$$
    We are given the proposed expression for $x_0$:
    $$x_0 = \frac{\mu_i + \mu_j}{2} - \frac{(\mu_i - \mu_j)}{\|\mu_i - \mu_j\|_\Sigma^2} \log \frac{\pi_i}{\pi_j}$$

3. **Evaluate $w^T x_0$**:
    Let's calculate $w^T x_0$ using the given definitions and show it equals $-b$.
    $$w^T x_0 = \left( \Sigma^{-1}(\mu_i - \mu_j) \right)^T \left[ \frac{\mu_i + \mu_j}{2} - \frac{(\mu_i - \mu_j)}{\|\mu_i - \mu_j\|_\Sigma^2} \log \frac{\pi_i}{\pi_j} \right]$$
    Since $\Sigma^{-1}$ is symmetric, $(\Sigma^{-1}(\mu_i - \mu_j))^T = (\mu_i - \mu_j)^T (\Sigma^{-1})^T = (\mu_i - \mu_j)^T \Sigma^{-1}$.
    $$w^T x_0 = (\mu_i - \mu_j)^T \Sigma^{-1} \left[ \frac{\mu_i + \mu_j}{2} - \frac{(\mu_i - \mu_j)}{\|\mu_i - \mu_j\|_\Sigma^2} \log \frac{\pi_i}{\pi_j} \right]$$

4. **Distribute the Terms**:
    Multiply $(\mu_i - \mu_j)^T \Sigma^{-1}$ into the brackets:
    $$w^T x_0 = \frac{1}{2} (\mu_i - \mu_j)^T \Sigma^{-1} (\mu_i + \mu_j) - \frac{(\mu_i - \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j)}{\|\mu_i - \mu_j\|_\Sigma^2} \log \frac{\pi_i}{\pi_j}$$

5. **Simplify the Expression**:
    * **First term**: Notice that $(\mu_i - \mu_j)^T \Sigma^{-1} (\mu_i + \mu_j)$ is a scalar. Its transpose is $(\mu_i + \mu_j)^T (\Sigma^{-1})^T (\mu_i - \mu_j) = (\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j)$. Since a scalar equals its transpose, we can rewrite the first term as $\frac{1}{2} (\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j)$.
    * **Second term**: By definition, the numerator $(\mu_i - \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j)$ is exactly the squared Mahalanobis distance $\|\mu_i - \mu_j\|_\Sigma^2$. Therefore, the fraction cancels out to 1.

    Substituting these simplifications back:
    $$w^T x_0 = \frac{1}{2} (\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j) - \log \frac{\pi_i}{\pi_j}$$

6. **Conclusion**:
    We have shown that $w^T x_0 = -b$. Therefore, the equation $w^T x + b = 0$ is perfectly equivalent to $w^T x - w^T x_0 = 0$, which is $w^T(x - x_0) = 0$.

## Interpretation

* **Interpretation of $w$**: The vector $w = \Sigma^{-1}(\mu_i - \mu_j)$ is the **normal vector** to the decision hyperplane. It determines the orientation (tilt) of the boundary. It points in the general direction from the mean of class $j$ to the mean of class $i$, but is skewed by the inverse covariance matrix $\Sigma^{-1}$ to account for the shape and spread of the data distribution.
* **Interpretation of $x_0$**: The point $x_0$ is a specific point that lies exactly on the decision hyperplane (since $w^T(x_0 - x_0) = 0$). It acts as an **anchor point** or origin for the boundary.
* **Effect of the priors $\{\pi_i, \pi_j\}$ on $x_0$**:
    The formula for $x_0$ consists of two parts: a midpoint $\frac{\mu_i + \mu_j}{2}$ and a shift term.
  * If the classes are equally probable ($\pi_i = \pi_j$), then $\log(\pi_i/\pi_j) = \log(1) = 0$. The shift term disappears, and $x_0$ is exactly halfway between the two class means.
  * If class $i$ is more probable ($\pi_i > \pi_j$), then $\log(\pi_i/\pi_j) > 0$. The shift term subtracts a vector pointing from $\mu_j$ to $\mu_i$. This moves the anchor point $x_0$ *away* from $\mu_i$ and *towards* $\mu_j$. Geometrically, this shifts the entire decision boundary towards the less probable class $j$, thereby expanding the decision region assigned to the more probable class $i$.
