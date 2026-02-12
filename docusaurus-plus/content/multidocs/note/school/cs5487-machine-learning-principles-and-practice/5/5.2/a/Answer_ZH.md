---
title: Answer ZH
---

## 必備知識

1. **期望值的定義**：隨機變數 $X$ 若具有機率密度 $p(x)$，其期望值為 $\mathbb{E}[x] = \int x p(x) dx$。
2. **核密度估計 (KDE)**：公式 (5.5)。
3. **積分的性質**：線性性質 ($\int (af(x) + bg(x)) dx = a\int f(x)dx + b\int g(x)dx$)。
4. **變數變換**：積分中的變數代換法。
5. **核函數的性質**：核函數 $\tilde{k}(x)$ 的積分值為 1 ($\int \tilde{k}(x) dx = 1$)，因為它是機率密度函數，並且具有零平均數 (Eq 5.6)。

## 逐步證明

我們想要計算分佈 $\hat{p}(x)$ 的期望值。

1. **寫下定義：**
    $$
    \mathbb{E}_{\hat{p}}[x] = \int x \hat{p}(x) dx
    $$

2. **代入 $\hat{p}(x)$ 的定義 (Eq 5.5)：**
    $$
    \mathbb{E}_{\hat{p}}[x] = \int x \left( \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right) dx
    $$

3. **交換積分與求和 (線性性質)：**
    $$
    \mathbb{E}_{\hat{p}}[x] = \frac{1}{n} \sum_{i=1}^n \int x \tilde{k}(x - x_i) dx
    $$

4. **執行變數變換：**
    令 $u = x - x_i$，則 $x = u + x_i$ 且 $dx = du$。當 $x$ 從 $-\infty$ 到 $\infty$ 時，$u$ 的範圍也是一樣。
    $$
    \int x \tilde{k}(x - x_i) dx = \int (u + x_i) \tilde{k}(u) du
    $$

5. **展開並分離積分：**
    $$
    = \int u \tilde{k}(u) du + \int x_i \tilde{k}(u) du
    $$
    $$
    = \underbrace{\int u \tilde{k}(u) du}_{\mathbb{E}_{\tilde{k}}[u]} + x_i \underbrace{\int \tilde{k}(u) du}_{1}
    $$

6. **使用核函數性質：**
    * 根據公式 (5.6)，$\int u \tilde{k}(u) du = 0$ (零平均數)。
    * 由於 $\tilde{k}$ 是一個合法的機率密度函數，$\int \tilde{k}(u) du = 1$。

    因此，
    $$
    \int x \tilde{k}(x - x_i) dx = 0 + x_i \cdot 1 = x_i
    $$

7. **加總結果：**
    將此結果代回步驟 3 中的求和：
    $$
    \mathbb{E}_{\hat{p}}[x] = \frac{1}{n} \sum_{i=1}^n x_i
    $$

    這正是 $X$ 的樣本平均數。

    $$
    \hat{\mu} = \frac{1}{n} \sum_{i=1}^n x_i \quad \blacksquare
    $$
