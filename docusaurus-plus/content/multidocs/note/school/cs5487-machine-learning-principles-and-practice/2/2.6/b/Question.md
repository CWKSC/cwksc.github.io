---
title: Question.md
---

# Problem 2.6 MLE for a multivariate Gaussian

In this problem you will derive the ML estimate for a multivariate Gaussian. Given samples $\{x_1, \cdots, x_N\}$,

(b) Derive the ML estimate of the covariance $\Sigma$.

You may find the following vector and matrix derivatives helpful:

* $\frac{\partial}{\partial x} a^T x = a$, for vectors $x, a \in \mathbb{R}^d$.
* $\frac{\partial}{\partial x} x^T A x = Ax + A^T x$, for vector $x \in \mathbb{R}^d$ and matrix $A \in \mathbb{R}^{d \times d}$.
* $\frac{\partial}{\partial X} \log |X| = X^{-T}$, for a square matrix $X$.
* $\frac{\partial}{\partial X} \text{tr}(AX^{-1}) = \frac{\partial}{\partial X} \text{tr}(X^{-1}A) = -(X^{-T} A^T X^{-T})$, for matrices $A, X$.

Hint: remember $\Sigma$ is symmetric!
