---
title: Question ZH
---

# 問題 1.10 配方法 (Completing the square)

令 $x, b \in \mathbb{R}^n$, $A \in \mathbb{S}^n$, $c \in \mathbb{R}$, 且令 $f(x)$ 為 $x$ 的二次函數，

$$
f(x) = x^T A x - 2x^T b + c. \qquad (1.28)
$$

證明 $f(x)$ 可以重寫為以下形式

$$
f(x) = (x - d)^T A (x - d) + e, \qquad (1.29)
$$

其中

$$
d = A^{-1}b, \qquad (1.30)
$$

$$
e = c - d^T A d = c - b^T A^{-1} b. \qquad (1.31)
$$

將二次函數 (1.28) 重寫為 (1.29) 的過程稱為「配方法」(completing the square)，這在處理高斯分佈的乘積時非常有用。
