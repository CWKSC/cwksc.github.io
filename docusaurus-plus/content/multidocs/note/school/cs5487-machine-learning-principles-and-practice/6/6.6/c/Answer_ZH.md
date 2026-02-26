---
title: Answer ZH
---

## 先決條件

* **超平面方程式 (Hyperplane Equation)**：從 (b) 部分可知，決策邊界為 $w^T x + b = 0$。
* **馬氏距離 (Mahalanobis Distance)**：兩個向量 $u$ 和 $v$ 之間關於協方差矩陣 $\Sigma$ 的平方馬氏距離定義為 $\|u - v\|_\Sigma^2 = (u - v)^T \Sigma^{-1} (u - v)$。
* **向量轉置性質 (Vector Transpose Properties)**：對於由向量乘積 $u^T M v$ 產生的純量值 $c$，其轉置等於其自身：$c = c^T = v^T M^T u$。如果 $M$ 是對稱的（如 $\Sigma^{-1}$），則 $u^T M v = v^T M u$。

## 逐步推導

1. **目標形式**：
    我們想將超平面方程式 $w^T x + b = 0$ 改寫為 $w^T(x - x_0) = 0$ 的形式。
    展開目標形式可得：
    $$w^T x - w^T x_0 = 0$$
    將此與 $w^T x + b = 0$ 進行比較，我們可以看出必須滿足以下條件：
    $$w^T x_0 = -b$$

2. **代入已知量**：
    從 (b) 部分，我們有：
    $$w = \Sigma^{-1}(\mu_i - \mu_j)$$
    $$-b = \frac{1}{2}(\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j) - \log \frac{\pi_i}{\pi_j}$$
    題目給出了 $x_0$ 的建議表達式：
    $$x_0 = \frac{\mu_i + \mu_j}{2} - \frac{(\mu_i - \mu_j)}{\|\mu_i - \mu_j\|_\Sigma^2} \log \frac{\pi_i}{\pi_j}$$

3. **計算 $w^T x_0$**：
    讓我們使用給定的定義計算 $w^T x_0$，並證明它等於 $-b$。
    $$w^T x_0 = \left( \Sigma^{-1}(\mu_i - \mu_j) \right)^T \left[ \frac{\mu_i + \mu_j}{2} - \frac{(\mu_i - \mu_j)}{\|\mu_i - \mu_j\|_\Sigma^2} \log \frac{\pi_i}{\pi_j} \right]$$
    由於 $\Sigma^{-1}$ 是對稱的，$(\Sigma^{-1}(\mu_i - \mu_j))^T = (\mu_i - \mu_j)^T (\Sigma^{-1})^T = (\mu_i - \mu_j)^T \Sigma^{-1}$。
    $$w^T x_0 = (\mu_i - \mu_j)^T \Sigma^{-1} \left[ \frac{\mu_i + \mu_j}{2} - \frac{(\mu_i - \mu_j)}{\|\mu_i - \mu_j\|_\Sigma^2} \log \frac{\pi_i}{\pi_j} \right]$$

4. **展開各項**：
    將 $(\mu_i - \mu_j)^T \Sigma^{-1}$ 乘入括號中：
    $$w^T x_0 = \frac{1}{2} (\mu_i - \mu_j)^T \Sigma^{-1} (\mu_i + \mu_j) - \frac{(\mu_i - \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j)}{\|\mu_i - \mu_j\|_\Sigma^2} \log \frac{\pi_i}{\pi_j}$$

5. **簡化表達式**：
    * **第一項**：請注意 $(\mu_i - \mu_j)^T \Sigma^{-1} (\mu_i + \mu_j)$ 是一個純量。它的轉置是 $(\mu_i + \mu_j)^T (\Sigma^{-1})^T (\mu_i - \mu_j) = (\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j)$。因為純量等於其轉置，我們可以將第一項改寫為 $\frac{1}{2} (\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j)$。
    * **第二項**：根據定義，分子 $(\mu_i - \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j)$ 正是平方馬氏距離 $\|\mu_i - \mu_j\|_\Sigma^2$。因此，該分數約分為 1。

    將這些簡化結果代回：
    $$w^T x_0 = \frac{1}{2} (\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j) - \log \frac{\pi_i}{\pi_j}$$

6. **結論**：
    我們已經證明了 $w^T x_0 = -b$。因此，方程式 $w^T x + b = 0$ 完全等價於 $w^T x - w^T x_0 = 0$，即 $w^T(x - x_0) = 0$。

## 幾何意義與解釋

* **$w$ 的意義**：向量 $w = \Sigma^{-1}(\mu_i - \mu_j)$ 是決策超平面的**法向量 (normal vector)**。它決定了邊界的方向（傾斜度）。它大致指向從類別 $j$ 的均值到類別 $i$ 的均值的方向，但被反協方差矩陣 $\Sigma^{-1}$ 扭曲，以考慮數據分佈的形狀和擴散。
* **$x_0$ 的意義**：點 $x_0$ 是一個精確位於決策超平面上的特定點（因為 $w^T(x_0 - x_0) = 0$）。它充當邊界的**錨點 (anchor point)** 或原點。
* **先驗機率 $\{\pi_i, \pi_j\}$ 對 $x_0$ 的影響**：
    $x_0$ 的公式由兩部分組成：中點 $\frac{\mu_i + \mu_j}{2}$ 和一個偏移項。
  * 如果兩個類別的機率相等（$\pi_i = \pi_j$），則 $\log(\pi_i/\pi_j) = \log(1) = 0$。偏移項消失，$x_0$ 正好位於兩個類別均值的正中間。
  * 如果類別 $i$ 的機率較大（$\pi_i > \pi_j$），則 $\log(\pi_i/\pi_j) > 0$。偏移項減去了一個從 $\mu_j$ 指向 $\mu_i$ 的向量。這會將錨點 $x_0$ *推離* $\mu_i$ 並*推向* $\mu_j$。在幾何上，這會將整個決策邊界向機率較小的類別 $j$ 移動，從而擴大了分配給機率較大的類別 $i$ 的決策區域。
