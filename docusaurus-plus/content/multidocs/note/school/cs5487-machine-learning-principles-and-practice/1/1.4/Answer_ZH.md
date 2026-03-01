---
title: Answer ZH
---

# 解答：隨機變數之和 (Sum of Random Variables)

## 先備知識 (Prerequisites)
* 期望值的線性性質 (Linearity of Expectation)
* 變異數的定義 (Definition of Variance)
* 共變異數 (Covariance)
* 統計獨立性 (Statistical Independence)

## 逐步推導 (Step-by-Step Derivation)

### 第一部分：總和的期望值 (Expected Value of a Sum)

我們希望證明 $\mathbb{E}[x + y] = \mathbb{E}[x] + \mathbb{E}[y]$。
根據定義，對於具有聯合機率密度函數 (Joint probability density function) $p(x, y)$ 的連續隨機變數 (Continuous random variables) $x$ 和 $y$：

1. 從總和期望值的定義開始：
    $$ \mathbb{E}[x + y] = \iint (x + y) p(x, y) \, dx \, dy $$

2. 將積分展開：
    $$ \mathbb{E}[x + y] = \iint x p(x, y) \, dx \, dy + \iint y p(x, y) \, dx \, dy $$

3. 重新排列積分順序以求得邊際機率 (Marginalize)：
    $$ \mathbb{E}[x + y] = \int x \left( \int p(x, y) \, dy \right) dx + \int y \left( \int p(x, y) \, dx \right) dy $$

4. 分認出內層積分即為邊際機率密度函數 (Marginal probability density functions) $p(x)$ 和 $p(y)$：
    $$ \mathbb{E}[x + y] = \int x p(x) \, dx + \int y p(y) \, dy $$

5. 套用邊際分配的期望值定義：
    $$ \mathbb{E}[x + y] = \mathbb{E}[x] + \mathbb{E}[y] $$

*(註：對於離散隨機變數 (Discrete random variables)，將積分替換為加總符號，可得到相同的推導結果)。*

### 第二部分：獨立變數總和的變異數 (Variance of a Sum for Independent Variables)

我們希望證明，若 $x \perp y$，則 $\text{var}(x + y) = \text{var}(x) + \text{var}(y)$。

1. 從隨機變數 $z = x + y$ 的變異數定義開始：
    $$ \text{var}(x + y) = \mathbb{E}[((x + y) - \mathbb{E}[x + y])^2] $$

2. 將第一部份的結論 $\mathbb{E}[x + y] = \mathbb{E}[x] + \mathbb{E}[y]$ 代入：
    $$ \text{var}(x + y) = \mathbb{E}[((x - \mathbb{E}[x]) + (y - \mathbb{E}[y]))^2] $$

3. 展開平方項：
    $$ \text{var}(x + y) = \mathbb{E}[(x - \mathbb{E}[x])^2 + (y - \mathbb{E}[y])^2 + 2(x - \mathbb{E}[x])(y - \mathbb{E}[y])] $$

4. 對各項套用期望值的線性性質：
    $$ \text{var}(x + y) = \mathbb{E}[(x - \mathbb{E}[x])^2] + \mathbb{E}[(y - \mathbb{E}[y])^2] + 2\mathbb{E}[(x - \mathbb{E}[x])(y - \mathbb{E}[y])] $$

5. 分認出變異數 (Variance) 和共變異數 (Covariance) 的定義：
    $$ \text{var}(x + y) = \text{var}(x) + \text{var}(y) + 2\text{cov}(x, y) $$

6. 因為 $x$ 和 $y$ 具有統計獨立性 ($x \perp y$)，它們的共變異數為零。這是因為 $\mathbb{E}[xy] = \mathbb{E}[x]\mathbb{E}[y]$，所以：
    $$ \text{cov}(x, y) = \mathbb{E}[(x - \mathbb{E}[x])(y - \mathbb{E}[y])] = \mathbb{E}[xy] - \mathbb{E}[x]\mathbb{E}[y] = 0 $$

7. 將 $\text{cov}(x, y) = 0$ 代回變異數方程式中：
    $$ \text{var}(x + y) = \text{var}(x) + \text{var}(y) $$
    
如果 $x$ 和 $y$ 為相依 (Dependent)，一般來說 $\text{cov}(x, y) \neq 0$，因此總和的變異數會包含共變異數項。
