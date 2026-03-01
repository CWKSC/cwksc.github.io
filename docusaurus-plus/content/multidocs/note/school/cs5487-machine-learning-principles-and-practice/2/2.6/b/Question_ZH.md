---
title: Question ZH
---

# 問題 2.6 多變量高斯分佈的最大似然估計 (MLE for a multivariate Gaussian)

在這個問題中，你將推導多變量高斯分佈的最大似然估計 (Maximum Likelihood Estimate, MLE)。給定樣本 $\{x_1, \cdots, x_N\}$，

(b) 推導多變量高斯分佈協方差 $\Sigma$ 的最大似然估計。

你可能會發現以下向量和矩陣導數公式很有幫助：
* $\frac{\partial}{\partial x} a^T x = a$，對於向量 $x, a \in \mathbb{R}^d$。
* $\frac{\partial}{\partial x} x^T A x = A x + A^T x$，對於向量 $x \in \mathbb{R}^d$ 以及矩陣 $A \in \mathbb{R}^{d \times d}$。
* $\frac{\partial}{\partial X} \log |X| = X^{-T}$，對於方陣 $X$。
* $\frac{\partial}{\partial X} \text{tr}(A X^{-1}) = \frac{\partial}{\partial X} \text{tr}(X^{-1} A) = -(X^{-T} A^T X^{-T})$，對於矩陣 $A, X$。

提示：請記住 $\Sigma$ 是對稱矩陣 (symmetric matrix)！