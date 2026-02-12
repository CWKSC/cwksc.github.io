---
title: Question ZH
---

## 問題 5.2 核密度估計值的平均數與變異數

在這個問題中，我們將研究核密度*估計值（estimate）*的平均數與變異數，即分佈 $\hat{p}(x)$。設 $X = \{x_1, \dots, x_n\}$ 為樣本集合，$\tilde{k}(x)$ 為包含頻寬（bandwidth）的核函數。估計的機率分佈為

$$
\hat{p}(x) = \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i). \tag{5.5}
$$

假設核函數 $\tilde{k}(x)$ 具有零平均數和共變異數 $H$，即

$$
\mathbb{E}_{\tilde{k}}[x] = \int \tilde{k}(x) x dx = 0, \tag{5.6}
$$

$$
\text{cov}_{\tilde{k}}(x) = \int \tilde{k}(x)(x - \mathbb{E}_{\tilde{k}}[x])(x - \mathbb{E}_{\tilde{k}}[x])^T dx = H. \tag{5.7}
$$

(a) 證明分佈 $\hat{p}(x)$ 的平均數是 $X$ 的樣本平均數，

$$
\hat{\mu} = \mathbb{E}_{\hat{p}}[x] = \int \hat{p}(x)x dx = \frac{1}{n} \sum_{i=1}^n x_i. \tag{5.8}
$$
