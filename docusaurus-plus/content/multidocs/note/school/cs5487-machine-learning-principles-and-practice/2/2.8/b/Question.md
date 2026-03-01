---
title: Question
---
**Problem 2.8 Least-squares regression and MLE**

In this problem we will consider the issue of linear regression and the connections between maximum likelihood and least squares solutions. Consider the polynomial function of $x \in \mathbb{R}$,

$$
f(x, \theta) = \sum_{k=0}^K x^k \theta_k = \phi(x)^T \theta \quad \quad (2.7)
$$

where we define the feature transformation $\phi(x)$ and the parameter vector $\theta$ (both of dimension $D = K + 1$) as

$$
\phi(x) = \left[ 1, x, x^2, \cdots, x^K \right]^T \in \mathbb{R}^D, \quad \theta = \left[ \theta_0, \cdots, \theta_K \right]^T \in \mathbb{R}^D. \quad \quad (2.8)
$$

Given an input $x$, instead of observing the actual function value $f(x, \theta)$, we observe a noisy version $y$,

$$
y = f(x, \theta) + \epsilon \quad \quad (2.9)
$$

where $\epsilon$ is an Gaussian random variable of zero mean and variance $\sigma^2$. Our goal is to obtain the best estimate of the function given iid samples $\mathcal{D} = \{(x_1, y_1), \dots, (x_n, y_n)\}$.

(b) Formulate the problem as one of ML estimation, i.e. write down the likelihood function $p(y | x, \theta)$, and compute the ML estimate, i.e. the value of $\theta$ that maximizes $p(y_1, \cdots, y_n | x_1, \cdots, x_n, \theta)$. Show that this is equivalent to (a).

Hint: the vector derivatives listed in Problem 2.6 might be helpful.