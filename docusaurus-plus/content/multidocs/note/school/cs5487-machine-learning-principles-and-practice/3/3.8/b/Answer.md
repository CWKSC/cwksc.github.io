---
title: Answer
---

# Problem 3.8(b) Answer

## Pre-required Knowledge

1. **Bayes' Rule**:
    $$p(\pi|\mathcal{D}) = \frac{p(\mathcal{D}|\pi)p(\pi)}{p(\mathcal{D})}$$
    where:
    * $p(\pi|\mathcal{D})$ is the **posterior** distribution.
    * $p(\mathcal{D}|\pi)$ is the **likelihood**.
    * $p(\pi)$ is the **prior**.
    * $p(\mathcal{D}) = \int p(\mathcal{D}|\pi)p(\pi) d\pi$ is the **evidence** (normalizing constant).

2. **Uniform Prior**: A uniform prior over $\pi \in [0, 1]$ implies $p(\pi) = 1$ for $0 \le \pi \le 1$.

3. **Beta Function Identity**: As given in Eq. (3.32):
    $$\int_0^1 \pi^m (1-\pi)^n d\pi = \frac{m!n!}{(m+n+1)!}$$

## Step-by-Step Proof

1. **Formulate the Posterior**:
    Using Bayes' rule:
    $$
    p(\pi|\mathcal{D}) = \frac{p(\mathcal{D}|\pi)p(\pi)}{\int_0^1 p(\mathcal{D}|\pi')p(\pi') d\pi'}
    $$

2. **Substitute Likelihood and Prior**:
    From part (a), likelihood $p(\mathcal{D}|\pi) = \pi^s (1-\pi)^{n-s}$.
    Given uniform prior, $p(\pi) = 1$.
    The numerator is:
    $$
    p(\mathcal{D}|\pi)p(\pi) = \pi^s (1-\pi)^{n-s} \cdot 1 = \pi^s (1-\pi)^{n-s}
    $$

3. **Calculate the Evidence (Denominator)**:
    Let $Z = p(\mathcal{D}) = \int_0^1 \pi^s (1-\pi)^{n-s} d\pi$.
    We use the identity (3.32) with $m = s$ and the exponent of $(1-\pi)$ being $n-s$. Note that in the identity $n$ represents the exponent, so we replace the identity's "$n$" with our "$n-s$".
    Using identity: $\int_0^1 \pi^m (1-\pi)^k d\pi = \frac{m!k!}{(m+k+1)!}$.
    Here, $m=s$ and $k=n-s$.
    $$
    Z = \int_0^1 \pi^s (1-\pi)^{n-s} d\pi = \frac{s!(n-s)!}{(s + (n-s) + 1)!} = \frac{s!(n-s)!}{(n+1)!}
    $$

4. **Compute the Posterior**:
    Divide the numerator by the denominator $Z$.
    $$
    p(\pi|\mathcal{D}) = \frac{\pi^s (1-\pi)^{n-s}}{Z} = \frac{\pi^s (1-\pi)^{n-s}}{\frac{s!(n-s)!}{(n+1)!}}
    $$
    $$
    p(\pi|\mathcal{D}) = \frac{(n+1)!}{s!(n-s)!} \pi^s (1-\pi)^{n-s}
    $$
    This matches Eq. (3.33).

## Plot for $n=1$

For $n=1$, the possible values for $s$ are $s=0$ or $s=1$.

1. **Case $s=1$ (One Success)**:
    $$
    p(\pi|\mathcal{D}) = \frac{(1+1)!}{1!(1-1)!} \pi^1 (1-\pi)^{1-1} = \frac{2}{1 \cdot 1} \pi (1) = 2\pi
    $$
    This is a linear function increasing from 0 to 2.

2. **Case $s=0$ (One Failure)**:
    $$
    p(\pi|\mathcal{D}) = \frac{(1+1)!}{0!(1-0)!} \pi^0 (1-\pi)^{1-0} = \frac{2}{1 \cdot 1} (1) (1-\pi) = 2(1-\pi)
    $$
    This is a linear function decreasing from 2 to 0.

*(Self-check: Integral of $2\pi$ from 0 to 1 is $[\pi^2]_0^1 = 1$. Integral of $2(1-\pi)$ is $-[(1-\pi)^2]_0^1 = -[0 - 1] = 1$. Both are valid PDFs.)*

**Plot description**:
* For $s=1$: A straight line starting at $(0,0)$ and going to $(1,2)$. It favors higher values of $\pi$.
* For $s=0$: A straight line starting at $(0,2)$ and going to $(1,0)$. It favors lower values of $\pi$.
