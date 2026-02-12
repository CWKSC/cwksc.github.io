---
title: Answer
---

### Pre-required Knowledge

- **Variance of mean of i.i.d. variables**:
  $\text{Var}(\frac{1}{n} \sum X_i) = \frac{1}{n^2} \sum \text{Var}(X_i) = \frac{1}{n} \text{Var}(X_1)$.
- **Variance inequality**:
  $\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 \le \mathbb{E}[X^2]$.
- **Kernel property**:
  Let $M = \max_u k(u)$. Then $k(\frac{x-x_i}{h}) \le M$.

### Step-by-Step Answer

1. **Expression for Variance**:
    $$ \text{var}(\hat{p}(x)) = \text{var} \left( \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right) $$
    Because $x_i$ are i.i.d., the variance of the sum is the sum of variances (covariance terms are zero).
    $$ \text{var}(\hat{p}(x)) = \frac{1}{n^2} \sum_{i=1}^n \text{var}(\tilde{k}(x - x_i)) = \frac{1}{n} \text{var}(\tilde{k}(x - x_1)) $$

2. **Apply Variance Inequality**:
    Using $\text{var}(Y) \le \mathbb{E}[Y^2]$:
    $$ \text{var}(\hat{p}(x)) \le \frac{1}{n} \mathbb{E} [ (\tilde{k}(x - x_1))^2 ] $$

3. **Expand the square term**:
    Recall $\tilde{k}(u) = \frac{1}{h^d} k(u/h)$.
    $$
    (\tilde{k}(x - x_1))^2 = \left( \frac{1}{h^d} k\left(\frac{x - x_1}{h}\right) \right)^2 = \frac{1}{h^d} k\left(\frac{x - x_1}{h}\right) \cdot \frac{1}{h^d} k\left(\frac{x - x_1}{h}\right)
    $$

4. **Apply the bound on Kernel**:
    Using the hint $k(u) \le \max_x k(x)$, let $M = \max_x k(x)$.
    $$
    (\tilde{k}(x - x_1))^2 \le \frac{1}{h^d} k\left(\frac{x - x_1}{h}\right) \cdot \frac{1}{h^d} M = \frac{M}{h^d} \tilde{k}(x - x_1)
    $$

5. **Compute Expectation**:
    $$
    \mathbb{E} [ (\tilde{k}(x - x_1))^2 ] \le \mathbb{E} \left[ \frac{M}{h^d} \tilde{k}(x - x_1) \right] = \frac{M}{h^d} \mathbb{E} [\tilde{k}(x - x_1)]
    $$
    From part (a), we know $\mathbb{E} [\tilde{k}(x - x_1)] = \mathbb{E}[\hat{p}(x)]$.
    $$
    \mathbb{E} [ (\tilde{k}(x - x_1))^2 ] \le \frac{M}{h^d} \mathbb{E}[\hat{p}(x)]
    $$

6. **Final Result**:
    Substitute back into the variance inequality from step 2:
    $$
    \text{var}(\hat{p}(x)) \le \frac{1}{n} \left( \frac{M}{h^d} \mathbb{E}[\hat{p}(x)] \right) = \frac{1}{nh^d} M \mathbb{E}[\hat{p}(x)]
    $$
