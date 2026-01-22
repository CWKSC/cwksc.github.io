---
title: Question_ZH.md
---

# 問題 2.6 多變量高斯分佈的最大似然估計 (MLE)

在這個問題中，你將推導多變量高斯分佈的最大似然估計 (ML estimate)。給定樣本 $\{x_1, \cdots, x_N\}$，

(b) 推導協方差 $\Sigma$ 的最大似然估計。

你可能會發現以下的向量和矩陣導數很有幫助：

* $\frac{\partial}{\partial x} a^T x = a$，其中向量 $x, a \in \mathbb{R}^d$。
* $\frac{\partial}{\partial x} x^T A x = Ax + A^T x$，其中向量 $x \in \mathbb{R}^d$ 且矩陣 $A \in \mathbb{R}^{d \times d}$。
* $\frac{\partial}{\partial X} \log |X| = X^{-T}$，其中 $X$ 為方陣。
* $\frac{\partial}{\partial X} \text{tr}(AX^{-1}) = \frac{\partial}{\partial X} \text{tr}(X^{-1}A) = -(X^{-T} A^T X^{-T})$，其中 $A, X$ 為矩陣。

提示：記住 $\Sigma$ 是對稱的！
