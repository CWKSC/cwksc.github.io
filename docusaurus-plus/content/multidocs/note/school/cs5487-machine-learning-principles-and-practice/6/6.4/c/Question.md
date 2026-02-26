---
title: Question
---
**Problem 6.4 Coin Tossing**

In this problem we will consider the traditional probability scenario of coin tossing. However, we will consider two variations. First, the coin is not fair. Denoting by $s$ the outcome of the coin toss (either $H$ or $T$) we have
$$p(s = H) = \alpha, \alpha \in [0, 1]. \quad (6.5)$$
Second, you do not observe the coin directly but have to rely on a friend that reports the outcome of the toss. Unfortunately your friend is unreliable, he will sometimes report heads when the outcome was tails and vice-versa. Denoting the report by $r$ we have
$$p(r = T | s = H) = \theta_1, \quad (6.6)$$
$$p(r = H | s = T) = \theta_2, \quad (6.7)$$
where $\theta_1, \theta_2 \in [0, 1]$. Your job is to, given the report from your friend, guess the outcome of the toss.

(c) You figured out that if you ask your friend to report the outcome of the toss various times, he will produce reports that are statistically independent. You then decide to ask him to report the outcome $n$ times, in the hope that this will reduce the uncertainty. (Note: there is still only one coin toss, but the outcome gets reported $n$ times). What is the new minimum probability of error decision rule?
