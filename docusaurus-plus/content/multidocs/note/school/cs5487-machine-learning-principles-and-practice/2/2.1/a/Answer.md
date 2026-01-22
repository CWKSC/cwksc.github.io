---
title: Answer
---

# Problem 2.1 (a)

## Pre-required Knowledge

- **Poisson Distribution**: A discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space.
  - PMF: $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$
- **Maximum Likelihood Estimation (MLE)**: A method of estimating the parameters of a probability distribution by maximizing a likelihood function, so that under the assumed statistical model, the observed data is most probable.
- **Log-Likelihood**: The natural logarithm of the likelihood function. Maximizing the log-likelihood is equivalent to maximizing the likelihood but usually easier mathematically.

## Step-by-Step Answer

1. **Write down the Likelihood Function:**
    Given $N$ i.i.d. samples $\{k_1, k_2, \dots, k_N\}$, the likelihood function $L(\lambda)$ is the product of the individual probability mass functions:
    $$
    L(\lambda) = \prod_{i=1}^{N} p(k_i | \lambda) = \prod_{i=1}^{N} \frac{1}{k_i!} e^{-\lambda} \lambda^{k_i}
    $$

2. **Write down the Log-Likelihood Function:**
    Taking the natural logarithm of the likelihood function converts the product into a sum, which is easier to differentiate:
    $$
    \begin{aligned}
    \ell(\lambda) = \ln L(\lambda) &= \sum_{i=1}^{N} \ln \left( \frac{1}{k_i!} e^{-\lambda} \lambda^{k_i} \right) \\
    &= \sum_{i=1}^{N} \left( -\ln(k_i!) - \lambda + k_i \ln(\lambda) \right) \\
    &= -\sum_{i=1}^{N} \ln(k_i!) - \sum_{i=1}^{N} \lambda + \sum_{i=1}^{N} k_i \ln(\lambda) \\
    &= -\sum_{i=1}^{N} \ln(k_i!) - N\lambda + \ln(\lambda) \sum_{i=1}^{N} k_i
    \end{aligned}
    $$

3. **Differentiate with respect to $\lambda$:**
    To find the maximum, we compute the derivative of $\ell(\lambda)$ with respect to $\lambda$:
    $$
    \frac{\partial \ell(\lambda)}{\partial \lambda} = -N + \frac{1}{\lambda} \sum_{i=1}^{N} k_i
    $$

4. **Set the derivative to zero and solve for $\lambda$:**
    $$
    -N + \frac{1}{\lambda} \sum_{i=1}^{N} k_i = 0
    $$
    $$
    \frac{1}{\lambda} \sum_{i=1}^{N} k_i = N
    $$
    $$
    \lambda = \frac{1}{N} \sum_{i=1}^{N} k_i
    $$

5. **Conclusion:**
    The maximum likelihood estimate $\hat{\lambda}$ is the sample mean:
    $$
    \hat{\lambda} = \frac{1}{N} \sum_{i=1}^{N} k_i
    $$
