---
title: Answer ZH
---
### 先備知識 (Prerequisites)

* 條件獨立 (Conditional Independence)
* 最大後驗機率 (Maximum A Posteriori, MAP) 決策規則
* 聯合機率 (Joint Probability)

### 逐步推導 (Step-by-Step Derivation)

令 $n$ 次獨立報告的序列為 $R = (r_1, r_2, \dots, r_n)$。
令 $k$ 為朋友報告正面 ($H$) 的次數，$n-k$ 為朋友報告反面 ($T$) 的次數。

我們希望使用 MAP 決策規則，比較後驗機率 $p(s = H | R)$ 和 $p(s = T | R)$。
這等同於比較聯合機率：
$$p(R | s = H) p(s = H) \quad \text{vs} \quad p(R | s = T) p(s = T)$$

因為在給定真實結果 $s$ 的情況下，報告在統計上是獨立的，所以聯合條件機率是個別條件機率的乘積：
$$p(R | s = H) = \prod_{i=1}^n p(r_i | s = H) = p(r = H | s = H)^k \cdot p(r = T | s = H)^{n-k}$$
$$p(R | s = H) = (1 - \theta_1)^k \theta_1^{n-k}$$

同理，對於 $s = T$：
$$p(R | s = T) = \prod_{i=1}^n p(r_i | s = T) = p(r = H | s = T)^k \cdot p(r = T | s = T)^{n-k}$$
$$p(R | s = T) = \theta_2^k (1 - \theta_2)^{n-k}$$

現在，我們將這些連同先驗機率 $p(s = H) = \alpha$ 和 $p(s = T) = 1 - \alpha$ 代入我們的 MAP 比較中。

新的最小錯誤機率決策規則是，如果滿足以下條件則猜測正面 ($H$)：
$$(1 - \theta_1)^k \theta_1^{n-k} \alpha > \theta_2^k (1 - \theta_2)^{n-k} (1 - \alpha)$$

否則，猜測反面 ($T$)。
