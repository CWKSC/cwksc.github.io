---
title: Question ZH
---

**問題 6.2 迴歸的貝氏決策規則 (BDR)**

在這個問題中，我們將探討用於迴歸的貝氏決策規則。假設我們有一個迴歸問題，其中 $y \in \mathbb{R}$ 是輸出，$x \in \mathbb{R}^d$ 是輸入，並且我們已經學習了分佈 $p(y|x)$，它將輸入 $x$ 映射到輸出 $y$ 的分佈。目標是為給定的 $x$ 選擇最佳的輸出 $y$。

(a) 考慮平方損失函數 (squared-loss function)，$L(g(x), y) = (g(x) - y)^2$。證明 BDR 是決定 $p(y|x)$ 的條件期望值 (conditional mean)，即 $g^*(x) = \mathbb{E}[y|x]$。換句話說，證明 $g^*(x)$ 最小化了條件風險 $R(x) = \int L(g(x), y) p(y|x) dy$。
