---
title: Question
---

(e) Given a novel input $x_*$, show that the predictive distribution of $f_* = f(x_*, \theta)$ is

$$
p(f_* | x_*, \mathcal{D}) = \mathcal{N}(f_* | \hat{\mu}_*, \hat{\sigma}_*^2), \quad (3.50)
$$

$$
\hat{\mu}_* = \phi(x_*)^T \hat{\mu}_\theta, \quad (3.51)
$$

$$
\hat{\sigma}_*^2 = \phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*). \quad (3.52)
$$

(Hint: see Problem 1.1). Assuming the same observation noise $\sigma^2$ as the training set, show that the predictive distribution of $y_*$ is

$$
p(y_* | x_*, \mathcal{D}) = \int p(y_* | x_*, \theta) p(\theta | \mathcal{D}) d\theta = \mathcal{N}(y_* | \hat{\mu}_*, \sigma^2 + \hat{\sigma}_*^2). \quad (3.53)
$$

Hint: note that $p(y_*|x_*, \theta)$ only depends on $\theta$ through $f_* = \phi(x_*)^T \theta$. Hence, we can rewrite the integral over $\theta$ with an integral over $f_*$, while replacing $p(\theta|\mathcal{D})$ with $p(f_*|\mathcal{D})$.

This is the linear version of Gaussian process regression. We will see how to derive the nonlinear (kernel) version in a later problem set.
