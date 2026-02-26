---
title: Question
---

**Problem 6.2 BDR for regression**

In this problem, we will consider the Bayes decision rule for regression. Suppose we have a regression problem, where $y \in \mathbb{R}$ is the output, $x \in \mathbb{R}^d$ is the input, and we have already learned the distribution $p(y|x)$, which maps the input $x$ to a distribution of outputs $y$. The goal is to select the optimal output $y$ for a given $x$.

(a) Consider the squared-loss function, $L(g(x), y) = (g(x) - y)^2$. Show that the BDR is to decide the conditional mean of $p(y|x)$, or $g^*(x) = \mathbb{E}[y|x]$. In other words, show that $g^*(x)$ minimizes the conditional risk $R(x) = \int L(g(x), y) p(y|x) dy$.
