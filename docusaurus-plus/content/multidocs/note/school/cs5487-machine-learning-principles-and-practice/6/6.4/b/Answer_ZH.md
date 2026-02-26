---
title: Answer ZH
---
### 先備知識 (Prerequisites)

* 代數化簡 (Algebraic Simplification)
* 機率不等式 (Probability Inequalities)

### 逐步推導 (Step-by-Step Derivation)

從 (a) 部分可知，決策規則是如果滿足以下條件則猜測正面：
$$(1 - \theta_1) \alpha > \theta_2 (1 - \alpha)$$

給定條件 $\theta_1 = \theta_2 = \theta$，我們將 $\theta$ 代入不等式中：
$$(1 - \theta) \alpha > \theta (1 - \alpha)$$

現在，我們化簡這個不等式：
$$\alpha - \theta \alpha > \theta - \theta \alpha$$

兩邊同時加上 $\theta \alpha$：
$$\alpha > \theta$$

因此，當錯誤率對稱時（$\theta_1 = \theta_2 = \theta$），最佳決策規則簡化為：如果正面的先驗機率 ($\alpha$) 嚴格大於朋友報告錯誤的機率 ($\theta$)，則猜測正面。
