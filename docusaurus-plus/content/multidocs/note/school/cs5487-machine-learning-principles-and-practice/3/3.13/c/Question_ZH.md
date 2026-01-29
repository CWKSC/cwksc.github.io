---
title: Question ZH
---

(c) 最後，定義 $\mathbf{x} = \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix}$。證明 (3.63) 可以寫成二次規劃的標準形式，

$$
\min_{\mathbf{x}} \frac{1}{2} \mathbf{x}^T \mathbf{H} \mathbf{x} + \mathbf{f}^T \mathbf{x} \tag{3.64}
$$
$$
\text{s.t. } \mathbf{x} \ge 0.
$$

其中
$$
\mathbf{H} = \begin{bmatrix} \Phi \Phi^T & -\Phi \Phi^T \\ -\Phi \Phi^T & \Phi \Phi^T \end{bmatrix}, \quad \mathbf{f} = \lambda \mathbf{1} - \begin{bmatrix} \Phi y \\ -\Phi y \end{bmatrix}, \tag{3.65}
$$
並且 $\mathbf{1}$ 是全 1 向量。現在我們可以使用標準的 QP 求解器了！

注意：有很多專門的算法可以用來估計 LASSO 的權重，但這可能是最容易實現的，因為我們可以使用 MATLAB 中的 `quadprog`。
