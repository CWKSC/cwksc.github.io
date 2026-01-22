---
title: Question
---

In this problem we will consider the issue of linear regression and the connections between maximum likelihood and least squares solutions. Consider the polynomial function of $x \in \mathbb{R}$,

$$
f(x, \theta) = \sum_{k=0}^K x^k \theta_k = \phi(x)^T \theta \quad (2.7)
$$

where we define the feature transformation $\phi(x)$ and the parameter vector $\theta$ (both of dimension $D=K+1$) as

$$
\phi(x) = [1, x, x^2, \cdots, x^K]^T \in \mathbb{R}^D, \quad \theta = [\theta_0, \cdots, \theta_K]^T \in \mathbb{R}^D. \quad (2.8)
$$

Given an input $x$, instead of observing the actual function value $f(x, \theta)$, we observe a noisy version $y$,

$$
y = f(x, \theta) + \epsilon, \quad (2.9)
$$

where $\epsilon$ is an Gaussian random variable of zero mean and variance $\sigma^2$. Our goal is to obtain the best estimate of the function given iid samples $\mathcal{D} = \{(x_1, y_1), \dots, (x_n, y_n)\}$.

(a) Formulate the problem as one of least squares, i.e define

$$
y = \begin{bmatrix} y_1 \\ \vdots \\ y_n \end{bmatrix}, \quad \Phi = [\phi(x_1), \cdots, \phi(x_n)] = \begin{bmatrix} 1 & \cdots & 1 \\ x_1^1 & & x_n^1 \\ \vdots & & \vdots \\ x_1^K & \cdots & x_n^K \end{bmatrix} \quad (2.10)
$$

and find the value of $\theta$ that minimizes the sum-squared-error,

$$
\sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2 = \|y - \Phi^T \theta\|^2. \quad (2.11)
$$
