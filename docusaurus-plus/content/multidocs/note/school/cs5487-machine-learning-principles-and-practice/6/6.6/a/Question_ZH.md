---
title: Question ZH
---

**問題 6.6 具有共同協方差的高斯分類器**

在這個問題中，我們將推導具有共同協方差的高斯分類器的貝葉斯決策規則 (BDR)，並解釋由此產生的決策邊界。假設 $y \in \{1, \dots, C\}$ 為類別，其先驗機率為 $p(y = j) = \pi_j$，$x \in \mathbb{R}^d$ 為測量值，其類別條件密度為具有共享協方差的高斯分佈，$p(x|y = j) = \mathcal{N}(x|\mu_j, \Sigma)$。

(a) 證明使用 0-1 損失函數的 BDR 為：
$$g(x)^* = \text{argmax}_j g_j(x), \quad (6.16)$$
其中每個類別的 $g_j(x)$ 是 $x$ 的線性函數，
$$g_j(x) = w_j^T x + b_j, \quad (6.17)$$
$$w_j = \Sigma^{-1} \mu_j, \quad b_j = -\frac{1}{2} \mu_j^T \Sigma^{-1} \mu_j + \log \pi_j. \quad (6.18)$$
