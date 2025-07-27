# Rule-Based Classification 基於規則的分類

[5.5 Decision Rules | Interpretable Machine Learning](https://christophm.github.io/interpretable-ml-book/rules.html)

It is good: [Rule Based Classification | An Explorer of Things](https://chih-ling-hsu.github.io/2017/03/21/rule-based-classification)

[从零开始-Machine Learning学习笔记(31)-规则学习_first-order inductive learner-CSDN博客](https://blog.csdn.net/kabuto_hui/article/details/84594421)

- Conjunct 
- Antecedent
- Consequence

## Building Rules

Direct Method
- CN2
- RIPPER

Indirect Method
- C4.5 (extract rules from an unpruned decision tree)

## Class-based ordering 基於類別的排序

> Decreasing order of prevalence or misclassification cost per classs

## Sequential covering 順序覆蓋

1. Add Rule
2. Remove cover data point
3. Loop (1) (2)

例如 CN2 和 RIPPER

CN2 use Specific-to-General Strategy 特定到通用策略

RIPPER use General-to-Specific Strategy 通用到特定策略

## PART (partial tree) decision list

Generate rule from decision tree

## ZeroR

[ZeroR-baseline分类器 - 愚人_同乐 - 博客园](https://www.cnblogs.com/7899-89/p/3630193.html)

Just Y = majority class

## OneR

[5.5.1 Learn Rules from a Single Feature (OneR)](https://christophm.github.io/interpretable-ml-book/rules.html#learn-rules-from-a-single-feature-oner)

## First-Order Inductive Learner (FOIL) Information Gain

[:: KDnet - Find information and resources on Machine Learning, Knowledge Discovery, Data Mining, Case-based Reasoning, and Knowledge Acquisition ::](https://www-ai.cs.tu-dortmund.de/kdnet/auto?self=$81d91e8ddbd8094353)

$$
\text{FOIL\_Gain} = p' \text{ } (log \frac{p'}{p' + n'} - log \frac{p}{p + n})
$$

## FOIL_Prune

$$
\text{FOIL\_Prune} = \frac{p - n}{p + n}
$$


## RIPPER

RIPPER (Repeated Incremental Pruning to Produce Error Reduction)

[Ripper Algorithm - GeeksforGeeks](https://www.geeksforgeeks.org/ripper-algorithm/)

> RIPPER (重複增量修剪以減少錯誤)是順序覆蓋演算法的變體
>
> RIPPER 更為複雜，它使用後處理階段（規則修剪）來最佳化決策清單（或集合）
>
> RIPPER 可以在有序或無序模式下運行，並產生決策清單或決策集



