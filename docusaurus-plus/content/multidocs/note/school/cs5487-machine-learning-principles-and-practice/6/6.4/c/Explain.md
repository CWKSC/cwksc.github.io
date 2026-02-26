---
title: Explain
---
### Intuition

Now, instead of asking your friend once, you interrogate them $n$ times about the *same* coin toss. Because they answer independently each time, they might give you a mix of "heads" and "tails" answers.

To make the best guess, we count up the evidence. Let's say they say "heads" $k$ times and "tails" $n-k$ times.
We calculate the probability of getting this exact mix of answers under two different realities:
1. **Reality A (It was actually Heads):** We multiply the chance of them truthfully saying heads $k$ times by the chance of them falsely saying tails $n-k$ times, and weight it by the coin's natural bias for heads ($\alpha$).
2. **Reality B (It was actually Tails):** We multiply the chance of them falsely saying heads $k$ times by the chance of them truthfully saying tails $n-k$ times, and weight it by the coin's natural bias for tails ($1-\alpha$).

Whichever reality produces a higher probability for the sequence of answers you actually heard is the reality you should bet on. The formula is just a mathematical way of tallying up the "truthful" vs "lying" probabilities for the entire sequence of interrogations.
