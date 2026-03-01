---
title: Explain
---

### Intuition

Now let's imagine calculating the overall "spread" or **Variance/Covariance** of all our combined sand piles (our final estimated distribution, $\hat{p}(x)$).

The Law of Total Variance hints that when we have a mixture of different distributions (the sum of our kernels), the total spread comes from two entirely independent sources that add up:

1. **The spread within the kernels (`H`):** Every individual sand pile has its own internal width or spread. This local "blurriness" introduced at each point is quantified by the inherent covariance of your chosen kernel function, $H$.
2. **The spread between the kernels (Sample Covariance):** The center points where we place the sand piles (the actual data points $x_i$) are themselves scattered all around their average $\hat{\mu}$. This macro-level scatter of the data collection is exactly the standard Sample Covariance: $\frac{1}{n} \sum (x_i - \hat{\mu})(x_i - \hat{\mu})^T$.

Because each data observation serves as a separate anchor point upon which we paste our kernel's shape, these two distinct variations layer on top of each other.

Therefore, the final variance of our modeled distribution is exactly equal to the variance originally present in the raw data **plus** the artificial variance (blurring) we added when smoothing it out with the kernel.

### Common Pitfalls

A very common beginner mistake is to assume that your KDE modeled distribution perfectly replicates the statistical properties of your sample data.

In reality, the very act of "smoothing" the data (which prevents the distribution from being just sharp spikes) strictly forces the total variance to increase. You inherently fatten the probability mass beyond the boundaries of your bare samples.
