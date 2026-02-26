---
title: Question
---

**Problem 6.6 Gaussian classifier with common covariance**

In this problem, we will derive the BDR for Gaussian classifiers with a common covariance, and interpret the resulting decision boundaries. Let $y \in \{1, \dots, C\}$ be the classes with prior probabilities $p(y = j) = \pi_j$, and $x \in \mathbb{R}^d$ be the measurement with class conditional densities that are Gaussian with a shared covariance, $p(x|y = j) = \mathcal{N}(x|\mu_j, \Sigma)$.

(a) Show that the BDR using the 0-1 loss function is:
$$g(x)^* = \text{argmax}_j g_j(x), \quad (6.16)$$
where the $g_j(x)$ for each class is a linear function of $x$,
$$g_j(x) = w_j^T x + b_j, \quad (6.17)$$
$$w_j = \Sigma^{-1} \mu_j, \quad b_j = -\frac{1}{2} \mu_j^T \Sigma^{-1} \mu_j + \log \pi_j. \quad (6.18)$$
