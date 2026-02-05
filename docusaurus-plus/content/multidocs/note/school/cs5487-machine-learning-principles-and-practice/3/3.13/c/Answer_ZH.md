---
title: Answer ZH
---

## 逐步解答

1. **展開平方項**:
    令 $\tilde{\theta} = \theta^+ - \theta^-$。目標函數為：
    $$ J = \frac{1}{2} (y - \Phi^T \tilde{\theta})^T (y - \Phi^T \tilde{\theta}) + \lambda \sum (\theta_i^+ + \theta_i^-) $$
    $$ J = \frac{1}{2} (y^T y - 2 y^T \Phi^T \tilde{\theta} + \tilde{\theta}^T \Phi \Phi^T \tilde{\theta}) + \lambda \sum (\theta_i^+ + \theta_i^-) $$
    為了最小化，我們可以忽略常數項 $\frac{1}{2} y^T y$。

2. **替換 $\mathbf{x}$**:
    令 $\mathbf{x} = \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix}$。
    那麼 $\tilde{\theta} = \theta^+ - \theta^- = \begin{bmatrix} I & -I \end{bmatrix} \mathbf{x}$。

3. **二次部分 ($\mathbf{x}^T \mathbf{H} \mathbf{x}$)**:
    二次項是 $\frac{1}{2} \tilde{\theta}^T (\Phi \Phi^T) \tilde{\theta}$。
    代入 $\tilde{\theta}$：
    $$ \frac{1}{2} \mathbf{x}^T \begin{bmatrix} I \\ -I \end{bmatrix} (\Phi \Phi^T) \begin{bmatrix} I & -I \end{bmatrix} \mathbf{x} $$
    $$ = \frac{1}{2} \mathbf{x}^T \begin{bmatrix} \Phi \Phi^T & -\Phi \Phi^T \\ -\Phi \Phi^T & \Phi \Phi^T \end{bmatrix} \mathbf{x} $$
    因此，$\mathbf{H} = \begin{bmatrix} \Phi \Phi^T & -\Phi \Phi^T \\ -\Phi \Phi^T & \Phi \Phi^T \end{bmatrix}$。

4. **線性部分 ($\mathbf{f}^T \mathbf{x}$)**:
    我們有兩個貢獻：來自迴歸交叉項和正則化項。
    * 迴歸：$-\frac{1}{2} (2 y^T \Phi^T \tilde{\theta}) = -(\Phi y)^T \tilde{\theta}$。
        代入 $\tilde{\theta} = \theta^+ - \theta^-$：
        $-(\Phi y)^T \theta^+ + (\Phi y)^T \theta^-$。
        用 $\mathbf{x}$ 表示：$\begin{bmatrix} -(\Phi y)^T & (\Phi y)^T \end{bmatrix} \mathbf{x}$。
        所以這對 $\mathbf{f}$ 的貢獻是 $\begin{bmatrix} -\Phi y \\ \Phi y \end{bmatrix}$。
    * 正則化：$\lambda \sum (\theta_i^+ + \theta_i^-) = \lambda \mathbf{1}^T \mathbf{x}$。
        這對 $\mathbf{f}$ 的貢獻是 $\lambda \mathbf{1}$。

    加總起來：
    $$ \mathbf{f} = \lambda \mathbf{1} + \begin{bmatrix} -\Phi y \\ \Phi y \end{bmatrix} = \lambda \mathbf{1} - \begin{bmatrix} \Phi y \\ -\Phi y \end{bmatrix} $$

5. **約束**:
    $\theta^+ \ge 0$ 和 $\theta^- \ge 0$ 意味著 $\mathbf{x} \ge 0$。
