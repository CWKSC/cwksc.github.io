---
title: Answer
---

### Prerequisites
- **Expectation and Variance Properties**
- **Unbiased Estimator**
- **Properties of independent and identically distributed (i.i.d.) random variables**

### Step-by-Step Derivation

1. An estimator $\hat{\lambda}$ is considered **unbiased** if its expected value is equal to the true underlying parameter, i.e., $\mathbb{E}[\hat{\lambda}] = \lambda$.

2. Recall the ML estimator from part (a):
   $$\hat{\lambda} = \frac{1}{N}\sum_{i=1}^N k_i$$

3. Calculate the expectation of $\hat{\lambda}$ using the linearity of expectation:
   $$\mathbb{E}[\hat{\lambda}] = \mathbb{E}\left[\frac{1}{N}\sum_{i=1}^N k_i\right] = \frac{1}{N}\sum_{i=1}^N \mathbb{E}[k_i]$$

4. Given that each $k_i$ is drawn from a Poisson distribution with parameter $\lambda$, we know the expected value of a single sample is $\mathbb{E}[k_i] = \lambda$:
   $$\mathbb{E}[\hat{\lambda}] = \frac{1}{N} \sum_{i=1}^N \lambda = \frac{1}{N} (N\lambda) = \lambda$$
   Since $\mathbb{E}[\hat{\lambda}] = \lambda$, the ML estimator is **unbiased**.

5. Next, calculate the variance of the estimator, $\text{var}(\hat{\lambda})$:
   $$\text{var}(\hat{\lambda}) = \text{var}\left(\frac{1}{N}\sum_{i=1}^N k_i\right)$$

6. By the properties of variance, multiplying a random variable by a constant $c$ scales the variance by $c^2$. Also, because the samples $k_i$ are independent, the variance of their sum is the sum of their individual variances:
   $$\text{var}(\hat{\lambda}) = \frac{1}{N^2} \sum_{i=1}^N \text{var}(k_i)$$

7. For a Poisson distribution, we are given that $\text{var}(k_i) = \lambda$. Substituting this into the equation yields:
   $$\text{var}(\hat{\lambda}) = \frac{1}{N^2} \sum_{i=1}^N \lambda = \frac{1}{N^2} (N\lambda) = \frac{\lambda}{N}$$
   
Thus, the estimator variance is indeed $\frac{\lambda}{N}$.