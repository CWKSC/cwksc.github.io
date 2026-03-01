---
title: Answer ZH
---

# 解答 (a)

## 預備知識 (Prerequisites)
- **核心密度估計 (Kernel Density Estimation, KDE)**
- **期望值的線性性質 (Linearity of Expectation)**
- **卷積 (Convolution)**

## 逐步推導 (Step-by-Step Derivation)

1. **定義核心密度估計量 (Define the Kernel Density Estimator):**
   標準的核心密度估計量 (KDE) 定義如下：
   $$
   \hat{p}(x) = \frac{1}{n} \sum_{i=1}^n \frac{1}{h^d} k\left(\frac{x - x_i}{h}\right)
   $$
   在此我們引入重新縮放過的核心函數 $\tilde{k}(z) = \frac{1}{h^d} k\left(\frac{z}{h}\right)$，這可以將 KDE 的表達式簡化為：
   $$
   \hat{p}(x) = \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i)
   $$

2. **取期望值 (Take the Expectation):**
   我們希望能找出估計量 $\hat{p}(x)$ 在隨機樣本數據集 $X$ 上的期望值。我們套用期望值運算子 $\mathbb{E}_X$：
   $$
   \mathbb{E}_X[\hat{p}(x)] = \mathbb{E}_X \left[ \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right]
   $$

3. **套用期望值的線性性質 (Apply Linearity of Expectation):**
   因為和的期望值等於期望值的和，我們可以將 $\mathbb{E}$ 移到連加符號裡面：
   $$
   \mathbb{E}_X[\hat{p}(x)] = \frac{1}{n} \sum_{i=1}^n \mathbb{E}_{x_i \sim p} [\tilde{k}(x - x_i)]
   $$
   由於所有樣本 $x_1, \dots, x_n$ 都是從真實密度 $p(x)$ 中獨立同分配 (independent and identically distributed, i.i.d.) 抽取出來的，因此每一個期望值 $\mathbb{E}[\tilde{k}(x - x_i)]$ 都是相同的。讓我們使用虛擬變數 (dummy variable) $\mu$ 來代表從 $p$ 中抽取的任何樣本：
   $$
   \mathbb{E}_{\mu \sim p} [\tilde{k}(x - \mu)] \quad \Rightarrow \quad \mathbb{E}_X[\hat{p}(x)] = \frac{n}{n} \mathbb{E}_{\mu \sim p} [\tilde{k}(x - \mu)] = \mathbb{E}_{\mu \sim p} [\tilde{k}(x - \mu)]
   $$

4. **將期望值表示為積分 (Express Expectation as an Integral):**
   根據連續隨機變數 $\mu \sim p(\mu)$ 期望值的定義，函數 $f(\mu)$ 的期望值為 $\int f(\mu)p(\mu) d\mu$。將我們的函數 $f(\mu) = \tilde{k}(x - \mu)$ 帶入：
   $$
   \int f(\mu)p(\mu) d\mu = \int \tilde{k}(x - \mu) p(\mu) d\mu = \int p(\mu) \tilde{k}(x - \mu) d\mu
   $$
   因此，$\mathbb{E}_X[\hat{p}(x)] = \int p(\mu) \tilde{k}(x - \mu) d\mu$。

5. **識別出卷積運算 (Recognize the Convolution):**
   兩個函數的乘積，其中一個函數先反轉再平移的積分 $\int f(\mu)g(x - \mu) d\mu$，正好就是卷積 (convolution) $(f * g)(x)$ 的定義。因此：
   $$
   \int p(\mu) \tilde{k}(x - \mu) d\mu = (p * \tilde{k})(x) = p(x) * \tilde{k}(x)
   $$
   這就證明了方程式 (5.1)。

6. **關於偏差的結論 (Conclusion on Bias):**
   估計量的偏差定義為 $\text{Bias}(\hat{p}(x)) = \mathbb{E}[\hat{p}(x)] - p(x)$。
   因此，KDE 的偏差為 $p(x) * \tilde{k}(x) - p(x)$。這告訴我們，KDE 通常是一個 **有偏 (biased)** 估計量。它的期望值並不會剛好等於真實密度 $p(x)$，而是真實密度 $p(x)$ 透過核心函數 $\tilde{k}$ 進行平滑化 (卷積) 後的版本。
