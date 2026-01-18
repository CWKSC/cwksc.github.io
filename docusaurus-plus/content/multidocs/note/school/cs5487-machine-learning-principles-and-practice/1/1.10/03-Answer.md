---
title: Answer
---

# Problem 1.10 Completing the square - Answer

## Prerequisite Knowledge

To solve this problem, you need to be familiar with the following linear algebra concepts:

1.  **Symmetric Matrix**: A matrix $A$ is symmetric if $A^T = A$. In this problem, $A \in \mathbb{S}^n$, so this property holds.
2.  **Transpose Properties**:
    - $(A + B)^T = A^T + B^T$
    - $(AB)^T = B^T A^T$
3.  **Scalar Transpose**: If a result is a scalar (a $1 \times 1$ matrix), its transpose is equal to itself. For vectors $x, b \in \mathbb{R}^n$, the dot product $x^T b$ is a scalar, so $x^T b = (x^T b)^T = b^T x$.
4.  **Matrix Inverse**: $A A^{-1} = A^{-1} A = I$.

## Step-by-Step Derivation

We want to show that the quadratic form:
$$ f(x) = x^T A x - 2x^T b + c \qquad (1.28) $$
can be rewritten as:
$$ f(x) = (x - d)^T A (x - d) + e \qquad (1.29) $$
given:
$$ d = A^{-1}b \qquad (1.30) $$
$$ e = c - d^T A d = c - b^T A^{-1} b \qquad (1.31) $$

Let's start by expanding the proposed form $(1.29)$ and substituting the values of $d$ and $e$ to see if we arrive at $(1.28)$.

### Step 1: Expand the quadratic term $(x - d)^T A (x - d)$

Using the transpose property $(A+B)^T = A^T + B^T$:
$$ (x - d)^T = x^T - d^T $$

So,
$$ (x - d)^T A (x - d) = (x^T - d^T) A (x - d) $$

Distribute the terms:
$$ = (x^T A - d^T A) (x - d) $$
$$ = x^T A x - x^T A d - d^T A x + d^T A d $$

### Step 2: Simplify the cross terms

The two middle terms are $-x^T A d$ and $-d^T A x$.
Note that these terms are scalars ($1 \times 1$).
Let's look at the term $d^T A x$. Since it is a scalar, it equals its transpose:
$$ (d^T A x)^T = x^T A^T (d^T)^T = x^T A^T d $$

Since $A$ is symmetric ($A \in \mathbb{S}^n$), we know $A^T = A$. Therefore:
$$ (d^T A x)^T = x^T A d $$

So, $d^T A x = x^T A d$. The cross terms are identical.
The expression becomes:
$$ (x - d)^T A (x - d) = x^T A x - 2x^T A d + d^T A d $$

### Step 3: Substitute expressions for $d$ and $e$ back into original equation (1.29)

Now substitute this expansion back into $(1.29)$:
$$ f(x) = \left( x^T A x - 2x^T A d + d^T A d \right) + e $$

Substitute $d = A^{-1}b$ into the term $-2x^T A d$:
$$ -2x^T A d = -2x^T A (A^{-1}b) $$
$$ = -2x^T (A A^{-1}) b $$
$$ = -2x^T I b $$
$$ = -2x^T b $$

Substitute the definition of $e$ from $(1.31)$:
$$ e = c - d^T A d $$

So the full expression becomes:
$$ f(x) = x^T A x - 2x^T b + d^T A d + (c - d^T A d) $$

### Step 4: Final Cancellation

The $d^T A d$ terms cancel out:
$$ f(x) = x^T A x - 2x^T b + \underbrace{d^T A d - d^T A d}\_{0} + c $$
$$ f(x) = x^T A x - 2x^T b + c $$

This matches equation $(1.28)$. Thus, we have shown that $f(x)$ can indeed be rewritten in the form $(1.29)$ with the given parameters.
