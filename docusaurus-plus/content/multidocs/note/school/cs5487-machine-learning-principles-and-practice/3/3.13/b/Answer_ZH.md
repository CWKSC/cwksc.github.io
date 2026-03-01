---
title: Answer ZH
---

## 先決條件 (Prerequisites)

- 限制最佳化 (Constrained Optimization)
- 目標函數 (Objective Functions)

## 逐步推導 (Step-by-Step Derivation)

1. **分析限制條件:**
   令 $\theta_i = \theta^+_i - \theta^-_i$ 且受限於 $\theta^+_i \geq 0$ 與 $\theta^-_i \geq 0$。我們想要證明在最佳化目標下，最小化 $\lambda |\theta^+_i - \theta^-_i|$ 等價於最小化 $\lambda (\theta^+_i + \theta^-_i)$。

2. **絕對值表示:**
   注意根據定義：
   $$ |\theta_i| = |\theta^+\_i - \theta^-\_i| $$
   我們知道對於任何正數，$|\theta^+\_i - \theta^-\_i| \leq \theta^+\_i + \theta^-\_i$，因為等號右邊是兩個正數之和，左邊是它們的絕對差。若且唯若 $\theta^+_i = 0$ 或 $\theta^-_i = 0$（或兩者皆為 0）時，等號才成立。

3. **最佳解時的行為 (Behavior at the Optimum):**
   假設在最佳解時，存在一個索引 $i$ 使得 $\theta^+_i > 0$ 且 $\theta^-_i > 0$ 同時成立。令 $c = \min(\theta^+_i, \theta^-_i) > 0$。
   我們可以定義一組新的變數：
   $$ (\theta^+_i)_{new} = \theta^+_i - c $$
   $$ (\theta^-\_i)_{new} = \theta^-\_i - c $$

   請注意兩件事：
   - $\theta_i$ 的值保持不變：
     $$ (\theta^+_i)_{new} - (\theta^-_i)_{new} = (\theta^+\_i - c) - (\theta^-\_i - c) = \theta^+\_i - \theta^-\_i = \theta_i $$
     因此，平方損失項 $ \frac{1}{2} \|y - \Phi^T(\theta^+ - \theta^-)\|^2 $ 完全沒有改變。
   - 然而，(3.63) 中的正則化總和嚴格下降了：
     $$ (\theta^+_i)_{new} + (\theta^-_i)_{new} = \theta^+\_i - c + \theta^-\_i - c = (\theta^+\_i + \theta^-\_i) - 2c < (\theta^+\_i + \theta^-\_i) $$

   因為我們的目標是 _最小化_ 成本函數，任何使得 $\theta^+_i > 0$ 和 $\theta^-_i > 0$ 同時成立的解都不可能是真正的最小值。最佳化器總是會傾向於從兩者中都減去 $c$，直到其中至少一個達到零，從而嚴格降低目標值。

4. **結論:**
   因此，在最佳解處，對於每一個 $i$，要麼 $\theta^+_i = 0$，要麼 $\theta^-_i = 0$。
   當其中至少有一個為零時，絕對值變成：
   $$ |\theta^+\_i - \theta^-\_i| = \theta^+\_i + \theta^-\_i $$
   由於最佳解處具有這個屬性，我們可以在 (3.62) 中安全地將不可微的 $|\theta^+_i - \theta^-_i|$ 取代為 (3.63) 中簡單的線性加總 $(\theta^+_i + \theta^-_i)$。 這就在不改變最佳解的情況下，將問題轉換成一個簡單得多的形式。
