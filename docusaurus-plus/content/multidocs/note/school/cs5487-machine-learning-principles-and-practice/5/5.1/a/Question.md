---
title: Question
---

## Problem 5.1 Bias and variance of the kernel density estimator

In this problem, we will derive the bias and variance of the kernel density estimator. Let $X = \{x_1, \dots, x_n\}$ be the r.v. samples, drawn independently according to the true density $p(x)$.

(a) Show that the mean of the estimator is
$$
\mathbb{E}_X [\hat{p}(x)] = \int p(\mu) \tilde{k}(x - \mu) d\mu = p(x) * \tilde{k}(x), \tag{5.1}
$$
where $*$ is the convolution operator. What does this tell you about how the KDE is biased?
