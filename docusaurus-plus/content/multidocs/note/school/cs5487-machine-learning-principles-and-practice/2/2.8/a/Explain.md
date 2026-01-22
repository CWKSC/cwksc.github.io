---
title: Explain
---

### 1. Matrix Dimensions Formulation

In standard textbooks, the design matrix $\mathbf{X}$ is often defined as $N \times D$, where each **row** is a sample.
However, in this problem, $\Phi$ is defined as $D \times N$, where each **column** is a sample $\phi(x_i)$.

* $\Phi = [\phi(x_1), \dots, \phi(x_n)]$ has dimension $D \times N$.
* $y$ has dimension $N \times 1$.
* $\theta$ has dimension $D \times 1$.

So the linear model prediction for all samples is $\Phi^T \theta$ ($N \times D \times D \times 1 = N \times 1$), which matches the dimension of $y$.
This is why the term is $\|y - \Phi^T \theta\|^2$.

### 2. Geometric Interpretation of Projection

The equation $\Phi \Phi^T \theta = \Phi y$ can be rewritten as:
$$
\sum_{i=1}^n \phi(x_i) \phi(x_i)^T \theta = \sum_{i=1}^n \phi(x_i) y_i
$$

The error vector is $e = y - \hat{y} = y - \Phi^T \theta$.
At the optimal solution, the error vector $e$ is **orthogonal** to the column space of the design matrix (or row space of $\Phi$ in this notation).
Mathematically, $\Phi e = 0 \implies \Phi(y - \Phi^T \theta) = 0$, which leads directly to the normal equation.

### 3. "Least Squares" Intuition

We want to find a line (or polynomial curve) that passes closest to all points. "Closest" is defined by the vertical distance (residual) between the point and the line.
We square these distances so that positive and negative errors don't cancel each other out, and to penalize large errors more heavily.
Minimizing this sum of squared errors gives us the "Least Squares" solution.
