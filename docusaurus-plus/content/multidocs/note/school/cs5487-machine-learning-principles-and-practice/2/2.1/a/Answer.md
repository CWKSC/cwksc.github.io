---
title: Answer
---

### Prerequisites

- **Maximum Likelihood Estimation (MLE)**
- **Log-likelihood**
- **Calculus (Derivation)**

### Step-by-Step Derivation

1. The likelihood function $L(\lambda)$ for $N$ independent and identically distributed (i.i.d.) samples $\{k_1, k_2, \dots, k_N\}$ is the product of their individual probability mass functions (PMF):
   $$L(\lambda) = \prod_{i=1}^N p(x = k_i | \lambda) = \prod_{i=1}^N \frac{1}{k_i!}e^{-\lambda}\lambda^{k_i}$$

2. Take the natural logarithm to obtain the log-likelihood function $l(\lambda)$. This simplifies the product into a sum, which is easier to differentiate:
   $$l(\lambda) = \ln L(\lambda) = \sum_{i=1}^N \ln\left( \frac{1}{k_i!}e^{-\lambda}\lambda^{k_i} \right)$$
   $$l(\lambda) = \sum_{i=1}^N \left( -\ln(k_i!) - \lambda + k_i \ln\lambda \right)$$
   $$l(\lambda) = - \sum_{i=1}^N \ln(k_i!) - N\lambda + (\ln\lambda)\sum_{i=1}^N k_i$$

3. To find the maximum-likelihood estimate, take the derivative of $l(\lambda)$ with respect to $\lambda$ and set it to $0$:
   $$\frac{\text{d}l(\lambda)}{\text{d}\lambda} = -N + \frac{1}{\lambda}\sum_{i=1}^N k_i = 0$$

4. Solve for $\lambda$ to obtain the estimator $\hat{\lambda}$:
   $$N = \frac{1}{\lambda}\sum_{i=1}^N k_i$$
   $$\hat{\lambda}_{\text{ML}} = \frac{1}{N}\sum_{i=1}^N k_i$$
