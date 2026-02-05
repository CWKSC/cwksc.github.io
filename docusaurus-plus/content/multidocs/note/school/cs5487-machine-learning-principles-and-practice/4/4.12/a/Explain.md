---
title: Explain
---

## Explanation

Ideally, we would just maximize $\sum N_j \log \pi_j$ independently for each $\pi_j$. However, we have a **constraint**. We are modeling probabilities, so the sum of all $\pi_j$ must be exactly 1. If we simply increased one $\pi_j$ to maximize the log-likelihood without penalty, we might break this rule (e.g., they might sum to more than 1).

The **Lagrange Multiplier** method introduces a new variable $\lambda$ (lambda) to enforce this "sum-to-1" rule.

1. **Recall the formula**: The Log Probability of a multinomial distribution involves terms like $\sum N_j \log \pi_j$.
2. **The Gradient**: We want to follow the slope (gradient) of this function to find the top (maximum).
3. **The Penalty**: The term $\lambda (\sum \pi_j - 1)$ acts as a balancing force.
    * When we take the derivative w.r.t $\pi_j$, we get $N_j/\pi_j + \lambda = 0$.
    * This implies $\pi_j$ is proportional to $N_j$ (specifically $\pi_j = -N_j / \lambda$).
4. **Normalization**: Since all $\pi_j$ must sum to 1, and each $\pi_j$ is proportional to $N_j$, the constant of proportionality must ensure the sum is 1.
    * Sum of parts = Sum of $N_j$.
    * Therefore, each part $\pi_j$ is simply its observed count $N_j$ divided by the total count $\sum N_k$.

This result is intuitive: the Maximum Likelihood Estimate (MLE) for the probability of a category is just the fraction of times that category was observed ($N_j$) out of the total observations ($\sum N_k$).
