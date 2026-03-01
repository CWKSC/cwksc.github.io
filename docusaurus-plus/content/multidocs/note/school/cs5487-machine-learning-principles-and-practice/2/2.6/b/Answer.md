---
title: Answer
---

# Answer: MLE of the covariance $\Sigma$

## Prerequisites

- **Multivariate Gaussian Distribution (PDF)**
- **Maximum Likelihood Estimation (MLE)**
- **Trace Trick in Matrix Algebra**: $x^T A x = \text{tr}(x^T A x) = \text{tr}(A x x^T)$
- **Matrix Calculus**

## Step-by-Step Derivation

**1. Recall the Log-Likelihood Function**
From the derivation in part (a), the log-likelihood function for $N$ i.i.d. samples from a multivariate Gaussian is:

$$
\ell(\mu, \Sigma) = \sum_{i=1}^N \left( -\frac{d}{2} \log(2\pi) - \frac{1}{2} \log |\Sigma| - \frac{1}{2} (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) \right)
$$

We want to maximize this with respect to $\Sigma$. Extracting only the terms containing $\Sigma$:

$$
J(\Sigma) = -\frac{N}{2} \log |\Sigma| - \frac{1}{2} \sum_{i=1}^N (x_i - \mu)^T \Sigma^{-1} (x_i - \mu)
$$

**2. Apply the Trace Trick**
The term $(x_i - \mu)^T \Sigma^{-1} (x_i - \mu)$ is a scalar. The trace of a scalar is just the scalar itself. By the cyclic property of the trace operation, $\text{tr}(ABC) = \text{tr}(CAB) = \text{tr}(BCA)$, we can reorder the factors:

$$
(x_i - \mu)^T \Sigma^{-1} (x_i - \mu) = \text{tr} \left( (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) \right) = \text{tr} \left( (x_i - \mu)(x_i - \mu)^T \Sigma^{-1} \right)
$$

Now, substitute this back into $J(\Sigma)$ and swap the sum and the trace (since trace is a linear operator):

$$
J(\Sigma) = -\frac{N}{2} \log |\Sigma| - \frac{1}{2} \text{tr} \left( \sum_{i=1}^N (x_i - \mu)(x_i - \mu)^T \Sigma^{-1} \right)
$$

Let's define the scatter matrix $S = \sum_{i=1}^N (x_i - \mu)(x_i - \mu)^T$. Note that $S$ is a $d \times d$ symmetric matrix. The objective simplifies to:

$$
J(\Sigma) = -\frac{N}{2} \log |\Sigma| - \frac{1}{2} \text{tr} (S \Sigma^{-1})
$$

**3. Compute the Matrix Derivative**
Now we take the partial derivative of $J(\Sigma)$ with respect to the matrix $\Sigma$.
Using the provided hints:

- $\frac{\partial}{\partial \Sigma} \log |\Sigma| = \Sigma^{-T}$
- $\frac{\partial}{\partial \Sigma} \text{tr}(S \Sigma^{-1}) = - (\Sigma^{-T} S^T \Sigma^{-T})$

Applying these rules:

$$
\frac{\partial}{\partial \Sigma} J(\Sigma) = -\frac{N}{2} \Sigma^{-T} - \frac{1}{2} \left( - (\Sigma^{-T} S^T \Sigma^{-T}) \right)
$$

Since $\Sigma$ is symmetric, $\Sigma^T = \Sigma$, so $\Sigma^{-T} = (\Sigma^{-1})^T = \Sigma^{-1}$.
Since $S$ is a sum of exterior products $(x_i-\mu)(x_i-\mu)^T$, $S$ is also symmetric ($S^T = S$).
Thus, the equation simplifies to:

$$
\frac{\partial \ell}{\partial \Sigma} = -\frac{N}{2} \Sigma^{-1} + \frac{1}{2} \Sigma^{-1} S \Sigma^{-1}
$$

**4. Set to Zero and Solve for $\hat{\Sigma}$**
Set the derivative equal to the zero matrix:

$$
-\frac{N}{2} \Sigma^{-1} + \frac{1}{2} \Sigma^{-1} S \Sigma^{-1} = 0
$$

$$
\frac{N}{2} \Sigma^{-1} = \frac{1}{2} \Sigma^{-1} S \Sigma^{-1}
$$

Multiply both sides from the left by $\Sigma$ and then multiply from the right by $\Sigma$:

$$
N \Sigma \Sigma^{-1} \Sigma = \Sigma \Sigma^{-1} S \Sigma^{-1} \Sigma
$$

$$
N \Sigma = S
$$

Solving for the estimate $\hat{\Sigma}$:

$$
\hat{\Sigma}_{ML} = \frac{1}{N} S = \frac{1}{N} \sum_{i=1}^N (x_i - \mu)(x_i - \mu)^T
$$

Assuming we replace the true mean $\mu$ with its ML estimate $\hat{\mu}$ derived in part (a), the final ML estimate for the covariance matrix is:

$$
\hat{\Sigma}_{ML} = \frac{1}{N} \sum_{i=1}^N (x_i - \hat{\mu})(x_i - \hat{\mu})^T
$$
