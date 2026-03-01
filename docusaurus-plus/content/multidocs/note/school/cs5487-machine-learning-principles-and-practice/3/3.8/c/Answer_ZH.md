---
title: Answer ZH
---

## 必備知識 (Prerequisites)

- 預測分佈 (Predictive Distribution)
- 後驗期望值 (Expectation of Posterior / Posterior Mean)
- 拉普拉斯平滑 (Laplace Smoothing / Additive Smoothing)

## 逐步推導 (Step-by-Step Derivation)

1.  **構建預測分佈**：給定資料 $\mathcal{D}$ 的情況下，新觀察值 $x$ 的預測分佈需要使用 $\pi$ 的後驗分佈對未知的參數 $\pi$ 進行積分。
    $$p(x|\mathcal{D}) = \int_0^1 p(x|\pi) p(\pi|\mathcal{D}) d\pi$$

2.  **代入已知方程式**：
    - $p(x|\pi) = \pi^x (1 - \pi)^{1-x}$ （方程式 3.30）
    - $p(\pi|\mathcal{D}) = \frac{(n+1)!}{s!(n-s)!} \pi^s (1 - \pi)^{n-s}$ （方程式 3.33）

    $$p(x|\mathcal{D}) = \int_0^1 \left( \pi^x (1 - \pi)^{1-x} \right) \left( \frac{(n+1)!}{s!(n-s)!} \pi^s (1 - \pi)^{n-s} \right) d\pi$$
    $$p(x|\mathcal{D}) = \frac{(n+1)!}{s!(n-s)!} \int_0^1 \pi^{s+x} (1 - \pi)^{n-s+1-x} d\pi$$

3.  **計算 $x=1$ 的情況**：
    對於 $x=1$，我們要求 $p(x=1|\mathcal{D})$。代入 $x=1$：
    $$p(x=1|\mathcal{D}) = \frac{(n+1)!}{s!(n-s)!} \int_0^1 \pi^{s+1} (1 - \pi)^{n-s} d\pi$$
    應用 (b) 部分的積分恆等式，令 $m = s+1$ 且 $n' = n-s$：
    $$\int_0^1 \pi^{s+1} (1 - \pi)^{n-s} d\pi = \frac{(s+1)!(n-s)!}{((s+1)+(n-s)+1)!} = \frac{(s+1)!(n-s)!}{(n+2)!}$$
    $$p(x=1|\mathcal{D}) = \frac{(n+1)!}{s!(n-s)!} \frac{(s+1)!(n-s)!}{(n+2)!} = \frac{(n+1)!(s+1)s!}{s!(n+2)(n+1)!} = \frac{s+1}{n+2}$$

4.  **計算 $x=0$ 的情況**：
    我們知道 $p(x=0|\mathcal{D}) = 1 - p(x=1|\mathcal{D})$，即 $1 - \frac{s+1}{n+2}$。

5.  **組合成單一表達式**：
    由於 $x$ 只能是 0 或 1，我們可以將 $p(x|\mathcal{D})$ 寫成與伯努利分佈相同的函數形式：
    $$p(x|\mathcal{D}) = \left(\frac{s+1}{n+2}\right)^x \left(1 - \frac{s+1}{n+2}\right)^{1-x}$$

6.  **有效貝葉斯估計量與虛擬樣本**：
    $\pi$ 的有效貝葉斯估計量（即 $p(x=1|\mathcal{D})$）為 $\hat{\pi}_{Bayes} = \frac{s+1}{n+2}$。
    最大概似估計量 (MLE, Maximum Likelihood Estimate) 為 $\hat{\pi}_{MLE} = \frac{s}{n}$。

    直觀的解釋是，均勻先驗分佈的作用就像我們在實際實驗之前已經觀察到了**兩個虛擬樣本 (virtual samples)**：一個「正面」（分子 $s$ 加 1）和一個「反面」（分母 $n$ 總共加 2）。當我們的資料很少時，這可以防止 $\pi$ 的估計值變為 0 或 1。這個概念被稱為**拉普拉斯平滑 (Laplace smoothing)**。
