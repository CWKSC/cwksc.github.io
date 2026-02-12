---
title: Question ZH
---

## 問題 5.1 核密度估計器的偏差和方差

(b) 證明估計器的方差有界為
$$
\text{var}_X (\hat{p}(x)) \le \frac{1}{nh^d} \max_x (k(x)) \mathbb{E}[\hat{p}(x)]. \tag{5.2}
$$
提示：以下性質會有幫助：
$$
\text{var}(x) = \mathbb{E}[x^2] - (\mathbb{E}[x])^2 \le \mathbb{E}[x^2], \tag{5.3}
$$
$$
k\left(\frac{x - x_i}{h}\right) \le \max_x k(x), \tag{5.4}
$$
以及問題 1.4。
