---
title: Answer ZH
---

### 先備知識

* 貝氏決策規則 (Bayes Decision Rule, BDR)
* 條件風險 (Conditional Risk)
* 微積分 (積分符號內取微分)
* 期望值 (Expected Value)

### 逐步推導

1. **定義條件風險：**
    給定輸入 $x$ 和決策函數 $g(x)$ 的條件風險 $R(x)$，是在條件分佈 $p(y|x)$ 下的預期損失：
    $$R(x) = \mathbb{E}_{y|x}[L(g(x), y)] = \int L(g(x), y) p(y|x) dy$$

2. **代入平方損失函數：**
    已知 $L(g(x), y) = (g(x) - y)^2$，我們將其代入風險方程式中：
    $$R(x) = \int (g(x) - y)^2 p(y|x) dy$$

3. **最小化條件風險：**
    為了找到最小化 $R(x)$ 的最佳決策函數 $g^*(x)$，我們對 $R(x)$ 關於 $g(x)$ 取導數並將其設為零。
    $$\frac{\partial R(x)}{\partial g(x)} = \frac{\partial}{\partial g(x)} \int (g(x) - y)^2 p(y|x) dy$$
    假設我們可以交換微分和積分的順序（萊布尼茲積分法則）：
    $$\frac{\partial R(x)}{\partial g(x)} = \int \frac{\partial}{\partial g(x)} (g(x) - y)^2 p(y|x) dy$$
    $$\frac{\partial R(x)}{\partial g(x)} = \int 2(g(x) - y) p(y|x) dy$$

4. **將導數設為零：**
    $$\int 2(g(x) - y) p(y|x) dy = 0$$
    $$2 \int g(x) p(y|x) dy - 2 \int y p(y|x) dy = 0$$
    因為 $g(x)$ 不依賴於 $y$，我們可以將其提出第一個積分：
    $$g(x) \int p(y|x) dy = \int y p(y|x) dy$$

5. **求解 $g(x)$：**
    我們知道機率密度函數在其整個定義域上的積分為 1，所以 $\int p(y|x) dy = 1$。
    $$g(x) \cdot 1 = \int y p(y|x) dy$$
    右邊是給定 $x$ 時 $y$ 的條件期望值的定義。
    $$g^*(x) = \mathbb{E}[y|x]$$

因此，平方損失函數的貝氏決策規則是選擇條件期望值（平均值）。
