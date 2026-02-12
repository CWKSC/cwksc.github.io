---
title: Explain
---

## Intuitive Explanation

The result shows that the variance of the KDE model ($\hat{\Sigma}$) is the sum of two components:

1. **Sample Covariance** ($\frac{1}{n} \sum (x_i - \hat{\mu})(x_i - \hat{\mu})^T$): This represents the inherent "width" or spread of the original data points $X$.
2. **Kernel Covariance** ($H$): This represents the "added width" introduced by the smoothing kernel.

When we create a kernel density estimate, we are taking the original data distribution (represented by point masses) and "blurring" it by convolving with a kernel of width $H$. This blurring process naturally spreads out the probability mass, increasing the total variance.

The variance of the estimate is *inflated* by $H$ compared to the raw sample variance. This makes sense: by smoothing the data, we make the distribution wider.
