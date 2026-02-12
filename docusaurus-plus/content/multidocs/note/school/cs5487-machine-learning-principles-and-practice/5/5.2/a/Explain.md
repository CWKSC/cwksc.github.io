---
title: Explain
---

## Intuitive Explanation

The goal is to find the "center of mass" (mean) of the estimated distribution $\hat{p}(x)$.

Recall that Kernel Density Estimation (KDE) constructs the distribution by placing a small "bump" (the kernel function $\tilde{k}$) on top of each data point $x_i$. Each bump has a total probability mass of $1/n$.

1. **Individual Bumps**: Each individual kernel $\tilde{k}(x - x_i)$ is centered at $x_i$. By assumption (zero mean kernel), the mean of this individual bump is exactly $x_i$.
2. **Mixture**: The total distribution $\hat{p}(x)$ is just an average (mixture) of these $n$ bumps.
3. **Result**: The mean of a mixture of distributions is simply the weighted average of the means of the individual distributions. Since each bump has weight $1/n$ and mean $x_i$, the total mean is $\frac{1}{n} \sum x_i$, which is the sample mean.

In simpler terms: The KDE balances perfectly around the original data points. It does not shift the center of the data.
