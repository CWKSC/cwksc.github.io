---
title: Explain
---

# Explanation (b)

## Intuition

The Upper Bound on the Variance formula, $\frac{1}{nh^d}\max_x(k(x))\mathbb{E}[\hat{p}(x)]$, looks mathematically heavy but gives us incredible intuition into how a Kernel Density Estimator (KDE) behaves and makes errors in the real world.

The Variance tells us how "wobbly" or unstable our density curve estimation $\hat{p}(x)$ is. If we pull two different random sample sets and the curves look vastly different, the variance is high.

Let's break down the bound geometrically:

1.  **More Data is Better ($n$)**
    *   The term $n$ sits directly in the denominator.
    *   As your sample size $n \to \infty$, the bound on variance collapses to zero.
    *   **Meaning**: The more data points you have, the more stable and reliable your curve becomes.

2.  **The Bandwidth Trade-off ($h^d$)**
    *   The term $h^d$ ($d$ is the dimension) is in the denominator.
    *   If you make your bandwidth $h$ very small (a very narrow, spiky kernel), $h^d$ becomes tiny. Since it's in the denominator, the variance shoots up to infinity.
    *   **Meaning**: If your smoothing window is too narrow, your curve turns into a wild, noisy rollercoaster reacting strongly to the exact position of every individual data point. This confirms the classic bias-variance tradeoff: minimizing $h$ reduces Bias (from part a) but wildly inflates Variance.

3.  **Variance Scales with Density ($\mathbb{E}[\hat{p}(x)]$)**
    *   Notice that the variance is proportional to $\mathbb{E}[\hat{p}(x)]$ itself.
    *   **Meaning**: Where the density is high (e.g., at the peak of the mountain), you expect the absolute fluctuation ($\text{var}$) to be larger. Conversely, down in the tails of the distribution where there is very little probability mass, the absolute fluctuation of the curve is extremely small.
