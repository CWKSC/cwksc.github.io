---
title: Answer
---
### Prerequisites

* Algebraic Simplification
* Probability Inequalities

### Step-by-Step Derivation

From part (a), the decision rule is to guess heads if:
$$(1 - \theta_1) \alpha > \theta_2 (1 - \alpha)$$

Given the condition $\theta_1 = \theta_2 = \theta$, we substitute $\theta$ into the inequality:
$$(1 - \theta) \alpha > \theta (1 - \alpha)$$

Now, we simplify the inequality:
$$\alpha - \theta \alpha > \theta - \theta \alpha$$

Adding $\theta \alpha$ to both sides:
$$\alpha > \theta$$

Thus, when the error rates are symmetric ($\theta_1 = \theta_2 = \theta$), the optimal decision rule simplifies to: guess heads if the prior probability of heads ($\alpha$) is strictly greater than the probability of the friend reporting incorrectly ($\theta$).
