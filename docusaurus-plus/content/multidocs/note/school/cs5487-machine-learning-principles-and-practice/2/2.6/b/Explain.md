---
title: Explain.md
---

# Explanation of MLE for Covariance

## The Goal

We want to find the covariance matrix $\Sigma$ that describes the "spread" and "shape" of the data cloud which maximizes the likelihood of observing the data samples $\{x_1, \dots, x_N\}$.

## The Process

1. **Trace Trick**: The expression involved in the Gaussian PDF, $(x-\mu)^T \Sigma^{-1} (x-\mu)$, is a scalar. The trace of a scalar is the scalar itself. A convenient property of trace is cyclic permutation: $\text{tr}(ABC) = \text{tr}(BCA)$. Using this, we can move the vectors $x-\mu$ around to form the "outer product" $(x-\mu)(x-\mu)^T$, which looks like a covariance matrix structure. This allows us to group all the data summation into a single matrix $S$, the scatter matrix.

2. **Derivative of Determinant**: The likelihood term contains $\log|\Sigma|$. The derivative of $\log(\text{det}(X))$ is related to the inverse of the matrix, $X^{-1}$. Intuitively, maximizing the likelihood prevents the determinant (volume of the probability density) from collapsing to zero or going to infinity without bound in relation to the exponential decay term.

3. **Derivative of Inverse Trace**: The exponential term involves $\Sigma^{-1}$. Differentiating the inverse of a matrix function is slightly more complex, but the provided identity simplifies it. It essentially comes from the rule $d(X^{-1}) = -X^{-1} (dX) X^{-1}$.

4. **Balancing Act**: The derivative equation $-\frac{N}{2} \Sigma^{-1} + \frac{1}{2} \Sigma^{-1} S \Sigma^{-1} = 0$ represents a balance. The first term comes from the normalization constant (trying to make $\Sigma$ small to increase density), and the second term comes from the exponential "error" (trying to make $\Sigma$ large to accommodate the data spread).

5. **Result**: The solution $\hat{\Sigma} = \frac{1}{N} S$ basically says the most likely covariance shape is exactly the average empirical covariance of the data points. (Note: In standard statistics, we often divide by $N-1$ for an unbiased estimator, but the pure MLE divides by $N$).
