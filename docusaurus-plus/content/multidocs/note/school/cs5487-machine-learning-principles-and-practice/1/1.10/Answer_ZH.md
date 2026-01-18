# 問題 1.10 配方法 - 解答

## 預備知識

要解決這個問題，你需要熟悉以下線性代數概念：

1.  **對稱矩陣 (Symmetric Matrix)**：如果一個矩陣 $A$ 滿足 $A^T = A$，則稱其為對稱矩陣。在這個問題中，$A \in \mathbb{S}^n$，所以這個性質成立。
2.  **轉置性質 (Transpose Properties)**：
    - $(A + B)^T = A^T + B^T$
    - $(AB)^T = B^T A^T$
3.  **純量轉置 (Scalar Transpose)**：如果結果是一個純量 ($1 \times 1$ 矩陣)，它的轉置等於它自己。對於向量 $x, b \in \mathbb{R}^n$，點積 $x^T b$ 是一個純量，所以 $x^T b = (x^T b)^T = b^T x$。
4.  **矩陣逆 (Matrix Inverse)**：$A A^{-1} = A^{-1} A = I$。

## 逐步推導

我們想要證明二次形式：
$$ f(x) = x^T A x - 2x^T b + c \qquad (1.28) $$
可以重寫為：
$$ f(x) = (x - d)^T A (x - d) + e \qquad (1.29) $$
已知：
$$ d = A^{-1}b \qquad (1.30) $$
$$ e = c - d^T A d = c - b^T A^{-1} b \qquad (1.31) $$

讓我們從展開提議的形式 $(1.29)$ 開始，並代入 $d$ 和 $e$ 的值，看看是否能得到 $(1.28)$。

### 步驟 1：展開二次項 $(x - d)^T A (x - d)$

使用轉置性質 $(A+B)^T = A^T + B^T$：
$$ (x - d)^T = x^T - d^T $$

所以，
$$ (x - d)^T A (x - d) = (x^T - d^T) A (x - d) $$

分配各項：
$$ = (x^T A - d^T A) (x - d) $$
$$ = x^T A x - x^T A d - d^T A x + d^T A d $$

### 步驟 2：簡化交叉項

中間的兩項是 $-x^T A d$ 和 $-d^T A x$。
注意這些項都是純量 ($1 \times 1$)。
讓我們看看 $d^T A x$ 這一項。由於它是純量，它等於它的轉置：
$$ (d^T A x)^T = x^T A^T (d^T)^T = x^T A^T d $$

由於 $A$ 是對稱的 ($A \in \mathbb{S}^n$)，我們知道 $A^T = A$。因此：
$$ (d^T A x)^T = x^T A d $$

所以，$d^T A x = x^T A d$。交叉項是相同的。
表達式變為：
$$ (x - d)^T A (x - d) = x^T A x - 2x^T A d + d^T A d $$

### 步驟 3：將 $d$ 和 $e$ 的表達式代回原始方程 (1.29)

現在將此展開式代回 $(1.29)$：
$$ f(x) = \left( x^T A x - 2x^T A d + d^T A d \right) + e $$

將 $d = A^{-1}b$ 代入項 $-2x^T A d$ 中：
$$ -2x^T A d = -2x^T A (A^{-1}b) $$
$$ = -2x^T (A A^{-1}) b $$
$$ = -2x^T I b $$
$$ = -2x^T b $$

代入 $(1.31)$ 中 $e$ 的定義：
$$ e = c - d^T A d $$

所以完整的表達式變為：
$$ f(x) = x^T A x - 2x^T b + d^T A d + (c - d^T A d) $$

### 步驟 4：最終消去

$d^T A d$ 項互相抵消：
$$ f(x) = x^T A x - 2x^T b + \underbrace{d^T A d - d^T A d}\_{0} + c $$
$$ f(x) = x^T A x - 2x^T b + c $$

這與方程 $(1.28)$ 相符。因此，我們已經證明了 $f(x)$ 確實可以用給定的參數重寫為 $(1.29)$ 的形式。
