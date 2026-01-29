---
title: Answer ZH
---

## 預備知識

1.  **涉及矩陣的極限**: 理解當 $k \to 0$ 或 $k \to \infty$ 時 $(A + kB)^{-1}$ 的行為。
2.  **後驗公式**:
    $$
    \hat{\Sigma}_\theta = (\frac{1}{\alpha} I + \frac{1}{\sigma^2} \Phi \Phi^T)^{-1}
    $$
    $$
    \hat{\mu}_\theta = \hat{\Sigma}_\theta \frac{1}{\sigma^2} \Phi y
    $$

## 逐步解答

1.  **情況 1: $\alpha \to \infty$ (無限先驗變異數)**
    *   **含義**: 先驗變得「平坦」或無資訊。我們對 0 沒有先驗偏好。$\frac{1}{\alpha} \to 0$。
    *   **共變異數**:
        $$
        \hat{\Sigma}_\theta \to (0 \cdot I + \frac{1}{\sigma^2} \Phi \Phi^T)^{-1} = \sigma^2 (\Phi \Phi^T)^{-1}
        $$
        這是 OLS 的標準變異數估計。
    *   **平均值**:
        $$
        \hat{\mu}_\theta \to [\sigma^2 (\Phi \Phi^T)^{-1}] \frac{1}{\sigma^2} \Phi y = (\Phi \Phi^T)^{-1} \Phi y
        $$
        平均值完全變成了 **最小二乘法 (最大似然)** 估計量。

2.  **情況 2: $\alpha \to 0$ (零先驗變異數)**
    *   **含義**: 先驗 $p(\theta)$ 變成了一個位於 0 的狄拉克 $\delta$ 函數。在看到數據之前，我們就無限確定 $\theta = 0$。$\frac{1}{\alpha} \to \infty$。
    *   **共變異數**: $\frac{1}{\alpha} I$ 項主導了逆矩陣。矩陣變得「無限大」，所以其逆矩陣趨近於 0。
        $$
        \hat{\Sigma}_\theta \to 0
        $$
    *   **平均值**: 先驗精確度主導數據精確度。
        $$
        \hat{\mu}_\theta \to 0
        $$
        數據被忽略，後驗停留在先驗平均值 (0)。

3.  **情況 3: $\sigma^2 \to 0$ (零觀測雜訊)**
    *   **含義**: 我們完全信任數據。精確度 $\frac{1}{\sigma^2} \to \infty$。
    *   **共變異數**: 數據項佔主導地位。
        $$
        \hat{\Sigma}_\theta = \sigma^2 (\dots)^{-1} \to 0
        $$
        我們對 $\theta$ 的不確定性消失（假設 $\Phi \Phi^T$ 是滿秩的，即我們有足夠的數據來唯一確定 $\theta$）。
    *   **平均值**: 數據項 ($\frac{1}{\sigma^2}$) 壓倒了先驗項 ($\frac{1}{\alpha}$)。
        $$
        \hat{\mu}_\theta \to (\Phi \Phi^T)^{-1} \Phi y
        $$
        （假設 $\Phi \Phi^T$ 可逆）。估計值收斂到對數據點進行插值的解。如果 $\Phi \Phi^T$ 不可逆（參數多於數據），極限是精確擬合數據的最小範數解。
