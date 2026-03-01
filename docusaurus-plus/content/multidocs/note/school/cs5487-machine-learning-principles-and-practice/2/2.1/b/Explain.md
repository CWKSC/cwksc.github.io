---
title: Explain
---

### Intuition

**Unbiased Estimator:**
When an estimator is **unbiased**, it means that if we could repeatedly sample data and compute the estimator, our guesses would "on average" be exactly right. We wouldn't consistently over-estimate or under-estimate the true parameter. 

If we have one cell, the expected number of hits is $\lambda$. If we have 576 cells, the expected total hits is $576\lambda$. Dividing by 576, the average remains exactly $\lambda$. Because we just sum up the raw counts without distorting them and perfectly average them, our guess isn't artificially skewed higher or lower.

**Estimator Variance:**
The term $\frac{\lambda}{N}$ tells us about the **precision** of our estimate. 

Imagine you are trying to guess how many cars pass an intersection per minute. 
- If you only count for $1$ minute (low $N$), your guess might be drastically wrong because car traffic fluctuates wildly. 
- But if you count for $1000$ minutes (high $N$) and average the rate, your confidence in the average rate becomes much tighter and less prone to random flukes.

The variance $\frac{\lambda}{N}$ mathematically proves this: As your sample size $N$ (the number of grids or cells observed) grows larger, the variance of your estimate shrinks towards zero. With an infinitely large sample size, you would know the parameter $\lambda$ perfectly. 

This relates to a fundamental concept in statistics known as the **Law of Large Numbers**.