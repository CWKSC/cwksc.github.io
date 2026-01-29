---
title: Answer ZH
---

# 問題 3.8(a) 答案

## 預備知識

1. **伯努利分佈 (Bernoulli Distribution)**：一個隨機變數的離散概率分佈，它以概率 $\pi$ 取值 1，以概率 $1-\pi$ 取值 0。
    其概率質量函數為：
    $$p(x|\pi) = \pi^x (1-\pi)^{1-x}$$
    其中 $x \in \{0, 1\}$。

2. **獨立同分佈 (Independent and Identically Distributed, i.i.d.)**：我們假設數據集 $\mathcal{D}$ 中的樣本是從相同分佈中獨立抽取的。
    如果事件 $A$ 和 $B$ 是獨立的，則 $P(A \cap B) = P(A)P(B)$。通常，對於獨立樣本 $x_1, \dots, x_n$，聯合概率是單個概率的乘積：
    $$p(x_1, \dots, x_n | \pi) = \prod_{i=1}^n p(x_i | \pi)$$

3. **指數法則**：
    * $a^b \cdot a^c = a^{b+c}$
    * $(ab)^c = a^c b^c$

## 分步證明

1. **寫出數據集 $\mathcal{D}$ 的似然函數**：
    假設樣本 $\mathcal{D} = \{x_1, \dots, x_n\}$ 是 i.i.d. 的，則在給定參數 $\pi$ 的情況下觀察到數據集的概率是每個單個樣本概率的乘積。

    $$
    p(\mathcal{D}|\pi) = \prod_{i=1}^n p(x_i|\pi)
    $$

2. **代入伯努利 PDF**：
    將公式 (3.30) ($p(x|\pi) = \pi^x(1-\pi)^{1-x}$) 代入乘積中。

    $$
    p(\mathcal{D}|\pi) = \prod_{i=1}^n \left[ \pi^{x_i} (1-\pi)^{1-x_i} \right]
    $$

3. **分組項**：
    利用指數的性質，我們可以分離 $\pi$ 項和 $(1-\pi)$ 項。

    $$
    p(\mathcal{D}|\pi) = \left( \prod_{i=1}^n \pi^{x_i} \right) \cdot \left( \prod_{i=1}^n (1-\pi)^{1-x_i} \right)
    $$

4. **應用指數乘積法則**：
    回顧 $\prod a^{b_i} = a^{\sum b_i}$。

    $$
    p(\mathcal{D}|\pi) = \pi^{\sum_{i=1}^n x_i} \cdot (1-\pi)^{\sum_{i=1}^n (1-x_i)}
    $$

5. **簡化指數**：
    設 $s = \sum_{i=1}^n x_i$。這是樣本的總和（成功/正面的次數）。
    第二項的指數為：
    $$
    \sum_{i=1}^n (1-x_i) = \sum_{i=1}^n 1 - \sum_{i=1}^n x_i = n - s
    $$
    這裡 $n$ 是樣本總數。

6. **最終結果**：
    將 $s$ 和 $n-s$ 代回方程中。

    $$
    p(\mathcal{D}|\pi) = \pi^s (1-\pi)^{n-s}
    $$

    這與公式 (3.31) 相符。
