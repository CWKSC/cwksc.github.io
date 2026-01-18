---
title: Explain (d) ZH
---

# 1.6 (d) 解說 - 協方差矩陣的特徵分解

基於 **問題 1.6 (d)** 的推導，這是一個關於我們如何從特徵值得到完整矩陣分解 $\Sigma = V \Lambda V^T$ 的詳細細分說明。

## 1. 從向量到矩陣

最常見的困惑部分是從單個向量方程式移動到完整的矩陣方程式。

我們從特徵向量 $v_i$ 和特徵值 $\lambda_i$ 的定義開始：
$$ \Sigma v_i = \lambda_i v_i $$

如果我們有 $d$ 個特徵向量 ($v_1, ..., v_d$)，我們可以使用矩陣乘法將它們並排寫出。

**左側 ($\Sigma V$)：**
當你將一個矩陣 $\Sigma$ 乘以一個矩陣 $V$（其中 $V$ 由列向量 $v_1, ..., v_d$ 組成），結果僅僅是 $\Sigma$ 分別與每一列相乘：

$$
\Sigma V = \Sigma \begin{bmatrix} | & & | \\ v_1 & \dots & v_d \\ | & & | \end{bmatrix} = \begin{bmatrix} | & & | \\ \Sigma v_1 & \dots & \Sigma v_d \\ | & & | \end{bmatrix}
$$

因為 $\Sigma v_i = \lambda_i v_i$，我們可以替換這些列：

$$
= \begin{bmatrix} | & & | \\ \lambda_1 v_1 & \dots & \lambda_d v_d \\ | & & | \end{bmatrix}
$$

**右側 ($V \Lambda$)：**
現在看看 $V \Lambda$。如果你將一個矩陣 $V$ 在右側乘以一個 **對角** 矩陣 $\Lambda$，它會按相應的對角元素縮放 $V$ 的每一 **列**：

$$
\begin{bmatrix} | & & | \\ v_1 & \dots & v_d \\ | & & | \end{bmatrix}
\begin{bmatrix} \lambda_1 & & 0 \\ & \ddots & \\ 0 & & \lambda_d \end{bmatrix}
= \begin{bmatrix} | & & | \\ \lambda_1 v_1 & \dots & \lambda_d v_d \\ | & & | \end{bmatrix}
$$

**結論：**
由於這些列完全匹配，我們證明了：
$$ \Sigma V = V \Lambda $$

## 2. 為什麼 $V$ 是正交的 ($V^T = V^{-1}$)

問題指出 $\Sigma$ 是一個 **協方差矩陣**。

- 協方差矩陣總是 **對稱的** ($\Sigma = \Sigma^T$)。
- 線性代數中的一個關鍵定理（譜定理）指出 **對稱矩陣總是有正交的特徵向量**。

這意味著任何兩個不同特徵向量的點積為 0，並且我們將它們歸一化使得它們的長度為 1：
$$ v_i^T v_j = 0 \text{ (若 } i \neq j), \quad v_i^T v_i = 1 $$

在矩陣形式中，計算 $V^T V$：

$$
V^T V = \begin{bmatrix} - v_1^T - \\ \vdots \\ - v_d^T - \end{bmatrix} \begin{bmatrix} | & & | \\ v_1 & \dots & v_d \\ | & & | \end{bmatrix} = \begin{bmatrix} 1 & 0 & \dots \\ 0 & 1 & \dots \\ \vdots & \vdots & \ddots \end{bmatrix} = I
$$

因為 $V^T V = I$，根據定義 $V^T$ 是 $V$ 的逆矩陣。

## 3. 求解 $\Sigma$

現在我們只需重新排列代數式：

1.  從這裡開始：$\Sigma V = V \Lambda$
2.  兩邊同時右乘 $V^T$：
    $$ \Sigma V V^T = V \Lambda V^T $$
3.  因為 $V V^T = I$，左邊的 $V$ 被消去：
    $$ \Sigma = V \Lambda V^T $$

## 幾何解釋

這個方程式告訴我們，任何協方差矩陣都可以被認為是：

1.  **旋轉** 空間以與數據的軸對齊 ($V^T$)。
2.  根據方差沿這些軸 **拉伸** ($\Lambda$)。
3.  **旋轉回** 原始方向 ($V$)。
