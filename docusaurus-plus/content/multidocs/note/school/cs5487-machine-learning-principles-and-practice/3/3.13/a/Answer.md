---
title: Answer
---

## Pre-required Knowledge

* **MAP Estimation**: Maximum A Posteriori estimation finds parameters that maximize the posterior probability: $p(\theta|D) \propto p(D|\theta)p(\theta)$. This is equivalent to minimizing $-\log p(D|\theta) - \log p(\theta)$.
* **Linear Regression Likelihood**: Assuming Gaussian noise $y \sim \mathcal{N}(\Phi^T \theta, \sigma^2 I)$, the negative log-likelihood is proportional to the squared error $\frac{1}{2}\|y - \Phi^T \theta\|^2$.
* **Laplace Distribution**: A probability distribution defined as $Laplace(x|\mu, b) = \frac{1}{2b} \exp(-\frac{|x-\mu|}{b})$.

## Step-by-step Answer

1. **Likelihood Term**:
    The first term in the minimization is $\frac{1}{2} \|y - \Phi^T \theta\|^2$. This corresponds to the negative log-likelihood of the data assuming the target values are generated with Gaussian noise: $y_i = \phi(x_i)^T \theta + \epsilon_i$, where $\epsilon_i \sim \mathcal{N}(0, \sigma^2)$.
    Specifically, $-\log p(y|X, \theta) \propto \frac{1}{2\sigma^2} \|y - \Phi^T \theta\|^2$.

2. **Prior Term**:
    The second term is $\lambda \|\theta\|_1 = \lambda \sum_i |\theta_i|$. We want this to correspond to the negative log-prior: $-\log p(\theta)$.
    So, $\log p(\theta) \propto -\lambda \sum_i |\theta_i|$.
    This separates into independent priors for each weight: $p(\theta) = \prod_i p(\theta_i)$, where $\log p(\theta_i) \propto -\lambda |\theta_i|$.
    This implies $p(\theta_i) \propto \exp(-\lambda |\theta_i|)$.

3. **Identify the Distribution**:
    The distribution $p(\theta_i) \propto \exp(-\lambda |\theta_i|)$ is the **Laplace distribution** (or Double Exponential distribution) centered at 0 with scale parameter related to inverse $\lambda$.
    So, LASSO assumes a **Laplacian Prior** on the weights.

4. **Plot Comparison**:
    * **Gaussian Prior (L2 regularization)**: $p(\theta_i) \propto \exp(-\alpha \theta_i^2)$. This is a bell curve, smooth at the peak 0.
    * **Laplacian Prior (L1 regularization)**: $p(\theta_i) \propto \exp(-\lambda |\theta_i|)$. This has a sharp peak at 0.

    *(Ideally, insert a plot here showing a bell curve vs a sharp peak at 0)*
    The Gaussian is flat near 0, meaning it doesn't distinguish much between 0 and small values (0.001).
    The Laplacian is sharp at 0, meaning there is a much higher probability density concentrated exactly at 0 compared to small non-zero values.

5. **Explanation for Sparsity**:
    Because the Laplace prior has a sharp peak (singularity in derivative) at zero, the mode of the posterior is more likely to fall exactly at zero.
    In the log-domain, the penalty $|\theta_i|$ has a constant gradient $\pm \lambda$ even as $\theta_i \to 0$. This constant "pull" can force the optimal weight to be exactly zero.
    In contrast, the squared penalty $\theta_i^2$ has a gradient $2\theta_i$ which vanishes as $\theta_i \to 0$. As the weight gets small, the pull towards zero becomes negligible, so it rarely settles exactly at zero.
