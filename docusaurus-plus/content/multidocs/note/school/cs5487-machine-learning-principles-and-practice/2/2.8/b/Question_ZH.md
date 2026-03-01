---
title: Question ZH
---

**問題 2.8 最小平方法回歸與最大概似估計 (Least-squares regression and MLE)**

在這個問題中，我們將探討線性回歸 (Linear Regression) 的議題，以及最大概似估計 (Maximum Likelihood Estimation) 與最小平方解 (Least Squares Solutions) 之間的關聯。考慮 $x \in \mathbb{R}$ 的多項式函數，

$$
f(x, \theta) = \sum_{k=0}^K x^k \theta_k = \phi(x)^T \theta \quad \quad (2.7)
$$

其中我們定義特徵轉換 (Feature Transformation) $\phi(x)$ 以及參數向量 $\theta$（兩者的維度皆為 $D = K + 1$）為：

$$
\phi(x) = \left[ 1, x, x^2, \cdots, x^K \right]^T \in \mathbb{R}^D, \quad \theta = \left[ \theta_0, \cdots, \theta_K \right]^T \in \mathbb{R}^D. \quad \quad (2.8)
$$

給定一個輸入 $x$，我們並非觀察到實際的函數值 $f(x, \theta)$，而是觀察到包含雜訊的版本 $y$，

$$
y = f(x, \theta) + \epsilon \quad \quad (2.9)
$$

其中 $\epsilon$ 是一個具有零平均值 (Zero Mean) 和變異數 (Variance) $\sigma^2$ 的高斯隨機變數 (Gaussian Random Variable)。我們的目標是在給定獨立同分布 (i.i.d.) 的樣本 $\mathcal{D} = \{(x_1, y_1), \dots, (x_n, y_n)\}$ 的情況下，獲得該函數的最佳估計。

(b) 將此問題公式化為最大概似估計 (ML estimation) 問題，也就是寫下概似函數 (Likelihood Function) $p(y | x, \theta)$，並計算最大概似估計值 (ML estimate)，即能最大化 $p(y_1, \cdots, y_n | x_1, \cdots, x_n, \theta)$ 的 $\theta$ 值。請證明此結果與 (a) 的結果等價。

提示 (Hint)：問題 2.6 中列出的向量導數可能會有所幫助。
