---
title: Explain
---

# Problem 3.8(d) Explanation

## Mode vs Mean

* **MAP** estimates the **Mode** of the posterior.
* **Bayesian Prediction (from part c)** uses the **Mean** of the posterior.

For the Beta distribution $\text{Beta}(\alpha, \beta)$:
* Mode = $\frac{\alpha-1}{\alpha+\beta-2}$
* Mean = $\frac{\alpha}{\alpha+\beta}$

With Uniform Priors ($\alpha=1, \beta=1$) and data ($s, n-s$):
The posterior is $\text{Beta}(s+1, n-s+1)$.
* $\alpha_{post} = s+1$
* $\beta_{post} = n-s+1$

**MAP (Mode):**
$$
\frac{(s+1)-1}{(s+1)+(n-s+1)-2} = \frac{s}{n+2-2} = \frac{s}{n}
$$
(This is only defined when counts are > 1, strictly speaking, but the limit holds).

**Bayes Estimator (Mean):**
$$
\frac{s+1}{(s+1)+(n-s+1)} = \frac{s+1}{n+2}
$$

## Why MAP equals ML here?

MAP is ML times Prior. If Prior is flat (multiplication by 1), the "hill" in the landscape is defined entirely by the likelihood. So the peak (Mode) is at the same spot.

## Practical Implication

In Machine Learning, we often prefer the Bayesian Mean (or smoothed estimates) because predicting exactly 0 or 1 is dangerous. If you estimate probability 0 for an event, and it happens, your error (log loss) is infinite. The Bayesian estimate naturally safeguards against this by integrating over uncertainty.
