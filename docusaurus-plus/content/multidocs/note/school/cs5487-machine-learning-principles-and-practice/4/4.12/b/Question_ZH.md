---
title: Question ZH
---

**Problem 4.12 Lagrange multipliers and equality constraints (拉格朗日乘子與等式約束)**

在混合模型 (mixture models) 的 EM 演算法 (EM algorithm) 的 M 步驟 (M-step) 中，我們需要透過以下最佳化問題 (optimization problem) 來計算成分先驗機率 (component prior probabilities) $\pi_j$ 的估計值，

$$
\{\hat{\pi}_j\} = \underset{\{\pi_j\}}{\text{argmax}} \sum_{j=1}^K N_j \log \pi_j, \quad \text{s.t.} \quad \sum_{j=1}^K \pi_j = 1, \quad \pi_j \ge 0,
$$ (4.47)

其中 $N_j \ge 0$。請注意，這個最佳化問題具有等式約束 (equality constraint)，即 $\{\pi_j\}$ 總和必須為 1，因為它們代表一個機率分佈 (probability distribution)。

解決帶有等式約束的最佳化問題的其中一種方法是使用 *拉格朗日乘子 (Lagrange multipliers)*。考慮以下問題，


$$
x^* = \underset{x}{\text{argmax}} \, f(x),
$$
$$
\text{s.t.} \quad g(x) = 0,
$$
(4.48)

其中 $f(x)$ 是一目標函數 (objective function)，$g(x)$ 是一約束函數 (constraint function)。讓我們來看看這些函數的兩個性質，
* 首先，梯度 (gradient) $\nabla g(x)$ 正交於 (orthogonal) 約束曲面 (constraint surface)，由於 $g(x)$ 沿著約束曲面的方向應當保持為常數 (否則它就不會是 0)。
* 第二，在最佳解 (optimum) 處，梯度 $\nabla f(x)$ 也必須正交於約束曲面。否則，我們可以沿著約束曲面移動來增加 $f(x)$ 的值。

這在以下圖形中說明：

*(圖片說明：這是一張等高線圖，顯示了目標函數 $f(x) = 1 - x_1^2 - x_2^2$ 的同心圓等位線 (level curves)。一條紅色直線代表約束函數 $g(x) = x_1 + x_2 - 1 = 0$。最佳解點 $(x_1^*, x_2^*) = (0.5, 0.5)$ 位於 $f(x)$ 的最高可能取值處且同時與約束線 $g(x)$ 相切的地方。一個指向中心的箭頭代表梯度 $\nabla f(x)$，它在最佳解點處正交於約束線。)*

因此，$\nabla f(x)$ 和 $\nabla g(x)$ 必須是平行或反平行 (parallel or anti-parallel) 的，推廣一下，


$$
\nabla f(x) + \lambda \nabla g(x) = 0,
$$
(4.49)

其中 $\lambda \neq 0$。定義 *拉格朗日函數 (Lagrangian function)*，


$$
L(x, \lambda) = f(x) + \lambda g(x).
$$
(4.50)

(4.49) 的最佳性條件 (optimality condition) 是透過設定 $\frac{\partial L}{\partial x} = 0$ 得到的。此外，設定 $\frac{\partial L}{\partial \lambda} = 0$ 可以推導出等式約束，$g(x) = 0$。因此，為了解決帶有約束的最佳化問題 (4.48)，我們建構拉格朗日函數，並透過聯立求解找出關於 $x$ 與 $\lambda$ 的駐點 (stationary point)，


$$
\frac{\partial}{\partial x} L(x, \lambda) = 0, \quad \frac{\partial}{\partial \lambda} L(x, \lambda) = 0.
$$
(4.51)

**(b)** 考慮另一個最佳化問題，


$$
\{\hat{\pi}_j\} = \underset{\{\pi_j\}}{\text{argmax}} \sum_{j=1}^K \pi_j(N_j - \log \pi_j), \quad \text{s.t.} \quad \sum_{j=1}^K \pi_j = 1, \quad \pi_j \ge 0.
$$
(4.53)

請證明其解為 $\pi_j = \frac{\exp N_j}{\sum_{k=1}^K \exp N_k}$。

關於拉格朗日乘子的更多細節可以在 Bishop 的著作 PRML 附錄 E 中找到。
