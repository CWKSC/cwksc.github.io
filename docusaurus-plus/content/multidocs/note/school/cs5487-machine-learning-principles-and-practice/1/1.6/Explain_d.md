---
title: Explain (d)
---

# Explanation for 1.6 (d) - Covariance Matrix Eigendecomposition

Based on the derivation in **Problem 1.6 (d)**, here is a detailed breakdown of how we get from eigenvalues to the full matrix decomposition $\Sigma = V \Lambda V^T$.

## 1. From Vectors to Matrices

The most common confusing part is moving from the single vector equation to the full matrix equation.

We start with the definition of an eigenvector $v_i$ and eigenvalue $\lambda_i$:
$$ \Sigma v_i = \lambda_i v_i $$

If we have $d$ eigenvectors ($v_1, ..., v_d$), we can write them all side-by-side using matrix multiplication.

**Left-hand side ($\Sigma V$):**
When you multiply a matrix $\Sigma$ by a matrix $V$ (where $V$ is made of columns $v_1, ..., v_d$), the result is simply $\Sigma$ multiplying each column individually:

$$
\Sigma V = \Sigma \begin{bmatrix} | & & | \\ v_1 & \dots & v_d \\ | & & | \end{bmatrix} = \begin{bmatrix} | & & | \\ \Sigma v_1 & \dots & \Sigma v_d \\ | & & | \end{bmatrix}
$$

Since $\Sigma v_i = \lambda_i v_i$, we can replace the columns:

$$
= \begin{bmatrix} | & & | \\ \lambda_1 v_1 & \dots & \lambda_d v_d \\ | & & | \end{bmatrix}
$$

**Right-hand side ($V \Lambda$):**
Now look at $V \Lambda$. If you multiply a matrix $V$ on the right by a **diagonal** matrix $\Lambda$, it scales each **column** of $V$ by the corresponding diagonal element:

$$
\begin{bmatrix} | & & | \\ v_1 & \dots & v_d \\ | & & | \end{bmatrix}
\begin{bmatrix} \lambda_1 & & 0 \\ & \ddots & \\ 0 & & \lambda_d \end{bmatrix}
= \begin{bmatrix} | & & | \\ \lambda_1 v_1 & \dots & \lambda_d v_d \\ | & & | \end{bmatrix}
$$

**Conclusion:**
Since the columns match exactly, we have proven:
$$ \Sigma V = V \Lambda $$

## 2. Why $V$ is Orthogonal ($V^T = V^{-1}$)

The problem states that $\Sigma$ is a **covariance matrix**.

- Covariance matrices are always **symmetric** ($\Sigma = \Sigma^T$).
- A key theorem in linear algebra (The Spectral Theorem) states that **symmetric matrices always have orthogonal eigenvectors**.

This means the dot product of any two different eigenvectors is 0, and we normalize them so their length is 1:
$$ v_i^T v_j = 0 \text{ (if } i \neq j), \quad v_i^T v_i = 1 $$

In matrix form, calculating $V^T V$:

$$
V^T V = \begin{bmatrix} - v_1^T - \\ \vdots \\ - v_d^T - \end{bmatrix} \begin{bmatrix} | & & | \\ v_1 & \dots & v_d \\ | & & | \end{bmatrix} = \begin{bmatrix} 1 & 0 & \dots \\ 0 & 1 & \dots \\ \vdots & \vdots & \ddots \end{bmatrix} = I
$$

Since $V^T V = I$, by definition $V^T$ is the inverse of $V$.

## 3. Solving for $\Sigma$

Now we just rearrange the algebra:

1.  Start with: $\Sigma V = V \Lambda$
2.  Multiply both sides by $V^T$ (from the right):
    $$ \Sigma V V^T = V \Lambda V^T $$
3.  Since $V V^T = I$, the $V$'s on the left cancel out:
    $$ \Sigma = V \Lambda V^T $$

## Geometric Interpretation

This equation tells us that any covariance matrix can be thought of as:

1.  **Rotating** the space to align with the data's axes ($V^T$).
2.  **Stretching** along those axes based on the variance ($\Lambda$).
3.  **Rotating back** to the original orientation ($V$).
