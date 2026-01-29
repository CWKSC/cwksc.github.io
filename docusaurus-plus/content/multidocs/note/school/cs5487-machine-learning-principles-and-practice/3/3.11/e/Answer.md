---
title: Answer
---

## Pre-required Knowledge

1.  **Linear Transformation of Gaussian**: If $x \sim \mathcal{N}(\mu, \Sigma)$, then $y = Ax + b$ follows $\mathcal{N}(A\mu + b, A \Sigma A^T)$.
2.  **Sum of Independent Gaussians**: If $X \sim \mathcal{N}(\mu_X, \sigma_X^2)$ and $Y \sim \mathcal{N}(\mu_Y, \sigma_Y^2)$ are independent, then $Z = X + Y \sim \mathcal{N}(\mu_X + \mu_Y, \sigma_X^2 + \sigma_Y^2)$.
3.  **Marginalization**: $\int p(y|f) p(f) df$.

## Step-by-Step Answer

### Part 1: Distribution of $f_*$

1.  **Define $f_*$**:
    The latent function value is defined as a linear transformation of the parameters:
    $$
    f_* = \phi(x_*)^T \theta
    $$

2.  **Apply Linear Transformation Property**:
    We know the posterior of $\theta$ is $p(\theta|\mathcal{D}) = \mathcal{N}(\theta | \hat{\mu}_\theta, \hat{\Sigma}_\theta)$.
    Using the linear transformation property (where $A = \phi(x_*)^T$ is a row vector):
    *   **Mean**:
        $$
        \mathbb{E}[f_*] = \phi(x_*)^T \mathbb{E}[\theta] = \phi(x_*)^T \hat{\mu}_\theta
        $$
    *   **Variance**:
        $$
        \operatorname{Var}[f_*] = \phi(x_*)^T \operatorname{Cov}[\theta] \phi(x_*) = \phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*)
        $$

3.  **Result**:
    $$
    p(f_* | x_*, \mathcal{D}) = \mathcal{N}(f_* | \hat{\mu}_*, \hat{\sigma}_*^2)
    $$
    where $\hat{\mu}_*$ and $\hat{\sigma}_*^2$ match the equations (3.51) and (3.52).

### Part 2: Distribution of $y_*$

1.  **Model Relationship**:
    The observed output is the function value plus noise:
    $$
    y_* = f_* + \epsilon_*, \quad \epsilon_* \sim \mathcal{N}(0, \sigma^2)
    $$

2.  **Sum of Independent Random Variables**:
    We have the distribution of $f_*$ (from Part 1) and the distribution of $\epsilon_*$ (noise assumption).
    Since the new noise $\epsilon_*$ is independent of the past data $\mathcal{D}$ (and thus $f_*$), the variable $y_*$ is the sum of two independent Gaussian variables.

3.  **Compute Moments**:
    *   **Mean**:
        $$
        \mathbb{E}[y_*] = \mathbb{E}[f_*] + \mathbb{E}[\epsilon_*] = \hat{\mu}_* + 0 = \hat{\mu}_*
        $$
    *   **Variance**:
        $$
        \operatorname{Var}[y_*] = \operatorname{Var}[f_*] + \operatorname{Var}[\epsilon_*] = \hat{\sigma}_*^2 + \sigma^2
        $$

4.  **Result**:
    $$
    p(y_*|x_*, \mathcal{D}) = \mathcal{N}(y_* | \hat{\mu}_*, \hat{\sigma}_*^2 + \sigma^2)
    $$
    This matches equation (3.53).
