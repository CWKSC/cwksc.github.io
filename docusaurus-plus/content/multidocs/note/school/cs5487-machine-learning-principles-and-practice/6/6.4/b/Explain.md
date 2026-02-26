---
title: Explain
---
### Intuition

When $\theta_1 = \theta_2 = \theta$, it means your friend is equally unreliable regardless of the actual coin toss. They have a flat "lying/mistake rate" of $\theta$.

The simplified rule $\alpha > \theta$ is beautifully intuitive. It tells us to guess "heads" (what the friend reported) only if our prior confidence in the coin landing heads ($\alpha$) is stronger than the friend's tendency to lie ($\theta$).

**Analogy:**
Suppose your friend is a known prankster who lies 20% of the time ($\theta = 0.2$).
* If the coin is fair ($\alpha = 0.5$), then $0.5 > 0.2$. You trust the friend and guess heads. The coin is fair enough that a heads report is probably true.
* But what if the coin is heavily rigged to almost always land on tails, say it only lands on heads 10% of the time ($\alpha = 0.1$)? Now, $0.1 < 0.2$. Even though your friend *said* heads, it is actually more likely that the coin landed tails (as it usually does) and your friend is pulling their 20% prank, than the coin hitting its rare 10% heads chance. So, you ignore the friend and guess tails!
