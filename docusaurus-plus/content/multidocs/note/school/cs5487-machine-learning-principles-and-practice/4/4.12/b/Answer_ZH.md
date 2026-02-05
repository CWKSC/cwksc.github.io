---
title: Answer ZH
---

## 先修知識

* **拉格朗日乘數 (Lagrange Multipliers)**
* **導數**：特別是乘法法則和 $x \log x$ 的導數。
  * $\frac{d}{dx} (x \log x) = 1 \cdot \log x + x \cdot \frac{1}{x} = \log x + 1$。

## 解答

我們最大化目標函數：
$$ f(\{\pi_j\}) = \sum_{j=1}^K \pi_j (N_j - \log \pi_j) = \sum_{j=1}^K ( \pi_j N_j - \pi_j \log \pi_j ) $$

受限於：
$$ \sum_{j=1}^K \pi_j = 1 $$

### 步驟 1：建構拉格朗日函數

$$ L(\{\pi_j\}, \lambda) = \sum_{j=1}^K ( \pi_j N_j - \pi_j \log \pi_j ) + \lambda \left( \sum_{j=1}^K \pi_j - 1 \right) $$

### 步驟 2：求導數並設為零

對特定的 $\pi_j$ 取偏導數：
$$ \frac{\partial L}{\partial \pi_j} = \frac{\partial}{\partial \pi_j} (\pi_j N_j) - \frac{\partial}{\partial \pi_j} (\pi_j \log \pi_j) + \frac{\partial}{\partial \pi_j} (\lambda \pi_j) $$

對 $\pi_j \log \pi_j$ 使用乘法法則：
$$ \frac{\partial}{\partial \pi_j} (\pi_j \log \pi_j) = 1 \cdot \log \pi_j + \pi_j \cdot \frac{1}{\pi_j} = \log \pi_j + 1 $$

代回原式：
$$ \frac{\partial L}{\partial \pi_j} = N_j - (\log \pi_j + 1) + \lambda $$

設為零：
$$ N_j - \log \pi_j - 1 + \lambda = 0 $$

### 步驟 3：以 $\lambda$ 表示解出 $\pi_j$

重新排列方程式以孤立 $\log \pi_j$：
$$ \log \pi_j = N_j - 1 + \lambda $$

兩邊取指數：
$$ \pi_j = \exp(N_j - 1 + \lambda) $$
$$ \pi_j = \exp(N_j) \cdot \exp(\lambda - 1) $$

### 步驟 4：解出拉格朗日乘數項

使用約束條件 $\sum \pi_j = 1$：
$$ \sum_{j=1}^K \left[ \exp(N_j) \cdot \exp(\lambda - 1) \right] = 1 $$

由於 $\exp(\lambda - 1)$ 不依賴於 $j$，我們可以將其提出：
$$ \exp(\lambda - 1) \sum_{j=1}^K \exp(N_j) = 1 $$

因此：
$$ \exp(\lambda - 1) = \frac{1}{\sum_{k=1}^K \exp(N_k)} $$

### 步驟 5：代回以求 $\pi_j$

將 $\exp(N_j)$ 乘以我們剛剛找到的因子：
$$ \pi_j = \exp(N_j) \cdot \frac{1}{\sum_{k=1}^K \exp(N_k)} $$
$$ \pi_j = \frac{\exp N_j}{\sum_{k=1}^K \exp N_k} $$
