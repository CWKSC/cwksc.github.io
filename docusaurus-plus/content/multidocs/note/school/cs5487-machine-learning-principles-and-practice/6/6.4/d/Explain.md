---
title: Explain
---
### Intuition

Imagine your friend is generally reliable, meaning they tell the truth more often than they lie ($\theta < 0.5$). This makes the fraction $\frac{1 - \theta}{\theta}$ greater than 1.

When you ask them $n$ times and they say "heads" *every single time*, the left side of our equation, $\left(\frac{1 - \theta}{\theta}\right)^n$, grows exponentially larger with each question.

The right side of the equation, $\frac{1 - \alpha}{\alpha}$, represents your initial skepticism. If the coin is heavily biased towards tails (a very small $\alpha$), this number is very large.

**The Interpretation:**
Even if you are initially extremely skeptical that the coin landed on heads (because it's a heavily tails-biased coin), if a mostly-reliable friend insists it was heads over and over and over again, their repeated, independent testimonies will eventually overpower your initial skepticism.

As $n$ gets larger, the accumulated evidence from the consistent reports will eventually surpass the threshold of your prior doubt, and you will be convinced to guess "heads". It shows how repeated independent evidence can overcome strong prior biases.
