---
title: Explain
---
## Intuition

When we have a collection of independent events (like flipping the same coin multiple times), the chance of all those specific outcomes happening exactly as they did is just the product of their individual chances.

Think about a coin flip where the probability of heads ($x=1$) is $\pi$, and the probability of tails ($x=0$) is $(1-\pi)$.

If you flip the coin $n$ times, and get $s$ heads, it means you must have gotten $n - s$ tails.

Since each flip is independent, the probability of getting exactly that sequence of heads and tails is simply $\pi$ multiplied by itself $s$ times, and $(1-\pi)$ multiplied by itself $n-s$ times. 

This gives us $\pi^s (1-\pi)^{n-s}$. The sum $s$ perfectly summarizes everything we need to know from the data to estimate $\pi$; we don't need to know the exact order of heads and tails, just the total count. This makes $s$ a "sufficient statistic".
