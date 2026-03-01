---
title: Answer ZH
---

## 必備知識 (Prerequisites)

- 最大概似估計 (Maximum Likelihood Estimation, MLE)
- 最大後驗估計 (Maximum A Posteriori Estimation, MAP)
- 貝塔分佈的眾數 (Beta Distribution Mode)

## 逐步推導 (Step-by-Step Derivation)

1.  **最大概似估計 (MLE)**：
    MLE $\hat{\pi}_{MLE}$ 最大化了概似函數 $p(\mathcal{D}|\pi) = \pi^s(1-\pi)^{n-s}$。
    為了找到最大值，我們取對數概似函數 (log-likelihood)：
    $\mathcal{L}(\pi) = \log p(\mathcal{D}|\pi) = s \log\pi + (n-s)\log(1-\pi)$
    對 $\pi$ 求導數並設為 0：
    $$\frac{\partial \mathcal{L}}{\partial \pi} = \frac{s}{\pi} - \frac{n-s}{1-\pi} = 0$$
    $$s(1-\pi) = (n-s)\pi \implies s - s\pi = n\pi - s\pi \implies n\pi = s$$
    $$\hat{\pi}_{MLE} = \frac{s}{n}$$

2.  **使用均勻先驗的最大後驗估計 (MAP)**：
    MAP 估計 $\hat{\pi}_{MAP}$ 最大化了後驗分佈 $p(\pi|\mathcal{D})$。回顧 (b) 部分的後驗分佈：
    $$p(\pi|\mathcal{D}) \propto \pi^s (1-\pi)^{n-s}$$
    由於均勻先驗 $p(\pi) = 1$ 是一個常數，後驗分佈完全與概似函數成正比。
    因此，最大化後驗分佈在數學上等同於最大化概似函數。
    $$\hat{\pi}_{MAP} = \operatorname{argmax}_\pi p(\pi|\mathcal{D}) = \operatorname{argmax}_\pi \left[ p(\mathcal{D}|\pi) \cdot 1 \right] = \operatorname{argmax}_\pi p(\mathcal{D}|\pi)$$
    因此，在使用均勻先驗的情況下：
    $$\hat{\pi}_{MAP} = \hat{\pi}_{MLE} = \frac{s}{n}$$

3.  **比較不同的估計量**：
    - **MLE 對比 MAP（均勻先驗）**：它們是完全相同的（即 $\frac{s}{n}$）。在這個特定情況下，兩者在數學上沒有優劣之分，因為均勻先驗沒有提供任何額外的資訊（它是無資訊先驗，uninformative prior）。均勻先驗代表完全的不確定性或沒有偏見，讓資料完全決定信念的最高點（眾數，mode）。
    - **貝葉斯預測估計量**：從 (c) 部分得知 $\hat{\pi}_{Bayes} = \frac{s+1}{n+2}$。貝葉斯預測估計（它是後驗的*平均值* (mean)，而不是像 MAP 那樣的*眾數* (mode)）相較於 MLE/MAP 的優勢在於對極端值具有穩健性 (robustness)，特別是在樣本數 $n$ 很小的時候。如果 $n=1, s=1$，MLE/MAP 會給出 $1.0$（非常肯定這輩子都會是正面），而貝葉斯方法會給出 $2/3$（較為謹慎）。
