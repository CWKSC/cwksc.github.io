---
title: Explain
---

# Explain: Unbiased Estimator and Variance

## Intuition of Unbiasedness

An estimator is **unbiased** if, on average, it hits the true target.
Imagine you are throwing darts at a bullseye (the true parameter $\lambda$).
- If your throws are scattered all over but the "center of gravity" of your throws is exactly the bullseye, your aim is **unbiased**.
- If your throws are consistently to the right of the bullseye, your aim is **biased**.

In this problem, $\mathbb{E}[\hat{\lambda}] = \lambda$ means that if we repeated this experiment many times (collecting $N$ samples each time and computing the average), the average of our estimates would converge to the true $\lambda$. We are not systematically overestimating or underestimating.

## Intuition of Variance

The **variance** of the estimator tells us how spread out our estimates are.
- A low variance means valid estimates are close to each other (and close to the true value if unbiased).
- A high variance means estimates can swing wildly.

The result $\text{var}(\hat{\lambda}) = \frac{\lambda}{N}$ tells us two things:
1. **More data reduces uncertainty**: As $N$ (sample size) increases, the variance decreases. This makes sense; with more data, we are more confident in our estimate.
2. **Dependence on $\lambda$**: The variance depends on the true rate itself. Higher rates (larger $\lambda$) result in higher variance in the counts, and thus higher variance in our estimate.

## Mathematical Steps Explained

The proof relies on two key properties:
1. **Linearity of Expectation**: The average of a sum is the sum of the averages.
    $\mathbb{E}[\frac{1}{N} \sum k_i] = \frac{1}{N} \sum \mathbb{E}[k_i]$. Since everyone expects to roll a $\lambda$, the average is $\lambda$.
2. **Variance of Independent Sum**: The spread of a sum of independent things is the sum of their spreads.
    $\text{var}(\sum k_i) = \sum \text{var}(k_i)$.
    However, when we scale the sum by $\frac{1}{N}$, the variance scales by $(\frac{1}{N})^2 = \frac{1}{N^2}$. This is because variance is a "squared" distance.
    So, $\frac{1}{N^2} \times (N \times \lambda) = \frac{\lambda}{N}$.
