---
title: Answer ZH
---
### 具備知識 (Prerequisites)
- 高斯變數的線性轉換 (Linear Transformation of Gaussian Variables, 見問題 1.1)
- 邊際化 / 預測分佈 (Marginalization / Predictive Distribution)

### 逐步推導 (Step-by-Step Derivation)

1.  **潛在函數 $f_*$ 的預測分佈**：
    題目要求我們在給定資料 $\mathcal{D}$ 的情況下，找出無雜訊預測值 $f_* = f(x_*, \theta) = \phi(x_*)^T \theta$ 的分佈。
    由 (a) 部分可知，$\theta$ 的後驗分佈為高斯分佈：
    $$
    p(\theta | \mathcal{D}) = \mathcal{N}(\theta | \hat{\mu}_\theta, \hat{\Sigma}_\theta)
    $$
    由於 $f_*$ 是高斯隨機向量 $\theta$ 的線性組合，因此 $f_*$ 也服從高斯分佈。這是根據以下規則：如果 $x \sim \mathcal{N}(\mu, \Sigma)$，則 $Ax \sim \mathcal{N}(A\mu, A\Sigma A^T)$。
    在此處，「矩陣 $A$」是列向量 $\phi(x_*)^T$，而隨機變數是 $\theta$。
    
    *   **平均數 (Mean)**：
        $$
        \hat{\mu}_* = \mathbb{E}[f_* | x_*, \mathcal{D}] = \mathbb{E}[\phi(x_*)^T \theta | x_*, \mathcal{D}] = \phi(x_*)^T \mathbb{E}[\theta | \mathcal{D}] = \phi(x_*)^T \hat{\mu}_\theta
        $$
    *   **變異數 (Variance)**：
        $$
        \hat{\sigma}^2_* = \text{Var}(f_* | x_*, \mathcal{D}) = \text{Var}(\phi(x_*)^T \theta | x_*, \mathcal{D}) = \phi(x_*)^T \text{Var}(\theta | \mathcal{D}) \phi(x_*) = \phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*)
        $$
    因此，潛在函數的預測分佈為：
    $$
    p(f_*|x_*, \mathcal{D}) = \mathcal{N}(f_* | \phi(x_*)^T \hat{\mu}_\theta, \phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*)) = \mathcal{N}(f_*|\hat{\mu}_*, \hat{\sigma}^2_*)
    $$

2.  **輸出 $y_*$ 的預測分佈**：
    觀察到的目標值 $y_*$ 包含了觀察雜訊：$y_* = f_* + \epsilon_*$，其中 $\epsilon_* \sim \mathcal{N}(0, \sigma^2)$。
    題目要求我們計算積分：
    $$
    p(y_*|x_*, \mathcal{D}) = \int p(y_*|x_*, \theta) p(\theta|\mathcal{D}) d\theta
    $$
    利用提示，因為 $y_*$ 僅透過確定性的映射 $f_* = \phi(x_*)^T \theta$ 依賴於 $\theta$，我們可以對 $f_*$ 進行邊際化 (marginalize)，而不是對高維度的 $\theta$ 進行邊際化：
    $$
    p(y_*|x_*, \mathcal{D}) = \int p(y_* | f_*) p(f_* | \mathcal{D}) df_*
    $$
    我們已知：
    *   $p(y_* | f_*) = \mathcal{N}(y_* | f_*, \sigma^2)$ （由 $y_* = f_* + \epsilon_*$ 得來）
    *   $p(f_* | \mathcal{D}) = \mathcal{N}(f_* | \hat{\mu}_*, \hat{\sigma}^2_*)$
    
    這個積分表示將兩個獨立的高斯變數相加：$f_* \sim \mathcal{N}(\hat{\mu}_*, \hat{\sigma}^2_*)$ 和 $\epsilon_* \sim \mathcal{N}(0, \sigma^2)$。
    兩個獨立高斯變數的總和 $y_* = f_* + \epsilon_*$ 同樣會是高斯分佈。
    *   **$y_*$ 的平均數**：$\mathbb{E}[y_*] = \mathbb{E}[f_*] + \mathbb{E}[\epsilon_*] = \hat{\mu}_* + 0 = \hat{\mu}_*$
    *   **$y_*$ 的變異數**：$\text{Var}(y_*) = \text{Var}(f_*) + \text{Var}(\epsilon_*) = \hat{\sigma}^2_* + \sigma^2$

    因此，$y_*$ 的預測分佈為：
    $$
    p(y_*|x_*, \mathcal{D}) = \mathcal{N}(y_*|\hat{\mu}_*, \sigma^2 + \hat{\sigma}^2_*)
    $$
    得證。
