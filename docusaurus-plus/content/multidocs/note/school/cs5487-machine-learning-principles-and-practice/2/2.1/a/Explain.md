---
title: Explain
---

# Explain: Maximum Likelihood Estimate for Poisson

## Intuition

The goal of Maximum Likelihood Estimation (MLE) is to find the parameter value that makes the observed data "most likely".
Imagine you have a coin. You flip it 10 times and get 7 heads. If the coin was fair ($p=0.5$), the probability of getting 7 heads is somewhat low. If the coin was biased towards heads ($p=0.7$), the probability is higher. MLE looks for the $p$ that maximizes this probability.

In this problem, we observe counts of bombs falling in different grid cells. We assume these counts follow a Poisson distribution with some unknown rate $\lambda$. We want to find the $\lambda$ that maximizes the probability of seeing exactly the bomb counts we observed.

## Why Log-Likelihood?

The likelihood function involves multiplying many probabilities together (because the samples are independent).
$$ L(\lambda) = p(k_1|\lambda) \times p(k_2|\lambda) \times \dots \times p(k_N|\lambda) $$
Differentiating a long product is hard (product rule is messy).
Taking the logarithm converts the product into a sum:
$$ \ln(a \times b) = \ln(a) + \ln(b) $$
$$ \ell(\lambda) = \ln(p(k_1|\lambda)) + \dots + \ln(p(k_N|\lambda)) $$
Differentiating a sum is much easier (linearity of derivative). Also, since logarithm is a strictly increasing function, the $\lambda$ that maximizes $\ell(\lambda)$ is the same $\lambda$ that maximizes $L(\lambda)$.

## Interpretation of the Result

The result $\hat{\lambda} = \frac{1}{N} \sum k_i$ is simply the **sample mean**.
This makes intuitive sense: for a Poisson distribution, the parameter $\lambda$ represents the expected (average) number of events. If we want to estimate this average from data, the most natural guess is the average of the data points we observed.
