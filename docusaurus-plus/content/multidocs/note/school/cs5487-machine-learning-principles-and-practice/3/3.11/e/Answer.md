---
title: Answer
---
### Prerequisites
- Linear Transformation of Gaussian Variables (Problem 1.1)
- Marginalization / Predictive Distribution

### Step-by-Step Derivation

1.  **Predictive Distribution of the Latent Function $f_*$**:
    We are asked to find the distribution of the noise-free prediction $f_* = f(x_*, \theta) = \phi(x_*)^T \theta$ given the data $\mathcal{D}$.
    From part (a), we know the posterior of $\theta$ is a Gaussian:
    $$
    p(\theta | \mathcal{D}) = \mathcal{N}(\theta | \hat{\mu}_\theta, \hat{\Sigma}_\theta)
    $$
    Since $f_*$ is a linear combination of the Gaussian random vector $\theta$, $f_*$ is also Gaussian-distributed. This follows from the rule that if $x \sim \mathcal{N}(\mu, \Sigma)$, then $Ax \sim \mathcal{N}(A\mu, A\Sigma A^T)$.
    Here, the "matrix $A$" is the row vector $\phi(x_*)^T$, and the random variable is $\theta$.
    
    *   **Mean**:
        $$
        \hat{\mu}_* = \mathbb{E}[f_* | x_*, \mathcal{D}] = \mathbb{E}[\phi(x_*)^T \theta | x_*, \mathcal{D}] = \phi(x_*)^T \mathbb{E}[\theta | \mathcal{D}] = \phi(x_*)^T \hat{\mu}_\theta
        $$
    *   **Variance**:
        $$
        \hat{\sigma}^2_* = \text{Var}(f_* | x_*, \mathcal{D}) = \text{Var}(\phi(x_*)^T \theta | x_*, \mathcal{D}) = \phi(x_*)^T \text{Var}(\theta | \mathcal{D}) \phi(x_*) = \phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*)
        $$
    Therefore, the predictive distribution for the latent function is:
    $$
    p(f_*|x_*, \mathcal{D}) = \mathcal{N}(f_* | \phi(x_*)^T \hat{\mu}_\theta, \phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*)) = \mathcal{N}(f_*|\hat{\mu}_*, \hat{\sigma}^2_*)
    $$

2.  **Predictive Distribution of the Output $y_*$**:
    The observed target $y_*$ includes the observation noise: $y_* = f_* + \epsilon_*$, where $\epsilon_* \sim \mathcal{N}(0, \sigma^2)$.
    The question asks us to compute the integral:
    $$
    p(y_*|x_*, \mathcal{D}) = \int p(y_*|x_*, \theta) p(\theta|\mathcal{D}) d\theta
    $$
    Using the hint, because $y_*$ only depends on $\theta$ through the deterministic mapping $f_* = \phi(x_*)^T \theta$, we can marginalize over $f_*$ instead of high-dimensional $\theta$:
    $$
    p(y_*|x_*, \mathcal{D}) = \int p(y_* | f_*) p(f_* | \mathcal{D}) df_*
    $$
    We know:
    *   $p(y_* | f_*) = \mathcal{N}(y_* | f_*, \sigma^2)$ (from $y_* = f_* + \epsilon_*$)
    *   $p(f_* | \mathcal{D}) = \mathcal{N}(f_* | \hat{\mu}_*, \hat{\sigma}^2_*)$
    
    This integral represents adding two independent Gaussian variables: $f_* \sim \mathcal{N}(\hat{\mu}_*, \hat{\sigma}^2_*)$ and $\epsilon_* \sim \mathcal{N}(0, \sigma^2)$.
    The sum $y_* = f_* + \epsilon_*$ of two independent Gaussian variables is also Gaussian.
    *   **Mean of $y_*$**: $\mathbb{E}[y_*] = \mathbb{E}[f_*] + \mathbb{E}[\epsilon_*] = \hat{\mu}_* + 0 = \hat{\mu}_*$
    *   **Variance of $y_*$**: $\text{Var}(y_*) = \text{Var}(f_*) + \text{Var}(\epsilon_*) = \hat{\sigma}^2_* + \sigma^2$

    Therefore, the predictive distribution of $y_*$ is:
    $$
    p(y_*|x_*, \mathcal{D}) = \mathcal{N}(y_*|\hat{\mu}_*, \sigma^2 + \hat{\sigma}^2_*)
    $$
    This completes the proof.
