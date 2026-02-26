---
title: Answer
---
### Prerequisites

* Exponential Growth/Decay
* Likelihood Ratio

### Step-by-Step Derivation

From part (c), the decision rule is to guess heads if:
$$(1 - \theta_1)^k \theta_1^{n-k} \alpha > \theta_2^k (1 - \theta_2)^{n-k} (1 - \alpha)$$

We are given two conditions:
1. Symmetric error rates: $\theta_1 = \theta_2 = \theta$
2. The report sequence is *all heads*: This means $k = n$ and $n - k = 0$.

Substituting these conditions into the rule:
$$(1 - \theta)^n \theta^0 \alpha > \theta^n (1 - \theta)^0 (1 - \alpha)$$
$$(1 - \theta)^n \alpha > \theta^n (1 - \alpha)$$

Assuming $\theta > 0$, we can rearrange this to form a likelihood ratio:
$$\left(\frac{1 - \theta}{\theta}\right)^n > \frac{1 - \alpha}{\alpha}$$

This is the simplified decision rule for guessing heads under these specific conditions.
