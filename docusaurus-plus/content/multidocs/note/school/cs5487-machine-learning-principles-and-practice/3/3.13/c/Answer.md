---
title: Answer
---

## Step-by-step Answer

1.  **Expand the Squared Term**:
    Let $\tilde{\theta} = \theta^+ - \theta^-$. The objective is:
    $$ J = \frac{1}{2} (y - \Phi^T \tilde{\theta})^T (y - \Phi^T \tilde{\theta}) + \lambda \sum (\theta_i^+ + \theta_i^-) $$
    $$ J = \frac{1}{2} (y^T y - 2 y^T \Phi^T \tilde{\theta} + \tilde{\theta}^T \Phi \Phi^T \tilde{\theta}) + \lambda \sum (\theta_i^+ + \theta_i^-) $$
    We can ignore the constant term $\frac{1}{2} y^T y$ for minimization.

2.  **Substitute $\mathbf{x}$**:
    Let $\mathbf{x} = \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix}$.
    Then $\tilde{\theta} = \theta^+ - \theta^- = \begin{bmatrix} I & -I \end{bmatrix} \mathbf{x}$.

3.  **Quadratic Part ($\mathbf{x}^T \mathbf{H} \mathbf{x}$)**:
    The quadratic term is $\frac{1}{2} \tilde{\theta}^T (\Phi \Phi^T) \tilde{\theta}$.
    Substitute $\tilde{\theta}$:
    $$ \frac{1}{2} \mathbf{x}^T \begin{bmatrix} I \\ -I \end{bmatrix} (\Phi \Phi^T) \begin{bmatrix} I & -I \end{bmatrix} \mathbf{x} $$
    $$ = \frac{1}{2} \mathbf{x}^T \begin{bmatrix} \Phi \Phi^T & -\Phi \Phi^T \\ -\Phi \Phi^T & \Phi \Phi^T \end{bmatrix} \mathbf{x} $$
    Thus, $\mathbf{H} = \begin{bmatrix} \Phi \Phi^T & -\Phi \Phi^T \\ -\Phi \Phi^T & \Phi \Phi^T \end{bmatrix}$.

4.  **Linear Part ($\mathbf{f}^T \mathbf{x}$)**:
    We have two contributions: from the regression cross-term and the regularization.
    *   Regression: $-\frac{1}{2} (2 y^T \Phi^T \tilde{\theta}) = -(\Phi y)^T \tilde{\theta}$.
        Substitute $\tilde{\theta} = \theta^+ - \theta^-$:
        $-(\Phi y)^T \theta^+ + (\Phi y)^T \theta^-$.
        In terms of $\mathbf{x}$: $\begin{bmatrix} -(\Phi y)^T & (\Phi y)^T \end{bmatrix} \mathbf{x}$.
        So this contributes $\begin{bmatrix} -\Phi y \\ \Phi y \end{bmatrix}$ to $\mathbf{f}$.
    *   Regularization: $\lambda \sum (\theta_i^+ + \theta_i^-) = \lambda \mathbf{1}^T \mathbf{x}$.
        This contributes $\lambda \mathbf{1}$ to $\mathbf{f}$.

    Summing them up:
    $$ \mathbf{f} = \lambda \mathbf{1} + \begin{bmatrix} -\Phi y \\ \Phi y \end{bmatrix} = \lambda \mathbf{1} - \begin{bmatrix} \Phi y \\ -\Phi y \end{bmatrix} $$

5.  **Constraints**:
    $\theta^+ \ge 0$ and $\theta^- \ge 0$ imply $\mathbf{x} \ge 0$.
