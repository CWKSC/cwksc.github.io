---
title: Explain
---

### Intuition

Imagine you are playing a carnival game where you have to guess the exact number of jellybeans in a jar.

* If you guess exactly right, you win a prize (loss = 0).
* If you are off by 1 jellybean, you get nothing (loss = 1).
* If you are off by 1000 jellybeans, you get nothing (loss = 1).

This is what the loss function looks like as $q \rightarrow 0$. It's an "all-or-nothing" scenario. It doesn't care *how* wrong you are; it only cares *if* you are wrong.

If you want to maximize your chances of winning this game, what should you guess? You should guess the single most likely number. You don't care about the average (mean) or the middle value (median) because being close doesn't count. You just want to pick the peak of the probability curve.

The peak of a probability distribution—the single most likely value—is called the **mode**.

Therefore, when the penalty for any mistake is exactly the same (0-1 loss), your best strategy is to simply pick the most probable outcome: the conditional mode.
