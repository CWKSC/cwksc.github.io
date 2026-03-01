---
title: Question ZH
---

# 問題 5.1 核心密度估計的偏差與變異數 (Bias and variance of the kernel density estimator)

在這個問題中，我們將推導核心密度估計量 (kernel density estimator, KDE) 的偏差 (bias) 與變異數 (variance)。令 $X = \{x_1, \cdots, x_n\}$ 為獨立地從真實密度 $p(x)$ 中抽取出來的隨機變數 (r.v.) 樣本。

(b) 證明該估計量的變異數 (variance) 其上界可以表示為：
$$
\mathrm{var}_X(\hat{p}(x)) \le \frac{1}{nh^d}\max_x(k(x))\mathbb{E}[\hat{p}(x)]. \quad (5.2)
$$

提示 (Hint)：以下性質會有所幫助：
$$
\mathrm{var}(x) = \mathbb{E}[x^2] - (\mathbb{E}[x])^2 \le \mathbb{E}[x^2], \quad (5.3)
$$
$$
k\left(\frac{x - x_i}{h}\right) \le \max_x k(x), \quad (5.4)
$$
以及 Problem 1.4。
