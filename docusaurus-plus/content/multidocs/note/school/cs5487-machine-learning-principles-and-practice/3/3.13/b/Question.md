---
title: Question
---

**Problem 3.13 L1-regularized least-squares (LASSO) continued**

There is no closed-form solution to (3.59), and hence an iterative method is needed to perform the optimization. Next, we will rewrite (3.59) into an equivalent *quadratic programming* (QP) problem, which can be plugged into a standard solver (e.g., `quadprog` in MATLAB).

(b) First, we rewrite $\theta$ as a difference between two vectors with positive entries.

$$ \theta = \theta^+ - \theta^-, \qquad (3.60) $$
$$ \theta^+ \geq 0, \quad \theta^- \geq 0. \qquad (3.61) $$

The original optimization problem (3.59) can now be rewritten as

$$ \hat{\theta} = \operatorname*{argmin}_{\theta^+, \theta^-} \frac{1}{2} \|y - \Phi^T(\theta^+ - \theta^-)\|^2 + \lambda \sum_i |\theta^+_i - \theta^-_i|, \qquad (3.62) $$
$$ \text{s.t. } \theta^+ \geq 0, \; \theta^- \geq 0. $$

Using a bit of optimization theory "magic", we can rewrite (3.62) as

$$ \hat{\theta} = \operatorname*{argmin}_{\theta^+, \theta^-} \frac{1}{2} \|y - \Phi^T(\theta^+ - \theta^-)\|^2 + \lambda \sum_i (\theta^+_i + \theta^-_i), \qquad (3.63) $$
$$ \text{s.t. } \theta^+ \geq 0, \; \theta^- \geq 0. $$

Why is the optimization problem in (3.63) equivalent to that of (3.62)? Hint: at the optimum, what can we say about the values of the pair $\{\theta^+_i, \theta^-_i\}$?
