---
title: Answer
---

## Step-by-Step Answer

1. **Properties of $\hat{p}(x)$ deduced from (b):**
    The result $\hat{\Sigma} = S + H$ (where $S$ is sample covariance) tells us that the Kernel Density Estimate always has a **larger variance** than the underlying sample data. The KDE "over-smooths" or spreads out the data. The amount of extra spread is exactly determined by the bandwidth matrix $H$.

2. **Relation to Bias:**
    Bias in density estimation refers to $\mathbb{E}[\hat{p}(x)] - p(x)$ (where the expectation is over datasets).
    However, the question likely refers to the "bias" in the variance estimate or the smoothing bias.
    Because the variance is inflated by $H$, the estimate is "biased" towards being flatter and wider than the true distribution (assuming the sample covariance is a good estimate of the true covariance).

    Specifically, if the true distribution $p(x)$ has covariance $\Sigma$, and $S \approx \Sigma$, then $\text{cov}_{\hat{p}}(x) \approx \Sigma + H$.
    * If $H$ is large (large bandwidth), the variance is much larger than the true variance (high bias, low variance of the estimator itself).
    * If $H$ is small, we approach the sample variance (low bias, high variance of the estimator).

    The term $H$ represents the **smoothing bias** introduced to obtain a continuous density. This smoothing reduces the variance of the *estimated density function values* at the cost of biasing the *structure* (moments) of the distribution, specifically inflating the second moment.

    In the context of the *estimator of the mean*, it is unbiased (as seen in part a).
    In the context of the *covariance*, it is biased upwards by $H$.
