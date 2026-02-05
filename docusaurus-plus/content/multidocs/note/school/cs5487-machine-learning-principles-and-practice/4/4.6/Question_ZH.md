---
title: Question ZH
---

## 問題 4.6 指數混合模型

考慮一個指數密度的混合模型，

$$
p(x) = \sum_{j=1}^K \pi_j p(x|j), \quad p(x|j) = \lambda_j e^{-\lambda_j x}.
$$

其中 $\lambda_j > 0$ 是第 $j$ 個分量的參數。給定一組樣本 $\{x_1, \dots, x_n\}$，推導 EM 演算法以估計參數 $\theta = \{\pi_j, \lambda_j\}_{j=1}^K$。
