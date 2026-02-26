---
title: Question
---

**Problem 6.2 BDR for regression**

In this problem, we will consider the Bayes decision rule for regression. Suppose we have a regression problem, where $y \in \mathbb{R}$ is the output, $x \in \mathbb{R}^d$ is the input, and we have already learned the distribution $p(y|x)$, which maps the input $x$ to a distribution of outputs $y$. The goal is to select the optimal output $y$ for a given $x$.

(b) One generalization of the squared-loss function is the Minkowski loss,
$$L_q(g(x), y) = |g(x) - y|^q. \quad (6.2)$$
Plot the loss function $L_q$ versus $(g(x) - y)$ for values of $q \in \{0.2, 1, 2, 10\}$ and $q \rightarrow 0$. Comment on the effect of using different loss functions.
