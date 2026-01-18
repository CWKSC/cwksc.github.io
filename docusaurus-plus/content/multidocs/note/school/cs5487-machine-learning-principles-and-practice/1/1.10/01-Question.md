---
title: Question
---

# Problem 1.10 Completing the square

Let $x, b \in \mathbb{R}^n$, $A \in \mathbb{S}^n$, $c \in \mathbb{R}$, and let $f(x)$ be a quadratic function of $x$,

$$
f(x) = x^T A x - 2x^T b + c. \qquad (1.28)
$$

Show that $f(x)$ can be rewritten in the form

$$
f(x) = (x - d)^T A (x - d) + e, \qquad (1.29)
$$

where

$$
d = A^{-1}b, \qquad (1.30)
$$

$$
e = c - d^T A d = c - b^T A^{-1} b. \qquad (1.31)
$$

Rewriting the quadratic function in (1.28) as (1.29) is a procedure known as "completing the square", which is very useful when dealing with products of Gaussian distributions.
