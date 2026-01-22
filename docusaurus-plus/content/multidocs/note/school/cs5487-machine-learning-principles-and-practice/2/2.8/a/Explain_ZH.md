---
title: Explain ZH
---

### 1. 矩陣公式化 (Matrix Formulation)

此問題的公式化使用了特徵矩陣 $\Phi$（大寫 Phi）。
* 通常在機器學習教科書中，設計矩陣 (Design Matrix) $X$ 是 $n \times D$（列 Rows 代表樣本）。
* 而在這個問題中，$\Phi$ 被定義為 $D \times n$（行 Columns 代表樣本）。
* 因此，原本常見的 $X \theta$，在這裡會變成 $\Phi^T \theta$。

### 2. 正規方程 (The Normal Equation)

推導的依據是尋找拋物線的頂點。誤差函數 $E(\theta)$ 是一個**凸二次函數 (Convex Quadratic Function)**（形狀像一個碗）。
1. 我們用矩陣形式寫出誤差。
2. 我們對權重 $\theta$ 取導數（梯度）。
3. 我們將導數設為零，以找出這個「碗」的底部。

結果 $\theta = (\Phi \Phi^T)^{-1} \Phi y$ 是一個直接的封閉形式解 (Closed-form solution)。如果你能計算出這個反矩陣，就不需要迭代迴圈（如梯度下降法）。在幾何上，這代表將目標向量 $y$ 投影到由特徵向量形成的子空間上。
