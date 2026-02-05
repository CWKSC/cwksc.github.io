---
title: Answer ZH
---

## 預備知識

1. **高斯分佈的線性變換**: 如果 $x \sim \mathcal{N}(\mu, \Sigma)$，則 $y = Ax + b$ 服從 $\mathcal{N}(A\mu + b, A \Sigma A^T)$。
2. **獨立高斯變數之和**: 如果 $X \sim \mathcal{N}(\mu_X, \sigma_X^2)$ 和 $Y \sim \mathcal{N}(\mu_Y, \sigma_Y^2)$ 是獨立的，則 $Z = X + Y \sim \mathcal{N}(\mu_X + \mu_Y, \sigma_X^2 + \sigma_Y^2)$。
3. **邊緣化 (Marginalization)**: $\int p(y|f) p(f) df$.

## 逐步解答

### 第 1 部分：$f_*$ 的分佈

1. **定義 $f_*$**:
    潛在函數值定義為參數的線性變換：
    $$
    f_* = \phi(x_*)^T \theta
    $$

2. **應用線性變換性質**:
    我們知道 $\theta$ 的後驗為 $p(\theta|\mathcal{D}) = \mathcal{N}(\theta | \hat{\mu}_\theta, \hat{\Sigma}_\theta)$。
    使用線性變換性質（其中 $A = \phi(x_*)^T$ 是一個列向量）：
    * **平均值**:
        $$
        \mathbb{E}[f_*] = \phi(x_*)^T \mathbb{E}[\theta] = \phi(x_*)^T \hat{\mu}_\theta
        $$
    * **變異數**:
        $$
        \operatorname{Var}[f_*] = \phi(x_*)^T \operatorname{Cov}[\theta] \phi(x_*) = \phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*)
        $$

3. **結果**:
    $$
    p(f_* | x_*, \mathcal{D}) = \mathcal{N}(f_* | \hat{\mu}_*, \hat{\sigma}_*^2)
    $$
    其中 $\hat{\mu}_*$ 和 $\hat{\sigma}_*^2$ 與方程式 (3.51) 和 (3.52) 相符。

### 第 2 部分：$y_*$ 的分佈

1. **模型關係**:
    觀測到的輸出是函數值加上雜訊：
    $$
    y_* = f_* + \epsilon_*, \quad \epsilon_* \sim \mathcal{N}(0, \sigma^2)
    $$

2. **獨立隨機變數之和**:
    我們有 $f_*$ 的分佈（來自第 1 部分）和 $\epsilon_*$ 的分佈（雜訊假設）。
    由於新的雜訊 $\epsilon_*$ 獨立於過去的數據 $\mathcal{D}$（因此也獨立於 $f_*$），變數 $y_*$ 是兩個獨立高斯變數的總和。

3. **計算動差 (Moments)**:
    * **平均值**:
        $$
        \mathbb{E}[y_*] = \mathbb{E}[f_*] + \mathbb{E}[\epsilon_*] = \hat{\mu}_* + 0 = \hat{\mu}_*
        $$
    * **變異數**:
        $$
        \operatorname{Var}[y_*] = \operatorname{Var}[f_*] + \operatorname{Var}[\epsilon_*] = \hat{\sigma}_*^2 + \sigma^2
        $$

4. **結果**:
    $$
    p(y_*|x_*, \mathcal{D}) = \mathcal{N}(y_* | \hat{\mu}_*, \hat{\sigma}_*^2 + \sigma^2)
    $$
    這與方程式 (3.53) 相符。
