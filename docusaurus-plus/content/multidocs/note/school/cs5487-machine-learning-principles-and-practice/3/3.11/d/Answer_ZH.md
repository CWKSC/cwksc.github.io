---
title: Answer ZH
---
### 具備知識 (Prerequisites)
- 來自 (a) 的後驗分佈公式 (Posterior Distribution formulas)
- 極限與漸近行為 (Limits and Asymptotic Behavior)

### 逐步推導 (Step-by-Step Derivation)

由 (a) 部分的結果並代入 $\Gamma = \alpha I$ 且 $\Sigma = \sigma^2 I$：
後驗共變異數：$\hat{\Sigma}_\theta = (\frac{1}{\alpha}I + \frac{1}{\sigma^2}\Phi\Phi^T)^{-1}$
後驗平均數：$\hat{\mu}_\theta = \frac{1}{\sigma^2} \hat{\Sigma}_\theta \Phi y$

讓我們分析一些極限情況：

1.  **情況 $\alpha \to \infty$ (無資訊/平坦先驗, Uninformative/Flat Prior)**：
    *   當先驗變異數趨近於無限大時，我們的先驗信念變得極度微弱 (在看到資料之前，我們對 $\theta$ 完全不確定)。
    *   $\frac{1}{\alpha} \to 0$。
    *   共變異數：$\hat{\Sigma}_\theta \to (\frac{1}{\sigma^2}\Phi\Phi^T)^{-1} = \sigma^2 (\Phi\Phi^T)^{-1}$。
    *   平均數：$\hat{\mu}_\theta \to \frac{1}{\sigma^2} [\sigma^2 (\Phi\Phi^T)^{-1}] \Phi y = (\Phi\Phi^T)^{-1}\Phi y$。
    *   *結果*：後驗平均數變成了標準的一般最小平方法 (OLS/MLE) 估計值。先驗失去了正則化 (regularizing) 的作用。

2.  **情況 $\alpha = 0$ (絕對的先驗信念, Absolute Prior Configuration)**：
    *   (從正方向取極限 $\alpha \to 0^+$)
    *   精度 $\frac{1}{\alpha} \to \infty$。先驗分佈變成在零點的狄拉克 $\delta$ 函數 (Dirac delta function)。
    *   共變異數：$\hat{\Sigma}_\theta \to (\infty I + \frac{1}{\sigma^2}\Phi\Phi^T)^{-1} \to 0$。
    *   平均數：$\hat{\mu}_\theta \to 0 (\dots) \to 0$。
    *   *結果*：資料不再起任何作用。我們絕對確信 $\theta = 0$，完全不論觀察結果如何。

3.  **情況 $\sigma^2 \to 0$ (無雜訊觀察, Noise-free Observations)**：
    *   當觀察雜訊趨近於零時，我們完全信任資料。
    *   $\frac{1}{\sigma^2}\Phi\Phi^T$ 這個項會主導 $\frac{1}{\alpha}I$ 項。我們可以使用伍德伯里矩陣恆等式 (Woodbury matrix identity) 或提取公因式來改寫。 
    *   實際上，使用 (c) 部分的形式更直觀：$\hat{\mu}_\theta = (\Phi\Phi^T + \lambda I)^{-1}\Phi y$，其中 $\lambda = \frac{\sigma^2}{\alpha}$。
    *   如果 $\sigma^2 \to 0$，那麼 $\lambda \to 0$。
    *   平均數：$\hat{\mu}_\theta \to (\Phi\Phi^T)^{-1}\Phi y$ (假設 $\Phi\Phi^T$ 可逆)。模型完美地內插 (interpolate) 訓練資料。
    *   共變異數：$\hat{\Sigma}_\theta = (\frac{1}{\alpha}I + \frac{1}{\sigma^2}\Phi\Phi^T)^{-1} = \sigma^2(\frac{\sigma^2}{\alpha}I + \Phi\Phi^T)^{-1}$。當 $\sigma^2 \to 0$ 時，$\hat{\Sigma}_\theta \to 0 \cdot (\Phi\Phi^T)^{-1} = 0$。
    *   *結果*：我們對「那些能完全擬合資料的參數」變得百分之百確定（後驗不確定性為零），前提是資料真的能被完美擬合。
