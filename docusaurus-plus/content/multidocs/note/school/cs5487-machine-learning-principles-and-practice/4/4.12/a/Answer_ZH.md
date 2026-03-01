---
title: Answer ZH
---

### 先備知識 (Prerequisites)
- **微積分 (Calculus)**: 針對包含對數的總和進行偏微分 (Partial differentiation)。
- **最佳化 (Optimization)**: 解決受約束最佳化問題 (constrained optimization problems) 的拉格朗日乘子法 (Method of Lagrange Multipliers)。
- **機率論 (Probability Theory)**: 類別機率 (categorical probabilities) 的總和必須為 1 的約束。

---

### 詳細推導步驟 (Step-by-Step Derivation)

**步驟 1: 定義目標函數與約束函數 (Define the objective and constraint functions)**
我們想要最大化以下目標函數 (objective function)：
$$ f(\pi) = \sum_{j=1}^K N_j \log \pi_j $$

受限於以下的等式約束 (equality constraint)：
$$ \sum_{j=1}^K \pi_j = 1 \implies g(\pi) = \sum_{j=1}^K \pi_j - 1 = 0 $$

*(注意：雖然還存在一個不等式約束 $\pi_j \ge 0$，但我們可以先忽略它以求出駐點 (stationary point)，隨後再驗證我們的解是否滿足它，因為 $N_j \ge 0$。)*

**步驟 2: 建構拉格朗日函數 (Form the Lagrangian)**
使用方程式 $L(\pi, \lambda) = f(\pi) - \lambda g(\pi)$ (或者使用加法 $f(\pi) + \lambda' g(\pi)$，求出的純量乘子變數只是正負號改變)，我們來建構拉格朗日函數 (Lagrangian function)。這裡為了符合一般得出正比例因子的慣例選擇用減法，儘管兩種方法在計算上是等價的：

$$ L(\pi, \lambda) = \sum_{j=1}^K N_j \log \pi_j - \lambda \left(\sum_{j=1}^K \pi_j - 1\right) $$

**步驟 3: 對 $\pi_j$ 找出駐點 (Find the stationary point with respect to $\pi_j$)**
我們針對特定的分量 $\pi_j$ 對拉格朗日函數計算偏導數 (partial derivative)，並將其設為零：

$$ \frac{\partial L}{\partial \pi_j} = \frac{\partial}{\partial \pi_j} \left( N_j \log \pi_j - \lambda \pi_j \right) = \frac{N_j}{\pi_j} - \lambda = 0 $$

**步驟 4: 以 $\lambda$ 表示 $\pi_j$ (Express $\pi_j$ in terms of $\lambda$)**
重新整理方程式來求解 $\pi_j$：

$$ \frac{N_j}{\pi_j} = \lambda \implies \pi_j = \frac{N_j}{\lambda} $$

**步驟 5: 帶入等式約束以求出 $\lambda$ (Enforce the equality constraint to solve for $\lambda$)**
我們將導出的 $\pi_j$ 運算式替換回原本的約束條件 $\sum_{j=1}^K \pi_j = 1$ 中：

$$ \sum_{j=1}^K \frac{N_j}{\lambda} = 1 $$

由於 $\lambda$ 是一個獨立於指標 $j$ 的常數乘子，我們可以將它提取到總和運算外：

$$ \frac{1}{\lambda} \sum_{j=1}^K N_j = 1 \implies \lambda = \sum_{j=1}^K N_j $$

**步驟 6: 把 $\lambda$ 代回求最終解 (Substitute $\lambda$ back to find the final solution)**
將 $\lambda = \sum_{k=1}^K N_k$ (改用指標 $k$ 以避免與原本的特定項目 $j$ 產生混淆) 代回步驟 4 所求得出的 $\pi_j$ 表達式中：

$$ \pi_j = \frac{N_j}{\sum_{k=1}^K N_k} $$

**驗證 (Verification)**：已知所有 $j$ 項之 $N_j \ge 0$，因此可以推導出所有 $\pi_j \ge 0$，滿足邊界條件約束。至此解答證明完成。
