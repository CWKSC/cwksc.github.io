---
title: Explain
---

## Intuitive Explanation

The result $\hat{\Sigma} = S_{\text{sample}} + H$ tells us something fundamental about smoothing:

**Smoothing always adds variance.**

Think of the data points as sharp spikes (zero width, zero variance around the point). The sample covariance $S$ measures how far these spikes are from the center.
When we replace each spike with a kernel of width $H$, we are essentially adding stochastic noise to each data point. It's like adding a random variable $\epsilon \sim \mathcal{N}(0, H)$ to each sample $x_i$.

The variance of the sum of independent variables is the sum of their variances:
$\text{Var}(X + \epsilon) = \text{Var}(X) + \text{Var}(\epsilon) = S + H$.

**Relation to Bias:**
This inflation of variance is a form of systematic error (bias).
* **True Variance**: $\Sigma$
* **Estimated Variance**: $\Sigma + H$

The estimator systematically *overestimates* the spread of the distribution. This is the price we pay for making the distribution smooth. If we want a very smooth curve (large $H$), we must accept that our estimated distribution will be much wider (more biased variance) than the true distribution. This illustrates the **bias-variance tradeoff** in KDE: larger bandwidth reduces the variance of the density estimat*or* (the curve doesn't change much with different samples) but increases the bias of the density estimat*e* (the curve is too simple/wide).
