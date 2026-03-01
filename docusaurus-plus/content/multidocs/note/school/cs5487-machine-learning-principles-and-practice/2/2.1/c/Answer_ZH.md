---
title: Answer ZH
---

### 先備知識 (Prerequisites)

- **最大概似估計 (Maximum Likelihood Estimation, MLE)**
- **加權平均計算 (Weighted Average Calculation)**

### 逐步推導 (Step-by-Step Derivation)

1. 回想一下在 (a) 部分推導出的柏松分布參數 $\lambda$ 的最大概似估計量 (ML estimator) 公式：
   $$\hat{\lambda} = \frac{1}{N}\sum_{i=1}^N k_i$$

2. 根據題目描述，總面積被劃分成 $144 \text{ km}^2 / 0.25 \text{ km}^2 = 576$ 個網格單元。我們也可以透過將表格中觀察到的單元格數量加總來驗證這一點：
   $$N = 229 + 211 + 93 + 35 + 7 + 1 = 576$$

3. 接下來，我們計算所有 $N$ 個單元格命中的總數。可以將 $k$ 乘上剛好被命中 $k$ 次的單元格數量，然後加總而得。對於「$5$ 及以上」這個類別，我們在此計算中假定其值為 $5$，因為這是可能發生的最小值，而且只有 $1$ 個單元格觀察到這個數值。
   $$\text{總命中數} = \sum_{k} (k \times \text{命中次數為 } k \text{ 的單元格數量})$$
   $$\text{總命中數} = (0 \times 229) + (1 \times 211) + (2 \times 93) + (3 \times 35) + (4 \times 7) + (5 \times 1)$$
   $$\text{總命中數} = 0 + 211 + 186 + 105 + 28 + 5 = 535$$

4. 將這些數值代回最大概似估計量公式：
   $$\hat{\lambda} = \frac{\text{總命中數}}{N} = \frac{535}{576}$$

5. 計算最終的數值：
   $$\hat{\lambda} \approx 0.9288$$
