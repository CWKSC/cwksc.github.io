---
title: Answer ZH
---

## 必備知識

1. **共變異數的定義**：對於平均數為 $\mu$ 的隨機變數 $x$，其共變異數為 $\mathbb{E}[(x - \mu)(x - \mu)^T] = \mathbb{E}[xx^T] - \mu\mu^T$。
2. **平移定理 (Steiner's Translation Theorem) 或等價性質**：$\text{cov}(x) = \mathbb{E}[x x^T] - \mathbb{E}[x]\mathbb{E}[x]^T$。
3. **核函數的性質**：
    * $\int \tilde{k}(u) du = 1$。
    * $\int u \tilde{k}(u) du = 0$ (零平均數)。
    * $\int u u^T \tilde{k}(u) du = H$ (來自公式 5.7，因為平均數為 0)。

## 逐步證明

設 $\hat{\mu}$ 為 $\hat{p}(x)$ 的平均數（已在 (a) 部分推導出）。共變異數定義為：

$$
\hat{\Sigma} = \mathbb{E}_{\hat{p}}[(x - \hat{\mu})(x - \hat{\mu})^T] = \int (x - \hat{\mu})(x - \hat{\mu})^T \hat{p}(x) dx
$$

或者使用性質 $\text{cov}(x) = \mathbb{E}[xx^T] - \mathbb{E}[x]\mathbb{E}[x]^T$：
$$
\hat{\Sigma} = \int x x^T \hat{p}(x) dx - \hat{\mu}\hat{\mu}^T
$$

我們先計算二階動差項 $\int x x^T \hat{p}(x) dx$：

1. **代入 $\hat{p}(x)$：**
    $$
    \int x x^T \left( \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right) dx = \frac{1}{n} \sum_{i=1}^n \int x x^T \tilde{k}(x - x_i) dx
    $$

2. **變數變換：**
    令 $u = x - x_i$，則 $x = u + x_i$。
    $$
    \int (u + x_i)(u + x_i)^T \tilde{k}(u) du
    $$
    展開 $(u + x_i)(u + x_i)^T = uu^T + ux_i^T + x_i u^T + x_i x_i^T$。

3. **逐項計算積分：**
    $$
    \int (uu^T + ux_i^T + x_i u^T + x_i x_i^T) \tilde{k}(u) du
    $$
    * $\int uu^T \tilde{k}(u) du = H$ (根據零平均數的核函數共變異數定義)。
    * $\int u x_i^T \tilde{k}(u) du = (\int u \tilde{k}(u) du) x_i^T = 0 \cdot x_i^T = 0$。
    * $\int x_i u^T \tilde{k}(u) du = x_i (\int u^T \tilde{k}(u) du) = x_i \cdot 0 = 0$。
    * $\int x_i x_i^T \tilde{k}(u) du = x_i x_i^T \int \tilde{k}(u) du = x_i x_i^T \cdot 1 = x_i x_i^T$。

    因此，$\int x x^T \tilde{k}(x - x_i) dx = H + x_i x_i^T$。

4. **加總結果：**
    $$
    \mathbb{E}_{\hat{p}}[x x^T] = \frac{1}{n} \sum_{i=1}^n (H + x_i x_i^T) = H + \frac{1}{n} \sum_{i=1}^n x_i x_i^T
    $$

5. **計算共變異數：**
    $$
    \hat{\Sigma} = \mathbb{E}_{\hat{p}}[x x^T] - \hat{\mu}\hat{\mu}^T
    $$
    $$
    \hat{\Sigma} = H + \frac{1}{n} \sum_{i=1}^n x_i x_i^T - \hat{\mu}\hat{\mu}^T
    $$

6. **整理為樣本共變異數形式：**
    回想樣本共變異數為 $S = \frac{1}{n}\sum (x_i - \hat{\mu})(x_i - \hat{\mu})^T = (\frac{1}{n}\sum x_i x_i^T) - \hat{\mu}\hat{\mu}^T$。
    因此：
    $$
    \hat{\Sigma} = H + \left( \frac{1}{n} \sum_{i=1}^n x_i x_i^T - \hat{\mu}\hat{\mu}^T \right)
    $$
    $$
    \hat{\Sigma} = H + \frac{1}{n} \sum_{i=1}^n (x_i - \hat{\mu})(x_i - \hat{\mu})^T \quad \blacksquare
    $$
