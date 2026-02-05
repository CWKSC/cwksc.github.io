---
title: Question ZH
---

## 問題 4.12 拉格朗日乘數與等式約束

在混合模型的 EM 演算法的 M 步驟中，我們需要透過以下的最佳化問題計算組件先驗機率 $\pi_j$ 的估計值，

$$
\{\hat{\pi}_j\} = \underset{\{\pi_j\}}{\text{argmax}} \sum_{j=1}^K N_j \log \pi_j, \quad \text{s.t.} \sum_{j=1}^K \pi_j = 1, \quad \pi_j \ge 0, \quad (4.47)
$$

其中 $N_j \ge 0$。注意這個最佳化問題有一個等式約束，即 $\{\pi_j\}$ 的總和必須為 1，因為它們代表一個機率分佈。

解決具有等式約束的最佳化問題的一種方法是使用 *拉格朗日乘數 (Lagrange multipliers)*。考慮以下問題，

$$
x^* = \underset{x}{\text{argmax}} f(x),
$$

$$
\text{s.t.} \quad g(x) = 0, \quad (4.48)
$$

其中 $f(x)$ 是目標函數，而 $g(x)$ 是約束函數。

為了解決這個受約束的最佳化問題 (4.48)，我們構成拉格朗日函數，並找出對於 $x$ 和 $\lambda$ 的駐點 (stationary point)，透過同時求解：

$$
\frac{\partial}{\partial x} L(x, \lambda) = 0, \quad \frac{\partial}{\partial \lambda} L(x, \lambda) = 0. \quad (4.51)
$$

(a) 使用拉格朗日乘數來最佳化 (4.47)，並證明其解為

$$
\pi_j = \frac{N_j}{\sum_{k=1}^K N_k}. \quad (4.52)
$$
