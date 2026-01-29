---
title: Answer
---

# Problem 3.8(c) Answer

## Pre-required Knowledge

1. **Predictive Distribution**: The probability of a new sample $x$ given the observed data $\mathcal{D}$, marginalizing over the parameter $\pi$:
    $$p(x|\mathcal{D}) = \int p(x|\pi) p(\pi|\mathcal{D}) d\pi$$
    This is often equivalent to finding the expected value of the likelihood parameter under the posterior distribution.

2. **Bernoulli Expectation**: Since $x \in \{0, 1\}$,
    * $p(x=1|\mathcal{D}) = \mathbb{E}[\pi | \mathcal{D}]$
    * $p(x|\mathcal{D})$ can be written as $\hat{\pi}^x (1-\hat{\pi})^{1-x}$ where $\hat{\pi} = p(x=1|\mathcal{D})$.

## Step-by-Step Proof

1. **Identify $p(x=1|\mathcal{D})$**:
    The predictive probability of the next outcome being 1 ($x=1$) is:
    $$
    p(x=1|\mathcal{D}) = \int_0^1 p(x=1|\pi) p(\pi|\mathcal{D}) d\pi
    $$
    Since $p(x=1|\pi) = \pi$:
    $$
    p(x=1|\mathcal{D}) = \int_0^1 \pi \cdot p(\pi|\mathcal{D}) d\pi = \mathbb{E}[\pi | \mathcal{D}]
    $$
    This is simply the mean of the posterior distribution.

2. **Calculate the Mean of the Posterior**:
    Substitute Eq. (3.33) into the integral:
    $$
    \mathbb{E}[\pi|\mathcal{D}] = \int_0^1 \pi \left[ \frac{(n+1)!}{s!(n-s)!}\pi^s (1-\pi)^{n-s} \right] d\pi
    $$
    $$
    = \frac{(n+1)!}{s!(n-s)!} \int_0^1 \pi^{s+1} (1-\pi)^{n-s} d\pi
    $$

3. **Apply the Integral Identity**:
    Use Eq. (3.32) again with $m = s+1$ and exponent for $(1-\pi)$ is $n-s$.
    $$
    \int_0^1 \pi^{s+1} (1-\pi)^{n-s} d\pi = \frac{(s+1)!(n-s)!}{( (s+1) + (n-s) + 1 )!} = \frac{(s+1)!(n-s)!}{(n+2)!}
    $$

4. **Combine Terms**:
    $$
    \mathbb{E}[\pi|\mathcal{D}] = \frac{(n+1)!}{s!(n-s)!} \cdot \frac{(s+1)!(n-s)!}{(n+2)!}
    $$
    Cancel $(n-s)!$:
    $$
    = \frac{(n+1)!}{s!} \cdot \frac{(s+1)!}{(n+2)!}
    $$
    Expand factorials:
    * $\frac{(s+1)!}{s!} = s+1$
    * $\frac{(n+1)!}{(n+2)!} = \frac{1}{n+2}$

    $$
    \mathbb{E}[\pi|\mathcal{D}] = \frac{s+1}{n+2}
    $$

5. **Formulate Predictive PDF**:
    Since $x$ is Bernoulli, if $P(x=1) = \frac{s+1}{n+2}$, then:
    $$
    p(x|\mathcal{D}) = \left(\frac{s+1}{n+2}\right)^x \left(1-\frac{s+1}{n+2}\right)^{1-x}
    $$
    This matches Eq. (3.34).

## Effective Bayesian Estimate

The effective Bayesian estimate for $\pi$, which is the parameter used for prediction, is:
$$
\hat{\pi}_{Bayes} = \frac{s+1}{n+2}
$$

## Intuitive Explanation ("Virtual" Samples)

The Maximum Likelihood Estimate (MLE) is $\hat{\pi}_{MLE} = \frac{s}{n}$ (successes / total).
The Bayesian estimate can be rewritten as:
$$
\hat{\pi}_{Bayes} = \frac{s+1}{n+2}
$$

**Intuition**:
We can imagine we added **2 virtual samples** to our dataset before we started:
* **1 virtual success** (+1 in numerator)
* **1 virtual failure** (+1 to the count of failures, so total samples $n$ increases by 2)

So, $n \to n+2$ (total virtual size) and $s \to s+1$ (total virtual successes).
These "virtual counts" come from the **Uniform Prior**. A uniform prior acts like we have already seen one Head and one Tail, smoothing the estimate. This prevents the estimate from being 0 or 1 even if $n$ is small (Laplace smoothing).
