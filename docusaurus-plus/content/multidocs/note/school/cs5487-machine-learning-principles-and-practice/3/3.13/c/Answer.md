---
title: Answer
---

## Prerequisites
- Linear Algebra (Block Matrices)
- Matrix Calculus
- Quadratic Programming (QP)

## Step-by-Step Derivation

1. **Expanding the Objective Function:**
   We are given the optimization problem from (3.63):
   $$ J(\theta^+, \theta^-) = \frac{1}{2} \|y - \Phi^T(\theta^+ - \theta^-)\|^2 + \lambda \sum_i (\theta^+_i + \theta^-_i) $$

   First, let's expand the squared L2-norm term $ \frac{1}{2} \|y - \Phi^T(\theta^+ - \theta^-)\|^2 $:
   $$ \frac{1}{2} (y - \Phi^T(\theta^+ - \theta^-))^T (y - \Phi^T(\theta^+ - \theta^-)) $$
   $$ = \frac{1}{2} y^Ty - y^T\Phi^T(\theta^+ - \theta^-) + \frac{1}{2} (\theta^+ - \theta^-)^T \Phi \Phi^T (\theta^+ - \theta^-) $$

   Now, we express this in terms of the concatenated vector $\mathbf{x} = \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix}$. Note that:
   $$ \theta^+ - \theta^- = \begin{bmatrix} \mathbf{I} & -\mathbf{I} \end{bmatrix} \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix} = \begin{bmatrix} \mathbf{I} & -\mathbf{I} \end{bmatrix} \mathbf{x} $$

2. **Formulating the Quadratic Term $\mathbf{H}$:**
   Look at the quadratic part of the expansion:
   $$ \frac{1}{2} (\mathbf{x}^T \begin{bmatrix} \mathbf{I} \\ -\mathbf{I} \end{bmatrix}) \Phi \Phi^T (\begin{bmatrix} \mathbf{I} & -\mathbf{I} \end{bmatrix} \mathbf{x}) $$
   $$ = \frac{1}{2} \mathbf{x}^T \left( \begin{bmatrix} \mathbf{I} \\ -\mathbf{I} \end{bmatrix} \Phi \Phi^T \begin{bmatrix} \mathbf{I} & -\mathbf{I} \end{bmatrix} \right) \mathbf{x} $$
   $$ = \frac{1}{2} \mathbf{x}^T \begin{bmatrix} \Phi \Phi^T & -\Phi \Phi^T \\ -\Phi \Phi^T & \Phi \Phi^T \end{bmatrix} \mathbf{x} $$
   Thus, we identify the Hessian matrix $\mathbf{H}$:
   $$ \mathbf{H} = \begin{bmatrix} \Phi\Phi^T & -\Phi\Phi^T \\ -\Phi\Phi^T & \Phi\Phi^T \end{bmatrix} $$

3. **Formulating the Linear Term $\mathbf{f}$:**
   The linear parts come from the cross term in the squared norm and the L1 penalty term.
   Cross term:
   $$ - y^T\Phi^T(\theta^+ - \theta^-) = - ( \Phi y )^T (\theta^+ - \theta^-) = \begin{bmatrix} -\Phi y \\ \Phi y \end{bmatrix}^T \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix} $$
   Notice that $ - \begin{bmatrix} \Phi y \\ -\Phi y \end{bmatrix}^T \mathbf{x} $ matches this perfectly.
   
   Regularization term:
   $$ \lambda \sum_i (\theta^+_i + \theta^-_i) = \lambda \mathbf{1}^T \theta^+ + \lambda \mathbf{1}^T \theta^- = (\lambda \begin{bmatrix} \mathbf{1} \\ \mathbf{1} \end{bmatrix})^T \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix} = (\lambda \mathbf{1}_{2D})^T \mathbf{x} $$
   
   Combining these linear pieces gives $\mathbf{f}^T \mathbf{x}$:
   $$ \mathbf{f}^T \mathbf{x} = \left( \lambda \mathbf{1} - \begin{bmatrix} \Phi y \\ -\Phi y \end{bmatrix} \right)^T \mathbf{x} $$
   So we identify exactly:
   $$ \mathbf{f} = \lambda \mathbf{1} - \begin{bmatrix} \Phi y \\ -\Phi y \end{bmatrix} $$

4. **Final Check:**
   The objective becomes:
   $$ J(\mathbf{x}) = \frac{1}{2} \mathbf{x}^T \mathbf{H} \mathbf{x} + \mathbf{f}^T \mathbf{x} + \frac{1}{2}y^Ty $$
   Since $\frac{1}{2}y^Ty$ is a constant with respect to $\mathbf{x}$, it can be dropped from the minimization objective. The constraints $\theta^+ \geq 0$ and $\theta^- \geq 0$ compactly become $\mathbf{x} \geq 0$.
   Hence, the problem is identical to:
   $$ \min_{\mathbf{x}} \frac{1}{2} \mathbf{x}^T \mathbf{H} \mathbf{x} + \mathbf{f}^T \mathbf{x} \quad \text{s.t. } \mathbf{x} \geq 0 $$
   Which matches the required form.
