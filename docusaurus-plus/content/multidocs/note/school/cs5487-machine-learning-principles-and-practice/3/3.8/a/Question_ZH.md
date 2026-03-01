---
title: Question ZH
---

**問題 3.8 伯努利分佈 (Bernoulli distribution) 的貝葉斯估計 (Bayesian estimation)**

在這個問題中，我們將考慮伯努利隨機變數 (Bernoulli r.v.) 的貝葉斯估計與預測。令 $x$ 為具有伯努利分佈的隨機變數，
$$p(x|\pi) = \pi^x (1 - \pi)^{1-x},$$
其中 $\pi = P(x = 1)$ 是參數。

(a) 令 $\mathcal{D} = \{x_1, \cdots, x_n\}$ 為一組樣本 (samples)，證明
$$p(\mathcal{D}|\pi) = \pi^s (1 - \pi)^{n-s},$$
其中 $s = \sum_{i=1}^n x_i$ 是樣本的總和（充分統計量，sufficient statistic）。
