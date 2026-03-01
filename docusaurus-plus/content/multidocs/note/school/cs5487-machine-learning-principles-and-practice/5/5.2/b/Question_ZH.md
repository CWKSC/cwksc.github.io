---
title: Question ZH
---
**問題 5.2 核心密度估計的平均值與變異數 (Mean and variance of a kernel density estimate)**

在這個問題中，我們將研究核心密度估計量 (Kernel Density Estimate)，即分佈 $\hat{p}(x)$，的平均值與變異數。令 $X = \{x_1, \cdots, x_n\}$ 為樣本集合，且 $\tilde{k}(x)$ 為包含頻寬 (Bandwidth) 的核心函數。估計出的機率分佈為
$$ \hat{p}(x) = \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i). \quad (5.5) $$
假設核心函數 $\tilde{k}(x)$ 具有零平均值以及共變異數 (Covariance) $H$，亦即：
$$ \mathbb{E}_{\tilde{k}}[x] = \int \tilde{k}(x) x dx = 0, \quad (5.6) $$
$$ \operatorname{cov}_{\tilde{k}}(x) = \int \tilde{k}(x) (x - \mathbb{E}_{\tilde{k}}[x])(x - \mathbb{E}_{\tilde{k}}[x])^T dx = H. \quad (5.7) $$

(b) 證明分佈 $\hat{p}(x)$ 的共變異數 (Covariance) 為
$$ \hat{\Sigma} = \operatorname{cov}_{\hat{p}}(x) = H + \frac{1}{n} \sum_{i=1}^n (x_i - \hat{\mu})(x_i - \hat{\mu})^T, \quad (5.9) $$
其中等式右邊的第二項為樣本共變異數 (Sample Covariance)。