---
title: Answer ZH
---

# 問題 3.8(b) 答案

## 預備知識

1. **貝葉斯定理 (Bayes' Rule)**：
    $$p(\pi|\mathcal{D}) = \frac{p(\mathcal{D}|\pi)p(\pi)}{p(\mathcal{D})}$$
    其中：
    * $p(\pi|\mathcal{D})$ 是 **後驗 (posterior)** 分佈。
    * $p(\mathcal{D}|\pi)$ 是 **似然 (likelihood)**。
    * $p(\pi)$ 是 **先驗 (prior)**。
    * $p(\mathcal{D}) = \int p(\mathcal{D}|\pi)p(\pi) d\pi$ 是 **證據 (evidence)** (歸一化常數)。

2. **均勻先驗 (Uniform Prior)**：$\pi \in [0, 1]$ 上的均勻先驗意味著 $p(\pi) = 1$，對於 $0 \le \pi \le 1$。

3. **Beta 函數恆等式**：如公式 (3.32) 所示：
    $$\int_0^1 \pi^m (1-\pi)^n d\pi = \frac{m!n!}{(m+n+1)!}$$

## 分步證明

1. **構造後驗分佈**：
    使用貝葉斯定理：
    $$
    p(\pi|\mathcal{D}) = \frac{p(\mathcal{D}|\pi)p(\pi)}{\int_0^1 p(\mathcal{D}|\pi')p(\pi') d\pi'}
    $$

2. **代入似然和先驗**：
    從 (a) 部分可知，似然 $p(\mathcal{D}|\pi) = \pi^s (1-\pi)^{n-s}$。
    給定均勻先驗，$p(\pi) = 1$。
    分子是：
    $$
    p(\mathcal{D}|\pi)p(\pi) = \pi^s (1-\pi)^{n-s} \cdot 1 = \pi^s (1-\pi)^{n-s}
    $$

3. **計算證據 (分母)**：
    設 $Z = p(\mathcal{D}) = \int_0^1 \pi^s (1-\pi)^{n-s} d\pi$。
    我們使用恆等式 (3.32)，其中 $m = s$，並且 $(1-\pi)$ 的指數為 $n-s$。注意恆等式中的 "$n$" 代表指數，所以我們用我們的 "$n-s$" 替換恆等式中的 "$n$"。
    使用恆等式：$\int_0^1 \pi^m (1-\pi)^k d\pi = \frac{m!k!}{(m+k+1)!}$。
    這裡，$m=s$ 且 $k=n-s$。
    $$
    Z = \int_0^1 \pi^s (1-\pi)^{n-s} d\pi = \frac{s!(n-s)!}{(s + (n-s) + 1)!} = \frac{s!(n-s)!}{(n+1)!}
    $$

4. **計算後驗**：
    將分子除以分母 $Z$。
    $$
    p(\pi|\mathcal{D}) = \frac{\pi^s (1-\pi)^{n-s}}{Z} = \frac{\pi^s (1-\pi)^{n-s}}{\frac{s!(n-s)!}{(n+1)!}}
    $$
    $$
    p(\pi|\mathcal{D}) = \frac{(n+1)!}{s!(n-s)!} \pi^s (1-\pi)^{n-s}
    $$
    這與公式 (3.33) 相符。

## $n=1$ 時的繪圖

對於 $n=1$，$s$ 的可能值是 $s=0$ 或 $s=1$。

1. **情況 $s=1$ (一次成功)**：
    $$
    p(\pi|\mathcal{D}) = \frac{(1+1)!}{1!(1-1)!} \pi^1 (1-\pi)^{1-1} = \frac{2}{1 \cdot 1} \pi (1) = 2\pi
    $$
    這是一個從 0 增加到 2 的線性函數。

2. **情況 $s=0$ (一次失敗)**：
    $$
    p(\pi|\mathcal{D}) = \frac{(1+1)!}{0!(1-0)!} \pi^0 (1-\pi)^{1-0} = \frac{2}{1 \cdot 1} (1) (1-\pi) = 2(1-\pi)
    $$
    這是一個從 2 減少到 0 的線性函數。

（自檢：$2\pi$ 在 0 到 1 上的積分是 $[\pi^2]_0^1 = 1$。$2(1-\pi)$ 的積分是 $-[(1-\pi)^2]_0^1 = -[0 - 1] = 1$。兩者都是有效的 PDF。）

**繪圖描述**：
* 對於 $s=1$：一條從 $(0,0)$ 開始並到達 $(1,2)$ 的直線。它傾向於更高的 $\pi$ 值。
* 對於 $s=0$：一條從 $(0,2)$ 開始並到達 $(1,0)$ 的直線。它傾向於更低的 $\pi$ 值。
