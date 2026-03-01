---
title: Question
---

**Problem 5.2 Mean and variance of a kernel density estimate**

In this problem, we will study the mean and variance of the kernel density _estimate_, i.e., the distribution $\hat{p}(x)$. Let $X = \{x_1, \cdots, x_n\}$ be the set of samples, and $\tilde{k}(x)$ be the kernel with bandwidth included. The estimated probability distribution is
$$ \hat{p}(x) = \frac{1}{n} \sum*{i=1}^n \tilde{k}(x - x_i). \quad (5.5) $$
Suppose that the kernel function $\tilde{k}(x)$ has zero mean and covariance $H$, i.e.,
$$ \mathbb{E}*{\tilde{k}}[x] = \int \tilde{k}(x) x dx = 0, \quad (5.6) $$
$$ \operatorname{cov}_{\tilde{k}}(x) = \int \tilde{k}(x) (x - \mathbb{E}_{\tilde{k}}[x])(x - \mathbb{E}\_{\tilde{k}}[x])^T dx = H. \quad (5.7) $$

(b) Show that the covariance of the distribution $\hat{p}(x)$ is
$$ \hat{\Sigma} = \operatorname{cov}_{\hat{p}}(x) = H + \frac{1}{n} \sum_{i=1}^n (x_i - \hat{\mu})(x_i - \hat{\mu})^T, \quad (5.9) $$
where the second term on the right hand side is the sample covariance.
