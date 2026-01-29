---
title: Answer ZH
---

# 問題 3.8(c) 答案

## 預備知識

1. **預測分佈 (Predictive Distribution)**：給定觀測數據 $\mathcal{D}$，在參數 $\pi$ 上進行邊緣化後，新樣本 $x$ 的概率：
    $$p(x|\mathcal{D}) = \int p(x|\pi) p(\pi|\mathcal{D}) d\pi$$
    這通常等同於求後驗分佈下似然參數的期望值。

2. **伯努利期望**：由於 $x \in \{0, 1\}$，
    * $p(x=1|\mathcal{D}) = \mathbb{E}[\pi | \mathcal{D}]$
    * $p(x|\mathcal{D})$ 可以寫成 $\hat{\pi}^x (1-\hat{\pi})^{1-x}$ 其中 $\hat{\pi} = p(x=1|\mathcal{D})$。

## 分步證明

1. **確定 $p(x=1|\mathcal{D})$**：
    下一個結果為 1 ($x=1$) 的預測概率是：
    $$
    p(x=1|\mathcal{D}) = \int_0^1 p(x=1|\pi) p(\pi|\mathcal{D}) d\pi
    $$
    由於 $p(x=1|\pi) = \pi$：
    $$
    p(x=1|\mathcal{D}) = \int_0^1 \pi \cdot p(\pi|\mathcal{D}) d\pi = \mathbb{E}[\pi | \mathcal{D}]
    $$
    這只是後驗分佈的均值。

2. **計算後驗均值**：
    將公式 (3.33) 代入積分中：
    $$
    \mathbb{E}[\pi|\mathcal{D}] = \int_0^1 \pi \left[ \frac{(n+1)!}{s!(n-s)!}\pi^s (1-\pi)^{n-s} \right] d\pi
    $$
    $$
    = \frac{(n+1)!}{s!(n-s)!} \int_0^1 \pi^{s+1} (1-\pi)^{n-s} d\pi
    $$

3. **應用積分恆等式**：
    再次使用等式 (3.32)，其中 $m = s+1$，$(1-\pi)$ 的指數為 $n-s$。
    $$
    \int_0^1 \pi^{s+1} (1-\pi)^{n-s} d\pi = \frac{(s+1)!(n-s)!}{( (s+1) + (n-s) + 1 )!} = \frac{(s+1)!(n-s)!}{(n+2)!}
    $$

4. **合併項**：
    $$
    \mathbb{E}[\pi|\mathcal{D}] = \frac{(n+1)!}{s!(n-s)!} \cdot \frac{(s+1)!(n-s)!}{(n+2)!}
    $$
    消去 $(n-s)!$：
    $$
    = \frac{(n+1)!}{s!} \cdot \frac{(s+1)!}{(n+2)!}
    $$
    展開階乘：
    * $\frac{(s+1)!}{s!} = s+1$
    * $\frac{(n+1)!}{(n+2)!} = \frac{1}{n+2}$

    $$
    \mathbb{E}[\pi|\mathcal{D}] = \frac{s+1}{n+2}
    $$

5. **制定預測 PDF**：
    由於 $x$ 是伯努利變量，如果 $P(x=1) = \frac{s+1}{n+2}$，則：
    $$
    p(x|\mathcal{D}) = \left(\frac{s+1}{n+2}\right)^x \left(1-\frac{s+1}{n+2}\right)^{1-x}
    $$
    這與公式 (3.34) 相符。

## 有效貝葉斯估計

$\pi$ 的有效貝葉斯估計（即用於預測的參數）是：
$$
\hat{\pi}_{Bayes} = \frac{s+1}{n+2}
$$

## 直觀解釋（“虛擬”樣本）

最大似然估計 (MLE) 是 $\hat{\pi}_{MLE} = \frac{s}{n}$ (成功次數 / 總數)。
貝葉斯估計可以重寫為：
$$
\hat{\pi}_{Bayes} = \frac{s+1}{n+2}
$$

**直觀理解**：
我們可以想像在開始之前，我們向數據集中添加了 **2 個虛擬樣本**：
* **1 個虛擬成功** (分子 +1)
* **1 個虛擬失敗** (+1 到失敗計數，所以總樣本數 $n$ 增加 2)

因此，$n \to n+2$（總虛擬大小）和 $s \to s+1$（總虛擬成功數）。
這些“虛擬計數”來自 **均勻先驗**。均勻先驗就像我們已經看到了一個正面和一個反面，從而平滑了估計。這可以防止估計值為 0 或 1，即使 $n$ 很小（拉普拉斯平滑）。
