---
title: Answer ZH
---

### 具備知識 (Prerequisites)

- 最大後驗估計 (Maximum A Posteriori (MAP) Estimation)
- 最小平方法與加權最小平方法 (Least Squares and Weighted Least Squares)

### 逐步推導 (Step-by-Step Derivation)

1.  **尋找 MAP 估計值**:
    最大後驗 (MAP) 估計值是後驗分佈 $p(\theta|\mathcal{D})$ 的眾數 (mode)。如同在 (a) 部分所推導的，因為後驗分佈是一個高斯分佈 $\mathcal{N}(\hat{\mu}_\theta, \hat{\Sigma}_\theta)$，而高斯分佈的眾數等於它的平均數，所以 MAP 估計值就是後驗平均數：

    $$
    \hat{\theta}_{MAP} = \hat{\mu}_\theta = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$

2.  **與其他估計方法的比較**:
    - **一般最小平方法 (Ordinary Least Squares, OLS)**：標準的最小平方法估計是基於假設雜訊是獨立同分佈的 (i.i.d., 即 $\Sigma = \sigma^2 I$) 且沒有先驗 (或者是一個表示沒有正則化的均勻無窮先驗)。OLS 的結果為：
      $$
      \hat{\theta}_{OLS} = (\Phi \Phi^T)^{-1} \Phi y
      $$
    - **加權最小平方法 (Weighted Least Squares, WLS)**：未加權的最小平方法可以擴展以處理異質變異 (heteroscedastic) 或相關的雜訊 $\Sigma$。WLS 估計值 (在具有共變異數 $\Sigma$ 的常態雜訊假設下，它與最大概似估計 MLE 一致) 為：
      $$
      \hat{\theta}_{WLS} = (\Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
      $$
    - **差異 (Difference)**：MAP 估計與 WLS 估計的差異，確切來說就是在反矩陣裡面加上了 $\Gamma^{-1}$ 這一項。

3.  **新項目 ($\Gamma^{-1}$) 的作用**:
    矩陣 $\Gamma^{-1}$ 是先驗分佈 $p(\theta)$ 的**精度矩陣 (precision matrix)** (共變異數的反矩陣)。
    - 它扮演著**正則化項 (regularization term)** 的角色。
    - 因為我們的先驗以零為中心 ($p(\theta) = \mathcal{N}(0, \Gamma)$)，$\Gamma^{-1}$ 在數學上會對具有較大數值的參數向量 $\theta$ 施加懲罰。
    - $\Gamma^{-1}$ 不讓參數無限制地增長以完美擬合訓練集中的雜訊，而是將 MAP 估計值拉向 $0$。

4.  **非零先驗精度的優勢 (Advantage of Non-Zero Prior Precision)**:
    是的，擁有一個非零的 $\Gamma^{-1}$ (意味著有限的先驗共變異數) 有顯著的優勢：
    - **防止過擬合 (Prevents Overfitting)**：透過懲罰較大的參數值，模型對訓練數據中的雜訊變得較不敏感，進而提升在未知數據上的泛化能力 (generalization)。
    - **數值穩定性 (Numerical Stability)**：在 $D > n$ (特徵數大於資料點數) 的情況下，或是當特徵之間高度共線性 (collinear) 時，矩陣 $\Phi \Sigma^{-1} \Phi^T$ 可能是不可逆的 (奇異矩陣，singular) 或病態的 (ill-conditioned)。加入一個正定矩陣 (positive-definite matrix) $\Gamma^{-1}$ 能確保 $(\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)$ 是嚴格正定的，從而能夠安全地進行反矩陣運算。
