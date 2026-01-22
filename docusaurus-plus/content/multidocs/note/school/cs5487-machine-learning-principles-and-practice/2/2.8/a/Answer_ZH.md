---
title: Answer ZH
---

## 必備知識

1. **矩陣微積分 (Matrix Calculus)**：
    * $\frac{\partial}{\partial x} (Ax - b)^T (Ax - b) = 2A^T(Ax - b)$（適用於對稱內積或標準推導）。
    * $\frac{\partial}{\partial x} x^T A x = (A + A^T)x$。
2. **線性代數 (Linear Algebra)**：
    * 秩 (Rank)、反矩陣 (Inverse) 和轉置 (Transpose) 的概念。

## 逐步解答

我們希望針對 $\theta$ 最小化 $E(\theta)$。讓我們展開平方範數：

$$
\begin{aligned}
E(\theta) &= (y - \Phi^T \theta)^T (y - \Phi^T \theta) \\
&= (y^T - \theta^T \Phi) (y - \Phi^T \theta) \\
&= y^T y - y^T \Phi^T \theta - \theta^T \Phi y + \theta^T \Phi \Phi^T \theta
\end{aligned}
$$

由於 $y^T \Phi^T \theta$ 是一個純量 (Scalar)，它等於其轉置 $\theta^T \Phi y$。因此：

$$
E(\theta) = y^T y - 2 \theta^T \Phi y + \theta^T \Phi \Phi^T \theta
$$

現在，我們對 $\theta$ 取梯度 (Gradient) 並設為零：

$$
\nabla_\theta E(\theta) = -2 \Phi y + 2 \Phi \Phi^T \theta = 0
$$

*(使用恆等式：當 $A$ 為對稱矩陣時，$\nabla_x (x^T A x) = 2Ax$。在此處 $A = \Phi \Phi^T$)*

重新整理方程式後可得：

$$
\Phi \Phi^T \theta = \Phi y
$$

假設 $\Phi \Phi^T$ 可逆，我們得到正規方程 (Normal Equation)：

$$
\theta = (\Phi \Phi^T)^{-1} \Phi y
$$
"@
