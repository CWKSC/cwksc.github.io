---
title: Answer
---

### Pre-required Knowledge

- **Kernel Density Estimator (KDE)**:
  The KDE is defined as:
  $$ \hat{p}(x) = \frac{1}{n} \sum_{i=1}^n \frac{1}{h^d} k\left(\frac{x - x_i}{h}\right) $$
  Let $\tilde{k}(u) = \frac{1}{h^d} k(u/h)$, then $\hat{p}(x) = \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i)$.

- **Expectation of Sum**:
  $\mathbb{E}[\sum Y_i] = \sum \mathbb{E}[Y_i]$.

- **Convolution**:
  $(f * g)(x) = \int f(\mu) g(x - \mu) d\mu$.

### Step-by-Step Answer

1. **Write down the expectation of the estimator**:
    Since $x_i$ are independent and identically distributed (i.i.d.) samples from $p(x)$, and expectation is linear:
    $$
    \begin{aligned}
    \mathbb{E}_X [\hat{p}(x)] &= \mathbb{E} \left[ \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right] \\
    &= \frac{1}{n} \sum_{i=1}^n \mathbb{E} [\tilde{k}(x - x_i)]
    \end{aligned}
    $$

2. **Simplify using identical distribution**:
    Since all $x_i$ follow the same distribution $p(x)$, $\mathbb{E} [\tilde{k}(x - x_i)]$ is the same for all $i$.
    $$
    \mathbb{E}_X [\hat{p}(x)] = \mathbb{E} [\tilde{k}(x - x_1)]
    $$

3. **Calculate the expectation**:
    By definition of expectation for a function of a continuous random variable $x_1 \sim p(\mu)$:
    $$
    \mathbb{E} [\tilde{k}(x - x_1)] = \int \tilde{k}(x - \mu) p(\mu) d\mu
    $$

4. **Relate to convolution**:
    The integral $\int p(\mu) \tilde{k}(x - \mu) d\mu$ is exactly the definition of the convolution between $p$ and $\tilde{k}$, denoted as $p(x) * \tilde{k}(x)$.
    $$
    \mathbb{E}_X [\hat{p}(x)] = p(x) * \tilde{k}(x)
    $$

5. **Interpretation of Bias**:
    The expected value of the KDE is not the true density $p(x)$, but the true density convolved (smoothed) with the kernel function.
    $$ \text{Bias}[\hat{p}(x)] = \mathbb{E}[\hat{p}(x)] - p(x) = (p * \tilde{k})(x) - p(x) $$
    This means the KDE is a **biased** estimator. The convolution operation "smears" or smooths out the probability mass of $p(x)$, typically reducing peaks and filling in valleys. The bias depends on the bandwidth $h$; as $h \to 0$, the kernel approaches a Dirac delta function, and the bias approaches 0 (asymptotically unbiased).
