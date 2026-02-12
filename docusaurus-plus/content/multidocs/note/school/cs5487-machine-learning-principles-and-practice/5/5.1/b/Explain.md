---
title: Explain
---

### Explanation of KDE Variance Bound

The variance of an estimator tells us how much the estimate fluctuates around its average value across different random datasets.

**Key Insight from the Derivation:**

$$ \text{var}(\hat{p}(x)) \le \frac{C}{nh^d} $$

where $C$ depends on the kernel maximum and the density itself.

1. **$1/n$ factor**: As we get more data points ($n$ increases), the variance decreases. This is standard for most statistical estimators; more data means more stability.
2. **$1/h^d$ factor**: As the bandwidth $h$ gets smaller, the variance **increases**.
    * Think of it this way: if $h$ is very tiny, the density estimate at $x$ depends only on data points falling extremely close to $x$. This is a rare event, so the count will fluctuate wildly (0, 1, or 2 points) between different datasets, leading to high variance.
    * If $h$ is large, we average over a large region, stabilizing the count and reducing variance.

**Bias-Variance Tradeoff:**

* **Part (a) (Bias)**: Small $h$ reduces bias (less smoothing).
* **Part (b) (Variance)**: Small $h$ increases variance (noisier).

This implies we need to tune $h$ carefully. We want $h \to 0$ as $n \to \infty$ to eliminate bias, but we need $nh^d \to \infty$ to eliminate variance. This means $h$ must shrink, but not too fast relative to the sample size $n$.
