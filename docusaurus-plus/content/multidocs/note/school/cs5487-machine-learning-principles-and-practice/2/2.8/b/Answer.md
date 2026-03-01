---
title: Answer
---

### Prerequisites

- **Maximum Likelihood Estimation (MLE)**: Finding parameter values that maximize the likelihood of making the observations given the parameters.
- **Gaussian Distribution**: Probability density function of a normal distribution.
- **Log-Likelihood**: Taking the logarithm of the likelihood function to simplify products into sums.

### Step-by-Step Derivation

1. **Define the Probability Model**
   We are given that $y_i = \phi(x_i)^T \theta + \epsilon_i$, where $\epsilon_i \sim \mathcal{N}(0, \sigma^2)$.
   Because $\phi(x_i)^T \theta$ is a deterministic value for a given $x_i$ and $\theta$, the distribution of $y_i$ is a Gaussian centered at $\phi(x_i)^T \theta$:

   $$
   p(y_i \mid x_i, \theta) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( - \frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right)
   $$

2. **Write the Likelihood Function**
   Since the samples $\mathcal{D} = \{(x_i, y_i)\}_{i=1}^n$ are independently and identically distributed (i.i.d.), the joint likelihood of all $n$ observations is the product of their individual probabilities:

   $$
   \begin{aligned}
   L(\theta) &= p(y_1, \dots, y_n \mid x_1, \dots, x_n, \theta) \\
             &= \prod_{i=1}^n p(y_i \mid x_i, \theta) \\
             &= \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( - \frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right)
   \end{aligned}
   $$

3. **Compute the Log-Likelihood Function**
   To find the maximum, it is mathematically much simpler to maximize the natural logarithm of the likelihood, $\ln L(\theta)$, often denoted as $\ell(\theta)$. The logarithm is a monotonically increasing function, so maximizing $\ell(\theta)$ is equivalent to maximizing $L(\theta)$.

   $$
   \begin{aligned}
   \ell(\theta) &= \ln \left( \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( - \frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right) \right) \\
                &= \sum_{i=1}^n \left( \ln\left[\frac{1}{\sqrt{2\pi\sigma^2}}\right] - \frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right) \\
                &= - \frac{n}{2} \ln(2\pi\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2
   \end{aligned}
   $$

4. **Show Equivalence to Least Squares**
   We want to find $\theta$ that maximizes $\ell(\theta)$.
   Notice that the first term $- \frac{n}{2} \ln(2\pi\sigma^2)$ is a constant with respect to $\theta$, and the factor $\frac{1}{2\sigma^2}$ is a positive constant.
   Therefore, maximizing the negative term is exactly equivalent to minimizing the positive summation:
   $$
   \arg\max_\theta \ell(\theta) = \arg\min_\theta \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2
   $$
   This summation is exactly the sum-squared-error objective function $J(\theta)$ from part (a):
   $$
   \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2 = \| y - \Phi^T \theta \|^2
   $$
5. **Conclusion**
   Since the optimization problem is identical, the Maximum Likelihood (ML) estimate $\hat{\theta}_{ML}$ must be equivalent to the Least Squares estimate $\hat{\theta}_{LS}$:
   $$
   \hat{\theta}_{ML} = (\Phi \Phi^T)^{-1} \Phi y
   $$
