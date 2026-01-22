---
title: Answer ZH
---

# 問題 2.1 (a)

## 預備知識

- **泊松分佈 (Poisson Distribution)**：一種離散概率分佈，表示在固定時間或空間間隔內發生給定數量事件的概率。
  - 概率質量函數 (PMF)：$P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$
- **最大似然估計 (Maximum Likelihood Estimation, MLE)**：一種通過最大化似然函數來估計概率分佈參數的方法，使得在假設的統計模型下，觀測數據出現的概率最大。
- **對數似然 (Log-Likelihood)**：似然函數的自然對數。最大化對數似然等同於最大化似然，但在數學上通常更容易處理。

## 逐步解答

1. **寫出似然函數：**
    給定 $N$ 個獨立同分佈 (i.i.d.) 樣本 $\{k_1, k_2, \dots, k_N\}$，似然函數 $L(\lambda)$ 是單個概率質量函數的乘積：
    $$
    L(\lambda) = \prod_{i=1}^{N} p(k_i | \lambda) = \prod_{i=1}^{N} \frac{1}{k_i!} e^{-\lambda} \lambda^{k_i}
    $$

2. **寫出對數似然函數：**
    對似然函數取自然對數，將乘積轉換為求和，這樣更易於求導：
    $$
    \begin{aligned}
    \ell(\lambda) = \ln L(\lambda) &= \sum_{i=1}^{N} \ln \left( \frac{1}{k_i!} e^{-\lambda} \lambda^{k_i} \right) \\
    &= \sum_{i=1}^{N} \left( -\ln(k_i!) - \lambda + k_i \ln(\lambda) \right) \\
    &= -\sum_{i=1}^{N} \ln(k_i!) - \sum_{i=1}^{N} \lambda + \sum_{i=1}^{N} k_i \ln(\lambda) \\
    &= -\sum_{i=1}^{N} \ln(k_i!) - N\lambda + \ln(\lambda) \sum_{i=1}^{N} k_i
    \end{aligned}
    $$

3. **對 $\lambda$ 求導：**
    為了找到最大值，我們計算 $\ell(\lambda)$ 對 $\lambda$ 的導數：
    $$
    \frac{\partial \ell(\lambda)}{\partial \lambda} = -N + \frac{1}{\lambda} \sum_{i=1}^{N} k_i
    $$

4. **令導數為零並解出 $\lambda$：**
    $$
    -N + \frac{1}{\lambda} \sum_{i=1}^{N} k_i = 0
    $$
    $$
    \frac{1}{\lambda} \sum_{i=1}^{N} k_i = N
    $$
    $$
    \lambda = \frac{1}{N} \sum_{i=1}^{N} k_i
    $$

5. **結論：**
    最大似然估計量 $\hat{\lambda}$ 即為樣本均值：
    $$
    \hat{\lambda} = \frac{1}{N} \sum_{i=1}^{N} k_i
    $$
