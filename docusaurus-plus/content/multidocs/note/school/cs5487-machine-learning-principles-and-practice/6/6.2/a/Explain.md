---
title: Explain
---

### Intuition

Imagine you are trying to guess a person's weight ($y$) based on their height ($x$). You know the distribution of weights for people of that specific height, $p(y|x)$.

If you guess a weight $g(x)$, and the actual weight is $y$, your "penalty" or "loss" is the squared difference between your guess and the truth: $(g(x) - y)^2$. This means being off by 2 kg is four times worse than being off by 1 kg. Large errors are penalized very heavily.

Because large errors are so costly, you want to pick a guess that balances out the extremes. You don't want to pick a value that might be very far from a likely true value.

Mathematically, the value that minimizes the sum of squared distances to all points in a distribution is the **mean** (or average). Think of the mean as the "center of mass" of the distribution. If you place your guess at the center of mass, you minimize the squared distances to all possible actual weights.

Therefore, to minimize your expected squared penalty, your best guess is the average weight of all people with that height: the conditional mean $\mathbb{E}[y|x]$.
