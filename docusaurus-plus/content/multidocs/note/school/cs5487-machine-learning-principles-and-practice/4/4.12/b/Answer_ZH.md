---
title: Answer ZH
---

### 先備知識 (Prerequisites)

- **微積分 (Calculus)**: 使用乘積法則 (Product rule) 以及對數函數的微分求導。
- **最佳化 (Optimization)**: 解決受約束最佳化問題 (constrained optimization problems) 的拉格朗日乘子法 (Method of Lagrange Multipliers)。
- **機率論 (Probability Theory)**: 類別機率 (categorical probabilities) 的總和必須為 1 的約束。
- **Softmax 函數 (Softmax Function)**: 一種能將任意一組實數純量轉換為總和等於 1 的機率分佈的數學操作函數。

---

### 詳細推導步驟 (Step-by-Step Derivation)

**步驟 1: 定義目標函數與約束函數 (Define the objective and constraint functions)**
我們想要最大化以下新的目標函數 (objective function)：
$$ f(\pi) = \sum\_{j=1}^K \pi_j (N_j - \log \pi_j) $$

受限於等式約束 (equality constraint)：
$$ \sum*{j=1}^K \pi_j = 1 \implies g(\pi) = \sum*{j=1}^K \pi_j - 1 = 0 $$

_(注意：和 (a) 小題相同，我們短暫地忽略不等式約束 $\pi_j \ge 0$。我們將先找出一個駐點 (stationary point)，並驗證所得的解在數學上產生了非負值。)_

**步驟 2: 建構拉格朗日函數 (Form the Lagrangian)**
使用標準形式 $L(\pi, \lambda) = f(\pi) - \lambda g(\pi)$，我們建構拉格朗日函數 (Lagrangian function)：

$$ L(\pi, \lambda) = \sum*{j=1}^K \pi_j(N_j - \log \pi_j) - \lambda \left(\sum*{j=1}^K \pi_j - 1\right) $$

**步驟 3: 對 $\pi_j$ 找出駐點 (Find the stationary point with respect to $\pi_j$)**
我們針對特定的 $\pi_j$ 對 $L$ 計算偏導數 (partial derivative)。請注意在處理 $-\pi_j \log \pi_j$ 個別項時必須使用乘積法則：

$$ \frac{\partial L}{\partial \pi_j} = \frac{\partial}{\partial \pi_j} \left( \pi_j N_j - \pi_j \log \pi_j - \lambda \pi_j \right) $$
$$ \frac{\partial L}{\partial \pi_j} = N_j - \left( 1 \cdot \log \pi_j + \pi_j \cdot \frac{1}{\pi_j} \right) - \lambda $$
$$ \frac{\partial L}{\partial \pi_j} = N_j - \log \pi_j - 1 - \lambda $$

將這個導數設為零：
$$ N_j - \log \pi_j - 1 - \lambda = 0 $$

**步驟 4: 以 $\lambda$ 表示 $\pi_j$ (Express $\pi_j$ in terms of $\lambda$)**
重新整理上述方程式來尋解 $\pi_j$：

$$ \log \pi_j = N_j - 1 - \lambda $$

將兩邊取指數函數 (exponential)：
$$ \pi_j = \exp(N_j - 1 - \lambda) = \exp(N_j) \cdot \exp(-1-\lambda) $$

**步驟 5: 帶入等式約束以求出 $\lambda$ (Enforce the equality constraint to solve for $\lambda$)**
我們將導出的 $\pi_j$ 運算式替換回代表機率和為一的約束條件中：

$$ \sum*{j=1}^K \pi_j = \sum*{j=1}^K \left[ \exp(N_j) \exp(-1-\lambda) \right] = 1 $$

由於 $\exp(-1-\lambda)$ 項不依賴於指標 $j$，我們可以將其提出至總和之外：

$$ \exp(-1-\lambda) \sum\_{j=1}^K \exp(N_j) = 1 $$

求解 $\exp(-1-\lambda)$：

$$ \exp(-1-\lambda) = \frac{1}{\sum\_{k=1}^K \exp(N_k)} $$
*(在分母我們使用指標 $k$ 是為了避免與後續代入操作發生混淆。)\*

**步驟 6: 代回求出最終解 (Substitute back to find the final solution)**
將步驟 5 得到的結果代回步驟 4 所求得出的 $\pi_j$ 表達式中：

$$ \pi*j = \exp(N_j) \cdot \exp(-1-\lambda) $$
$$ \pi_j = \exp(N_j) \cdot \frac{1}{\sum*{k=1}^K \exp(N*k)} $$
$$ \pi_j = \frac{\exp(N_j)}{\sum*{k=1}^K \exp(N_k)} $$

**驗證 (Verification)**：鑑於指數函數 (exponential function) 都會產生嚴格的正數值 (對所有實數 $x$，$\exp(x) > 0$)，因此我們可以確定 $\pi_j > 0$。這在其本質上就已經滿足了不可為負數值的嚴格邊界限制。此一最終求得的特殊函數形式也就是赫赫有名的 **Softmax 函數 (Softmax function)**。
