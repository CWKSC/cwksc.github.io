---
title: Question
---

(c) Consider the case where we assume the prior covariance and observation noise are both i.i.d., $\Gamma = \alpha I$ and $\Sigma = \sigma^2 I$. Show that the MAP estimate under these assumptions is

$$
\hat{\theta} = (\Phi \Phi^T + \lambda I)^{-1} \Phi y, \quad (3.48)
$$

for some $\lambda \ge 0$. Show that (3.48) is also the solution to the *regularized least-squares problem*,

$$
\hat{\theta} = \operatorname*{argmin}_\theta \|y - \Phi^T \theta\|^2 + \lambda \|\theta\|^2. \quad (3.49)
$$

In various fields, this formulation is also called *ridge regression*, *Tikhonov regression*, *shrinkage* (as in shrinking the weights in the parameter vector), or *weight decay*.
