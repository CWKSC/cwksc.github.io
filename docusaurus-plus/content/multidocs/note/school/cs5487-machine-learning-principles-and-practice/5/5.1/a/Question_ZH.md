---
title: Question ZH
---

# 問題 5.1 核心密度估計的偏差與變異數 (Bias and variance of the kernel density estimator)

在這個問題中，我們將推導核心密度估計量 (kernel density estimator, KDE) 的偏差 (bias) 與變異數 (variance)。令 $X = \{x_1, \cdots, x_n\}$ 為獨立地從真實密度 $p(x)$ 中抽取出來的隨機變數 (r.v.) 樣本。

(a) 證明該估計量的平均值為

$$
\mathbb{E}_X[\hat{p}(x)] = \int p(\mu)\tilde{k}(x - \mu)d\mu = p(x) * \tilde{k}(x), \quad (5.1)
$$

其中 $*$ 是卷積卷算子 (convolution operator)。這告訴了你關於 KDE 的偏差有什麼特性？
