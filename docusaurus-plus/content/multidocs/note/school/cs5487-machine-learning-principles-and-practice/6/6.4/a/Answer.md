---
title: Answer
---
### Prerequisites

* Bayes' Theorem
* Maximum A Posteriori (MAP) Decision Rule
* Minimum Probability of Error

### Step-by-Step Derivation

To minimize the probability of error, we should use the Maximum A Posteriori (MAP) decision rule. This means we should choose the outcome $s$ that maximizes the posterior probability $p(s | r = H)$.

We need to compare $p(s = H | r = H)$ and $p(s = T | r = H)$.

According to Bayes' theorem:
$$p(s = H | r = H) = \frac{p(r = H | s = H) p(s = H)}{p(r = H)}$$
$$p(s = T | r = H) = \frac{p(r = H | s = T) p(s = T)}{p(r = H)}$$

Since the denominator $p(r = H)$ is the same for both, we only need to compare the numerators:
$$p(r = H | s = H) p(s = H) \quad \text{vs} \quad p(r = H | s = T) p(s = T)$$

From the problem description, we know the prior probabilities:
* $p(s = H) = \alpha$
* $p(s = T) = 1 - \alpha$

We also know the conditional probabilities of the reports:
* $p(r = H | s = H) = 1 - p(r = T | s = H) = 1 - \theta_1$
* $p(r = H | s = T) = \theta_2$

Substituting these into our comparison, we should guess heads ($H$) if:
$$(1 - \theta_1) \alpha > \theta_2 (1 - \alpha)$$

Otherwise, we should guess tails ($T$). (If they are exactly equal, either guess yields the same probability of error).
