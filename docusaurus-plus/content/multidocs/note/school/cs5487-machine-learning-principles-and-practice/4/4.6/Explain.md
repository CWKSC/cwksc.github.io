---
title: Explain
---

## Explanation of the EM Derivation for Mixture of Exponentials

The Expectation-Maximization (EM) algorithm is a standard tool for finding maximum likelihood estimates in models with latent (hidden) variables. In a mixture model, the "hidden" variable is the ID of the component that generated each data point. We don't know which exponential distribution generated which $x_i$, so we have to estimate it probabilistically.

### 1. The E-Step: Guessing the Labels

The "Expectation" step is essentially asking: **"Given our current parameter estimates $(\pi, \lambda)$, how likely is it that data point $x_i$ came from component $j$?"**

This probability is called the **responsibility**, denoted $\gamma_{ij}$.
* The numerator $\pi_j p(x_i|\lambda_j)$ is the joint probability of picking component $j$ and then observing $x_i$.
* The denominator is the total probability of observing $x_i$ across all possible components (law of total probability).
* The result is a normalized probability (sums to 1 across $j$ for each $i$).

### 2. The M-Step: Updating the Parameters

The "Maximization" step asks: **"Given our soft guesses about the labels ($\gamma_{ij}$), what are the best parameters?"**

We maximize the **Q-function**, which is the expected log-likelihood. This effectively separates the problem so we can treat each component somewhat independently, weighted by the responsibilities.

#### Updating $\pi_j$ (Mixing Coefficients)

The update for $\pi_j$ is intuitively the statistical average of the assignment probabilities.
$$
\pi_j = \frac{1}{n} \sum_{i=1}^n \gamma_{ij}
$$
This means: "The probability of component $j$ is the average responsibility of component $j$ across all data points." If component 1 takes 30% of the responsibility for every point, then $\pi_1$ should be 0.3.

#### Updating $\lambda_j$ (Rate Parameters)

For a standard exponential distribution, the MLE for $\lambda$ is $1 / \text{mean}(x)$.
$$
\lambda_{MLE} = \frac{n}{\sum x_i}
$$
In the mixture case, we have a **weighted** version of this.
* The numerator $\sum_{i=1}^n \gamma_{ij}$ is the "effective number of points" assigned to component $j$ (often denoted $N_j$).
* The denominator $\sum_{i=1}^n \gamma_{ij} x_i$ is the "weighted sum of values" assigned to component $j$.

So the update is effectively:
$$
\lambda_j = \frac{1}{\text{weighted mean of } x \text{ for component } j} = \frac{N_j}{\sum_{i=1}^n \gamma_{ij} x_i}
$$
This matches the intuition from the single exponential case, but weighted by how much each point belongs to that component.
