---
title: Answer ZH
---

# 問題 3.8(e) 答案

## 1. 將先驗識別為 Beta 分佈

首先，讓我們將這些先驗映射到標準 Beta 分佈 $\text{Beta}(\alpha, \beta) \propto \pi^{\alpha-1}(1-\pi)^{\beta-1}$。

* **先驗 $p_1(\pi) = 2\pi$**：
  * 與 $\pi^1 (1-\pi)^0$ 成正比。
  * $\alpha-1 = 1 \implies \alpha = 2$
  * $\beta-1 = 0 \implies \beta = 1$
  * 這是 $\text{Beta}(2, 1)$。

* **先驗 $p_0(\pi) = 2(1-\pi)$**：
  * 與 $\pi^0 (1-\pi)^1$ 成正比。
  * $\alpha-1 = 0 \implies \alpha = 1$
  * $\beta-1 = 1 \implies \beta = 2$
  * 這是 $\text{Beta}(1, 2)$。

## 2. 計算 MAP 估計

MAP 最大化後驗。
後驗 $\propto$ 似然 $\times$ 先驗。
似然為 $\pi^s (1-\pi)^{n-s}$。

**情況 1：先驗 $p_1$ ($\alpha=2, \beta=1$)**
* 後驗 $\propto \pi^s (1-\pi)^{n-s} \cdot \pi^1 = \pi^{s+1} (1-\pi)^{n-s}$。
* 這與 $\text{Beta}(s+2, n-s+1)$ 成正比。
* 我們最大化 $f(\pi) = \pi^{s+1} (1-\pi)^{n-s}$。
* 對數後驗：$(s+1)\ln\pi + (n-s)\ln(1-\pi)$。
* 導數 = 0：$\frac{s+1}{\pi} - \frac{n-s}{1-\pi} = 0$。
* $(s+1)(1-\pi) = (n-s)\pi$。
* $s+1 - s\pi - \pi = n\pi - s\pi$。
* $s+1 = (n+1)\pi$。
* $\hat{\pi}_{MAP, 1} = \frac{s+1}{n+1}$。

**情況 2：先驗 $p_0$ ($\alpha=1, \beta=2$)**
* 後驗 $\propto \pi^s (1-\pi)^{n-s} \cdot (1-\pi)^1 = \pi^s (1-\pi)^{n-s+1}$。
* 這與 $\text{Beta}(s+1, n-s+2)$ 成正比。
* 我們最大化 $f(\pi) = \pi^{s} (1-\pi)^{n-s+1}$。
* 導數 = 0：$\frac{s}{\pi} - \frac{n-s+1}{1-\pi} = 0$。
* $s(1-\pi) = (n-s+1)\pi$。
* $s - s\pi = n\pi - s\pi + \pi$。
* $s = (n+1)\pi$。
* $\hat{\pi}_{MAP, 0} = \frac{s}{n+1}$。

## 3. 有效估計 (貝葉斯均值)

問題還問“有效估計是什麼……”。這可能模棱兩可（指 MAP 或均值）。問題的第二部分（“虛擬樣本”）適用於兩者，但標準貝葉斯預測使用均值。
為了完整性，讓我們計算均值（後驗期望）。

* **對於 $p_1$ (後驗 Beta($s+2, n-s+1$))**：
  * 均值 = $\frac{\alpha_{post}}{\alpha_{post} + \beta_{post}} = \frac{s+2}{(s+2) + (n-s+1)} = \frac{s+2}{n+3}$。

* **對於 $p_0$ (後驗 Beta($s+1, n-s+2$))**：
  * 均值 = $\frac{s+1}{(s+1) + (n-s+2)} = \frac{s+1}{n+3}$。

*（注意：問題可能要求 MAP 的直觀解釋，因為它特別要求“計算 MAP 估計”。）*

## 4. 直觀解釋（“虛擬”樣本）

我們將先驗的超參數 $\alpha, \beta$ 解釋為添加到實際數據中的虛擬計數。
$\text{Prior} \propto \pi^{\alpha-1}(1-\pi)^{\beta-1}$。
Beta 後驗的 MAP 估計公式：$\frac{s + (\alpha-1)}{n + (\alpha+\beta-2)}$。

**對於 $p_1$ ($\alpha=2, \beta=1$)：**
* **虛擬樣本**：我們添加了 1 個樣本，它是一次成功。
* 總虛擬 $N' = 1$。總虛擬 $S' = 1$。
* MAP 估計：$\frac{s+1}{n+1}$。
* 解釋：先驗 $2\pi$ 就像我們已經觀察到了 **一個正面**。這將結果偏向 1。

**對於 $p_0$ ($\alpha=1, \beta=2$)：**
* **虛擬樣本**：我們添加了 1 個樣本，它是一次失敗。
* 總虛擬 $N' = 1$。總虛擬 $S' = 0$。
* MAP 估計：$\frac{s}{n+1}$。
* 解釋：先驗 $2(1-\pi)$ 就像我們已經觀察到了 **一個反面**。這將結果偏向 0。
