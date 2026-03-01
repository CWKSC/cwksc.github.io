---
title: Question ZH
---

**問題 2.1 柏松分布 (Poisson distribution) 與飛行炸彈**

在第二次世界大戰期間，德國向倫敦發射了 V-1 和 V-2 飛行炸彈 (遠程導彈)。某些地區被擊中的次數多於其他地區，英國軍方想知道多次擊中是因為德軍瞄準特定區域，還是純粹出於偶然 (chance)。

為了分析這個問題，英國統計學家 R.D. Clarke 將倫敦市內 $144$ 平方公里的區域劃分成一個規則的網格，形成 $576$ 個單元格。在飛行炸彈是隨機落下的假設下，命中任何單元格的機率在所有單元格中都是恆定的。因此，各單元格的命中次數是來自一個共同隨機變數 $x$ 的獨立同分布 (i.i.d.) 樣本。

用於對固定時間段內發生的事件 (炸彈命中) 數量進行建模的一種自然分布是柏松分布 (Poisson distribution)，其公式為：

$$
p(x = k|\lambda) = \frac{1}{k!}e^{-\lambda}\lambda^k . \quad (2.1)
$$

其中 $k \in \{0, 1, 2, 3, \cdots\}$ 是一個計數值。參數 $\lambda$ 是事件的平均數量，且其期望值 (mean) 與變異數 (variance) 相同，即 $\mathbb{E}[x] = \text{var}(x) = \lambda$。

(a) 給定一組獨立同分布 (i.i.d.) 樣本 $\{k_1, \cdots, k_N\}$，推導 $\lambda$ 的最大概似估計值 (maximum-likelihood estimate, MLE)。
