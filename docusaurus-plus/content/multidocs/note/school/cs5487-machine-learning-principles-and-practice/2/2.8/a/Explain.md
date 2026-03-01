---
title: Explain
---

### Intuition

The core idea of **Least-Squares Regression** is to draw a line (or a polynomial curve, as in this problem) that gets as close as possible to all our data points. When we measure "closeness", we look at the vertical distance between each data point and the curve. The least-squares method seeks to minimize the **sum of the squares** of these vertical distances.

### Why Squares?

1. **Always Positive**: By squaring the errors, negative errors (points below the curve) and positive errors (points above the curve) don't cancel each other out.
2. **Penalizes Large Errors**: Squaring gives much more weight to large outliers, encouraging the curve to avoid being too far away from any single point.
3. **Mathematical Convenience**: A quadratic function forms a smooth, bowl-like shape (a convex parabola). It has a single, unique bottom point (global minimum). This means we can find the exact lowest point using basic calculus (setting the derivative to zero).

### Matrix Formulation

Instead of writing out long sums like $\sum_{i=1}^n (y_i - (\theta_0 + \theta_1 x_i + \cdots))^2$, we pack everything into matrices.

- $y$ is a tall vector of all our actual observed values.
- $\Phi^T \theta$ computes the predicted values for all points simultaneously. The matrix $\Phi$ (often called the _design matrix_) simply holds all our polynomial features like $x$, $x^2$, etc.

The sum of squared errors naturally elegantly translates to the squared length ($L_2$ norm) of a vector: $\| y - \Phi^T \theta \|^2$.

### The Solution: $\hat{\theta}_{LS} = (\Phi \Phi^T)^{-1} \Phi y$

This derived formula is known as the **Normal Equation**. It provides a direct, exact, closed-form mathematical solution to find the best-fitting parameters $\theta$ without needing to guess or iteratively search.
