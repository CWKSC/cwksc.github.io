---
title: Answer ZH
---

## 預備知識

1.  **矩陣求逆性質**: $(kA)^{-1} = \frac{1}{k} A^{-1}$。
2.  **向量微積分**:
    $\nabla_\theta (\|y - \Phi^T \theta\|^2) = -2 \Phi (y - \Phi^T \theta)$.
    $\nabla_\theta (\theta^T \theta) = 2 \theta$.

## 逐步解答

### 第 1 部分：在 I.I.D. 假設下推導 MAP

1.  **代入 $\Gamma$ 和 $\Sigma$**:
    從 (a)/(b) 的一般 MAP 公式開始：
    $$
    \hat{\theta}_{MAP} = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$
    代入 $\Gamma = \alpha I$ 和 $\Sigma = \sigma^2 I$：
    $$
    \hat{\theta}_{MAP} = ((\alpha I)^{-1} + \Phi (\sigma^2 I)^{-1} \Phi^T)^{-1} \Phi (\sigma^2 I)^{-1} y
    $$
    將純量提出逆矩陣之外 ($\alpha^{-1} = 1/\alpha$)：
    $$
    \hat{\theta}_{MAP} = (\frac{1}{\alpha} I + \frac{1}{\sigma^2} \Phi \Phi^T)^{-1} \frac{1}{\sigma^2} \Phi y
    $$

2.  **簡化**:
    從逆矩陣項中提取 $\frac{1}{\sigma^2}$。
    令 $A = \frac{1}{\alpha} I + \frac{1}{\sigma^2} \Phi \Phi^T$。我們要求 $A^{-1}$。
    $A = \frac{1}{\sigma^2} (\frac{\sigma^2}{\alpha} I + \Phi \Phi^T)$。
    $A^{-1} = \sigma^2 (\frac{\sigma^2}{\alpha} I + \Phi \Phi^T)^{-1}$。

    代回原式：
    $$
    \hat{\theta}_{MAP} = \left[ \sigma^2 (\frac{\sigma^2}{\alpha} I + \Phi \Phi^T)^{-1} \right] \frac{1}{\sigma^2} \Phi y
    $$
    $\sigma^2$ 和 $\frac{1}{\sigma^2}$ 互相抵消：
    $$
    \hat{\theta}_{MAP} = (\Phi \Phi^T + \frac{\sigma^2}{\alpha} I)^{-1} \Phi y
    $$

3.  **識別 $\lambda$**:
    設定 $\lambda = \frac{\sigma^2}{\alpha}$，我們得到：
    $$
    \hat{\theta}_{MAP} = (\Phi \Phi^T + \lambda I)^{-1} \Phi y
    $$
    由於變異數 $\sigma^2$ 和 $\alpha$ 均為正數，故 $\lambda \ge 0$。

### 第 2 部分：求解正則化最小二乘法

1.  **定義目標函數**:
    $$
    J(\theta) = \|y - \Phi^T \theta\|^2 + \lambda \|\theta\|^2
    $$
    $$
    J(\theta) = (y - \Phi^T \theta)^T (y - \Phi^T \theta) + \lambda \theta^T \theta
    $$

2.  **計算梯度**:
    $$
    \nabla_\theta J(\theta) = \nabla_\theta (y^T y - 2y^T \Phi^T \theta + \theta^T \Phi \Phi^T \theta + \lambda \theta^T \theta)
    $$
    $$
    = -2 \Phi y + 2 \Phi \Phi^T \theta + 2 \lambda \theta
    $$

3.  **將梯度設為零**:
    $$
    -2 \Phi y + 2 (\Phi \Phi^T + \lambda I) \theta = 0
    $$
    $$
    (\Phi \Phi^T + \lambda I) \theta = \Phi y
    $$

4.  **求解 $\theta$**:
    $$
    \hat{\theta} = (\Phi \Phi^T + \lambda I)^{-1} \Phi y
    $$
    這與上面推導出的具體 MAP 估計值相符。
