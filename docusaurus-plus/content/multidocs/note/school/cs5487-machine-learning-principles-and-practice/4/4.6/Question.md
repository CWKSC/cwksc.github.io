---
title: Question
---

## Problem 4.6 Mixture of exponentials

Consider a mixture of exponential densities,

$$
p(x) = \sum_{j=1}^K \pi_j p(x|j), \quad p(x|j) = \lambda_j e^{-\lambda_j x}.
$$

where $\lambda_j > 0$ is the parameter of component $j$. Given a set of samples $\{x_1, \dots, x_n\}$, derive the EM algorithm to estimate the parameters $\theta = \{\pi_j, \lambda_j\}_{j=1}^K$.
