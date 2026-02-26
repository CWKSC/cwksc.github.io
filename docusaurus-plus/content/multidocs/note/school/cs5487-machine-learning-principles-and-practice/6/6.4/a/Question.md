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

(a) Given that your friend reports heads, what is the optimal decision function in the minimum probability of error sense? That is, when should you guess heads, and when should you guess tails?
