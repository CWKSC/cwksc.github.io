---
title: Explain
---
## Intuition

In Bayesian statistics, priors allow us to inject our "gut feeling" or previous knowledge before seeing any actual data. Let's look at the two new scenarios:

**Scenario 1: Optimistic Prior ($p_1$)**
The prior $p_1(\pi) = 2\pi$ draws a straight line that goes UP from 0 to 1. This means before flipping any coins, we strongly suspect this coin is rigged to land on Heads. 

Mathematically, this prior equation exactly matches what the standard formula would look like if we had mysteriously observed **1 extra Head** before the experiment even started. 
- So when we calculate the MAP estimate, instead of just using our actual data ($s/n$), we mix in our virtual data: $(s + 1) / (n + 1)$. This makes our final estimate slightly higher (more optimistic) than the standard MLE.

**Scenario 2: Pessimistic Prior ($p_0$)**
The prior $p_0(\pi) = 2 - 2\pi$ draws a line going DOWN. We suspect the coin is rigged to land on Tails.

Mathematically, this acts as if we saw **1 extra Tail** before starting.
- Our total flips ($n$) increases by 1 because of the virtual flip, but our number of heads ($s$) stays the same. The MAP estimate becomes $s / (n + 1)$. This pulls our final guess lower than the standard MLE.

**Virtual Samples: The Takeaway**
The beauty of conjugate priors (like using Beta distributions for Bernoulli coin flips) is that the complex calculus boils down to simple arithmetic: **Priors are just imaginary, virtual coin flips that you add to your real data.** 
* Want to assume the coin is fair? Add 1 imaginary Head and 1 imaginary Tail. 
* Strongly suspect it favors Heads? Add lots of imaginary Heads!
