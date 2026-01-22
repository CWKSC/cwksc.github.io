---
title: Answer
---

# Answer: Least Squares Regression

### Pre-required Knowledge

* **Matrix Calculus**: Specifically, derivatives of vector norms and quadratic forms.
  * $\frac{\partial}{\partial x} (Ax - b)^T (Ax - b) = 2A^T(Ax - b)$ for symmetric inner products or standard derivations.
  * $\frac{\partial}{\partial x} x^T A x = (A + A^T)x$.
* **Linear Algebra**: Concept of rank, inverse, and transpose.

### 1. Matrix Formulation

We are given:
* $y = [y_1, \dots, y_n]^T \in \mathbb{R}^n$
* $\Phi = [\phi(x_1), \dots, \phi(x_n)] \in \mathbb{R}^{D \times n}$
* $\theta \in \mathbb{R}^D$

We can write the vector of predicted values as:
$$
\hat{y} = \left[ \begin{matrix} \phi(x_1)^T \theta \\ \vdots \\ \phi(x_n)^T \theta \end{matrix} \right] = \left[ \begin{matrix} \phi(x_1)^T \\ \vdots \\ \phi(x_n)^T \end{matrix} \right] \theta = \Phi^T \theta
$$
Note that $\Phi^T$ is an $n \times D$ matrix.

The sum-squared-error is:
$$
E(\theta) = \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2 = \| y - \Phi^T \theta \|^2
$$

### 2. Derivation

We want to minimize $E(\theta)$ with respect to $\theta$. Let's expand the squared norm:
$$
\begin{aligned}
E(\theta) &= (y - \Phi^T \theta)^T (y - \Phi^T \theta) \\
&= (y^T - \theta^T \Phi) (y - \Phi^T \theta) \\
&= y^T y - y^T \Phi^T \theta - \theta^T \Phi y + \theta^T \Phi \Phi^T \theta
\end{aligned}
$$
Since $y^T \Phi^T \theta$ is a scalar, it equals its transpose $\theta^T \Phi y$. Thus:
$$
E(\theta) = y^T y - 2 \theta^T \Phi y + \theta^T \Phi \Phi^T \theta
$$

Now, we take the gradient with respect to $\theta$ and set it to zero:
$$
\nabla_\theta E(\theta) = -2 \Phi y + 2 \Phi \Phi^T \theta = 0
$$
*(Using the identity $\nabla_x (x^T A x) = 2Ax$ when $A$ is symmetric, here $A = \Phi \Phi^T$)*

### 3. Solution (Normal Equation)

Rearranging the equation:
$$
\Phi \Phi^T \theta = \Phi y
$$
Assuming $\Phi \Phi^T$ (a $D \times D$ matrix) is invertible (which effectively means the features are linearly independent and we have enough data), we get:
$$
\hat{\theta}_{LS} = (\Phi \Phi^T)^{-1} \Phi y
$$
