---
title: Answer ZH
---

### 先備知識 (Prerequisites)
- **期望值與變異數的性質 (Expectation and Variance Properties)**
- **無偏估計量 (Unbiased Estimator)**
- **獨立同分布 (i.i.d.) 隨機變數的性質**

### 逐步推導 (Step-by-Step Derivation)

1. 當一個估計量 (estimator) $\hat{\lambda}$ 的期望值等於真實底層參數時，我們稱它為**無偏估計量 (unbiased estimator)**，也就是 $\mathbb{E}[\hat{\lambda}] = \lambda$。

2. 回顧 (a) 部分求得的最大概似估計量 (ML estimator)：
   $$\hat{\lambda} = \frac{1}{N}\sum_{i=1}^N k_i$$

3. 利用期望值的線性性質，計算 $\hat{\lambda}$ 的期望值：
   $$\mathbb{E}[\hat{\lambda}] = \mathbb{E}\left[\frac{1}{N}\sum_{i=1}^N k_i\right] = \frac{1}{N}\sum_{i=1}^N \mathbb{E}[k_i]$$

4. 已知每個 $k_i$ 都是從參數為 $\lambda$ 的柏松分布中抽取的樣本，單個樣本的期望值為 $\mathbb{E}[k_i] = \lambda$：
   $$\mathbb{E}[\hat{\lambda}] = \frac{1}{N} \sum_{i=1}^N \lambda = \frac{1}{N} (N\lambda) = \lambda$$
   因為 $\mathbb{E}[\hat{\lambda}] = \lambda$，所以此為**無偏估計量**。

5. 接著，計算估計量的變異數 (variance) $\text{var}(\hat{\lambda})$：
   $$\text{var}(\hat{\lambda}) = \text{var}\left(\frac{1}{N}\sum_{i=1}^N k_i\right)$$

6. 根據變異數的性質，隨機變數乘上常數 $c$ 會使變異數放大 $c^2$ 倍。此外，因為樣本 $k_i$ 彼此獨立，故樣本總和的變異數等於各別變異數的總和：
   $$\text{var}(\hat{\lambda}) = \frac{1}{N^2} \sum_{i=1}^N \text{var}(k_i)$$

7. 題目已知柏松分布的變異數為 $\text{var}(k_i) = \lambda$。將其代入方程：
   $$\text{var}(\hat{\lambda}) = \frac{1}{N^2} \sum_{i=1}^N \lambda = \frac{1}{N^2} (N\lambda) = \frac{\lambda}{N}$$
   
由此得證，估計量變異數確實為 $\frac{\lambda}{N}$。