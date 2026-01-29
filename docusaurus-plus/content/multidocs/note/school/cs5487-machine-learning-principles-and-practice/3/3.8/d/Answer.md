---
title: Answer
---

# Problem 3.8(d) Answer

## 1. Maximum Likelihood Estimate (ML)

The ML estimate maximizes the likelihood function $p(\mathcal{D}|\pi) = \pi^s (1-\pi)^{n-s}$.
To find the maximum, we take the log-likelihood and differentiate:
$$L(\pi) = s \ln \pi + (n-s) \ln (1-\pi)$$
$$\frac{\partial L}{\partial \pi} = \frac{s}{\pi} - \frac{n-s}{1-\pi} = 0$$
$$s(1-\pi) = (n-s)\pi \implies s - s\pi = n\pi - s\pi \implies s = n\pi$$
$$
\hat{\pi}_{ML} = \frac{s}{n}
$$

## 2. MAP Estimate (Uniform Prior)

The MAP (Maximum A Posteriori) estimate maximizes the posterior $p(\pi|\mathcal{D}) \propto p(\mathcal{D}|\pi)p(\pi)$.
With a uniform prior, $p(\pi) = 1$.
So we maximize $p(\mathcal{D}|\pi) \cdot 1$.
This is exactly the same function as the likelihood.
Therefore, for a uniform prior:
$$
\hat{\pi}_{MAP} = \hat{\pi}_{ML} = \frac{s}{n}
$$

## 3. Comparison and Advantages (Bayesian Mean vs MAP/ML)

Wait, the previous section (c) derived the **Bayesian Mean** estimate $\frac{s+1}{n+2}$. The question asks to compare estimates. Usually, "estimates" refers to point estimates.
However, in this specific context (Uniform Prior), MAP and ML are identical ($\frac{s}{n}$). The *other* logical estimate to compare against is the **Posterior Mean** (Expected Value) calculated in (c), which is $\frac{s+1}{n+2}$.

**Advantage of Posterior Mean (Bayesian Estimate) over ML/MAP:**
* **Smoothing**: The ML/MAP estimate can be 0 or 1 if $s=0$ or $s=n$. This is often overfitting, especially for small sample sizes. It assigns 0 probability to unseen events.
* The Bayesian Mean $\frac{s+1}{n+2}$ is always strictly between 0 and 1, avoiding infinite log-loss on unseen data (zero-frequency problem).

**Relation to Uniform Prior:**
The fact that MAP equals ML is a direct consequence of the uniform prior being constant. A constant prior does not pull the estimate towards any specific value in the mode calculation.
However, the uniform prior *does* affect the Mean. As seen in (c), the uniform prior adds "virtual samples" (1 success, 1 failure). This "pulls" the mean towards $0.5$.

* If $s/n = 0.5$, then $\frac{s+1}{n+2} = 0.5$. (No difference).
* If $s/n = 1$, then $\frac{n+1}{n+2} < 1$. (Bayesian estimate is more conservative).
