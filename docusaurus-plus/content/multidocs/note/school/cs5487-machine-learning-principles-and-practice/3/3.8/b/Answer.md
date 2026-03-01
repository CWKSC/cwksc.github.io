---
title: Answer
---

## Prerequisites

- Bayes' Theorem
- Uniform Prior Distribution
- Beta Distribution Integral

## Step-by-Step Derivation

1.  **Apply Bayes' Theorem**: The posterior distribution $p(\pi|\mathcal{D})$ is proportional to the likelihood $p(\mathcal{D}|\pi)$ times the prior $p(\pi)$.
    $$p(\pi|\mathcal{D}) = \frac{p(\mathcal{D}|\pi)p(\pi)}{p(\mathcal{D})} = \frac{p(\mathcal{D}|\pi)p(\pi)}{\int_0^1 p(\mathcal{D}|\pi)p(\pi) d\pi}$$

2.  **Define the Prior**: A uniform prior over $\pi \in [0, 1]$ means $p(\pi) = 1$.

3.  **Calculate the Likelihood component**: From part (a), the likelihood is $p(\mathcal{D}|\pi) = \pi^s (1 - \pi)^{n-s}$. The numerator is thus:
    $$p(\mathcal{D}|\pi)p(\pi) = \pi^s (1 - \pi)^{n-s} \cdot 1 = \pi^s (1 - \pi)^{n-s}$$

4.  **Calculate the Marginal Likelihood (Denominator)**: We integrate the numerator over all possible values of $\pi$:
    $$p(\mathcal{D}) = \int_0^1 \pi^s (1 - \pi)^{n-s} d\pi$$
    Using the given identity with $m = s$ and $n' = n - s$:
    $$p(\mathcal{D}) = \frac{s!(n-s)!}{(s + (n-s) + 1)!} = \frac{s!(n-s)!}{(n+1)!}$$

5.  **Compute the Posterior**: Divide the numerator by the denominator:
    $$p(\pi|\mathcal{D}) = \frac{\pi^s (1 - \pi)^{n-s}}{\frac{s!(n-s)!}{(n+1)!}} = \frac{(n+1)!}{s!(n-s)!} \pi^s (1 - \pi)^{n-s}$$

6.  **Plotting for $n=1$**:
    For $n=1$, the possible values of $s$ (sum of $x_1$) are $s=0$ or $s=1$.
    - If $s=0$: $p(\pi|x_1=0) = \frac{2!}{0!1!} \pi^0 (1-\pi)^1 = 2(1-\pi)$. This is a straight line from $(0, 2)$ to $(1, 0)$.
    - If $s=1$: $p(\pi|x_1=1) = \frac{2!}{1!0!} \pi^1 (1-\pi)^0 = 2\pi$. This is a straight line from $(0, 0)$ to $(1, 2)$.
