---
title: Answer
---
## Prerequisites
* Predictive Distribution
* Expectation of Posterior (Posterior Mean)
* Laplace Smoothing (Additive Smoothing)

## Step-by-Step Derivation

1.  **Formulate the Predictive Distribution**: The predictive distribution for a new observation $x$ given the data $\mathcal{D}$ requires integrating over the unknown parameter $\pi$ using its posterior distribution.
    $$p(x|\mathcal{D}) = \int_0^1 p(x|\pi) p(\pi|\mathcal{D}) d\pi$$

2.  **Substitute known equations**:
    *   $p(x|\pi) = \pi^x (1 - \pi)^{1-x}$  (Equation 3.30)
    *   $p(\pi|\mathcal{D}) = \frac{(n+1)!}{s!(n-s)!} \pi^s (1 - \pi)^{n-s}$  (Equation 3.33)
    
    $$p(x|\mathcal{D}) = \int_0^1 \left( \pi^x (1 - \pi)^{1-x} \right) \left( \frac{(n+1)!}{s!(n-s)!} \pi^s (1 - \pi)^{n-s} \right) d\pi$$
    $$p(x|\mathcal{D}) = \frac{(n+1)!}{s!(n-s)!} \int_0^1 \pi^{s+x} (1 - \pi)^{n-s+1-x} d\pi$$

3.  **Evaluate for $x=1$**:
    For $x=1$, we want $p(x=1|\mathcal{D})$. Substituting $x=1$:
    $$p(x=1|\mathcal{D}) = \frac{(n+1)!}{s!(n-s)!} \int_0^1 \pi^{s+1} (1 - \pi)^{n-s} d\pi$$
    Applying the integration identity from Part (b) with $m = s+1$ and $n' = n-s$:
    $$\int_0^1 \pi^{s+1} (1 - \pi)^{n-s} d\pi = \frac{(s+1)!(n-s)!}{((s+1)+(n-s)+1)!} = \frac{(s+1)!(n-s)!}{(n+2)!}$$
    $$p(x=1|\mathcal{D}) = \frac{(n+1)!}{s!(n-s)!} \frac{(s+1)!(n-s)!}{(n+2)!} = \frac{(n+1)!(s+1)s!}{s!(n+2)(n+1)!} = \frac{s+1}{n+2}$$

4.  **Evaluate for $x=0$**:
    We know $p(x=0|\mathcal{D}) = 1 - p(x=1|\mathcal{D})$, which is $1 - \frac{s+1}{n+2}$.
    Alternative calculation:
    $$p(x=0|\mathcal{D}) = \frac{(n+1)!}{s!(n-s)!} \int_0^1 \pi^s (1 - \pi)^{n-s+1} d\pi = \frac{(n+1)!}{s!(n-s)!} \frac{s!(n-s+1)!}{(n+2)!} = \frac{n-s+1}{n+2} = 1 - \frac{s+1}{n+2}$$

5.  **Combine into a single expression**:
    Since $x$ can only be 0 or 1, we can write $p(x|\mathcal{D})$ in the same functional form as the Bernoulli distribution:
    $$p(x|\mathcal{D}) = \left(\frac{s+1}{n+2}\right)^x \left(1 - \frac{s+1}{n+2}\right)^{1-x}$$

6.  **Effective Bayesian Estimate and Virtual Samples**:
    The effective Bayesian estimate for $\pi$ ($p(x=1|\mathcal{D})$) is $\hat{\pi}_{Bayes} = \frac{s+1}{n+2}$.
    The Maximum Likelihood Estimate (MLE) is $\hat{\pi}_{MLE} = \frac{s}{n}$.
    
    The intuitive explanation is that a uniform prior acts as if we have observed **two virtual samples (or pseudo-counts)** prior to our actual experiment: one "head" ($+1$ to the numerator $s$) and one "tail" (a total of $+2$ to the denominator $n$). This prevents the estimate of $\pi$ from being 0 or 1 when we have very little data. This concept is known as **Laplace smoothing**.
