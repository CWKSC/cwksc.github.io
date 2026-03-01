---
title: Explain
---

# Explanation (a)

## Intuition: Blurring the Truth

The core intuitive concept of Kernel Density Estimation (KDE) is replacing discrete, spiky data points into continuously smooth "bumps" (kernels). Summing these gentle bumps constructs an estimation of the underlying continuous distribution.

However, this inherently introduces a side effect. Imagine the true probability density $p(x)$ as a sharp, highly detailed mountain range. Let's think of our kernel $\tilde{k}(x)$ as a thick paintbrush or a blurry lens.

- When you do $p(x) * \tilde{k}(x)$ (a **convolution**), you are sliding that blurry lens over the true, sharp landscape.
- **Peaks** (valleys with high probabilities) tend to get flattened out.
- **Valleys** (regions with zero or low probabilities) tend to get filled in with overlapping probability mass from adjacent areas.

### What causes Bias in KDE?

The mathematical bias of an estimator is simply $\mathbb{E}[\text{Estimate}] - \text{True Value}$. If the expectation of our estimator identically hits the true value, the bias is zero.

The solution rigorously shows that $\mathbb{E}_X[\hat{p}(x)] = p(x) * \tilde{k}(x)$. Since the expected value involves convolving with the kernel $\tilde{k}$, our estimator **does not average out to the exact true density $p(x)$**. Rather, on average, KDE naturally predicts a slightly blurred, smeared version of reality.

**Conclusion:** KDE is a **biased estimator**. The bias represents "how blurred" the expected estimate is compared to the true distribution curve. The larger our kernel (e.g., larger bandwidth parameter $h$), the more aggressively we blur the details, which actively worsens our bias but gives us a much smoother curve.
