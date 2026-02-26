---
title: Explain
---
### Intuition

Imagine you are a detective trying to figure out what really happened (the coin toss), but you only have a witness (your friend) who sometimes lies or makes mistakes.

To make the best guess, you need to balance two pieces of information:
1. **Your prior belief (The Coin):** How likely is the coin to land on heads in the first place? If it's a heavily weighted coin, you already have a strong suspicion before the friend even speaks.
2. **The witness's reliability (The Friend):** How likely is your friend to tell the truth when it's heads, versus how likely are they to falsely claim it's heads when it's actually tails?

The rule we derived simply weighs these two factors against each other.
* The left side of the equation, $(1 - \theta_1) \alpha$, represents the "weight of evidence" that the coin was actually heads AND the friend truthfully reported it.
* The right side, $\theta_2 (1 - \alpha)$, represents the "weight of evidence" that the coin was actually tails BUT the friend falsely reported heads.

You simply go with whichever scenario has the heavier weight of evidence. If it's more likely that a "heads" report came from a truthful heads toss than a lying tails toss, you guess heads.
