---
title: Answer
---
### Prerequisites
- Kernel Density Estimation (KDE)
- Bias-Variance Tradeoff
- Properties of Moments in Statistics

### Description

From the derivations in parts (a) and (b), we identified two main moments of the geometric estimate $\hat{p}(x)$:
1. The mean of the estimated distribution perfectly matches the empirical mean of the sample data.
2. The covariance of the estimated distribution $\hat{\Sigma}$ equals the sample empirical covariance **plus** $H$ (the internal covariance/bandwidth of the kernel function itself).

#### 1. Properties of the Kernel Density Estimate $\hat{p}(x)$
This mathematical fact physically tells us that the Kernel Density Estimate exhibits **Over-smoothing / Dispersion**.
Because $H$ is a positive semi-definite covariance matrix, $\hat{\Sigma} > \text{Sample Covariance}$. The resulting probability distribution $\hat{p}(x)$ is consistently wider and more dispersed than the empirical distribution formed strictly by the sample points $x_1, \dots, x_n$. The kernel injects its own "structural spread" into the final representation of the data.

#### 2. Relation to the Bias of the Kernel Density Estimator
In density estimation, **Bias** measures how far the expected value of our estimator $\mathbb{E}[\hat{p}(x)]$ is from the true underlying distribution $p(x)$ that generated the data. 

Because we add $H$ to the variance:
- **High $H$ (Large Bandwidth):** The kernel strongly smooths the data. Sharp peaks in the true probability distribution are artificially flattened, and deep valleys are lifted. By making the distribution wider, we systematically miss the localized features of the true density. This structural, systematic misrepresentation is precisely what constitutes a **large bias**. We are confidently modeling the wrong, overly-flattened shape.
- **Low $H$ (Small Bandwidth):** As $H \rightarrow 0$, the additional variance penalty shrinks, keeping local details intact (reducing the bias). However, this makes the density estimate overly sensitive to the exact locations of individual data points, causing extreme spikiness and leading to a high variance in the estimator itself.

Therefore, the presence of the $+ H$ term in the modeled covariance perfectly characterizes the fundamental **smoothing bias** of KDE. The magnitude of this bias directly scales with the size of the kernel bandwidth $H$.