---
title: Answer ZH
---

## 先決條件

* **線性判別函數 (Linear Discriminant Functions)**：從 (a) 部分我們知道，對於任何類別 $k$，$g_k(x) = w_k^T x + b_k$。
* **決策邊界 (Decision Boundary)**：兩個類別 $i$ 和 $j$ 之間的邊界是分類器對這兩個類別無偏好的點 $x$ 的集合，這意味著它們的判別函數相等：$g_i(x) = g_j(x)$。
* **超平面方程式 (Hyperplane Equation)**：$d$ 維空間中的超平面可以由方程式 $w^T x + b = 0$ 定義，其中 $w$ 是超平面的法向量，$b$ 是偏差（或偏移量）。

## 逐步推導

1. **設定判別函數相等**：
    決策邊界由類別 $i$ 和類別 $j$ 的分數相同的條件定義：
    $$g_i(x) = g_j(x)$$

2. **代入線性形式**：
    使用 (a) 部分的結果，代入 $g_i(x)$ 和 $g_j(x)$ 的線性方程式：
    $$w_i^T x + b_i = w_j^T x + b_j$$

3. **重排為超平面形式**：
    將所有包含 $x$ 的項移到一邊，常數項移到另一邊，以符合標準的超平面方程式 $w^T x + b = 0$：
    $$(w_i - w_j)^T x + (b_i - b_j) = 0$$
    令 $w = w_i - w_j$ 且 $b = b_i - b_j$。

4. **推導 $w$ 的表達式**：
    代入 (a) 部分中 $w_i$ 和 $w_j$ 的定義：
    $$w = \Sigma^{-1}\mu_i - \Sigma^{-1}\mu_j$$
    提出 $\Sigma^{-1}$：
    $$w = \Sigma^{-1}(\mu_i - \mu_j)$$
    這與所需的 $w$ 表達式相符。

5. **推導 $b$ 的表達式**：
    代入 (a) 部分中 $b_i$ 和 $b_j$ 的定義：
    $$b = \left( -\frac{1}{2}\mu_i^T\Sigma^{-1}\mu_i + \log \pi_i \right) - \left( -\frac{1}{2}\mu_j^T\Sigma^{-1}\mu_j + \log \pi_j \right)$$
    將二次項和對數項分組：
    $$b = -\frac{1}{2}(\mu_i^T\Sigma^{-1}\mu_i - \mu_j^T\Sigma^{-1}\mu_j) + (\log \pi_i - \log \pi_j)$$

6. **簡化對數項**：
    使用對數的商法則 ($\log A - \log B = \log \frac{A}{B}$)：
    $$\log \pi_i - \log \pi_j = \log \frac{\pi_i}{\pi_j}$$

7. **簡化二次項**：
    我們需要證明 $\mu_i^T\Sigma^{-1}\mu_i - \mu_j^T\Sigma^{-1}\mu_j = (\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j)$。
    讓我們展開這個等式的右邊：
    $$(\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j) = (\mu_i^T + \mu_j^T) (\Sigma^{-1}\mu_i - \Sigma^{-1}\mu_j)$$
    $$= \mu_i^T\Sigma^{-1}\mu_i - \mu_i^T\Sigma^{-1}\mu_j + \mu_j^T\Sigma^{-1}\mu_i - \mu_j^T\Sigma^{-1}\mu_j$$
    由於 $\Sigma$ 是對稱的協方差矩陣，它的反矩陣 $\Sigma^{-1}$ 也是對稱的。因此，純量值 $\mu_i^T\Sigma^{-1}\mu_j$ 等於其轉置 $\mu_j^T\Sigma^{-1}\mu_i$。
    這意味著中間的兩項會互相抵消：
    $$-\mu_i^T\Sigma^{-1}\mu_j + \mu_j^T\Sigma^{-1}\mu_i = 0$$
    剩下：
    $$(\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j) = \mu_i^T\Sigma^{-1}\mu_i - \mu_j^T\Sigma^{-1}\mu_j$$

8. **最終代入**：
    將簡化後的對數項和二次項代回 $b$ 的方程式中：
    $$b = -\frac{1}{2}(\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j) + \log \frac{\pi_i}{\pi_j}$$
    這與所需的 $b$ 表達式相符，證明完畢。
