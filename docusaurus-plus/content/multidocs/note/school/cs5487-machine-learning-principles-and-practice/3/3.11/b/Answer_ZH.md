---
title: Answer ZH
---

## 預備知識

1.  **MAP 估計 (Maximum A Posteriori)**: 最大後驗機率估計尋找後驗分佈的眾數（峰值）。
2.  **高斯分佈的眾數**: 對於高斯分佈 $\mathcal{N}(\mu, \Sigma)$，眾數等於平均值 $\mu$。
3.  **最小二乘法解 (Least Squares Solution)**: $\hat{\theta}_{LS} = (\Phi \Phi^T)^{-1} \Phi y$（使用本題符號）。
4.  **加權最小二乘法 (Weighted Least Squares)**: $\hat{\theta}_{WLS} = (\Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y$。

## 逐步解答

1.  **確定 $\hat{\theta}_{MAP}$**:
    由於後驗 $p(\theta|\mathcal{D})$ 是平均值為 $\hat{\mu}_\theta$ 的高斯分佈，機率密度函數的最大值正好發生在平均值處。因此：
    $$
    \hat{\theta}_{MAP} = \hat{\mu}_\theta = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$

2.  **與加權最小二乘法 (WLS) 的比較**:
    WLS 估計源於考慮觀測共變異數 $\Sigma$ 時的最大似然 (ML) 估計：
    $$
    \hat{\theta}_{WLS} = (\Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$
    **差異**: MAP 估計在逆矩陣內部的「散佈矩陣 (scatter matrix)」$\Phi \Sigma^{-1} \Phi^T$ 上增加了一個額外的項 **$\Gamma^{-1}$**。

3.  **與普通最小二乘法 (OLS) 的比較**:
    OLS 假設 $\Sigma = \sigma^2 I$（獨立同分佈雜訊，常數變異數）且沒有先驗。
    $$
    \hat{\theta}_{LS} = (\Phi \Phi^T)^{-1} \Phi y
    $$
    **差異**: MAP 包含雜訊的共變異數結構 $\Sigma^{-1}$（處理異方差性或相關雜訊）以及先驗精確度 $\Gamma^{-1}$。

4.  **新項的作用**:
    **$\Gamma^{-1}$** 表示 **先驗精確度 (prior precision)**（逆共變異數）。
    *   它作為正則化項 (regularizer)。
    *   它將估計值「拉」向先驗平均值（在本題中為 0）。
    *   在數學上，它有效地向被求逆的矩陣的對角線（或特徵值）添加正值。

5.  **優勢**:
    是的，將 $\Gamma^{-1}$ 設定為非零值（即使用先驗）有顯著優勢：
    *   **正則化 (Regularization)**: 它防止過度擬合 (Overfitting)。當數據稀少或有雜訊時，先驗限制參數不會爆炸。
    *   **數值穩定性 (Numerical Stability)**: 如果 $\Phi \Sigma^{-1} \Phi^T$ 是奇異的或病態的 (ill-conditioned)（例如，數據點少於特徵數，或特徵共線），則 ML/LS 的逆矩陣不存在或不穩定。加上 $\Gamma^{-1}$（正定矩陣）使得矩陣可逆（$\hat{\Sigma}_\theta$ 總是存在）。
