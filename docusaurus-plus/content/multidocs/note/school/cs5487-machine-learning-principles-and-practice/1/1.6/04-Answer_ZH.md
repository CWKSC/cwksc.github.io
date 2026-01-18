---
title: Answer ZH
---

# 問題 1.6 多變量高斯分佈 - 解答

## (a) 對角協方差矩陣

### 預備知識

- **對角矩陣的行列式**：對角矩陣的行列式是其對角線元素的乘積。
- **對角矩陣的逆矩陣**：對角矩陣的逆矩陣是一個對角矩陣，其元素是原對角線元素的倒數。
- **指數規則**：$e^{a+b} = e^a e^b$ 和 $\exp(\sum x_i) = \prod \exp(x_i)$。
- **單變量高斯 PDF**：$\mathcal{N}(x_i|\mu_i, \sigma_i^2) = \frac{1}{\sqrt{2\pi\sigma_i^2}} e^{-\frac{(x_i-\mu_i)^2}{2\sigma_i^2}}$。

### 逐步解答

1.  **分析行列式項**：
    給定對角協方差矩陣 $\Sigma = \text{diag}(\sigma_1^2, \dots, \sigma_d^2)$，其行列式為：

    $$
    |\Sigma| = \prod_{i=1}^d \sigma_i^2
    $$

    取平方根：

    $$
    |\Sigma|^{1/2} = \left(\prod_{i=1}^d \sigma_i^2\right)^{1/2} = \prod_{i=1}^d \sigma_i
    $$

2.  **分析馬些路距離 (Mahalanobis distance) 項**：
    對角矩陣 $\Sigma$ 的逆矩陣為：

    $$
    \Sigma^{-1} = \text{diag}\left(\frac{1}{\sigma_1^2}, \dots, \frac{1}{\sigma_d^2}\right)
    $$

    展開內部項 $\|x - \mu\|^2_{\Sigma} = (x - \mu)^T \Sigma^{-1} (x - \mu)$：

    $$
    \begin{aligned}
    (x - \mu)^T \Sigma^{-1} (x - \mu) &= \begin{bmatrix} x_1 - \mu_1 & \cdots & x_d - \mu_d \end{bmatrix}
    \begin{bmatrix}
    \frac{1}{\sigma_1^2} & & 0 \\
    & \ddots & \\
    0 & & \frac{1}{\sigma_d^2}
    \end{bmatrix}
    \begin{bmatrix} x_1 - \mu_1 \\ \vdots \\ x_d - \mu_d \end{bmatrix} \\
    &= \sum_{i=1}^d \frac{(x_i - \mu_i)^2}{\sigma_i^2}
    \end{aligned}
    $$

3.  **代回完整的 PDF**：

    $$
    p(x) = \frac{1}{(2\pi)^{d/2} \prod_{i=1}^d \sigma_i} \exp\left( -\frac{1}{2} \sum_{i=1}^d \frac{(x_i - \mu_i)^2}{\sigma_i^2} \right)
    $$

4.  **因式分解表達式**：
    將 $(2\pi)^{d/2}$ 分配為 $\prod_{i=1}^d (2\pi)^{1/2}$，並將指數和分離為乘積：
    $$
    \begin{aligned}
    p(x) &= \left( \prod_{i=1}^d \frac{1}{(2\pi)^{1/2}\sigma_i} \right) \prod_{i=1}^d \exp\left( -\frac{(x_i - \mu_i)^2}{2\sigma_i^2} \right) \\
    &= \prod_{i=1}^d \left( \frac{1}{\sqrt{2\pi}\sigma_i} e^{-\frac{(x_i-\mu_i)^2}{2\sigma_i^2}} \right) \\
    &= \prod_{i=1}^d \mathcal{N}(x_i|\mu_i, \sigma_i^2)
    \end{aligned}
    $$
    這表明聯合密度是獨立單變量邊緣密度的乘積。

---

## (b) 具有對角協方差的二維高斯

### 預備知識

- **等高線圖**：使用等值線在二維平面上可視化三維函數。
- **橢圓方程式**：$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$。

### 逐步解答

給定 $\mu = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$ 和 $\Sigma = \begin{bmatrix} 1 & 0 \\ 0 & 0.25 \end{bmatrix}$。

1.  **方差**：
    $\sigma_1^2 = 1 \implies \sigma_1 = 1$.
    $\sigma_2^2 = 0.25 \implies \sigma_2 = 0.5$.

2.  **馬些路距離**：

    $$
    \|x - \mu\|^2_{\Sigma} = \frac{x_1^2}{1} + \frac{x_2^2}{0.25} = x_1^2 + 4x_2^2
    $$

    密度為常數的水平集（等高線）滿足 $x_1^2 + 4x_2^2 = C$。這是以 $(0,0)$ 為中心的橢圓方程式。

3.  **形狀描述**：
    - 橢圓的半長軸沿著 $x_1$（長度正比於 $\sigma_1 = 1$）。
    - 半短軸沿著 $x_2$（長度正比於 $\sigma_2 = 0.5$）。
    - **效果**：密度是「軸對齊」的。因為 $\sigma_1 > \sigma_2$，分佈沿 $x_1$ 軸拉伸並沿 $x_2$ 軸壓縮。它看起來像一個扁平的橢圓。

---

## (c) 各向同性協方差矩陣

### 預備知識

- **各向同性**：具有在不同方向測量時具有相同值的物理屬性。
- **單位矩陣**：對角線上為 1 而其他地方為 0 的矩陣。

### 逐步解答

給定 $\Sigma = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$。

1.  **方差**：
    $\sigma_1^2 = 1, \sigma_2^2 = 1$.

2.  **馬些路距離**：

    $$
    \|x - \mu\|^2_{\Sigma} = x_1^2 + x_2^2
    $$

    等高線滿足 $x_1^2 + x_2^2 = C$，這是圓的方程式。

3.  **形狀描述**：
    等高線是完美的圓形。概率密度從中心向各個方向以相同的速率下降。擴散是對稱的（在更高維度中為球形）。

---

## (d) 協方差矩陣的特徵分解

### 預備知識

- **譜定理**：任何對稱實矩陣都可以由其特徵向量的正交矩陣進行對角化。
- **矩陣乘法**：結合律性質。

### 逐步解答

1.  **特徵值方程式**：
    已知 $\Sigma v_i = \lambda_i v_i$ 對於 $i=1,\dots,d$。

2.  **矩陣形式**：
    我們可以將向量 $v_i$ 堆疊成矩陣 $V = [v_1, \dots, v_d]$，並將純量堆疊成對角矩陣 $\Lambda = \text{diag}(\lambda_1, \dots, \lambda_d)$。
    方程組 $\Sigma v_i = \lambda_i v_i$ 變為：

    $$
    \Sigma V = V \Lambda
    $$

3.  **正交性**：
    由於 $\Sigma$ 是對稱矩陣（協方差矩陣是對稱的），其特徵向量 $v_i$ 可以選擇為正交歸一的（互相正交且長度為單位長度）。
    因此，$V$ 是一個正交矩陣，意味著 $V^T V = I$ 或 $V^{-1} = V^T$。

4.  **對角化**：
    將方程式 $\Sigma V = V \Lambda$ 右乘 $V^T$：
    $$
    \Sigma V V^T = V \Lambda V^T
    $$
    由於 $V V^T = I$：
    $$
    \Sigma = V \Lambda V^T
    $$

---

## (e) 變換到對角空間

### 預備知識

- **分解矩陣的逆矩陣**：$(ABC)^{-1} = C^{-1} B^{-1} A^{-1}$。
- **向量性質**：$(Ax)^T = x^T A^T$。

### 逐步解答

1.  **$\Sigma$ 的逆矩陣**：
    使用 (d) 中的分解：

    $$
    \Sigma^{-1} = (V \Lambda V^T)^{-1} = (V^T)^{-1} \Lambda^{-1} V^{-1}
    $$

    因為 $V$ 是正交的（$V^{-1} = V^T$ 且 $(V^T)^{-1} = V$）：

    $$
    \Sigma^{-1} = V \Lambda^{-1} V^T
    $$

2.  **代入馬些路距離**：

    $$
    \|x - \mu\|^2_{\Sigma} = (x - \mu)^T V \Lambda^{-1} V^T (x - \mu)
    $$

3.  **定義 $y$**：
    令 $y = V^T (x - \mu)$。則其轉置為 $y^T = (x - \mu)^T V$。
    將 $y$ 代入距離方程式：

    $$
    \|x - \mu\|^2_{\Sigma} = y^T \Lambda^{-1} y
    $$

4.  **結果**：
    由於 $\Lambda$ 是對角矩陣，$y^T \Lambda^{-1} y = \|y\|^2_{\Lambda}$。
    這表明在由 $y$ 定義的坐標系中，變量是不相關的（對角協方差 $\Lambda$）。

---

## (f) V 和 $\mu$ 的幾何效應

### 預備知識

- **基底變換**：將向量投影到新的基底向量上。
- **仿射變換**：線性變換後進行平移。

### 逐步解答

關係式為 $x = Vy + \mu$（由 $y = V^T(x-\mu)$ 推導出，通過乘以 $V$ 並加上 $\mu$）。

1.  **變換 $V$ 的效果（旋轉）**：
    $V$ 包含 $\Sigma$ 的特徵向量。將向量 $y$ 乘以正交矩陣 $V$ 執行坐標系的 **旋轉**（或反射）。
    具體來說，$y$ 空間中的標準軸（高斯分佈在此處是軸對齊的）被旋轉以與 $x$ 空間中的特徵向量 $v_i$ 對齊。

2.  **變換 $\mu$ 的效果（平移）**：
    加上 $\mu$ 會移動原點。分佈的中心從 $0$（在 $y$ 空間中，如果我們考慮中心化的 $y$）移動到 $x$ 空間中的 $\mu$。

3.  **總結**：
    要生成樣本 $x$，你從軸對齊的高斯中取一個樣本 $y$，將其通過 $V$ 進行 **旋轉**，並通過 $\mu$ 進行 **平移**。

---

## (g) 一般協方差矩陣圖

### 預備知識

- **特徵方程式**：$\det(\Sigma - \lambda I) = 0$ 用於求特徵值。
- **特徵向量**：求解 $(\Sigma - \lambda I)v = 0$。

### 逐步解答

給定 $\Sigma = \begin{bmatrix} 0.625 & 0.375 \\ 0.375 & 0.625 \end{bmatrix}$。

1.  **尋找特徵值**：

    $$
    \det \begin{bmatrix} 0.625 - \lambda & 0.375 \\ 0.375 & 0.625 - \lambda \end{bmatrix} = 0
    $$

    $$
    (0.625 - \lambda)^2 - 0.375^2 = 0
    $$

    $$
    0.625 - \lambda = \pm 0.375
    $$

    $$
    \lambda_1 = 0.625 + 0.375 = 1.0
    $$

    $$
    \lambda_2 = 0.625 - 0.375 = 0.25
    $$

2.  **尋找特徵向量**：
    - 對於 $\lambda_1 = 1$：
      $\begin{bmatrix} -0.375 & 0.375 \\ 0.375 & -0.375 \end{bmatrix} \begin{bmatrix} v_{11} \\ v_{12} \end{bmatrix} = 0 \implies v_{11} = v_{12}$.
      歸一化特徵向量：$v_1 = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix} \approx \begin{bmatrix} 0.707 \\ 0.707 \end{bmatrix}$。（$45^\circ$ 線方向）。

    - 對於 $\lambda_2 = 0.25$：
      $\begin{bmatrix} 0.375 & 0.375 \\ 0.375 & 0.375 \end{bmatrix} \begin{bmatrix} v_{21} \\ v_{22} \end{bmatrix} = 0 \implies v_{21} = -v_{22}$.
      歸一化特徵向量：$v_2 = \begin{bmatrix} -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix} \approx \begin{bmatrix} -0.707 \\ 0.707 \end{bmatrix}$。（$135^\circ$ 線方向）。

3.  **形狀描述**：
    - 特徵值為 $1$ 和 $0.25$，這與 (b) 部分的方差相同。
    - **特徵值的效果**：它們決定了不確定性橢圓的長軸和短軸的長度。（長軸長度正比於 $\sqrt{1}$，短軸正比於 $\sqrt{0.25}$）。
    - **特徵向量的效果**：它們決定了 **方向**。(b) 部分的橢圓逆時針旋轉了 $45^\circ$。分佈沿著 $x_1 = x_2$ 線拉長。
