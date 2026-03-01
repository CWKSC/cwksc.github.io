---
title: Answer ZH
---
### 具備知識 (Prerequisites)
- 線性迴歸的 MAP 估計 (MAP Estimation for Linear Regression)
- 正則化 (Regularization / Ridge Regression / L2 Penalty)
- 矩陣微積分 (Matrix Calculus)

### 逐步推導 (Step-by-Step Derivation)

1.  **將 i.i.d. 假設代入 MAP 估計**：
    由 (b) 部分可知，MAP 估計為：
    $$
    \hat{\theta}_{MAP} = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$
    已知 $\Gamma = \alpha I$ 且 $\Sigma = \sigma^2 I$。將這些代入 MAP 方程式中。
    其反矩陣為 $\Gamma^{-1} = \frac{1}{\alpha} I$ 和 $\Sigma^{-1} = \frac{1}{\sigma^2} I$。
    $$
    \hat{\theta}_{MAP} = \left(\frac{1}{\alpha} I + \Phi \left(\frac{1}{\sigma^2} I\right) \Phi^T\right)^{-1} \Phi \left(\frac{1}{\sigma^2} I\right) y
    $$

2.  **化簡代數表達式**：
    將純量 $\frac{1}{\sigma^2}$ 從反矩陣項中提出：
    $$
    \hat{\theta}_{MAP} = \left[ \frac{1}{\sigma^2} \left( \frac{\sigma^2}{\alpha} I + \Phi \Phi^T \right) \right]^{-1} \Phi \left(\frac{1}{\sigma^2} I\right) y
    $$
    應用性質 $(cA)^{-1} = \frac{1}{c} A^{-1}$，其中 $c$ 為純量：
    $$
    \hat{\theta}_{MAP} = \sigma^2 \left( \frac{\sigma^2}{\alpha} I + \Phi \Phi^T \right)^{-1} \frac{1}{\sigma^2} \Phi y
    $$
    $\sigma^2$ 項相互抵消：
    $$
    \hat{\theta}_{MAP} = \left( \Phi \Phi^T + \frac{\sigma^2}{\alpha} I \right)^{-1} \Phi y
    $$
    透過定義 $\lambda = \frac{\sigma^2}{\alpha}$，我們得到所需的形式：
    $$
    \hat{\theta}_{MAP} = (\Phi \Phi^T + \lambda I)^{-1} \Phi y
    $$
    由於 $\alpha$ (先驗變異數) 和 $\sigma^2$ (雜訊變異數) 必須是非負的，因此 $\lambda \ge 0$。這證明了第一部分。

3.  **求解正則化最小平方法問題**：
    我們想證明方程式 (3.49) 中的目標函數會導出相同的解。
    令 $J(\theta)$ 為要最小化的目標函數：
    $$
    J(\theta) = \lVert y - \Phi^T \theta \rVert^2 + \lambda \lVert \theta \rVert^2
    $$
    將範數展開為向量內積 ($||x||^2 = x^Tx$)：
    $$
    J(\theta) = (y - \Phi^T \theta)^T (y - \Phi^T \theta) + \lambda \theta^T \theta
    $$
    $$
    J(\theta) = y^T y - y^T \Phi^T \theta - \theta^T \Phi y + \theta^T \Phi \Phi^T \theta + \lambda \theta^T \theta
    $$
    注意 $y^T \Phi^T \theta = (\theta^T \Phi y)^T$。因為結果是一個純量，所以它等於它的轉置。
    $$
    J(\theta) = y^T y - 2 \theta^T \Phi y + \theta^T (\Phi \Phi^T + \lambda I) \theta
    $$

4.  **求導數並設為零**：
    為了最小化 $J(\theta)$，我們對向量 $\theta$ 計算梯度 (gradient) 並將其設為零：
    $$
    \nabla_\theta J(\theta) = -2 \Phi y + 2 (\Phi \Phi^T + \lambda I) \theta = 0
    $$
    $$
    (\Phi \Phi^T + \lambda I) \theta = \Phi y
    $$
    求解 $\theta$：
    $$
    \hat{\theta} = (\Phi \Phi^T + \lambda I)^{-1} \Phi y
    $$
    這與方程式 (3.48) 完全相同，證明了具有各向同性 (isotropic) 高斯先驗的貝葉斯 MAP 估計在數學上等價於求解頻率學派的 $L_2$ 正則化最小平方法問題 (嶺迴歸，Ridge regression)。
