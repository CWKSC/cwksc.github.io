---
title: Answer
---

## Pre-required Knowledge

* **Poisson Distribution**: A discrete probability distribution expressing the probability of a given number of events occurring in a fixed interval. PDF: $P(k|\lambda) = \frac{\lambda^k e^{-\lambda}}{k!}$.
* **Mixture Model**: A probabilistic model for representing the presence of subpopulations within an overall population.
* **Expectation-Maximization (EM) Algorithm**: An iterative method to find maximum likelihood or maximum a posteriori (MAP) estimates of parameters in statistical models, where the model depends on unobserved latent variables.
  * **E-step**: Calculate the expected value of the latent variables given current parameters.
  * **M-step**: Update parameters to maximize the likelihood given the expected latent variables.

## Step-by-Step Answer

### 1. Log-Likelihood Function

Let latent variables $Z = \{z_1, \dots, z_n\}$, where $z_i \in \{1, \dots, K\}$ indicates which component generated $x_i$, or represented as a one-hot vector $z_i = [z_{i1}, \dots, z_{iK}]^T$.

The complete-data log-likelihood is:
$$
\ln p(X, Z|\theta) = \sum_{i=1}^n \sum_{j=1}^K z_{ij} \ln (\pi_j P(x_i|\lambda_j))
$$
$$
= \sum_{i=1}^n \sum_{j=1}^K z_{ij} [\ln \pi_j + \ln (\frac{1}{x_i!} e^{-\lambda_j} \lambda_j^{x_i})]
$$
$$
= \sum_{i=1}^n \sum_{j=1}^K z_{ij} [\ln \pi_j - \lambda_j + x_i \ln \lambda_j - \ln(x_i!)]
$$

### 2. E-step (Expectation)

We calculate the expected value of the latent variables $z_{ij}$ given the observed data $X$ and current parameters $\theta^{(t)}$. This quantity is commonly denoted as $\gamma_{ij}$ (responsibility):

$$
\gamma_{ij}^{(t)} = E[z_{ij}|x_i, \theta^{(t)}] = P(z_{ij}=1|x_i, \theta^{(t)})
$$

Using Bayes' theorem:
$$
\gamma_{ij}^{(t)} = \frac{\pi_j^{(t)} P(x_i|\lambda_j^{(t)})}{\sum_{l=1}^K \pi_l^{(t)} P(x_i|\lambda_l^{(t)})}
$$

Where $P(x_i|\lambda) = \frac{e^{-\lambda}\lambda^{x_i}}{x_i!}$.

### 3. M-step (Maximization)

We maximize the expectation of the complete-data log-likelihood with respect to $\theta$. The Q-function is:
$$
Q(\theta, \theta^{(t)}) = \sum_{i=1}^n \sum_{j=1}^K \gamma_{ij}^{(t)} [\ln \pi_j - \lambda_j + x_i \ln \lambda_j + \text{const}]
$$

**Update $\pi_j$**:
We need to maximize $\sum_{i=1}^n \sum_{j=1}^K \gamma_{ij}^{(t)} \ln \pi_j$ subject to $\sum \pi_j = 1$. Using Lagrange multipliers, we obtain:
$$
\pi_j^{(t+1)} = \frac{1}{n} \sum_{i=1}^n \gamma_{ij}^{(t)} = \frac{N_j}{n}
$$
where $N_j = \sum_{i=1}^n \gamma_{ij}^{(t)}$ is the effective number of data points assigned to component $j$.

**Update $\lambda_j$**:
We take the derivative of the Q-function with respect to $\lambda_j$ and set it to 0:
$$
\frac{\partial Q}{\partial \lambda_j} = \sum_{i=1}^n \gamma_{ij}^{(t)} [-1 + \frac{x_i}{\lambda_j}] = 0
$$
$$
-\sum_{i=1}^n \gamma_{ij}^{(t)} + \frac{1}{\lambda_j} \sum_{i=1}^n \gamma_{ij}^{(t)} x_i = 0
$$

Since $\sum_{i=1}^n \gamma_{ij}^{(t)} = N_j$:
$$
-N_j + \frac{1}{\lambda_j} \sum_{i=1}^n \gamma_{ij}^{(t)} x_i = 0
$$

$$
\lambda_j^{(t+1)} = \frac{\sum_{i=1}^n \gamma_{ij}^{(t)} x_i}{N_j} = \frac{\sum_{i=1}^n \gamma_{ij}^{(t)} x_i}{\sum_{i=1}^n \gamma_{ij}^{(t)}}
$$

### Relation to ML Estimate (Problem 2.1)

In Problem 2.1 (standard Poisson ML estimate), the Maximum Likelihood Estimate for $\lambda$ is simply the sample mean:
$$
\lambda_{ML} = \frac{\sum_{i=1}^n x_i}{n}
$$

The M-step estimate for component $j$, $\lambda_j^{(t+1)}$, is a **weighted mean** of the samples.
* Instead of each sample contributing equally (weight $1/n$), each sample $x_i$ is weighted by its **responsibility** $\gamma_{ij}^{(t)}$ (the probability that sample $i$ belongs to component $j$).
* The denominator $N_j$ is the sum of these weights, normalizing the estimate.

Thus, the M-step performs a weighted Maximum Likelihood Estimation for each component separately, based on the current soft assignment of points to that component.
