---
title: Answer ZH
---

## 先修知識

* **拉格朗日乘數 (Lagrange Multipliers)**：一種用於在等式約束下尋找函數局部極大值和極小值的方法。若要在 $g(x)=0$ 的約束下最大化 $f(x)$，我們構造拉格朗日函數 $L(x, \lambda) = f(x) + \lambda g(x)$ 並設定 $\nabla L = 0$。
* **導數**：特別是 $\log(x)$ 的導數。

## 解答

我們想要最大化目標函數：
$$ f(\{\pi_j\}) = \sum_{j=1}^K N_j \log \pi_j $$

受限於約束條件：
$$ \sum_{j=1}^K \pi_j = 1 $$

我們可以將等式約束重寫為 $g(\{\pi_j\}) = \sum_{j=1}^K \pi_j - 1 = 0$。

### 步驟 1：建構拉格朗日函數

建構拉格朗日函數 $L(\{\pi_j\}, \lambda)$：
$$ L(\{\pi_j\}, \lambda) = \sum_{j=1}^K N_j \log \pi_j + \lambda \left( \sum_{j=1}^K \pi_j - 1 \right) $$

### 步驟 2：求導數並設為零

對任意 $j \in \{1, \dots, K\}$ 的 $\pi_j$ 取偏導數：

$$ \frac{\partial L}{\partial \pi_j} = \frac{\partial}{\partial \pi_j} (N_j \log \pi_j) + \frac{\partial}{\partial \pi_j} (\lambda \pi_j) $$
$$ \frac{\partial L}{\partial \pi_j} = \frac{N_j}{\pi_j} + \lambda $$

將導數設為零以尋找駐點：
$$ \frac{N_j}{\pi_j} + \lambda = 0 \implies N_j = -\lambda \pi_j \implies \pi_j = -\frac{N_j}{\lambda} $$

### 步驟 3：求解拉格朗日乘數 $\lambda$

使用約束條件 $\sum_{j=1}^K \pi_j = 1$，將 $\pi_j$ 的表達式代入：
$$ \sum_{j=1}^K \left( -\frac{N_j}{\lambda} \right) = 1 $$
$$ -\frac{1}{\lambda} \sum_{j=1}^K N_j = 1 $$

解出 $\lambda$：
$$ \lambda = -\sum_{j=1}^K N_j $$

令 $N = \sum_{k=1}^K N_k$ 表示總數。則 $\lambda = -N$。

### 步驟 4：將 $\lambda$ 代回以求 $\pi_j$

將 $\lambda = -\sum_{k=1}^K N_k$ 代回方程式 $\pi_j = -\frac{N_j}{\lambda}$：
$$ \pi_j = -\frac{N_j}{-\sum_{k=1}^K N_k} = \frac{N_j}{\sum_{k=1}^K N_k} $$

因此，我們證明了解為：
$$ \pi_j = \frac{N_j}{\sum_{k=1}^K N_k} $$
