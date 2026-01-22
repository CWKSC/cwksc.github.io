---
title: Explain ZH
---

### 1. 機率與幾何的連結 (Connection between Probability and Geometry)

(a) 部分從幾何角度切入問題（「擬合一條線」）。(b) 部分則從機率角度切入（「哪些參數使這組數據最可能出現？」）。
結果顯示當雜訊是**高斯分佈 (Gaussian)** 時，兩者是完全相同的。
* **最小平方法 (Least Squares)** 最小化距離的平方。
* **高斯 MLE** 最大化機率，而機率隨距離平方的增加呈指數衰減 ($e^{-dist^2}$)。最大化 $e^{-dist^2}$ 就等於最小化 $dist^2$。

### 2. 如果雜訊不是高斯分佈呢？ (What if noise is not Gaussian?)

如果雜訊服從不同的分佈，最小平方法可能就不是最大概似估計量。
* **拉普拉斯雜訊 (Laplace noise)** ($e^{-|x|}$) $\implies$ 最小化平均絕對誤差 (MAE)。
* **泊松雜訊 (Poisson noise)** $\implies$ 不同的損失函數。
最小平方法是專門對應高斯誤差的最佳解。

### 3. 為什麼用對數概似？ (Log-Likelihood)

我們使用「對數概似」而不只是「概似」，主要有兩個原因：
1. **數學 (Math)**：對和 (Sums) 進行微分比對乘積 (Products) 容易得多。
2. **電腦運算 (Computers)**：將許多個很小的機率相乘（例如 $0.5^{100}$）會導致「下溢 (Underflow)」（數值變成零）。將對數相加（例如 $100 \times \ln(0.5)$）可以讓數字保持在可處理的範圍內。
