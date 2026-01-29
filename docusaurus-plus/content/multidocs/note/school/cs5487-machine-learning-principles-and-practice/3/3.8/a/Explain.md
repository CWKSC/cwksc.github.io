---
title: Explain
---

# Problem 3.8(a) Explanation

## The Concept of Likelihood

The function $p(\mathcal{D}|\pi)$ is known as the **likelihood function**. It tells us how likely the observed data $\mathcal{D}$ is for a specific value of the parameter $\pi$.

* If we were observing a single coin flip ($n=1$), the likelihood would simply be $\pi$ if heads ($x=1$) and $1-\pi$ if tails ($x=0$).
* When we observe $n$ repeated independent flips, the combined probability is the product of the individual probabilities.

## Derivation Logic

The core of the derivation relies on counting outcomes.
Since a Bernoulli variable $x_i$ can only be 0 or 1:
* When $x_i = 1$, the term contributes a factor of $\pi$.
* When $x_i = 0$, the term contributes a factor of $(1-\pi)$.

Therefore, if we observe the sequence $1, 0, 1, 1, 0$:
* We have three $1$'s and two $0$'s.
* The probability is $\pi \cdot (1-\pi) \cdot \pi \cdot \pi \cdot (1-\pi) = \pi^3 (1-\pi)^2$.
* Here, $n=5$ and the sum $s = 1+0+1+1+0 = 3$.
* The number of $0$'s is $n-s = 5-3 = 2$.
* The formula $\pi^s (1-\pi)^{n-s}$ generalizes this counting process.

## Sufficient Statistic

The quantity $s = \sum x_i$ is called a **sufficient statistic** for $\pi$. This means that $s$ contains *all* the information in the data $\mathcal{D}$ that is relevant for estimating $\pi$. Knowing the exact order of heads and tails (e.g., whether we got HHT or HTH) does not change our estimate of the bias $\pi$; only the total number of heads ($s$) and total number of flips ($n$) matter.

The result $p(\mathcal{D}|\pi) = \pi^s (1-\pi)^{n-s}$ basically says the likelihood depends on the data only through $s$.
