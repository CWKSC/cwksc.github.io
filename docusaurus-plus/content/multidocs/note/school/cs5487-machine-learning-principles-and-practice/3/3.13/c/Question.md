---
title: Question
---

(c) Finally, define $\mathbf{x} = \begin{bmatrix} \theta^+ \\ \theta^- \end{bmatrix}$. Show that (3.63) can be written in the standard form of a quadratic program,

$$
\min_{\mathbf{x}} \frac{1}{2} \mathbf{x}^T \mathbf{H} \mathbf{x} + \mathbf{f}^T \mathbf{x} \tag{3.64}
$$
$$
\text{s.t. } \mathbf{x} \ge 0.
$$

where
$$
\mathbf{H} = \begin{bmatrix} \Phi \Phi^T & -\Phi \Phi^T \\ -\Phi \Phi^T & \Phi \Phi^T \end{bmatrix}, \quad \mathbf{f} = \lambda \mathbf{1} - \begin{bmatrix} \Phi y \\ -\Phi y \end{bmatrix}, \tag{3.65}
$$
and $\mathbf{1}$ is the vector of ones. Now we can use a standard QP solver!

Note: there are many customized algorithms for estimating the weights of LASSO, but this is perhaps the easiest to implement since we can use `quadprog` in MATLAB.
