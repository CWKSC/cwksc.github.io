---
title: Question ZH
---

**問題 3.13 L1 正則化最小平方法 (LASSO) 續**

(c) 最後，定義 $\mathbf{x} = \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix}$。證明 (3.63) 可以重寫為二次規劃 (Quadratic Program) 的標準形式，

$$ \min\_{\mathbf{x}} \frac{1}{2} \mathbf{x}^T \mathbf{H} \mathbf{x} + \mathbf{f}^T \mathbf{x} \qquad (3.64) $$
$$ \text{s.t. } \mathbf{x} \geq 0. $$

其中

$$ \mathbf{H} = \begin{bmatrix} \Phi\Phi^T & -\Phi\Phi^T \\ -\Phi\Phi^T & \Phi\Phi^T \end{bmatrix}, \quad \mathbf{f} = \lambda \mathbf{1} - \begin{bmatrix} \Phi y \\ -\Phi y \end{bmatrix}, \qquad (3.65) $$

且 $\mathbf{1}$ 是全1的向量。現在我們可以使用標準的 QP 求解器！

註：有許多客製化的演算法可用於估計 LASSO 的權重，但這也許是最容易實現的，因為我們可以直接在 MATLAB 中使用 `quadprog`。
