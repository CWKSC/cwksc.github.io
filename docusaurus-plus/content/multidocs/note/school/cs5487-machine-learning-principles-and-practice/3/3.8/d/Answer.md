---
title: Answer
---

## Prerequisites

- Maximum Likelihood Estimation (MLE)
- Maximum A Posteriori Estimation (MAP)
- Beta Distribution Mode

## Step-by-Step Derivation

1.  **Maximum Likelihood Estimate (MLE)**:
    The MLE $\hat{\pi}_{MLE}$ maximizes the likelihood function $p(\mathcal{D}|\pi) = \pi^s(1-\pi)^{n-s}$.
    To find the maximum, we take the log-likelihood:
    $\mathcal{L}(\pi) = \log p(\mathcal{D}|\pi) = s \log\pi + (n-s)\log(1-\pi)$
    Take the derivative with respect to $\pi$ and set it to 0:
    $$\frac{\partial \mathcal{L}}{\partial \pi} = \frac{s}{\pi} - \frac{n-s}{1-\pi} = 0$$
    $$s(1-\pi) = (n-s)\pi \implies s - s\pi = n\pi - s\pi \implies n\pi = s$$
    $$\hat{\pi}_{MLE} = \frac{s}{n}$$

2.  **Maximum A Posteriori (MAP) Estimate with Uniform Prior**:
    The MAP estimate $\hat{\pi}_{MAP}$ maximizes the posterior distribution $p(\pi|\mathcal{D})$. Let's recall the posterior from part (b):
    $$p(\pi|\mathcal{D}) \propto \pi^s (1-\pi)^{n-s}$$
    Since the uniform prior $p(\pi) = 1$ is a constant, the posterior is exactly proportional to the likelihood.
    Therefore, maximizing the posterior is mathematically identical to maximizing the likelihood.
    $$\hat{\pi}_{MAP} = \operatorname{argmax}_\pi p(\pi|\mathcal{D}) = \operatorname{argmax}_\pi \left[ p(\mathcal{D}|\pi) \cdot 1 \right] = \operatorname{argmax}_\pi p(\mathcal{D}|\pi)$$
    Thus, using a uniform prior:
    $$\hat{\pi}_{MAP} = \hat{\pi}_{MLE} = \frac{s}{n}$$

3.  **Comparing the Estimates**:
    - **MLE vs. MAP (Uniform)**: They are identical ($\frac{s}{n}$). There is no mathematical advantage of one over the other in this specific case because the uniform prior adds no extra information (it's uninformative). The uniform prior represents complete uncertainty or lack of bias, letting the data completely dictate the peak (mode) of the belief.
    - **Bayesian Predictive Estimate**: From part (c), $\hat{\pi}_{Bayes} = \frac{s+1}{n+2}$. The advantage of the Bayesian predictive estimate (which is the _mean_ of the posterior, not the _mode_ like MAP) over MLE/MAP is robustness against extreme values, especially for small sample sizes $n$. If $n=1, s=1$, MLE/MAP gives $1.0$ (absolute certainty of heads forever), while Bayesian yields $2/3$ (more cautious).
