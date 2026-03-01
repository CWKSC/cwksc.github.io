---
title: Answer ZH
---

## 必備知識 (Prerequisites)

- 貝氏定理 (Bayes' Theorem)
- 均勻先驗分佈 (Uniform Prior Distribution)
- 貝塔分佈積分 (Beta Distribution Integral)

## 逐步推導 (Step-by-Step Derivation)

1.  **應用貝氏定理**：後驗分佈 (posterior distribution) $p(\pi|\mathcal{D})$ 與概似函數 (likelihood) $p(\mathcal{D}|\pi)$ 乘以先驗分佈 $p(\pi)$ 成正比。
    $$p(\pi|\mathcal{D}) = \frac{p(\mathcal{D}|\pi)p(\pi)}{p(\mathcal{D})} = \frac{p(\mathcal{D}|\pi)p(\pi)}{\int_0^1 p(\mathcal{D}|\pi)p(\pi) d\pi}$$

2.  **定義先驗分佈**：$\pi \in [0, 1]$ 上的均勻先驗分佈意味著 $p(\pi) = 1$。

3.  **計算分子的概似成分**：從 (a) 部分可知，概似函數為 $p(\mathcal{D}|\pi) = \pi^s (1 - \pi)^{n-s}$。因此分子為：
    $$p(\mathcal{D}|\pi)p(\pi) = \pi^s (1 - \pi)^{n-s} \cdot 1 = \pi^s (1 - \pi)^{n-s}$$

4.  **計算邊際概似函數 (Marginal Likelihood, 分母)**：我們對所有可能的 $\pi$ 值對分子進行積分：
    $$p(\mathcal{D}) = \int_0^1 \pi^s (1 - \pi)^{n-s} d\pi$$
    使用給定的恆等式，令 $m = s$ 且 $n' = n - s$：
    $$p(\mathcal{D}) = \frac{s!(n-s)!}{(s + (n-s) + 1)!} = \frac{s!(n-s)!}{(n+1)!}$$

5.  **計算後驗分佈**：將分子除以分母：
    $$p(\pi|\mathcal{D}) = \frac{\pi^s (1 - \pi)^{n-s}}{\frac{s!(n-s)!}{(n+1)!}} = \frac{(n+1)!}{s!(n-s)!} \pi^s (1 - \pi)^{n-s}$$

6.  **為 $n=1$ 繪圖**：
    對於 $n=1$，$s$ 的可能值（$x_1$ 的和）為 $s=0$ 或 $s=1$。
    - 如果 $s=0$：$p(\pi|x_1=0) = \frac{2!}{0!1!} \pi^0 (1-\pi)^1 = 2(1-\pi)$。這是一條從 $(0, 2)$ 到 $(1, 0)$ 的直線。
    - 如果 $s=1$：$p(\pi|x_1=1) = \frac{2!}{1!0!} \pi^1 (1-\pi)^0 = 2\pi$。這是一條從 $(0, 0)$ 到 $(1, 2)$ 的直線。
