---
title: Answer
---
## Prerequisites
* Maximum A Posteriori (MAP) Estimation
* Beta Distribution parameters
* Derivative of Log-Posterior

## Step-by-Step Derivation

1.  **Analyze the Priors as Beta Distributions**:
    The Beta distribution is given by $Beta(\pi; \alpha, \beta) \propto \pi^{\alpha-1}(1-\pi)^{\beta-1}$.
    *   For $p_1(\pi) = 2\pi \propto \pi^1 (1-\pi)^0$, this matches a Beta distribution with $\alpha=2$, $\beta=1$.
    *   For $p_0(\pi) = 2-2\pi = 2(1-\pi) \propto \pi^0 (1-\pi)^1$, this matches a Beta distribution with $\alpha=1$, $\beta=2$.

2.  **Calculate MAP Estimate for $p_1(\pi) = 2\pi$**:
    The posterior is $p_1(\pi|\mathcal{D}) \propto p(\mathcal{D}|\pi) p_1(\pi) = \left[ \pi^s (1-\pi)^{n-s} \right] \pi = \pi^{s+1}(1-\pi)^{n-s}$.
    Take log-posterior: $\log p_1(\pi|\mathcal{D}) = (s+1)\log\pi + (n-s)\log(1-\pi) + C$.
    Differentiate and set to 0:
    $$\frac{s+1}{\pi} - \frac{n-s}{1-\pi} = 0$$
    $$(s+1)(1-\pi) = (n-s)\pi \implies s+1 - (s+1)\pi = n\pi - s\pi \implies (s+1) = (n+1)\pi$$
    $$\hat{\pi}_{MAP, 1} = \frac{s+1}{n+1}$$

3.  **Calculate MAP Estimate for $p_0(\pi) = 2(1-\pi)$**:
    The posterior is $p_0(\pi|\mathcal{D}) \propto p(\mathcal{D}|\pi) p_0(\pi) \propto \left[ \pi^s (1-\pi)^{n-s} \right] (1-\pi) = \pi^s(1-\pi)^{n-s+1}$.
    Take log-posterior: $\log p_0(\pi|\mathcal{D}) = s\log\pi + (n-s+1)\log(1-\pi) + C$.
    Differentiate and set to 0:
    $$\frac{s}{\pi} - \frac{n-s+1}{1-\pi} = 0$$
    $$s(1-\pi) = (n-s+1)\pi \implies s = (n+1)\pi$$
    $$\hat{\pi}_{MAP, 0} = \frac{s}{n+1}$$

4.  **Effective Bayesian Estimates (Predictive Mean)**:
    Using the posterior distributions, which are $Beta(s+2, n-s+1)$ for $p_1$ and $Beta(s+1, n-s+2)$ for $p_0$. The mean of $Beta(\alpha, \beta)$ is $\frac{\alpha}{\alpha+\beta}$.
    *   For $p_1$: $\hat{\pi}_{Bayes, 1} = \frac{s+2}{(s+2) + (n-s+1)} = \frac{s+2}{n+3}$
    *   For $p_0$: $\hat{\pi}_{Bayes, 0} = \frac{s+1}{(s+1) + (n-s+2)} = \frac{s+1}{n+3}$

5.  **Intuitive Explanation (Virtual Samples)**:
    *   **Prior $p_1(\pi) = 2\pi$ (Beta(2,1))**: The mathematical form $\pi^1(1-\pi)^0$ is equivalent to having observed **1 virtual "head"** prior to the experiment. Hence, the MAP adds 1 to the numerator (heads) and 1 to the denominator (total flips). The Bayesian expectation adds 2 total virtual samples (1 head, 0 tails to the base uniform prior of 1 head, 1 tail).
    *   **Prior $p_0(\pi) = 2-2\pi$ (Beta(1,2))**: The form $\pi^0(1-\pi)^1$ represents observing **1 virtual "tail"** before the actual data. The MAP adds 1 to the denominator (total flips) but nothing to the numerator (heads). The Bayesian expectation reflects this by skewing the estimate downward.
