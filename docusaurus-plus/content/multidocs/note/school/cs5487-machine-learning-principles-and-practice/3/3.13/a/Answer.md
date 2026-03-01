---
title: Answer
---

## Prerequisites

- Maximum A Posteriori (MAP) Estimation
- Likelihood Function for Linear Regression
- Laplace Distribution
- Gaussian Distribution

## Step-by-Step Derivation

1. **MAP Estimation Framework:**
   In MAP estimation, we seek to find the parameters $\theta$ that maximize the posterior distribution $p(\theta | y, X)$:
   $$ \hat{\theta}_{MAP} = \operatorname\*{argmax}_{\theta} p(\theta | y, X) = \operatorname*{argmax}*{\theta} \frac{p(y | X, \theta) p(\theta)}{p(y | X)} $$
   Since $p(y | X)$ is independent of $\theta$, this is equivalent to maximizing the joint probability, which is the product of the likelihood and the prior:
   $$ \hat{\theta}*{MAP} = \operatorname*{argmax}_{\theta} [\ln p(y | X, \theta) + \ln p(\theta)] $$
   Or equivalently, minimizing the negative log-posterior:
   $$ \hat{\theta}_{MAP} = \operatorname\*{argmin}\_{\theta} [-\ln p(y | X, \theta) - \ln p(\theta)] $$

2. **Likelihood Function:**
   Assuming independent Gaussian noise with variance $\sigma^2 = 1$ for simplicity (which corresponds to the $\frac{1}{2} \|y - \Phi^T\theta\|^2$ term without a scaling variance factor), the likelihood is:
   $$ p(y | X, \theta) = \prod\_{i=1}^N \mathcal{N}(y_i | \phi(x_i)^T \theta, 1) \propto \exp \left( -\frac{1}{2} \| y - \Phi^T \theta \|^2 \right) $$
   Therefore, the negative log-likelihood is:
   $$ -\ln p(y | X, \theta) = \frac{1}{2} \|y - \Phi^T\theta\|^2 + \text{const} $$

3. **Prior for LASSO:**
   To reconstruct equation (3.59), the negative log-prior must correspond to the L1 penalty:
   $$ -\ln p(\theta) = \lambda \|\theta\|_1 + \text{const} $$
   $$ \ln p(\theta) = -\lambda \|\theta\|\_1 + \text{const}' $$
   $$ p(\theta) \propto \exp(-\lambda \|\theta\|\_1) = \prod_{j=1}^D \exp(-\lambda |\theta_j|) $$
   This means each weight $\theta_j$ follows an independent Laplace distribution with location parameter $\mu = 0$ and scale parameter $b = \frac{1}{\lambda}$:
   $$ p(\theta_j) = \frac{\lambda}{2} \exp(-\lambda |\theta_j|) $$
   Thus, **the prior distribution assumed by LASSO is the Laplace distribution (or Double Exponential distribution)** centered at zero.

4. **Plotting and Interpretation:**
   The Gaussian prior (used in Ridge Regression, L2 regularization) is $p(\theta_j) \propto \exp(-\frac{\lambda}{2} \theta_j^2)$.
   The Laplace prior (used in LASSO, L1 regularization) is $p(\theta_j) \propto \exp(-\lambda |\theta_j|)$.

   ```mermaid
   graph TD
     subgraph Prior Distributions
       direction LR
       G[Gaussian Prior: Bell-shaped, rounded peak at 0]
       L[Laplace Prior: Sharp peak at 0, heavy tails]
     end
   ```

   _Plot description: A Gaussian distribution has a smooth, rounded bell shape around 0. A Laplace distribution has a sharp, characteristic "tent" shape that peaks exactly at 0._

   **Explanation for Sparsity:**
   The Laplace prior has a sharp point (non-differentiable) exactly at $\theta_j = 0$, meaning it assigns a strictly higher probability mass to the exact value of $0$ compared to the smooth Gaussian prior, which is flat at the origin. When we compute the MAP, the sharp peak of the Laplace prior pulls the parameter exactly to zero unless the data likelihood strongly pulls it away. Consequently, LASSO naturally performs feature selection by setting many weights exactly to zero.
