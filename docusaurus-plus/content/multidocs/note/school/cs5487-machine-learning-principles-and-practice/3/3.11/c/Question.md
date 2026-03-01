---
title: Question
---

**(c)** Consider the case where we assume the prior covariance and observation noise are both i.i.d., $\Gamma = \alpha I$ and $\Sigma = \sigma^2 I$. Show that the MAP estimate under these assumptions is

$$
\hat{\theta} = (\Phi \Phi^T + \lambda I)^{-1} \Phi y, \tag{3.48}
$$

for some $\lambda \geq 0$. Show that (3.48) is also the solution to the _regularized_ least-squares problem,

$$
\hat{\theta} = \underset{\theta}{\text{argmin}} \, \lVert y - \Phi^T \theta \rVert^2 + \lambda \lVert \theta \rVert^2. \tag{3.49}
$$

In various fields, this formulation is also called _ridge regression_, _Tikhonov regression_, _shrinkage_ (as in shrinking the weights in the parameter vector), or _weight decay_.
