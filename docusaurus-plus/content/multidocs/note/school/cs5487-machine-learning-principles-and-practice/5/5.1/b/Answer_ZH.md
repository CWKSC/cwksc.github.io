---
title: Answer ZH
---

### 預備知識

- **獨立同分佈變量均值的方差**:
  $\text{Var}(\frac{1}{n} \sum X_i) = \frac{1}{n^2} \sum \text{Var}(X_i) = \frac{1}{n} \text{Var}(X_1)$.
- **方差不等式**:
  $\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 \le \mathbb{E}[X^2]$.
- **核函數性質**:
  令 $M = \max_u k(u)$. 則 $k(\frac{x-x_i}{h}) \le M$.

### 逐步解答

1. **方差表達式**:
    $$ \text{var}(\hat{p}(x)) = \text{var} \left( \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right) $$
    因為 $x_i$ 是 i.i.d.，和的方差等於方差的和（協方差項為零）。
    $$ \text{var}(\hat{p}(x)) = \frac{1}{n^2} \sum_{i=1}^n \text{var}(\tilde{k}(x - x_i)) = \frac{1}{n} \text{var}(\tilde{k}(x - x_1)) $$

2. **應用方差不等式**:
    使用 $\text{var}(Y) \le \mathbb{E}[Y^2]$:
    $$ \text{var}(\hat{p}(x)) \le \frac{1}{n} \mathbb{E} [ (\tilde{k}(x - x_1))^2 ] $$

3. **展開平方項**:
    回顧 $\tilde{k}(u) = \frac{1}{h^d} k(u/h)$。
    $$
    (\tilde{k}(x - x_1))^2 = \left( \frac{1}{h^d} k\left(\frac{x - x_1}{h}\right) \right)^2 = \frac{1}{h^d} k\left(\frac{x - x_1}{h}\right) \cdot \frac{1}{h^d} k\left(\frac{x - x_1}{h}\right)
    $$

4. **應用核函數上限**:
    使用提示 $k(u) \le \max_x k(x)$，令 $M = \max_x k(x)$。
    $$
    (\tilde{k}(x - x_1))^2 \le \frac{1}{h^d} k\left(\frac{x - x_1}{h}\right) \cdot \frac{1}{h^d} M = \frac{M}{h^d} \tilde{k}(x - x_1)
    $$

5. **計算期望**:
    $$
    \mathbb{E} [ (\tilde{k}(x - x_1))^2 ] \le \mathbb{E} \left[ \frac{M}{h^d} \tilde{k}(x - x_1) \right] = \frac{M}{h^d} \mathbb{E} [\tilde{k}(x - x_1)]
    $$
    從 (a) 部分，我們知道 $\mathbb{E} [\tilde{k}(x - x_1)] = \mathbb{E}[\hat{p}(x)]$。
    $$
    \mathbb{E} [ (\tilde{k}(x - x_1))^2 ] \le \frac{M}{h^d} \mathbb{E}[\hat{p}(x)]
    $$

6. **最終結果**:
    代回步驟 2 的方差不等式中：
    $$
    \text{var}(\hat{p}(x)) \le \frac{1}{n} \left( \frac{M}{h^d} \mathbb{E}[\hat{p}(x)] \right) = \frac{1}{nh^d} M \mathbb{E}[\hat{p}(x)]
    $$
