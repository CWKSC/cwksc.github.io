---
title: Answer
---

## Pre-required Knowledge

1. **Definition of Expectation**: The expected value of a random variable $X$ with density $p(x)$ is $\mathbb{E}[x] = \int x p(x) dx$.
2. **Kernel Density Estimation (KDE)**: Formula (5.5).
3. **Properties of Integrals**: Linearity ($\int (af(x) + bg(x)) dx = a\int f(x)dx + b\int g(x)dx$).
4. **Change of Variables**: Integration by substitution.
5. **Kernel Properties**: The kernel $\tilde{k}(x)$ integrates to 1 ($\int \tilde{k}(x) dx = 1$) because it is a probability density, and it has zero mean (Eq 5.6).

## Step-by-Step Proof

We want to calculate the expected value of the distribution $\hat{p}(x)$.

1. **Write down the definition:**
    $$
    \mathbb{E}_{\hat{p}}[x] = \int x \hat{p}(x) dx
    $$

2. **Substitute the definition of $\hat{p}(x)$ (Eq 5.5):**
    $$
    \mathbb{E}_{\hat{p}}[x] = \int x \left( \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right) dx
    $$

3. **Interchange integration and summation (Linearity):**
    $$
    \mathbb{E}_{\hat{p}}[x] = \frac{1}{n} \sum_{i=1}^n \int x \tilde{k}(x - x_i) dx
    $$

4. **Perform change of variables:**
    Let $u = x - x_i$, so $x = u + x_i$ and $dx = du$. As $x$ goes from $-\infty$ to $\infty$, so does $u$.
    $$
    \int x \tilde{k}(x - x_i) dx = \int (u + x_i) \tilde{k}(u) du
    $$

5. **Expand and separate the integral:**
    $$
    = \int u \tilde{k}(u) du + \int x_i \tilde{k}(u) du
    $$
    $$
    = \underbrace{\int u \tilde{k}(u) du}_{\mathbb{E}_{\tilde{k}}[u]} + x_i \underbrace{\int \tilde{k}(u) du}_{1}
    $$

6. **Use Kernel Properties:**
    * From Eq (5.6), $\int u \tilde{k}(u) du = 0$ (zero mean).
    * Since $\tilde{k}$ is a valid probability density function, $\int \tilde{k}(u) du = 1$.

    So,
    $$
    \int x \tilde{k}(x - x_i) dx = 0 + x_i \cdot 1 = x_i
    $$

7. **Summate the results:**
    Substitute this back into the sum from step 3:
    $$
    \mathbb{E}_{\hat{p}}[x] = \frac{1}{n} \sum_{i=1}^n x_i
    $$

    This is exactly the sample mean of $X$.

    $$
    \hat{\mu} = \frac{1}{n} \sum_{i=1}^n x_i \quad \blacksquare
    $$
