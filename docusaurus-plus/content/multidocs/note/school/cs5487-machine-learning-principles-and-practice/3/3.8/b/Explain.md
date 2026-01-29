---
title: Explain
---

# Problem 3.8(b) Explanation

## Conjugate Priors

The resulting posterior distribution has the form of a **Beta distribution**, denoted as $\text{Beta}(\alpha, \beta)$, where the PDF is proportional to $\pi^{\alpha-1}(1-\pi)^{\beta-1}$.
Matching our result $p(\pi|\mathcal{D}) \propto \pi^s (1-\pi)^{n-s}$:
* $\alpha - 1 = s \implies \alpha = s + 1$
* $\beta - 1 = n - s \implies \beta = n - s + 1$

The fact that the posterior distribution is in the same family (Beta distribution) as the prior (Uniform distribution is actually $\text{Beta}(1,1)$) means the Beta distribution is the **conjugate prior** for the Bernoulli/Binomial likelihood. This property makes Bayesian updates analytically tractable.

## Normalizing Constant

The term $\frac{(n+1)!}{s!(n-s)!}$ acts purely as a normalizing constant to ensure the area under the curve equals 1.
If we recognize this as a Beta distribution $\text{Beta}(s+1, n-s+1)$, the standard normalizing constant is $\frac{1}{B(s+1, n-s+1)} = \frac{\Gamma(n+2)}{\Gamma(s+1)\Gamma(n-s+1)}$, which simplifies using factorials ($\Gamma(n) = (n-1)!$) to exactly what we derived.

## Interpretation of $n=1$ Plot

* **Prior**: We started with a flat line ($p(\pi)=1$), meaning we had no reason to believe any value of $\pi$ was more likely than another.
* **Data**: We observed one coin flip.
* **Posterior ($s=1$)**: We saw a Head. Now, values of $\pi$ near 1 are more likely than values near 0. The probability density increases linearly. It doesn't rule out $\pi=0.1$ completely (it's just unlikely), but it strongly suggests $\pi$ is high.
* **Posterior ($s=0$)**: We saw a Tail. The belief is flipped. Values near 0 are now more likely.
