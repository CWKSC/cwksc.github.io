---
title: Explain
---

## Intuition

The "predictive distribution" asks: "Based on the data I've seen so far, what is the probability of the next coin toss being heads?"

Instead of just taking the single most likely value of the coin bias $\pi$ and plugging it in (which is what standard non-Bayesian methods do), the Bayesian approach averages out the predictions over _all possible_ values of $\pi$, weighted by how likely each value is (our posterior).

The result we get, $\frac{s+1}{n+2}$, is very beautiful.
Let's compare it to the standard (MLE) guess, which is just the fraction of heads we saw: $\frac{s}{n}$.

The Bayesian guess looks exactly like the standard guess, EXCEPT it pretends we saw **two extra imaginary coin flips**: one Head and one Tail.

- We add 1 to the number of heads ($s + 1$).
- We add 2 to the total number of flips ($n + 2$).

**Why is this helpful?**
Imagine you flip a coin just _once_ and it lands Heads.

- The standard math (MLE) says $\pi = 1/1 = 1.0$. It assumes this coin will _always_ land Heads forever. That's a huge jump to a conclusion!
- The Bayesian math (with a uniform prior) says $\pi = (1+1)/(1+2) = 2/3$. It essentially says: "I saw one Head, plus my starting baseline assumption of one imaginary Head and one imaginary Tail. So I think it favors Heads, but I'm not entirely certain yet."

This "imaginary data" idea is called Laplace smoothing, and it's a great way to handle uncertainty when you don't have much data, giving a more conservative and robust prediction.
