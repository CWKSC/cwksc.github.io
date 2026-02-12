---
title: Explain
---

### Explanation of KDE Mean and Bias

When we use Kernel Density Estimation (KDE), we are placing a small "bump" (the kernel function) on top of each data point we observed. Summing these bumps gives us the estimated density function.

**Step-by-Step Derivation Breakdown:**

1. **Expectation**: We want to find the "average" shape of our estimated curve if we were to repeat the experiment many times.
2. **Linearity**: Since the estimator is just an average of kernels placed at each point, the expected value of the estimator is the average of the expected value of a single kernel.
3. **Integral**: The expected value of a single kernel centered at a random data point $X$ is calculated by integrating the kernel value $\tilde{k}(x - \mu)$ weighted by the probability of the data point falling at $\mu$, which is $p(\mu)$.
4. **Convolution Result**: This integral $\int p(\mu) \tilde{k}(x - \mu) d\mu$ is mathematically a convolution.

**What does this mean visually?**

Imagine the true distribution $p(x)$ is a sharp spike.
The expected estimated distribution $\mathbb{E}[\hat{p}(x)]$ is that sharp spike **convolved** with the kernel width.
If the kernel is a Gaussian with width $h$, the expected estimate will be the true spike **blurred** by that Gaussian.

- **Bias**: The difference between the expected estimate ($smooth \ p(x)$) and the true $p(x)$.
- Because of this smoothing (convolution), sharp peaks in the true density are underestimated (flattened), and valleys are overestimated (filled in).
- This proves that KDE is inherently biased for any finite bandwidth $h > 0$. We only get the "truth" if we make the kernel infinitely narrow ($h \to 0$) and have infinite data ($n \to \infty$).
