---
title: Answer
---

# Problem 3.8(a) Answer

## Pre-required Knowledge

1. **Bernoulli Distribution**: A discrete probability distribution of a random variable which takes the value 1 with probability $\pi$ and the value 0 with probability $1-\pi$.
    The probability mass function is given by:
    $$p(x|\pi) = \pi^x (1-\pi)^{1-x}$$
    for $x \in \{0, 1\}$.

2. **Independent and Identically Distributed (i.i.d.)**: We assume the samples in the dataset $\mathcal{D}$ are drawn independently from the same distribution.
    If events $A$ and $B$ are independent, then $P(A \cap B) = P(A)P(B)$. Generally, for independent samples $x_1, \dots, x_n$, the joint probability is the product of individual probabilities:
    $$p(x_1, \dots, x_n | \pi) = \prod_{i=1}^n p(x_i | \pi)$$

3. **Exponent Rules**:
    * $a^b \cdot a^c = a^{b+c}$
    * $(ab)^c = a^c b^c$

## Step-by-Step Proof

1. **Write down the likelihood of the dataset $\mathcal{D}$**:
    Assuming the samples $\mathcal{D} = \{x_1, \dots, x_n\}$ are i.i.d., the probability of observing the dataset given the parameter $\pi$ is the product of the probabilities of each individual sample.

    $$
    p(\mathcal{D}|\pi) = \prod_{i=1}^n p(x_i|\pi)
    $$

2. **Substitute the Bernoulli PDF**:
    Substitute Eq. (3.30) ($p(x|\pi) = \pi^x(1-\pi)^{1-x}$) into the product.

    $$
    p(\mathcal{D}|\pi) = \prod_{i=1}^n \left[ \pi^{x_i} (1-\pi)^{1-x_i} \right]
    $$

3. **Group the terms**:
    Using the properties of exponents, we can separate the $\pi$ terms and the $(1-\pi)$ terms.

    $$
    p(\mathcal{D}|\pi) = \left( \prod_{i=1}^n \pi^{x_i} \right) \cdot \left( \prod_{i=1}^n (1-\pi)^{1-x_i} \right)
    $$

4. **Apply product rule for exponents**:
    Recall that $\prod a^{b_i} = a^{\sum b_i}$.

    $$
    p(\mathcal{D}|\pi) = \pi^{\sum_{i=1}^n x_i} \cdot (1-\pi)^{\sum_{i=1}^n (1-x_i)}
    $$

5. **Simplify the exponents**:
    Let $s = \sum_{i=1}^n x_i$. This is the sum of the samples (number of successes/heads).
    The exponent for the second term is:
    $$
    \sum_{i=1}^n (1-x_i) = \sum_{i=1}^n 1 - \sum_{i=1}^n x_i = n - s
    $$
    Here $n$ is the total number of samples.

6. **Final Result**:
    Substitute $s$ and $n-s$ back into the equation.

    $$
    p(\mathcal{D}|\pi) = \pi^s (1-\pi)^{n-s}
    $$

    This matches Eq. (3.31).
