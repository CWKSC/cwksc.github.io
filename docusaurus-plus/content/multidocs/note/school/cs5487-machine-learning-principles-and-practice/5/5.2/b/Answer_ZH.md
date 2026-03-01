---
title: Answer ZH
---
### 先備知識 (Prerequisites)
- 共變異數的性質 (Properties of Covariance)
- 積分的線性性質 (Linearity of Integrals)
- 矩陣展開 (Matrix Expansion)

### 推導步驟 (Step-by-Step Derivation)

1. 從分佈 $\hat{p}(x)$ 的共變異數幾何定義出發：
   $$ \hat{\Sigma} = \operatorname{cov}_{\hat{p}}(x) = \int \hat{p}(x) (x - \hat{\mu})(x - \hat{\mu})^T dx $$

2. 將方程式 (5.5) 中 $\hat{p}(x)$ 的定義代入：
   $$ \hat{\Sigma} = \int \left( \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right) (x - \hat{\mu})(x - \hat{\mu})^T dx $$

3. 利用線性性質重新排列總和與積分符號：
   $$ \hat{\Sigma} = \frac{1}{n} \sum_{i=1}^n \int \tilde{k}(x - x_i) (x - \hat{\mu})(x - \hat{\mu})^T dx $$

4. 我們可以策略性地藉由加減 $x_i$ 來改寫 $(x - \hat{\mu})$ 這一項：
   $$ x - \hat{\mu} = (x - x_i) + (x_i - \hat{\mu}) $$

5. 應用變數代換，令 $u = x - x_i$，也就是 $du = dx$ 且 $x - \hat{\mu} = u + (x_i - \hat{\mu})$：
   $$ \int \tilde{k}(x - x_i) (x - \hat{\mu})(x - \hat{\mu})^T dx = \int \tilde{k}(u) \Big(u + (x_i - \hat{\mu})\Big)\Big(u + (x_i - \hat{\mu})\Big)^T du $$

6. 將二次項展開：
   $$ \Big(u + (x_i - \hat{\mu})\Big)\Big(u^T + (x_i - \hat{\mu})^T\Big) $$
   $$ = u u^T + u(x_i - \hat{\mu})^T + (x_i - \hat{\mu})u^T + (x_i - \hat{\mu})(x_i - \hat{\mu})^T $$

7. 將此展開式代回積分式中，並分離為四個獨立的積分項：
   $$ \int \tilde{k}(u) u u^T du + \int \tilde{k}(u) u(x_i - \hat{\mu})^T du + \int \tilde{k}(u) (x_i - \hat{\mu}) u^T du + \int \tilde{k}(u) (x_i - \hat{\mu})(x_i - \hat{\mu})^T du $$

8. 分別評估這四個積分項：
   - **第一項**：根據方程式 (5.7) 以及給定 $\tilde{k}$ 的平均值為 0：
     $$ \int \tilde{k}(u) u u^T du = H $$
   - **第二項**：因為 $(x_i - \hat{\mu})^T$ 對於 $u$ 是常數，可以提至積分外。根據 (5.6)，$\int \tilde{k}(u) u du = 0$：
     $$ \left(\int \tilde{k}(u) u du\right) (x_i - \hat{\mu})^T = 0 \cdot (x_i - \hat{\mu})^T = 0 $$
   - **第三項**：同理：
     $$ (x_i - \hat{\mu}) \left(\int \tilde{k}(u) u^T du\right) = (x_i - \hat{\mu}) \cdot 0^T = 0 $$
   - **第四項**：由於 $\tilde{k}(u)$ 是一個機率密度函數，其積分必為 1：
     $$ (x_i - \hat{\mu})(x_i - \hat{\mu})^T \int \tilde{k}(u) du = (x_i - \hat{\mu})(x_i - \hat{\mu})^T \cdot 1 = (x_i - \hat{\mu})(x_i - \hat{\mu})^T $$

9. 將這些項加總起來，總和內部的積分變成：
   $$ H + (x_i - \hat{\mu})(x_i - \hat{\mu})^T $$

10. 將評估過後的積分代回步驟 3 的總和式中：
    $$ \hat{\Sigma} = \frac{1}{n} \sum_{i=1}^n \Big( H + (x_i - \hat{\mu})(x_i - \hat{\mu})^T \Big) $$

11. 將總和分配進兩個項目：
    $$ \hat{\Sigma} = \frac{1}{n} \sum_{i=1}^n H + \frac{1}{n} \sum_{i=1}^n (x_i - \hat{\mu})(x_i - \hat{\mu})^T $$

12. 因為 $H$ 不依賴於指標 $i$，將其加總 $n$ 次後又除了 $n$，結果剛好還是 $H$：
    $$ \hat{\Sigma} = H + \frac{1}{n} \sum_{i=1}^n (x_i - \hat{\mu})(x_i - \hat{\mu})^T $$

這完成了方程式 (5.9) 的證明。