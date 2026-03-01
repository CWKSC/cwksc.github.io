---
title: Answer ZH
---
### 先備知識 (Prerequisites)
- 期望值的線性性質 (Linearity of Expectation)
- 積分的性質 (Properties of Integrals)
- 機率密度函數 (Probability Density Functions)

### 推導步驟 (Step-by-Step Derivation)

1. 從估計分佈 $\hat{p}(x)$ 的平均值定義出發：
   $$ \hat{\mu} = \mathbb{E}_{\hat{p}}[x] = \int \hat{p}(x) x dx $$

2. 將方程式 (5.5) 中 $\hat{p}(x)$ 的定義代入：
   $$ \hat{\mu} = \int \left( \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right) x dx $$

3. 利用積分的線性性質，將總和符號與常數 $\frac{1}{n}$ 提出積分外：
   $$ \hat{\mu} = \frac{1}{n} \sum_{i=1}^n \int \tilde{k}(x - x_i) x dx $$

4. 對總和中的每一項積分進行變數代換 (Change of Variables)。令 $u = x - x_i$，則 $du = dx$ 且 $x = u + x_i$：
   $$ \int \tilde{k}(x - x_i) x dx = \int \tilde{k}(u) (u + x_i) du $$

5. 將式子展開並將積分分離為兩項：
   $$ \int \tilde{k}(u) u du + \int \tilde{k}(u) x_i du $$

6. 評估第一項積分。根據方程式 (5.6) 的定義，核心函數的平均值為零：
   $$ \int \tilde{k}(u) u du = 0 $$

7. 評估第二項積分。因為核心函數 $\tilde{k}(u)$ 是一個合法的機率密度函數，因此其積分必為 1：
   $$ \int \tilde{k}(u) x_i du = x_i \int \tilde{k}(u) du = x_i \cdot 1 = x_i $$

8. 將這些結果代回步驟 3 的總和式子中：
   $$ \hat{\mu} = \frac{1}{n} \sum_{i=1}^n (0 + x_i) = \frac{1}{n} \sum_{i=1}^n x_i $$

這完成了分佈 $\hat{p}(x)$ 的平均值等於 $X$ 的樣本平均值的證明。