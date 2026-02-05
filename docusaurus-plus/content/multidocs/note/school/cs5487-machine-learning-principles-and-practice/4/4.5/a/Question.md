---
title: Question
---

## Problem 4.5 Flying Bombs, part II – EM for mixtures of Poissons

Let's reconsider the [Problem 2.1], where we fit a Poisson distribution to the numbers of flying bombs hitting different areas in London. If we assume that the Germans were indeed targeting specific areas, then the bomb hit rate $\lambda$ would be higher for some squares (the targets), and lower for others (not the targets). Hence, the distribution over all squares should be a mixture of Poissons, with each Poisson component corresponding to squares with a particular hit rate. For $K = 2$, the components would correspond to target squares and non-target squares. For $K > 2$, one component would correspond to the target hit rate, while the other (non-target) components would have some gradation of hit rates (with squares far away from the target squares having lower hit rates).

(a) Consider the mixture of Poisson distribution

$$
p(x=k|\theta) = \sum_{j=1}^K \pi_j \frac{1}{k!} e^{-\lambda_j} \lambda_j^k,
$$

where $\lambda_j$ is the rate parameter for component $j$, and $\theta = \{\lambda_j, \pi_j\}_{j=1}^K$ the parameters of the mixture. Derive the EM algorithm to estimate the parameters of the model given samples $X = \{x_1, \dots, x_n\}$. How is the M-step related to the ML estimate for a Poisson (Problem 2.1)?
