---
title: Answer ZH
---

## 逐步解答

1. **分解 (Decomposition)**:
    我們將每個權重 $\theta_i$ 分解為兩個非負部分：$\theta_i = \theta_i^+ - \theta_i^-$，其中 $\theta_i^+, \theta_i^- \ge 0$。
    通常，我們希望 $\theta_i^+ = \max(0, \theta_i)$ 和 $\theta_i^- = \max(0, -\theta_i)$。在這種情況下，它們之中至少有一個為零。

2. **目標函數的差異**:
    式 (3.62) 使用 $|\theta_i^+ - \theta_i^-|$。
    式 (3.63) 使用 $(\theta_i^+ + \theta_i^-)$。
    由於 $\theta_i^+, \theta_i^- \ge 0$，我們知道 $|\theta_i^+ - \theta_i^-| \le \theta_i^+ + \theta_i^-$，等號成立 *若且唯若 (if and only if)* $\theta_i^+$ 或 $\theta_i^-$ 中至少有一個為零（即 $\theta_i^+ \cdot \theta_i^- = 0$）。

3. **優化邏輯**:
    假設我們有一個候選解，對於某個索引 $i$，$\theta_i^+ > 0$ 和 $\theta_i^- > 0$ 同時成立。
    令 $m = \min(\theta_i^+, \theta_i^-) > 0$。
    我們可以創建一個新解：
    $\tilde{\theta}_i^+ = \theta_i^+ - m$
    $\tilde{\theta}_i^- = \theta_i^- - m$
    實際權重 $\theta_i$ 保持不變：$\tilde{\theta}_i^+ - \tilde{\theta}_i^- = (\theta_i^+ - m) - (\theta_i^- - m) = \theta_i^+ - \theta_i^- = \theta_i$。
    第一項（損失項）僅取決於差值，因此不變。

    然而，考慮 (3.63) 中的懲罰項：
    原和為 $(\theta_i^+ + \theta_i^-)$。
    新和為 $(\tilde{\theta}_i^+ + \tilde{\theta}_i^-) = (\theta_i^+ - m + \theta_i^- - m) = (\theta_i^+ + \theta_i^-) - 2m$。
    因為 $m > 0$，新的目標函數值嚴格變小！
    因此，任何兩者均為正的解都**不是最優的**。優化器會將其中至少一個驅動為零以最小化目標函數。

4. **結論**:
    在最優點，對於每個 $i$，要麼 $\theta_i^+=0$，要麼 $\theta_i^-=0$（或兩者皆為 0）。
    在這種情況下，$|\theta_i^+ - \theta_i^-| = \theta_i^+ + \theta_i^-$。
    因此，最小化 (3.63) 會自動導致滿足此屬性的解，使其等價於最小化 (3.62)。
