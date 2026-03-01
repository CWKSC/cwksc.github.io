---
title: Answer
---

### Prerequisites

- Linearity of Expectation
- Properties of Integrals
- Probability Density Functions

### Step-by-Step Derivation

1. Start with the definition of the mean for the estimated distribution $\hat{p}(x)$:
   $$ \hat{\mu} = \mathbb{E}\_{\hat{p}}[x] = \int \hat{p}(x) x dx $$

2. Substitute the definition of $\hat{p}(x)$ from Equation (5.5):
   $$ \hat{\mu} = \int \left( \frac{1}{n} \sum\_{i=1}^n \tilde{k}(x - x_i) \right) x dx $$

3. Use the linearity of the integral to pull out the sum and the constant $\frac{1}{n}$:
   $$ \hat{\mu} = \frac{1}{n} \sum\_{i=1}^n \int \tilde{k}(x - x_i) x dx $$

4. Perform a change of variables in the integral for each term in the sum. Let $u = x - x_i$, then $du = dx$ and $x = u + x_i$:
   $$ \int \tilde{k}(x - x_i) x dx = \int \tilde{k}(u) (u + x_i) du $$

5. Expand the expression and separate the integral into two parts:
   $$ \int \tilde{k}(u) u du + \int \tilde{k}(u) x_i du $$

6. Evaluate the first integral. According to Equation (5.6), the kernel has zero mean:
   $$ \int \tilde{k}(u) u du = 0 $$

7. Evaluate the second integral. Since $\tilde{k}(u)$ is a valid probability density function, it must integrate to 1:
   $$ \int \tilde{k}(u) x_i du = x_i \int \tilde{k}(u) du = x_i \cdot 1 = x_i $$

8. Substitute these results back into the summation from step 3:
   $$ \hat{\mu} = \frac{1}{n} \sum*{i=1}^n (0 + x_i) = \frac{1}{n} \sum*{i=1}^n x_i $$

This completes the proof that the mean of the distribution $\hat{p}(x)$ is the sample mean of $X$.
