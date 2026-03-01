---
title: Answer ZH
---
## 必備知識 (Prerequisites)
* 獨立同分佈假設 (Independent and Identically Distributed, i.i.d.)
* 伯努利分佈 (Bernoulli Distribution)
* 聯合機率 (Joint Probability)

## 逐步推導 (Step-by-Step Derivation)

1.  **假設獨立同分佈 (i.i.d.)**：樣本集 $\mathcal{D} = \{x_1, \cdots, x_n\}$ 獨立地從同一個伯努利分佈中抽取。因此，給定參數 $\pi$ 的整個資料集的聯合機率 (joint probability) 是各個機率的乘積。
    $$p(\mathcal{D}|\pi) = p(x_1, \cdots, x_n | \pi) = \prod_{i=1}^n p(x_i|\pi)$$

2.  **代入機率質量函數 (Probability mass function)**：對於單個樣本 $x_i$，$p(x_i|\pi) = \pi^{x_i} (1 - \pi)^{1-x_i}$。
    $$p(\mathcal{D}|\pi) = \prod_{i=1}^n \left[ \pi^{x_i} (1 - \pi)^{1-x_i} \right]$$

3.  **簡化表達式**：將底數為 $\pi$ 和 $(1-\pi)$ 的項分別合併。
    $$p(\mathcal{D}|\pi) = \pi^{\sum_{i=1}^n x_i} (1 - \pi)^{\sum_{i=1}^n (1-x_i)}$$

4.  **代入充分統計量 (Sufficient statistic)**：令 $s = \sum_{i=1}^n x_i$。則 $(1-\pi)$ 的指數變為 $\sum_{i=1}^n 1 - \sum_{i=1}^n x_i = n - s$。
    $$p(\mathcal{D}|\pi) = \pi^s (1 - \pi)^{n-s}$$
    這就完成了證明。
