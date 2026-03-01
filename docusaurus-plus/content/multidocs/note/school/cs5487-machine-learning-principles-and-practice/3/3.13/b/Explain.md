---
title: Explain
---

# The Positive-Negative Decomposition Trick

When optimizing mathematically, absolute value functions terms like $|x|$ are incredibly annoying because they have a "V" shape—they abruptly change direction at zero, meaning they are not differentiable there. Most standard, fast optimizers require smooth, differentiable curves.

### Overcoming the Absolute Value

How do we remove the $|x|$ while preserving the problem? We split any real number into two positive components: its "positive part" ($x^+$) and its "negative part" ($x^-$).
* If $x = 5$, then $x^+ = 5$ and $x^- = 0$.
* If $x = -3$, then $x^+ = 0$ and $x^- = 3$.

Notice how in both of these ideal cases:
1. $x = x^+ - x^-$
2. $|x| = x^+ + x^-$

This transformation perfectly replaces absolute values with pure addition, but it only works if **at least one of the variables is zero**. 

If we cheat and say $x^+ = 10, x^- = 5$ to represent $x=5$, then $x^+ + x^- = 15$, which does not equal $|x| = 5$.

### The Optimizer's Greed

Why are we guaranteed that the optimizer won't cheat?

Because the optimizer is trying to find the *minimum* cost! The term $\lambda (\theta^+_i + \theta^-_i)$ acts as a penalty. If the optimizer picked $\theta^+_i = 10, \theta^-_i = 5$, it pays a massive penalty of $15\lambda$. 

If it shifts those down by $5$ units each to $\theta^+_i = 5, \theta^-_i = 0$, the exact same prediction is made (since $5-0 = 10-5$), but the penalty drops strictly to $5\lambda$. The optimizer is "lazy" and greedy; it will never pay $15$ when it can pay $5$ for the exact same predictive behavior. 

Thus, the optimizer mathematically guarantees that one of the two parts converges strictly to zero, effectively replacing the jagged absolute value plot with mutually exclusive positive lines.
