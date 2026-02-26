---
title: Answer ZH
---
### 先備知識 (Prerequisites)

* 指數增長/衰減 (Exponential Growth/Decay)
* 概似比 (Likelihood Ratio)

### 逐步推導 (Step-by-Step Derivation)

從 (c) 部分可知，決策規則是如果滿足以下條件則猜測正面：
$$(1 - \theta_1)^k \theta_1^{n-k} \alpha > \theta_2^k (1 - \theta_2)^{n-k} (1 - \alpha)$$

我們已知兩個條件：
1. 對稱的錯誤率：$\theta_1 = \theta_2 = \theta$
2. 報告序列「全為正面」：這意味著 $k = n$ 且 $n - k = 0$。

將這些條件代入規則中：
$$(1 - \theta)^n \theta^0 \alpha > \theta^n (1 - \theta)^0 (1 - \alpha)$$
$$(1 - \theta)^n \alpha > \theta^n (1 - \alpha)$$

假設 $\theta > 0$，我們可以重新排列它以形成概似比：
$$\left(\frac{1 - \theta}{\theta}\right)^n > \frac{1 - \alpha}{\alpha}$$

這是在這些特定條件下猜測正面的簡化決策規則。
