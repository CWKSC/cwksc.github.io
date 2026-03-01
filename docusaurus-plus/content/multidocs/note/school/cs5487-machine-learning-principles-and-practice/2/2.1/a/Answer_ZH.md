---
title: Answer ZH
---

### 先備知識 (Prerequisites)
- **最大概似估計 (Maximum Likelihood Estimation, MLE)**
- **對數概似函數 (Log-likelihood)**
- **微積分求導 (Calculus Derivation)**

### 逐步推導 (Step-by-Step Derivation)

1. 對於 $N$ 個獨立同分布 (i.i.d.) 的樣本 $\{k_1, k_2, \dots, k_N\}$，其概似函數 (likelihood function) $L(\lambda)$ 是各自機率質量函數 (PMF) 的乘積：
   $$L(\lambda) = \prod_{i=1}^N p(x = k_i | \lambda) = \prod_{i=1}^N \frac{1}{k_i!}e^{-\lambda}\lambda^{k_i}$$

2. 取自然對數得到對數概似函數 (log-likelihood function) $l(\lambda)$。這可以將連乘積化為總和，方便我們進行微積分求導：
   $$l(\lambda) = \ln L(\lambda) = \sum_{i=1}^N \ln\left( \frac{1}{k_i!}e^{-\lambda}\lambda^{k_i} \right)$$
   $$l(\lambda) = \sum_{i=1}^N \left( -\ln(k_i!) - \lambda + k_i \ln\lambda \right)$$
   $$l(\lambda) = - \sum_{i=1}^N \ln(k_i!) - N\lambda + (\ln\lambda)\sum_{i=1}^N k_i$$

3. 為了找出最大概似估計值 (MLE)，將 $l(\lambda)$ 對 $\lambda$ 偏微分，並將其設為 $0$：
   $$\frac{\text{d}l(\lambda)}{\text{d}\lambda} = -N + \frac{1}{\lambda}\sum_{i=1}^N k_i = 0$$

4. 解出 $\lambda$，即可得到估計式 $\hat{\lambda}$：
   $$N = \frac{1}{\lambda}\sum_{i=1}^N k_i$$
   $$\hat{\lambda}_{\text{ML}} = \frac{1}{N}\sum_{i=1}^N k_i$$