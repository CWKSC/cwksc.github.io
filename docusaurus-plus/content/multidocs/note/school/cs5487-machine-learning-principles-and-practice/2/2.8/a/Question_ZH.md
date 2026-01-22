---
title: Question ZH
---

在這個問題中，我們將探討線性迴歸 (Linear Regression) 議題，以及最大概似估計 (Maximum Likelihood) 與最小平方法 (Least Squares) 解之間的關聯。考慮 $x \in \mathbb{R}$ 的多項式函數：

$$
f(x, \theta) = \sum_{k=0}^K x^k \theta_k = \phi(x)^T \theta \quad (2.7)
$$

其中我們定義特徵轉換 $\phi(x)$ 和參數向量 $\theta$（兩者的維度均為 $D=K+1$）為：

$$
\phi(x) = [1, x, x^2, \cdots, x^K]^T \in \mathbb{R}^D, \quad \theta = [\theta_0, \cdots, \theta_K]^T \in \mathbb{R}^D. \quad (2.8)
$$

給定輸入 $x$，我們觀察到的不是實際函數值 $f(x, \theta)$，而是一個帶有雜訊的版本 $y$：

$$
y = f(x, \theta) + \epsilon, \quad (2.9)
$$

其中 $\epsilon$ 是一個平均值為零且變異數為 $\sigma^2$ 的高斯隨機變數。我們的目標是在給定獨立同分佈 (i.i.d) 樣本 $\mathcal{D} = \{(x_1, y_1), \dots, (x_n, y_n)\}$ 的情況下，獲得該函數的最佳估計。

(a) 將此問題公式化為最小平方法 (Least Squares) 問題，即定義：

$$
y = \begin{bmatrix} y_1 \\ \vdots \\ y_n \end{bmatrix}, \quad \Phi = [\phi(x_1), \cdots, \phi(x_n)] = \begin{bmatrix} 1 & \cdots & 1 \\ x_1^1 & & x_n^1 \\ \vdots & & \vdots \\ x_1^K & \cdots & x_n^K \end{bmatrix} \quad (2.10)
$$

並找出能最小化平方誤差和 (Sum-Squared-Error) 的 $\theta$ 值：

$$
\sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2 = \|y - \Phi^T \theta\|^2. \quad (2.11)
$$
