---
title: Answer
---

# Prerequisites

- **Expectation-Maximization (EM) Algorithm:** An iterative method to find maximum likelihood estimates of parameters in statistical models, particularly when the model depends on unobserved latent variables.
- **Poisson Distribution:** A discrete probability distribution expressing the probability of a given number of events occurring in a fixed interval.
- **Complete-Data Log-Likelihood:** The log-likelihood function constructed by aggregating both observed variables and unobserved latent variables.

# Step-by-Step Derivation

Let $X = \{x_1, \dots, x_n\}$ be our set of observations, where each $x_i \in \{0, 1, 2, \dots\}$.
Let $Z = \{z_1, \dots, z_n\}$ be the unobserved latent variables (cluster assignments), where $z_i \in \{1, \dots, K\}$ indicates which Poisson component generated $x_i$.
The probabilities of the latent variables are defined by the mixing weights: $p(z_i = j) = \pi_j$, with $\sum_{j=1}^K \pi_j = 1$.

The probability of an observation $x_i$ given it comes from component $j$ is:
$$p(x_i | z_i = j, \theta) = \frac{e^{-\lambda_j} \lambda_j^{x_i}}{x_i!}$$

The complete data log-likelihood for one observation $(x_i, z_i)$ is:
$$\log p(x_i, z_i = j | \theta) = \log(p(z_i = j) p(x_i | z_i=j, \theta)) = \log \pi_j - \lambda_j + x_i \log \lambda_j - \log(x_i!)$$

Hence, the total complete-data log-likelihood for all $n$ samples, typically written using indicator functions $\mathbb{I}(z_i = j)$, is:
$$\mathcal{L}_c(\theta) = \sum_{i=1}^n \sum_{j=1}^K \mathbb{I}(z_i = j) \left( \log \pi_j - \lambda_j + x_i \log \lambda_j - \log(x_i!) \right)$$

### 1. The E-step (Expectation)

In the E-step, we compute the expected value of the complete data log-likelihood under the posterior distribution of latent variables $Z$, given the current parameter estimates $\theta^{(t)}$.

This reduces to taking the expectation of the indicator variables $\mathbb{I}(z_i = j)$, which yields the posterior responsibilities $\gamma_{ij}$:
$$\gamma_{ij} = p(z_i = j | x_i, \theta^{(t)}) = \frac{p(z_i = j | \theta^{(t)}) p(x_i | z_i = j, \theta^{(t)})}{\sum_{m=1}^K p(z_i = m | \theta^{(t)}) p(x_i | z_i = m, \theta^{(t)})}$$

Substituting the Poisson density:
$$\gamma_{ij}^{(t)} = \frac{\pi_j^{(t)} \frac{e^{-\lambda_j^{(t)}} (\lambda_j^{(t)})^{x_i}}{x_i!}}{\sum_{m=1}^K \pi_m^{(t)} \frac{e^{-\lambda_m^{(t)}} (\lambda_m^{(t)})^{x_i}}{x_i!}} = \frac{\pi_j^{(t)} e^{-\lambda_j^{(t)}} (\lambda_j^{(t)})^{x_i}}{\sum_{m=1}^K \pi_m^{(t)} e^{-\lambda_m^{(t)}} (\lambda_m^{(t)})^{x_i}}$$

We arrive at the auxiliary function $Q(\theta, \theta^{(t)})$ to be maximized in the next step:
$$Q(\theta, \theta^{(t)}) = \sum_{i=1}^n \sum_{j=1}^K \gamma_{ij}^{(t)} \left( \log \pi_j - \lambda_j + x_i \log \lambda_j - \log(x_i!) \right)$$

### 2. The M-step (Maximization)

In the M-step, we maximize $Q(\theta, \theta^{(t)})$ with respect to the parameters $\theta = (\pi, \lambda)$.

**Maximizing for $\pi_j$ (Mixing proportions):**
We maximize using a Lagrange multiplier to enforce the constraint $\sum_{j=1}^K \pi_j = 1$:
$$L(\pi, \alpha) = \sum_{i=1}^n \sum_{j=1}^K \gamma_{ij}^{(t)} \log \pi_j + \alpha \left(1 - \sum_{j=1}^K \pi_j \right)$$

Taking the derivative w.r.t $\pi_j$ and equating to zero:
$$\frac{\partial}{\partial \pi_j} L(\pi, \alpha) = \frac{\sum_{i=1}^n \gamma_{ij}^{(t)}}{\pi_j} - \alpha = 0 \implies \pi_j = \frac{1}{\alpha} \sum_{i=1}^n \gamma_{ij}^{(t)}$$

Summing over all $j$, we find $\alpha = n$. Let $N_j = \sum_{i=1}^n \gamma_{ij}^{(t)}$ be the expected number of samples assigned to component $j$. The update rule is:
$$\pi_j^{(t+1)} = \frac{N_j}{n}$$

**Maximizing for $\lambda_j$ (Poisson rates):**
We separate the terms containing $\lambda_j$ in the $Q$ function and take the derivative w.r.t $\lambda_j$:
$$\frac{\partial Q}{\partial \lambda_j} = \sum_{i=1}^n \gamma_{ij}^{(t)} \left( -1 + \frac{x_i}{\lambda_j} \right) = 0$$

Rearranging the expression to solve for $\lambda_j$:
$$\sum_{i=1}^n \gamma_{ij}^{(t)} = \sum_{i=1}^n \gamma_{ij}^{(t)} \frac{x_i}{\lambda_j}$$
$$N_j = \frac{1}{\lambda_j} \sum_{i=1}^n \gamma_{ij}^{(t)} x_i \implies \lambda_j^{(t+1)} = \frac{\sum_{i=1}^n \gamma_{ij}^{(t)} x_i}{N_j}$$

### Relation to MLE for a single Poisson

For a standard ML estimate of a single Poisson distribution (Problem 2.1), the update rule is $\lambda = \frac{1}{n} \sum_{i=1}^n x_i$ (the arithmetic mean of the data).

In the M-step here, the update rule $\lambda_j^{(t+1)} = \frac{\sum_{i=1}^n \gamma_{ij}^{(t)} x_i}{\sum_{i=1}^n \gamma_{ij}^{(t)}}$ is essentially a **weighted** ML estimate. Instead of treating every point equally (weight 1), each sample observation $x_i$ contributes to component $j$ only fractionally based on its responsibility $\gamma_{ij}$. The sum of weights $N_j$ substitutes the general total component $n$.
