---
title: Question
---

## Problem 3.11 Bayesian regression with Gaussian prior

In the last problem set, we showed that various forms of linear regression by the method of least squares are really just particular cases of ML estimation under the model

$$
y = \Phi^T \theta + \epsilon \quad (3.42)
$$

where $\theta = [\theta_1, \dots, \theta_D]^T$ is the parameter vector, $y = [y_1, \dots, y_n]^T$ is the vector of outputs, $\{x_1, \dots, x_n\}$ are the set of corresponding inputs, $\phi(x_i)$ is a feature transformation, with

$$
\Phi = [\phi(x_1), \dots, \phi(x_n)] \quad (3.43)
$$

and $\epsilon = [\epsilon_1, \dots, \epsilon_n]^T$ is a normal random process $\epsilon \sim \mathcal{N}(0, \Sigma)$, with some covariance matrix $\Sigma$.
It seems only natural to consider the Bayesian extension of this model. For this, we simply extend the model considering a Gaussian prior

$$
p(\theta) = \mathcal{N}(\theta|0, \Gamma),
$$

where $\Gamma$ is the covariance matrix. We will first derive a general result (for generic covariance matrices $\Sigma$ and $\Gamma$), and then show how it relates to other methods.

(a) Given a training set $\mathcal{D} = \{(x_1, y_1), \dots, (x_n, y_n)\}$, show that the posterior distribution is

$$
p(\theta|\mathcal{D}) = \mathcal{N}(\theta|\hat{\mu}_\theta, \hat{\Sigma}_\theta), \quad (3.44)
$$

$$
\hat{\mu}_\theta = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y, \quad (3.45)
$$

$$
\hat{\Sigma}_\theta = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1}, \quad (3.46)
$$

where $\hat{\mu}_\theta$ is the posterior mean and $\hat{\Sigma}_\theta$ is the posterior covariance. Do not assume any specific form of the covariance matrices $\Sigma$ and $\Gamma$. Hint: complete the square (Problem 1.10).
