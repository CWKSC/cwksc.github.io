---
title: Answer
---
## Prerequisites
* Independent and Identically Distributed (i.i.d.) Assumption
* Bernoulli Distribution
* Joint Probability

## Step-by-Step Derivation

1.  **Assume i.i.d. samples**: The set of samples $\mathcal{D} = \{x_1, \cdots, x_n\}$ are drawn independently from the same Bernoulli distribution. Therefore, the joint probability of the entire dataset given the parameter $\pi$ is the product of the individual probabilities.
    $$p(\mathcal{D}|\pi) = p(x_1, \cdots, x_n | \pi) = \prod_{i=1}^n p(x_i|\pi)$$

2.  **Substitute the probability mass function**: For a single sample $x_i$, $p(x_i|\pi) = \pi^{x_i} (1 - \pi)^{1-x_i}$.
    $$p(\mathcal{D}|\pi) = \prod_{i=1}^n \left[ \pi^{x_i} (1 - \pi)^{1-x_i} \right]$$

3.  **Simplify the expression**: Group the terms with base $\pi$ and base $(1-\pi)$.
    $$p(\mathcal{D}|\pi) = \pi^{\sum_{i=1}^n x_i} (1 - \pi)^{\sum_{i=1}^n (1-x_i)}$$

4.  **Substitute the sufficient statistic**: Let $s = \sum_{i=1}^n x_i$. The exponent for $(1-\pi)$ becomes $\sum_{i=1}^n 1 - \sum_{i=1}^n x_i = n - s$.
    $$p(\mathcal{D}|\pi) = \pi^s (1 - \pi)^{n-s}$$
    This completes the proof.
