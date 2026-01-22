---
title: Answer ZH
---

# 問題 2.1 (b)

## 預備知識

- **期望值的性質 (Expectation Properties)**：期望值的線性性質 $\mathbb{E}[aX + bY] = a\mathbb{E}[X] + b\mathbb{E}[Y]$。
- **方差的性質 (Variance Properties)**：對於獨立變量，$\text{var}(\sum X_i) = \sum \text{var}(X_i)$。同時 $\text{var}(aX) = a^2 \text{var}(X)$。
- **無偏估計量 (Unbiased Estimator)**：如果一個估計量 $\hat{\theta}$ 的期望值等於真實參數值，即 $\mathbb{E}[\hat{\theta}] = \theta$，則稱其為無偏的。
- **獨立同分佈 (I.I.D.)**：獨立且同分佈。因為 $k_i$ 是來自 Poisson($\lambda$) 的 i.i.d 樣本，所以 $\mathbb{E}[k_i] = \lambda$ 且 $\text{var}(k_i) = \lambda$。

## 逐步解答

1. **回顧最大似然估計量：**
    從 (a) 部分可知，估計量為：
    $$ \hat{\lambda} = \frac{1}{N} \sum_{i=1}^{N} k_i $$

2. **證明無偏性：**
    我們計算 $\hat{\lambda}$ 的期望值：
    $$
    \begin{aligned}
    \mathbb{E}[\hat{\lambda}] &= \mathbb{E}\left[ \frac{1}{N} \sum_{i=1}^{N} k_i \right] \\
    &= \frac{1}{N} \sum_{i=1}^{N} \mathbb{E}[k_i] \quad \text{(期望的線性性質)}
    \end{aligned}
    $$
    由於每個 $k_i$ 都是從參數為 $\lambda$ 的泊松分佈中抽取的，我們知道 $\mathbb{E}[k_i] = \lambda$。
    $$
    \begin{aligned}
    \mathbb{E}[\hat{\lambda}] &= \frac{1}{N} \sum_{i=1}^{N} \lambda \\
    &= \frac{1}{N} (N\lambda) \\
    &= \lambda
    \end{aligned}
    $$
    由於 $\mathbb{E}[\hat{\lambda}] = \lambda$，該估計量是**無偏的**。

3. **計算方差：**
    我們計算 $\hat{\lambda}$ 的方差：
    $$
\begin{aligned}
\text{var}(\hat{\lambda}) &= \text{var}\left( \frac{1}{N} \sum_{i=1}^{N} k_i \right) \\
&= \frac{1}{N^2} \text{var}\left( \sum_{i=1}^{N} k_i \right) \quad \text{(性質: var(aX) = a^2 var(X))}
\end{aligned}
    $$
    由於 $k_i$ 樣本是獨立的，和的方差等於方差的和：
    $$
    \begin{aligned}
    \text{var}(\hat{\lambda}) &= \frac{1}{N^2} \sum_{i=1}^{N} \text{var}(k_i)
    \end{aligned}
    $$
    對於泊松分佈，方差等於均值，所以 $\text{var}(k_i) = \lambda$。
    $$
    \begin{aligned}
    \text{var}(\hat{\lambda}) &= \frac{1}{N^2} \sum_{i=1}^{N} \lambda \\
    &= \frac{1}{N^2} (N\lambda) \\
    &= \frac{\lambda}{N}
    \end{aligned}
    $$
    因此，估計量的方差為 $\frac{\lambda}{N}$。
