---
title: Answer
---

# Answer: Sum of Random Variables

## Prerequisites
* Linearity of Expectation
* Definition of Variance
* Covariance
* Statistical Independence

## Step-by-Step Derivation

### Part 1: Expected Value of a Sum

We want to show that $\mathbb{E}[x + y] = \mathbb{E}[x] + \mathbb{E}[y]$.
By definition, for continuous random variables $x$ and $y$ with joint probability density function $p(x, y)$:

1. Start with the definition of expectation for the sum:
    $$ \mathbb{E}[x + y] = \iint (x + y) p(x, y) \, dx \, dy $$

2. Distribute the integral:
    $$ \mathbb{E}[x + y] = \iint x p(x, y) \, dx \, dy + \iint y p(x, y) \, dx \, dy $$

3. Rearrange the integrals to marginalize the variables:
    $$ \mathbb{E}[x + y] = \int x \left( \int p(x, y) \, dy \right) dx + \int y \left( \int p(x, y) \, dx \right) dy $$

4. Recognize the inner integrals as the marginal probability density functions $p(x)$ and $p(y)$:
    $$ \mathbb{E}[x + y] = \int x p(x) \, dx + \int y p(y) \, dy $$

5. Apply the definition of expectation to the marginals:
    $$ \mathbb{E}[x + y] = \mathbb{E}[x] + \mathbb{E}[y] $$

*(Note: A similar derivation holds for discrete random variables by replacing integrals with sums).*

### Part 2: Variance of a Sum for Independent Variables

We want to show that if $x \perp y$, then $\text{var}(x + y) = \text{var}(x) + \text{var}(y)$.

1. Start with the definition of variance for a random variable $z = x + y$:
    $$ \text{var}(x + y) = \mathbb{E}[((x + y) - \mathbb{E}[x + y])^2] $$

2. Substitute $\mathbb{E}[x + y] = \mathbb{E}[x] + \mathbb{E}[y]$ from Part 1:
    $$ \text{var}(x + y) = \mathbb{E}[((x - \mathbb{E}[x]) + (y - \mathbb{E}[y]))^2] $$

3. Expand the squared term:
    $$ \text{var}(x + y) = \mathbb{E}[(x - \mathbb{E}[x])^2 + (y - \mathbb{E}[y])^2 + 2(x - \mathbb{E}[x])(y - \mathbb{E}[y])] $$

4. Apply linearity of expectation to the terms:
    $$ \text{var}(x + y) = \mathbb{E}[(x - \mathbb{E}[x])^2] + \mathbb{E}[(y - \mathbb{E}[y])^2] + 2\mathbb{E}[(x - \mathbb{E}[x])(y - \mathbb{E}[y])] $$

5. Recognize the definition of variance and covariance:
    $$ \text{var}(x + y) = \text{var}(x) + \text{var}(y) + 2\text{cov}(x, y) $$

6. Because $x$ and $y$ are statistically independent ($x \perp y$), their covariance is zero. This is because $\mathbb{E}[xy] = \mathbb{E}[x]\mathbb{E}[y]$, so:
    $$ \text{cov}(x, y) = \mathbb{E}[(x - \mathbb{E}[x])(y - \mathbb{E}[y])] = \mathbb{E}[xy] - \mathbb{E}[x]\mathbb{E}[y] = 0 $$

7. Substitute $\text{cov}(x, y) = 0$ back into the variance equation:
    $$ \text{var}(x + y) = \text{var}(x) + \text{var}(y) $$
    
If $x$ and $y$ are dependent, $\text{cov}(x, y) \neq 0$ generally, so the variance of the sum includes the covariance term.
