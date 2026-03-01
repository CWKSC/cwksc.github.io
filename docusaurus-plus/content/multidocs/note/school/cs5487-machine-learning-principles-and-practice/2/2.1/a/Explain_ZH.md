---
title: Explain ZH
---

### 直覺理解 (Intuition)

最大概似估計 (Maximum Likelihood Estimation, MLE) 是一種尋找「最有可能產生這組觀測數據」的參數 ($\lambda$) 的方法。

對於柏松分布 (Poisson distribution) 而言，參數 $\lambda$ 代表事件 (例如炸彈命中) 發生的**平均速率 (average rate)**。

直觀上，我們對預期平均發生率 $\lambda$ 的最佳猜測，就是觀測次數的經驗平均值 (empirical average)，也就是**樣本平均數 (sample mean)**。我們只需將所有單元格中的炸彈命中總數 ($\sum k_i$) 加總，然後除以單元格的總數量 ($N$)，就能算出每個單元格被命中的平均次數。

這個結果與我們日常計算平均值的直覺完全吻合。柏松分布的 MLE 並非一個深奧難懂的數學抽象概念，它只是在數學上證實了：對於「真實」平均值最合理的估計，就是我們「觀測到」的平均值。
