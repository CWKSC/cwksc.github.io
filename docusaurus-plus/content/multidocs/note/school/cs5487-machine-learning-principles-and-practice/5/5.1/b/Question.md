---
title: Question
---

## Problem 5.1 Bias and variance of the kernel density estimator

(b) Show that the variance of the estimator is bounded by
$$
\text{var}_X (\hat{p}(x)) \le \frac{1}{nh^d} \max_x (k(x)) \mathbb{E}[\hat{p}(x)]. \tag{5.2}
$$
Hint: the following properties will be helpful:
$$
\text{var}(x) = \mathbb{E}[x^2] - (\mathbb{E}[x])^2 \le \mathbb{E}[x^2], \tag{5.3}
$$
$$
k\left(\frac{x - x_i}{h}\right) \le \max_x k(x), \tag{5.4}
$$
and Problem 1.4.
