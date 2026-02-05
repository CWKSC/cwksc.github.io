---
title: Explain ZH
---

## 詳細解釋

這部分決定了我們如何使用訓練好的貝葉斯模型對新的數據點進行預測。

### 1. 潛在函數 (Latent Function) $f_*$

$f_*$ 項代表在 $x_*$ 處函數的「真實」潛在值，不包含任何測量雜訊。
* 由於我們對真實參數 $\theta$ 存在不確定性（由 $\hat{\Sigma}_\theta$ 捕捉），我們對函數值也存在不確定性。
* 變異數 $\hat{\sigma}_*^2 = \phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*)$ 代表我們的 **認知不確定性 (Epistemic Uncertainty)**（由於缺乏知識/數據造成的不確定性）。
* 通常，在我們有大量訓練數據的地方，這個變異數很小；在數據稀疏的地方，這個變異數很大。

### 2. 預測觀測值 (Predictive Observable) $y_*$

$y_*$ 項是我們實際觀察到的值。它包含函數值 $f_*$ 加上不可避免的測量雜訊。
* 預測變異數是兩部分之和：
    $$
    \operatorname{Var}(y) = \underbrace{\hat{\sigma}_*^2}_{\text{模型不確定性}} + \underbrace{\sigma^2}_{\text{雜訊}}
    $$
* **偶然不確定性 (Aleatoric Uncertainty)**: $\sigma^2$ 項是系統固有的。即使有無限的數據，這種不確定性仍然存在。

### 3. 與高斯過程的聯繫

問題陳述指出這是高斯過程 (GP) 迴歸的線性版本。
* 在 GP 中，我們通常跳過顯式計算 $\theta$，而是計算核函數 (kernel function) $k(x_i, x_j)$。
* $\phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*)$ 實際上是使用線性特徵定義的核來計算後驗變異數。
* 方程式 (3.53) 允許我們不僅產生點預測，還能產生新輸出的完整機率分佈（信賴區間），這是貝葉斯方法的主要優勢。
