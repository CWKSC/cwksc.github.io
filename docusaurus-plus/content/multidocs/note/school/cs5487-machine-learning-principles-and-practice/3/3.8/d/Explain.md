---
title: Explain
---

## Intuition

We're trying to find the "best" guess for the coin's bias $\pi$. Different methods define "best" differently:

1.  **MLE (Maximum Likelihood)**: Asks "What value of $\pi$ makes the data we actually saw most probable?" The answer is exactly the fraction of heads we saw: $s/n$.
2.  **MAP (Maximum A Posteriori)**: Asks "Given our data AND our starting assumption (prior), what is the single most probable value of $\pi$?"

**The Uniform Prior Connection**
A "uniform prior" is mathematically saying "I have absolutely no preference for any value of $\pi$; they are all equally likely before I flip the coin."

Because we brought zero initial bias/knowledge to the table, our final peak belief (MAP) is dictated 100% by the data we saw. Therefore, MAP gives the exact same answer as MLE.

**Is one better?**
MLE and MAP (with uniform prior) give the same number, but the Bayesian _expected value_ (from part c, $\frac{s+1}{n+2}$) is often preferred in practice. Why? Because the peak (mode) of a skewed distribution isn't always the best representative value. The expected value (mean) takes the whole shape of the uncertainty into account, preventing extreme overly-confident predictions when we haven't seen much data yet.
