---
title: Answer
---

# Answer (a)

## Prerequisites

- **Kernel Density Estimation (KDE)**
- **Linearity of Expectation**
- **Convolution**

## Step-by-Step Derivation

1. **Define the Kernel Density Estimator:**
   The standard kernel density estimator (KDE) is defined as:

   $$
   \hat{p}(x) = \frac{1}{n} \sum_{i=1}^n \frac{1}{h^d} k\left(\frac{x - x_i}{h}\right)
   $$

   Here, we introduce the rescaled kernel function $\tilde{k}(z) = \frac{1}{h^d} k\left(\frac{z}{h}\right)$, which simplifies the KDE expression to:

   $$
   \hat{p}(x) = \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i)
   $$

2. **Take the Expectation:**
   We want to find the expected value of our estimator $\hat{p}(x)$ over the random sample dataset $X$. We apply the expectation operator $\mathbb{E}_X$:

   $$
   \mathbb{E}_X[\hat{p}(x)] = \mathbb{E}_X \left[ \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right]
   $$

3. **Apply Linearity of Expectation:**
   Since the expectation of a sum is the sum of expectations, we can move $\mathbb{E}$ inside the summation:

   $$
   \mathbb{E}_X[\hat{p}(x)] = \frac{1}{n} \sum_{i=1}^n \mathbb{E}_{x_i \sim p} [\tilde{k}(x - x_i)]
   $$

   Because all samples $x_1, \dots, x_n$ are drawn independently and identically distributed (i.i.d.) from the true density $p(x)$, the expected value $\mathbb{E}[\tilde{k}(x - x_i)]$ is identical for every $i$. Let's use a dummy variable $\mu$ to represent any sample drawn from $p$:

   $$
   \mathbb{E}_X[\hat{p}(x)] = \frac{n}{n} \mathbb{E}_{\mu \sim p} [\tilde{k}(x - \mu)] = \mathbb{E}_{\mu \sim p} [\tilde{k}(x - \mu)]
   $$

4. **Express Expectation as an Integral:**
   By the definition of the expected value for a continuous random variable $\mu \sim p(\mu)$, the expectation of a function $f(\mu)$ is $\int f(\mu)p(\mu) d\mu$. Applying this to our function $f(\mu) = \tilde{k}(x - \mu)$:

   $$
   \int f(\mu)p(\mu) d\mu = \int \tilde{k}(x - \mu) p(\mu) d\mu = \int p(\mu) \tilde{k}(x - \mu) d\mu
   $$

   Thus, $\mathbb{E}_X[\hat{p}(x)] = \int p(\mu) \tilde{k}(x - \mu) d\mu$.

5. **Recognize the Convolution:**
   The integral of the product of two functions where one is shifted and reversed, $\int f(\mu)g(x - \mu) d\mu$, is exactly the definition of the convolution $(f * g)(x)$. Thus:

   $$
   \int p(\mu) \tilde{k}(x - \mu) d\mu = (p * \tilde{k})(x) = p(x) * \tilde{k}(x)
   $$

   This proves Equation (5.1).

6. **Conclusion on Bias:**
   The bias of an estimator is defined as $\text{Bias}(\hat{p}(x)) = \mathbb{E}[\hat{p}(x)] - p(x)$.
   Thus, the bias of the KDE is $p(x) * \tilde{k}(x) - p(x)$. This tells us that the KDE is generally a **biased** estimator. Its expected value is not exactly the true density $p(x)$, but rather a smoothed (convolved) version of $p(x)$, smeared out by the kernel function $\tilde{k}$.
