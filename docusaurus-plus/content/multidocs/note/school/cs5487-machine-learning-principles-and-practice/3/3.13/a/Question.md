---
title: Question
---

# Problem 3.13 L1-regularized least-squares (LASSO)

In this problem we will consider a different form of regularized least-squares, which uses the L1-norm to regularize the weights (parameter vector). This is called LASSO (for "least absolute shrinkage and selection operator"), and is a widely studied regression problem. The problem setup is the same as regression problems before (e.g., the previous problem), except now we include a regularization term on the weights based on the L1-norm,

$$
\hat{\theta} = \text{argmin}_{\theta} \frac{1}{2} \|y - \Phi^T \theta\|^2 + \lambda \|\theta\|_1, \tag{3.59}
$$

where $\|\theta\|_1 = \sum_{i=1}^D |\theta_i|$ is the L1-norm, and $\lambda$ is a hyperparameter that controls its influence. The effect of the L1-norm is to force some of the weights to zero, leading to a parameter vector that is *sparse* (has few non-zero entries). For example, this could be useful for automatically selecting a subset of features from $\phi(x_i)$, or to control the complexity of a polynomial function (by forcing some weights to 0).

(a) Rewrite (3.59) as an MAP estimation problem. What is the prior distribution assumed by LASSO? Plot the Gaussian prior (from the previous problem) and the LASSO prior. How does this explain why LASSO prefers the weights to be close to zero?
