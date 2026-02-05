---
title: Explain
---

## Detailed Explanation

This part determines how we make predictions for new data points using the trained Bayesian model.

### 1. Latent Function $f_*$

The term $f_*$ represents the "true" underlying value of the function at $x_*$, without any measurement noise.
* Since we are uncertain about the true parameters $\theta$ (captured by $\hat{\Sigma}_\theta$), we are also uncertain about the value of the function.
* The variance $\hat{\sigma}_*^2 = \phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*)$ represents our **Epistemic Uncertainty** (uncertainty due to lack of knowledge/data).
* Typically, this variance is small where we have lots of training data and large where we don't.

### 2. Predictive Observable $y_*$

The term $y_*$ is what we actually observe. It includes the function value $f_*$ plus the unavoidable measurement noise.
* The predictive variance is the sum of two parts:
    $$
    \operatorname{Var}(y) = \underbrace{\hat{\sigma}_*^2}_{\text{Model Uncertainty}} + \underbrace{\sigma^2}_{\text{Noise}}
    $$
* **Aleatoric Uncertainty**: The term $\sigma^2$ is intrinsic to the system. Even wth infinite data, this uncertainty remains.

### 3. Connection to Gaussian Processes

The problem statement notes this is the linear version of Gaussian Process (GP) regression.
* In GPs, we usually skip calculating $\theta$ explicitly and compute the kernel function $k(x_i, x_j)$.
* The term $\phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*)$ is effectively computing the posterior variance using the kernel defined by the linear features.
* Equation (3.53) allows us to yield not just a point prediction, but a full probability distribution (confidence interval) for the new output, which is the main strength of Bayesian methods.
