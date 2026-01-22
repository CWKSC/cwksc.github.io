---
title: Answer_ZH.md
---

## 預備知識

1. **對數似然函數**:
    從 (a) 部分可知，對數似然函數為：
    $$ \ell(\mu, \Sigma) = -\frac{Nd}{2}\log(2\pi) - \frac{N}{2}\log|\Sigma| - \frac{1}{2} \sum_{i=1}^N (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) $$
2. **跡 (Trace) 技巧**:
    純量值 $a^T B a$ 等同於 $\text{tr}(a^T B a) = \text{tr}(B a a^T)$。這對於將求和中的向量移動成矩陣形式非常有用。
3. **矩陣導數** (給定):
    * $\frac{\partial}{\partial X} \log |X| = X^{-T}$。由於 $\Sigma$ 是對稱的，$\frac{\partial}{\partial \Sigma} \log |\Sigma| = \Sigma^{-1}$。
    * $\frac{\partial}{\partial X} \text{tr}(X^{-1}A) = -(X^{-T} A^T X^{-T})$。由於 $\Sigma$ 和 $A$（此處為散佈矩陣）是對稱的，這簡化為 $-\Sigma^{-1} A \Sigma^{-1}$。

## 逐步解答

1. **代入 $\mu$ 的 ML 估計值**：
    我們代入 $\hat{\mu}_{ML} = \frac{1}{N} \sum_{i=1}^N x_i$。令 $S = \sum_{i=1}^N (x_i - \hat{\mu})(x_i - \hat{\mu})^T$ 為散佈矩陣 (scatter matrix)。

2. **使用跡改寫對數似然函數**：
    求和中的項是純量：
    $$ (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) = \text{tr}\left( (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) \right) = \text{tr}\left( \Sigma^{-1} (x_i - \mu)(x_i - \mu)^T \right) $$
    對 $i$ 求和：
    $$ \sum_{i=1}^N (x_i - \mu)^T \Sigma^{-1} (x_i - \mu) = \text{tr}\left( \Sigma^{-1} \sum_{i=1}^N (x_i - \mu)(x_i - \mu)^T \right) = \text{tr}(\Sigma^{-1} S) $$

    所以對數似然的相關部分（忽略常數）為：
    $$ \ell(\Sigma) \propto - \frac{N}{2}\log|\Sigma| - \frac{1}{2}\text{tr}(\Sigma^{-1} S) $$

3. **對 $\Sigma$ 進行微分**：
    使用提供的恆等式：
    * $\frac{\partial}{\partial \Sigma} \log|\Sigma| = \Sigma^{-T} = \Sigma^{-1}$ （因為對稱）。
    * $\frac{\partial}{\partial \Sigma} \text{tr}(\Sigma^{-1} S) = -(\Sigma^{-T} S^T \Sigma^{-T})$。由於 $S$ 和 $\Sigma$ 是對稱的，這項變為 $-\Sigma^{-1} S \Sigma^{-1}$。

    $$
    \frac{\partial \ell}{\partial \Sigma} = -\frac{N}{2} \Sigma^{-1} - \frac{1}{2} (-\Sigma^{-1} S \Sigma^{-1}) = -\frac{N}{2} \Sigma^{-1} + \frac{1}{2} \Sigma^{-1} S \Sigma^{-1}
    $$

4. **將導數設為零並求解**：
    $$
    \begin{aligned}
    -\frac{N}{2} \Sigma^{-1} + \frac{1}{2} \Sigma^{-1} S \Sigma^{-1} &= 0 \\
    \Sigma^{-1} S \Sigma^{-1} &= N \Sigma^{-1}
    \end{aligned}
    $$
    左右兩邊同乘 $\Sigma$：
    $$
    \begin{aligned}
    \Sigma (\Sigma^{-1} S \Sigma^{-1}) \Sigma &= \Sigma (N \Sigma^{-1}) \Sigma \\
    S &= N \Sigma \\
    \Sigma &= \frac{1}{N} S
    \end{aligned}
    $$

    因此，
    $$ \hat{\Sigma}_{ML} = \frac{1}{N} \sum_{i=1}^N (x_i - \hat{\mu})(x_i - \hat{\mu})^T $$
