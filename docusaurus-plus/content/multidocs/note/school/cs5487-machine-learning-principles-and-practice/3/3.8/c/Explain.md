---
title: Explain
---

# Problem 3.8(c) Explanation

## Why integrate?

In Bayesian prediction, we don't just pick one "best" value of $\pi$ and predict using that (which is what we do in MLE or MAP). Instead, we consider **all possible values** of $\pi$, weighted by how likely they are given the data (the posterior).

$$
P(\text{Heads}|\text{Data}) = \int P(\text{Heads}|\pi) P(\pi|\text{Data}) d\pi
$$

If the posterior is sharp around 0.7, then values near 0.7 dominate this integral. If the posterior is broad (high uncertainty), the integral averages out the predictions from many different $\pi$'s.

## Laplace Smoothing

The result $\frac{s+1}{n+2}$ is historically famous as **Laplace's Rule of Succession**.
Imagine you see the sun rise for $n$ days in a row ($s=n$).
* MLE says probability of sun rising tomorrow is $n/n = 1$ (100% certainty). This is risky; just because it happened before doesn't logically guarantee it will happen forever.
* Bayesian estimate with uniform prior says $\frac{n+1}{n+2}$. It's very close to 1 for large $n$, but never exactly 1. It leaves a tiny probability for the "black swan" event.

## Connection to Pseudocounts

The parameters of the Beta prior, $\alpha$ and $\beta$, can be directly interpreted as **pseudocounts**.
* Uniform prior: Beta(1, 1).
  * Effective Successes $s' = s + (\alpha - 1) = s + 0$ ... Wait, the pseudocounts match the parameters $\alpha, \beta$ directly?
  * Let's check the mean of Beta($\alpha, \beta$). It is $\frac{\alpha}{\alpha+\beta}$.
  * Posterior is Beta($s+1, n-s+1$).
  * Mean is $\frac{s+1}{s+1 + n-s+1} = \frac{s+1}{n+2}$.
  * This is consistent with starting with $\alpha=1, \beta=1$.
  * "Virtual samples" count = $\alpha + \beta = 2$.
  * Virtual successes = $\alpha = 1$.
  * Virtual failures = $\beta = 1$.
  * So yes, prior accounts for 1 success and 1 failure.
