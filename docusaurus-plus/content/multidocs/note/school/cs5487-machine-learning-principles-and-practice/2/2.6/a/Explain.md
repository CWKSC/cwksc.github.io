---
title: Explain.md
---

# Explanation of MLE for Mean

## The Goal

We want to find the value of the mean vector $\mu$ that makes the observed data samples $\{x_1, \dots, x_N\}$ most probable. This is the essence of Maximum Likelihood Estimation (MLE).

## The Process

1. **Formulate the Likelihood**: We start with the probability density function (PDF) of a single data point. Since we assume independent samples, the joint probability (Likelihood) is the product of individual probabilities.
2. **Log-Trick**: Multiplying many probabilities (which are small numbers < 1) is difficult and numerically unstable. Taking the natural logarithm turns the product into a sum. Since $\log(x)$ is a strictly increasing function, maximizing the log-likelihood is equivalent to maximizing the likelihood.
3. **Focus on $\mu$**: We inspect the log-likelihood equation. To find the maximum with respect to $\mu$, we look for the "peak" of the function. Calculus tells us this peak occurs where the gradient (derivative) is zero.
4. **Differentiation**: We differentiate the log-likelihood function with respect to the vector $\mu$. The key term involves a quadratic form $(x_i - \mu)^T \Sigma^{-1} (x_i - \mu)$, which represents the Multi-variate "distance" (Mahalanobis distance) of point $x_i$ from the mean $\mu$. The derivative essentially behaves like the derivative of $(x-\mu)^2$ in 1D, which is $2(x-\mu)(-1)$. In matrix calculus, the covariance matrix $\Sigma^{-1}$ acts as a weighting factor.
5. **Solving**: Setting the derivative to zero gives us a linear equation. We find that the optimal $\mu$ is simply the arithmetic average of all data points. This matches our intuition: the best estimate for the center of a Gaussian cloud of points is the average of those points.
