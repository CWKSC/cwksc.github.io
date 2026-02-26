---
title: Answer ZH
---

## 先決條件

* **0-1 損失的貝葉斯決策規則 (BDR)**：最小化誤分類機率的最佳決策規則是選擇使後驗機率最大化的類別：$g(x)^* = \text{argmax}_j p(y=j|x)$。
* **貝氏定理 (Bayes' Theorem)**：$p(y=j|x) = \frac{p(x|y=j)p(y=j)}{p(x)}$。
* **多元高斯分佈 (Multivariate Gaussian Distribution)**：機率密度函數為 $p(x|y=j) = \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}} \exp\left(-\frac{1}{2}(x-\mu_j)^T\Sigma^{-1}(x-\mu_j)\right)$。
* **對數似然 (Log-Likelihood)**：最大化一個函數等同於最大化其對數，因為對數是一個單調遞增函數。

## 逐步推導

1. **從 BDR 開始**：
    為了最小化 0-1 損失，我們最大化後驗機率：
    $$g(x)^* = \text{argmax}_j p(y=j|x)$$

2. **應用貝氏定理**：
    $$p(y=j|x) = \frac{p(x|y=j)p(y=j)}{p(x)}$$
    由於證據 $p(x)$ 對所有類別 $j$ 都是相同的，它不會影響 $\text{argmax}$ 的操作。我們可以改為最大化聯合機率：
    $$g(x)^* = \text{argmax}_j [p(x|y=j)p(y=j)]$$

3. **取對數**：
    為了簡化高斯分佈中的指數項，我們對目標函數取自然對數。令其為我們的判別函數 $g_j(x)$：
    $$g_j(x) = \log(p(x|y=j)p(y=j)) = \log p(x|y=j) + \log p(y=j)$$

4. **代入高斯密度和先驗機率**：
    已知 $p(x|y=j) = \mathcal{N}(x|\mu_j, \Sigma)$ 且 $p(y=j) = \pi_j$：
    $$g_j(x) = \log \left( \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}} \exp\left(-\frac{1}{2}(x-\mu_j)^T\Sigma^{-1}(x-\mu_j)\right) \right) + \log \pi_j$$
    $$g_j(x) = -\frac{d}{2}\log(2\pi) - \frac{1}{2}\log|\Sigma| - \frac{1}{2}(x-\mu_j)^T\Sigma^{-1}(x-\mu_j) + \log \pi_j$$

5. **移除與類別無關的項**：
    項 $-\frac{d}{2}\log(2\pi)$ 和 $-\frac{1}{2}\log|\Sigma|$ 相對於類別索引 $j$ 是常數（因為所有類別共享相同的協方差矩陣 $\Sigma$）。我們可以將它們從判別函數中捨去：
    $$g_j(x) = -\frac{1}{2}(x-\mu_j)^T\Sigma^{-1}(x-\mu_j) + \log \pi_j$$

6. **展開二次項**：
    $$(x-\mu_j)^T\Sigma^{-1}(x-\mu_j) = x^T\Sigma^{-1}x - x^T\Sigma^{-1}\mu_j - \mu_j^T\Sigma^{-1}x + \mu_j^T\Sigma^{-1}\mu_j$$
    由於 $\Sigma$ 是協方差矩陣，它是對稱的，這意味著它的反矩陣 $\Sigma^{-1}$ 也是對稱的。因此，純量 $x^T\Sigma^{-1}\mu_j$ 等於其轉置 $\mu_j^T\Sigma^{-1}x$。
    $$(x-\mu_j)^T\Sigma^{-1}(x-\mu_j) = x^T\Sigma^{-1}x - 2\mu_j^T\Sigma^{-1}x + \mu_j^T\Sigma^{-1}\mu_j$$

7. **代回並簡化**：
    $$g_j(x) = -\frac{1}{2} \left( x^T\Sigma^{-1}x - 2\mu_j^T\Sigma^{-1}x + \mu_j^T\Sigma^{-1}\mu_j \right) + \log \pi_j$$
    $$g_j(x) = -\frac{1}{2}x^T\Sigma^{-1}x + \mu_j^T\Sigma^{-1}x - \frac{1}{2}\mu_j^T\Sigma^{-1}\mu_j + \log \pi_j$$
    項 $-\frac{1}{2}x^T\Sigma^{-1}x$ 與 $j$ 無關，所以我們也可以將其捨去。簡化後的判別函數變為：
    $$g_j(x) = \mu_j^T\Sigma^{-1}x - \frac{1}{2}\mu_j^T\Sigma^{-1}\mu_j + \log \pi_j$$

8. **表示為線性函數**：
    我們可以將其改寫為 $g_j(x) = w_j^T x + b_j$ 的形式。
    令 $w_j = \Sigma^{-1}\mu_j$。則 $w_j^T = (\Sigma^{-1}\mu_j)^T = \mu_j^T(\Sigma^{-1})^T = \mu_j^T\Sigma^{-1}$。
    令 $b_j = -\frac{1}{2}\mu_j^T\Sigma^{-1}\mu_j + \log \pi_j$。
    將這些代入我們的方程式中可得：
    $$g_j(x) = w_j^T x + b_j$$
    證明完畢。
