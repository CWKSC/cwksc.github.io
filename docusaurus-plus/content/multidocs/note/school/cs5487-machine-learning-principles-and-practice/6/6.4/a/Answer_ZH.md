---
title: Answer ZH
---
### 先備知識 (Prerequisites)

* 貝氏定理 (Bayes' Theorem)
* 最大後驗機率 (Maximum A Posteriori, MAP) 決策規則
* 最小錯誤機率 (Minimum Probability of Error)

### 逐步推導 (Step-by-Step Derivation)

為了最小化錯誤機率，我們應該使用最大後驗機率 (MAP) 決策規則。這意味著我們應該選擇能使後驗機率 $p(s | r = H)$ 最大化的結果 $s$。

我們需要比較 $p(s = H | r = H)$ 和 $p(s = T | r = H)。

根據貝氏定理：
$$p(s = H | r = H) = \frac{p(r = H | s = H) p(s = H)}{p(r = H)}$$
$$p(s = T | r = H) = \frac{p(r = H | s = T) p(s = T)}{p(r = H)}$$

因為分母 $p(r = H)$ 對兩者都是相同的，我們只需要比較分子：
$$p(r = H | s = H) p(s = H) \quad \text{vs} \quad p(r = H | s = T) p(s = T)$$

從問題描述中，我們知道先驗機率：
* $p(s = H) = \alpha$
* $p(s = T) = 1 - \alpha$

我們也知道報告的條件機率：
* $p(r = H | s = H) = 1 - p(r = T | s = H) = 1 - \theta_1$
* $p(r = H | s = T) = \theta_2$

將這些代入我們的比較中，如果滿足以下條件，我們應該猜測正面 ($H$)：
$$(1 - \theta_1) \alpha > \theta_2 (1 - \alpha)$$

否則，我們應該猜測反面 ($T$)。（如果它們完全相等，猜測任何一個都會產生相同的錯誤機率）。
