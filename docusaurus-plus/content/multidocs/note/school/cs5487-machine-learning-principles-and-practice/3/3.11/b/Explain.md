---
title: Explain
---

## Detailed Explanation

The MAP estimate is the value of $\theta$ that maximizes the posterior probability. Depending on the assumptions, it relates to other regression methods:

### 1. The Formula

The derived MAP estimate is:
$$
\hat{\theta}_{MAP} = (\underbrace{\Gamma^{-1}}_{\text{Prior}} + \underbrace{\Phi \Sigma^{-1} \Phi^T}_{\text{Data}})^{-1} \underbrace{\Phi \Sigma^{-1} y}_{\text{Data}}
$$

### 2. Connection to Least Squares

* **Ordinary Least Squares (OLS)**: Minimizes squared error terms. It assumes every data point is equally important and there is no prior belief.
* **Weighted Least Squares (WLS)**: Minimizes *weighted* squared errors. It uses $\Sigma^{-1}$ to give less weight to noisy observations. It corresponds to Maximum Likelihood with non-i.i.d. noise.

The MAP estimate looks like WLS but with an extra term added to the matrix inversion: $\Gamma^{-1}$.

### 3. The Role of $\Gamma^{-1}$ (Regularization)

The term $\Gamma^{-1}$ is the inverse of the prior covariance. It quantifies how "sure" we are that $\theta$ is close to 0 before seeing data.
* If elements of $\Gamma$ are large (large variance), $\Gamma^{-1}$ is small. The prior is weak, and MAP $\approx$ ML.
* If elements of $\Gamma$ are small (small variance), $\Gamma^{-1}$ is large. The prior is strong, and MAP is pulled heavily towards 0 (or the prior mean).

### 4. Advantages

The main advantage of the Bayesian/MAP approach (nonzero $\Gamma^{-1}$) is handling ill-posed problems:
* **Invertibility**: In standard regression, if you have 10 data points and 100 features, $\Phi \Phi^T$ is not invertible. You cannot solve it uniquely. By adding $\Gamma^{-1}$ (like adding $\lambda I$ in Ridge Regression), the matrix becomes invertible, and a unique solution exists.
* **Overfitting**: Standard LS tries to fit the training noise perfectly. MAP penalizes complex models (large weights), leading to better generalization on unseen data.
