---
title: Explain
---

## Intuition behind the EM Derivation

The Expectation-Maximization algorithm is a powerful tool used when we have "hidden" or "missing" data. In the context of a Mixture of Poissons, the "missing data" is the label for each bomb square: *Which component (target type) did this square belong to?*

If we knew for sure that square $A$ was a target ($\lambda_{high}$) and square $B$ was not ($\lambda_{low}$), we could just separate the data into two piles and compute the average ($\lambda$) for each pile separately. This is what we refer to as the standard Maximum Likelihood Estimate (MLE).

However, we don't know the labels. We only see the count of bombs.

### The E-step: Soft Assignment

Since we don't know the label, we guess probabilities. This is the **E-step**. We ask: *Given our current best guess of the rates ($\lambda_1, \lambda_2$), how likely is it that a square with $k$ bombs belongs to group 1 vs group 2?*
If a square has 5 bombs, and $\lambda_1=4, \lambda_2=0.5$, it's super likely to be from group 1. We assign it, say, 99.9% responsibility to group 1. If it has 2 bombs, maybe it's 60% group 1, 40% group 2.

### The M-step: Weighted MLE

Now we act as if these probabilities are the truth. This is the **M-step**.
To update our estimate of $\lambda_1$, we look at *all* the squares, but we listen more to the ones that we think belong to group 1.
* The formula $\lambda_j = \frac{\sum \gamma_{ij} x_i}{\sum \gamma_{ij}}$ is exactly this "Weighted Average".
* $\sum \gamma_{ij} x_i$ sums up the bomb counts, but multiplied by how confident we are that they belong to group $j$.
* $\sum \gamma_{ij}$ is the "effective total count" of squares in group $j$.

So, the M-step is mathematically identical to the standard Poisson MLE (Total Bombs / Total Squares), but generalized to fractional (probabilistic) memberships.
