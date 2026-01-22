---
title: Question
---

## Problem 2.1 The Poisson distribution and flying bombs

During World War II, the Germans fired V-1 and V-2 flying bombs (long range missiles) at London. Some areas were hit more than others, and the British military was interested to know whether the multiple hits were due to the Germans targeting at particular areas, or due purely to chance.
To analyze this problem, the British statistician R.D. Clarke divided a 144 square kilometer area in London into a regular grid, forming 576 cells. Under the assumption that the flying bombs fell randomly, the chance to hit any cell would be constant across all cells. Hence, the hit counts of the cells are i.i.d samples from a common random variable $x$.
A natural distribution for modeling the number of events (bomb hits) occurring within a fixed time period is the Poisson distribution, given by

$$
p(x = k | \lambda) = \frac{1}{k!} e^{-\lambda} \lambda^k \tag{2.1}
$$

where $k \in \{0, 1, 2, 3, \cdots\}$ is a counting number. The parameter $\lambda$ is the average number of events, and the mean and variance are the same $\mathbb{E}[x] = \text{var}(x) = \lambda$.

(a) Derive the maximum-likelihood estimate of $\lambda$, given a set of i.i.d. samples $\{k_1, \cdots, k_N\}$.
