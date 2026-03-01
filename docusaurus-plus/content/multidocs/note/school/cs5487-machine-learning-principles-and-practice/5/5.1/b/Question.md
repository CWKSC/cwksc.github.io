---
title: Question
---

# Problem 5.1 Bias and variance of the kernel density estimator

In this problem, we will derive the bias and variance of the kernel density estimator. Let $X = \{x_1, \cdots, x_n\}$ be the r.v. samples, drawn independently according to the true density $p(x)$.

(b) Show that the variance of the estimator is bounded by
$$
\mathrm{var}_X(\hat{p}(x)) \le \frac{1}{nh^d}\max_x(k(x))\mathbb{E}[\hat{p}(x)]. \quad (5.2)
$$

Hint: the following properties will be helpful:
$$
\mathrm{var}(x) = \mathbb{E}[x^2] - (\mathbb{E}[x])^2 \le \mathbb{E}[x^2], \quad (5.3)
$$
$$
k\left(\frac{x - x_i}{h}\right) \le \max_x k(x), \quad (5.4)
$$
and Problem 1.4.
