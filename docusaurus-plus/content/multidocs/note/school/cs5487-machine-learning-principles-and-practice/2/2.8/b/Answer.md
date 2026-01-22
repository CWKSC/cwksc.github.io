---
title: Answer
---

## Pre-required Knowledge

1. **Probability Density Function (PDF)**:
    * Gaussian distribution: $p(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(x-\mu)^2}{2\sigma^2} \right)$.
2. **Log-Likelihood**:
    * Properties of logarithms: $\ln(ab) = \ln a + \ln b$, $\ln(e^x) = x$.
3. **Optimization**:
    * Maximizing a function is equivalent to maximizing its logarithm (since log is monotonic).

## Step-by-Step Answer

### 1. The Likelihood Function

We observe $y_i = \phi(x_i)^T \theta + \epsilon_i$ where $\epsilon_i \sim \mathcal{N}(0, \sigma^2)$.
This implies that given $x_i$ and $\theta$, $y_i$ follows a Gaussian distribution with mean $\mu_i = \phi(x_i)^T \theta$ and variance $\sigma^2$:

$$
p(y_i | x_i, \theta) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right)
$$

Since the samples are independent and identically distributed (i.i.d), the likelihood of the entire dataset is the product of individual probabilities:

$$
L(\theta) = p(\mathcal{D} | \theta) = \prod_{i=1}^n p(y_i | x_i, \theta)
$$

$$
L(\theta) = \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right)
$$

### 2. The Log-Likelihood Function

It is easier to maximize the log-likelihood $\ell(\theta) = \ln L(\theta)$ because it turns the product into a sum.

$$
\begin{aligned}
\ell(\theta) &= \ln \left( \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right) \right) \\
&= \sum_{i=1}^n \left( \ln \frac{1}{\sqrt{2\pi\sigma^2}} + \ln \exp\left( -\frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right) \right) \\
&= \sum_{i=1}^n \left( -\frac{1}{2} \ln(2\pi\sigma^2) - \frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right)
\end{aligned}
$$

Simplifying:
$$
\ell(\theta) = -\frac{n}{2} \ln(2\pi\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2
$$

### 3. Maximization

To find the ML estimate $\hat{\theta}_{ML}$, we maximize $\ell(\theta)$ with respect to $\theta$.
Notice that the first term $-\frac{n}{2} \ln(2\pi\sigma^2)$ is constant with respect to $\theta$ and can be ignored.
Maximizing the remaining term is equivalent to maximizing:

$$
-\frac{1}{2\sigma^2} \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2
$$

Since $\frac{1}{2\sigma^2} > 0$, maximizing this negative quantity is equivalent to **minimizing** the positive quantity inside the sum:

$$
\hat{\theta}_{ML} = \arg\min_\theta \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2
$$

This objective function is exactly the sum-squared-error from Part (a).
Therefore, minimizing the sum of squared errors is equivalent to maximizing the likelihood under the assumption of Gaussian noise. The solution is the same:

$$
\hat{\theta}_{ML} = (\Phi \Phi^T)^{-1} \Phi y
$$
