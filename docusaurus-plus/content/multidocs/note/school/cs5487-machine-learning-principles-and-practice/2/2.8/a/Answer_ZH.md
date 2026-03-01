---
title: Answer ZH
---
### 先備知識 (Prerequisites)
* **矩陣微積分 (Matrix Calculus)**：對向量進行矩陣表達式微分的規則。
* **最小平方法回歸 (Least-Squares Regression)**：最小化誤差平方和的概念。

### 逐步推導 (Step-by-Step Derivation)

1. **定義目標函數 (Objective Function)**
   題目要求我們找出能最小化誤差平方和 (Sum-Squared-Error) 的參數向量 $\theta$，我們將此目標函數表示為 $J(\theta)$：
   $$
   J(\theta) = \| y - \Phi^T \theta \|^2
   $$

2. **展開目標函數**
   我們可以將 $L_2$ 範數 (Norm) 的平方表示為內積的形式：
   $$
   \begin{aligned}
   J(\theta) &= (y - \Phi^T \theta)^T (y - \Phi^T \theta) \\
             &= (y^T - \theta^T \Phi)(y - \Phi^T \theta) \\
             &= y^T y - y^T \Phi^T \theta - \theta^T \Phi y + \theta^T \Phi \Phi^T \theta
   \end{aligned}
   $$

3. **化簡表達式**
   請注意，$y^T \Phi^T \theta$ 是一個純量 (Scalar)（維度為 $1 \times n \cdot n \times D \cdot D \times 1 = 1 \times 1$）。純量的轉置 (Transpose) 等於其本身，因此：
   $$
   (y^T \Phi^T \theta)^T = \theta^T \Phi y
   $$
   所以，中間的兩項是相等的，目標函數可簡化為：
   $$
   J(\theta) = y^T y - 2 \theta^T \Phi y + \theta^T \Phi \Phi^T \theta
   $$

4. **對 $\theta$ 計算導數 (Derivative)**
   為了找到最小值，我們計算 $J(\theta)$ 對 $\theta$ 的梯度 (Gradient)，並將其設為零向量。使用標準的矩陣微積分恆等式：
   * $\nabla_\theta (\theta^T A) = A$
   * $\nabla_\theta (\theta^T A \theta) = (A + A^T)\theta$

   對於對稱矩陣 (Symmetric Matrix) $A = \Phi \Phi^T$，其導數 $\nabla_\theta (\theta^T (\Phi \Phi^T) \theta) = 2 \Phi \Phi^T \theta$。因此：
   $$
   \frac{\partial J(\theta)}{\partial \theta} = - 2 \Phi y + 2 \Phi \Phi^T \theta
   $$

5. **求解 $\theta$**
   將導數設為零以求得最佳的 $\theta$：
   $$
   \begin{aligned}
   - 2 \Phi y + 2 \Phi \Phi^T \theta &= 0 \\
   \Phi \Phi^T \theta &= \Phi y
   \end{aligned}
   $$
   假設 $\Phi \Phi^T$ 是可逆矩陣 (Invertible Matrix)，我們在等式兩側乘上 $(\Phi \Phi^T)^{-1}$：
   $$
   \hat{\theta}_{LS} = (\Phi \Phi^T)^{-1} \Phi y
   $$