---
title: Question
---

## Problem 5.2 Mean and variance of a kernel density estimate

In this problem, we will study the mean and variance of the kernel density *estimate*, i.e., the distribution $\hat{p}(x)$. Let $X = \{x_1, \dots, x_n\}$ be the set of samples, and $\tilde{k}(x)$ be the kernel with bandwidth included. The estimated probability distribution is

$$
\hat{p}(x) = \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i). \tag{5.5}
$$

Suppose that the kernel function $\tilde{k}(x)$ has zero mean and covariance $H$, i.e.,

$$
\mathbb{E}_{\tilde{k}}[x] = \int \tilde{k}(x) x dx = 0, \tag{5.6}
$$

$$
\text{cov}_{\tilde{k}}(x) = \int \tilde{k}(x)(x - \mathbb{E}_{\tilde{k}}[x])(x - \mathbb{E}_{\tilde{k}}[x])^T dx = H. \tag{5.7}
$$

(a) Show that the mean of the distribution $\hat{p}(x)$ is the sample mean of $X$,

$$
\hat{\mu} = \mathbb{E}_{\hat{p}}[x] = \int \hat{p}(x)x dx = \frac{1}{n} \sum_{i=1}^n x_i. \tag{5.8}
$$
