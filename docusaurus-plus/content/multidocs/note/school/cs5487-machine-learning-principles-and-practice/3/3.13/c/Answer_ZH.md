---
title: Answer ZH
---

## 先決條件 (Prerequisites)
- 線性代數：區塊矩陣 (Block Matrices)
- 矩陣微積分 (Matrix Calculus)
- 二次規劃 (Quadratic Programming, QP)

## 逐步推導 (Step-by-Step Derivation)

1. **展開目標函數：**
   我們有從 (3.63) 得出的最佳化問題：
   $$ J(\theta^+, \theta^-) = \frac{1}{2} \|y - \Phi^T(\theta^+ - \theta^-)\|^2 + \lambda \sum_i (\theta^+_i + \theta^-_i) $$

   首先，我們展開平方 L2 範數項 $ \frac{1}{2} \|y - \Phi^T(\theta^+ - \theta^-)\|^2 $：
   $$ \frac{1}{2} (y - \Phi^T(\theta^+ - \theta^-))^T (y - \Phi^T(\theta^+ - \theta^-)) $$
   $$ = \frac{1}{2} y^Ty - y^T\Phi^T(\theta^+ - \theta^-) + \frac{1}{2} (\theta^+ - \theta^-)^T \Phi \Phi^T (\theta^+ - \theta^-) $$

   現在，我們用串接向量 $\mathbf{x} = \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix}$ 來表達這個式子。請注意：
   $$ \theta^+ - \theta^- = \begin{bmatrix} \mathbf{I} & -\mathbf{I} \end{bmatrix} \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix} = \begin{bmatrix} \mathbf{I} & -\mathbf{I} \end{bmatrix} \mathbf{x} $$

2. **建構二次項 $\mathbf{H}$：**
   觀察展開式中的二次項部分：
   $$ \frac{1}{2} (\mathbf{x}^T \begin{bmatrix} \mathbf{I} \\ -\mathbf{I} \end{bmatrix}) \Phi \Phi^T (\begin{bmatrix} \mathbf{I} & -\mathbf{I} \end{bmatrix} \mathbf{x}) $$
   $$ = \frac{1}{2} \mathbf{x}^T \left( \begin{bmatrix} \mathbf{I} \\ -\mathbf{I} \end{bmatrix} \Phi \Phi^T \begin{bmatrix} \mathbf{I} & -\mathbf{I} \end{bmatrix} \right) \mathbf{x} $$
   $$ = \frac{1}{2} \mathbf{x}^T \begin{bmatrix} \Phi \Phi^T & -\Phi \Phi^T \\ -\Phi \Phi^T & \Phi \Phi^T \end{bmatrix} \mathbf{x} $$
   因此，我們得出了 Hessian 矩陣 $\mathbf{H}$：
   $$ \mathbf{H} = \begin{bmatrix} \Phi\Phi^T & -\Phi\Phi^T \\ -\Phi\Phi^T & \Phi\Phi^T \end{bmatrix} $$

3. **建構線性項 $\mathbf{f}$：**
   線性部分來自平方範數的交叉項和 L1 懲罰項。
   交叉項：
   $$ - y^T\Phi^T(\theta^+ - \theta^-) = - ( \Phi y )^T (\theta^+ - \theta^-) = \begin{bmatrix} -\Phi y \\ \Phi y \end{bmatrix}^T \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix} $$
   請注意，這與 $ - \begin{bmatrix} \Phi y \\ -\Phi y \end{bmatrix}^T \mathbf{x} $ 完全吻合。
   
   正則化項：
   $$ \lambda \sum_i (\theta^+_i + \theta^-_i) = \lambda \mathbf{1}^T \theta^+ + \lambda \mathbf{1}^T \theta^- = (\lambda \begin{bmatrix} \mathbf{1} \\ \mathbf{1} \end{bmatrix})^T \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix} = (\lambda \mathbf{1}_{2D})^T \mathbf{x} $$
   
   合併這些線性部分得到 $\mathbf{f}^T \mathbf{x}$：
   $$ \mathbf{f}^T \mathbf{x} = \left( \lambda \mathbf{1} - \begin{bmatrix} \Phi y \\ -\Phi y \end{bmatrix} \right)^T \mathbf{x} $$
   這讓我們可以明確地定義出：
   $$ \mathbf{f} = \lambda \mathbf{1} - \begin{bmatrix} \Phi y \\ -\Phi y \end{bmatrix} $$

4. **最終檢查：**
   目標函數變為：
   $$ J(\mathbf{x}) = \frac{1}{2} \mathbf{x}^T \mathbf{H} \mathbf{x} + \mathbf{f}^T \mathbf{x} + \frac{1}{2}y^Ty $$
   由於 $\frac{1}{2}y^Ty$ 相對於變數 $\mathbf{x}$ 是一個常數，在最小化目標時可以將其忽略。限制條件 $\theta^+ \geq 0$ 且 $\theta^- \geq 0$ 可以精簡地寫為 $\mathbf{x} \geq 0$。
   因此，該問題完全等價於：
   $$ \min_{\mathbf{x}} \frac{1}{2} \mathbf{x}^T \mathbf{H} \mathbf{x} + \mathbf{f}^T \mathbf{x} \quad \text{s.t. } \mathbf{x} \geq 0 $$
   這剛好符合題目所要求的形式。
