---
title: Question ZH
---

**問題 4.6 指數混合模型 (Mixture of exponentials)**

考慮一個指數密度 (exponential densities) 的混合模型：

$$p(x) = \sum_{j=1}^K \pi_j p(x|j), \quad p(x|j) = \lambda_j e^{-\lambda_j x}. \quad (4.10)$$

其中 $\lambda_j > 0$ 是第 $j$ 個成分 (component) 的參數。給定一組樣本 $\{x_1, \cdots, x_n\}$，推導期望最大化演算法 (EM algorithm) 來估計參數 $\theta = \{\pi_j, \lambda_j\}_{j=1}^K$。
