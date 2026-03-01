---
title: Answer ZH
---
## 必備知識 (Prerequisites)
* 最大後驗估計 (Maximum A Posteriori (MAP) Estimation)
* 貝塔分佈參數 (Beta Distribution parameters)
* 對數後驗的導數 (Derivative of Log-Posterior)

## 逐步推導 (Step-by-Step Derivation)

1.  **將先驗分析為貝塔分佈**：
    貝塔分佈的形式為 $Beta(\pi; \alpha, \beta) \propto \pi^{\alpha-1}(1-\pi)^{\beta-1}$。
    *   對於 $p_1(\pi) = 2\pi \propto \pi^1 (1-\pi)^0$，這對應於 $\alpha=2$, $\beta=1$ 的貝塔分佈。
    *   對於 $p_0(\pi) = 2-2\pi = 2(1-\pi) \propto \pi^0 (1-\pi)^1$，這對應於 $\alpha=1$, $\beta=2$ 的貝塔分佈。

2.  **計算 $p_1(\pi) = 2\pi$ 的 MAP 估計**：
    後驗分佈為 $p_1(\pi|\mathcal{D}) \propto p(\mathcal{D}|\pi) p_1(\pi) = \left[ \pi^s (1-\pi)^{n-s} \right] \pi = \pi^{s+1}(1-\pi)^{n-s}$。
    取對數後驗：$\log p_1(\pi|\mathcal{D}) = (s+1)\log\pi + (n-s)\log(1-\pi) + C$。
    求導並設為 0：
    $$\frac{s+1}{\pi} - \frac{n-s}{1-\pi} = 0$$
    $$(s+1)(1-\pi) = (n-s)\pi \implies s+1 - (s+1)\pi = n\pi - s\pi \implies (s+1) = (n+1)\pi$$
    $$\hat{\pi}_{MAP, 1} = \frac{s+1}{n+1}$$

3.  **計算 $p_0(\pi) = 2(1-\pi)$ 的 MAP 估計**：
    後驗分佈為 $p_0(\pi|\mathcal{D}) \propto p(\mathcal{D}|\pi) p_0(\pi) \propto \left[ \pi^s (1-\pi)^{n-s} \right] (1-\pi) = \pi^s(1-\pi)^{n-s+1}$。
    取對數後驗：$\log p_0(\pi|\mathcal{D}) = s\log\pi + (n-s+1)\log(1-\pi) + C$。
    求導並設為 0：
    $$\frac{s}{\pi} - \frac{n-s+1}{1-\pi} = 0$$
    $$s(1-\pi) = (n-s+1)\pi \implies s = (n+1)\pi$$
    $$\hat{\pi}_{MAP, 0} = \frac{s}{n+1}$$

4.  **有效貝葉斯估計量 (預測平均值, Predictive Mean)**：
    對於 $p_1$，後驗分佈是 $Beta(s+2, n-s+1)$；對於 $p_0$，後驗分佈是 $Beta(s+1, n-s+2)$。$Beta(\alpha, \beta)$ 的平均值為 $\frac{\alpha}{\alpha+\beta}$。
    *   對於 $p_1$：$\hat{\pi}_{Bayes, 1} = \frac{s+2}{(s+2) + (n-s+1)} = \frac{s+2}{n+3}$
    *   對於 $p_0$：$\hat{\pi}_{Bayes, 0} = \frac{s+1}{(s+1) + (n-s+2)} = \frac{s+1}{n+3}$

5.  **直觀解釋 (虛擬樣本)**：
    *   **先驗 $p_1(\pi) = 2\pi$ (Beta(2,1))**：數學形式 $\pi^1(1-\pi)^0$ 等同於在實驗前觀察到了**1 個虛擬的「正面」**。因此，MAP 在分子（正面）加了 1，在分母（總拋擲數）也加了 1。貝葉斯期望值則反映了加上這 1 個虛擬正面後的整體分佈。
    *   **先驗 $p_0(\pi) = 2-2\pi$ (Beta(1,2))**：數學形式 $\pi^0(1-\pi)^1$ 代表在獲得實際資料前觀察到了**1 個虛擬的「反面」**。MAP 在分母加了 1（總拋擲數），但在分子（正面）沒有增加。貝葉斯期望值也透過向下傾斜估計來反映這一點。
