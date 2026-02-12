---
title: Answer ZH
---

### 預備知識

- **核密度估計 (KDE)**:
  KDE 定義為：
  $$ \hat{p}(x) = \frac{1}{n} \sum_{i=1}^n \frac{1}{h^d} k\left(\frac{x - x_i}{h}\right) $$
  令 $\tilde{k}(u) = \frac{1}{h^d} k(u/h)$，則 $\hat{p}(x) = \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i)$。

- **和的期望**:
  $\mathbb{E}[\sum Y_i] = \sum \mathbb{E}[Y_i]$。

- **卷積**:
  $(f * g)(x) = \int f(\mu) g(x - \mu) d\mu$。

### 逐步解答

1. **寫出估計器的期望值**:
    由於 $x_i$ 是來自 $p(x)$ 的獨立同分佈 (i.i.d.) 樣本，且期望值是線性的：
    $$
    \begin{aligned}
    \mathbb{E}_X [\hat{p}(x)] &= \mathbb{E} \left[ \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right] \\
    &= \frac{1}{n} \sum_{i=1}^n \mathbb{E} [\tilde{k}(x - x_i)]
    \end{aligned}
    $$

2. **利用同分佈簡化**:
    由於所有 $x_i$ 服從相同的分佈 $p(x)$，因此 $\mathbb{E} [\tilde{k}(x - x_i)]$ 對所有 $i$ 都是相同的。
    $$
    \mathbb{E}_X [\hat{p}(x)] = \mathbb{E} [\tilde{k}(x - x_1)]
    $$

3. **計算期望值**:
    根據連續隨機變量 $x_1 \sim p(\mu)$ 的期望值定義：
    $$
    \mathbb{E} [\tilde{k}(x - x_1)] = \int \tilde{k}(x - \mu) p(\mu) d\mu
    $$

4. **關聯到卷積**:
    積分 $\int p(\mu) \tilde{k}(x - \mu) d\mu$ 正是 $p$ 和 $\tilde{k}$ 之間卷積的定義，記為 $p(x) * \tilde{k}(x)$。
    $$
    \mathbb{E}_X [\hat{p}(x)] = p(x) * \tilde{k}(x)
    $$

5. **偏差的解釋**:
    KDE 的期望值不是真實密度 $p(x)$，而是真實密度與核函數的卷積（平滑化）。
    $$ \text{Bias}[\hat{p}(x)] = \mathbb{E}[\hat{p}(x)] - p(x) = (p * \tilde{k})(x) - p(x) $$
    這意味著 KDE 是一個 **有偏 (biased)** 估計器。卷積運算會「塗抹」或平滑 $p(x)$ 的概率質量，通常會降低峰值並填補低谷。偏差取決於帶寬 $h$；當 $h \to 0$ 時，核函數趨近於狄拉克 $\delta$ 函數，偏差趨近於 0（漸近無偏）。
