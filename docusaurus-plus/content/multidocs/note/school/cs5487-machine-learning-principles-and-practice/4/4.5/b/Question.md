---
title: Question
---

# Problem 4.5 Flying Bombs, part II – EM for mixtures of Poissons

Let's reconsider Problem 2.1, where we fit a Poisson distribution to the numbers of flying bombs hitting different areas in London. If we assume that the Germans were indeed targeting specific areas, then the bomb hit rate $\lambda$ would be higher for some squares (the targets), and lower for others (not the targets). Hence, the distribution over all squares should be a mixture of Poissons, with each Poisson component corresponding to squares with a particular hit rate. For $K = 2$, the components would correspond to target squares and non-target squares. For $K > 2$, one component would correspond to the target hit rate, while the other (non-target) components would have some gradation of hit rates (with squares far away from the target squares having lower hit rates).

**(b)** Implement your algorithm and run it for different values of $K \in \{1, 2, 3, 4, 5\}$ on the following data obtained from 2 cities (learn a separate mixture model for each city):

| city | number of hits ($k$) | 0 | 1 | 2 | 3 | 4 | 5 and over |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| London | number of cells with $k$ hits | 229 | 211 | 93 | 35 | 7 | 1 |
| Antwerp | number of cells with $k$ hits | 325 | 115 | 67 | 30 | 18 | 21 |

What conclusions can you make about the attacks on each city? Is there any evidence to suggest there is specific targeting of areas in London or Antwerp?
