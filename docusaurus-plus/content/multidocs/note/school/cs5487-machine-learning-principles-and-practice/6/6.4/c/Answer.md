---
title: Answer
---
### Prerequisites

* Conditional Independence
* Maximum A Posteriori (MAP) Decision Rule
* Joint Probability

### Step-by-Step Derivation

Let the sequence of $n$ independent reports be denoted as $R = (r_1, r_2, \dots, r_n)$.
Let $k$ be the number of times the friend reports heads ($H$), and $n-k$ be the number of times the friend reports tails ($T$).

We want to use the MAP decision rule, comparing the posterior probabilities $p(s = H | R)$ and $p(s = T | R)$.
This is equivalent to comparing the joint probabilities:
$$p(R | s = H) p(s = H) \quad \text{vs} \quad p(R | s = T) p(s = T)$$

Because the reports are statistically independent given the true outcome $s$, the joint conditional probability is the product of individual conditional probabilities:
$$p(R | s = H) = \prod_{i=1}^n p(r_i | s = H) = p(r = H | s = H)^k \cdot p(r = T | s = H)^{n-k}$$
$$p(R | s = H) = (1 - \theta_1)^k \theta_1^{n-k}$$

Similarly, for $s = T$:
$$p(R | s = T) = \prod_{i=1}^n p(r_i | s = T) = p(r = H | s = T)^k \cdot p(r = T | s = T)^{n-k}$$
$$p(R | s = T) = \theta_2^k (1 - \theta_2)^{n-k}$$

Now, we substitute these into our MAP comparison along with the priors $p(s = H) = \alpha$ and $p(s = T) = 1 - \alpha$.

The new minimum probability of error decision rule is to guess heads ($H$) if:
$$(1 - \theta_1)^k \theta_1^{n-k} \alpha > \theta_2^k (1 - \theta_2)^{n-k} (1 - \alpha)$$

Otherwise, guess tails ($T$).
