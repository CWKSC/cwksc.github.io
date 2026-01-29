---
title: Answer ZH
---

## 預備知識

1.  **連續變數的貝葉斯定理 (Bayes' Theorem)**:
    $$
    p(\theta | \mathcal{D}) = \frac{p(\mathcal{D} | \theta) p(\theta)}{p(\mathcal{D})} \propto p(\mathcal{D} | \theta) p(\theta)
    $$
2.  **多元高斯分佈 (Multivariate Gaussian Distribution)**:
    $$
    \mathcal{N}(x | \mu, \Sigma) \propto \exp \left( -\frac{1}{2} (x - \mu)^T \Sigma^{-1} (x - \mu) \right)
    $$
3.  **矩陣形式的配方 (Completing the Square)**:
    如果 $\theta$ 的二次型看起來像 $-\frac{1}{2} (\theta^T A \theta - 2 \theta^T b)$，則它對應於共變異數為 $A^{-1}$ 且平均值為 $A^{-1}b$ 的高斯分佈（忽略常數項）。

## 逐步解答

1.  **確認似然函數 (Likelihood function) $p(\mathcal{D}|\theta)$**:
    從模型 $y = \Phi^T \theta + \epsilon$（其中 $\epsilon \sim \mathcal{N}(0, \Sigma)$）可知，給定 $\theta$ 時，$y$ 服從高斯分佈：
    $$
    p(y | \theta) = \mathcal{N}(y | \Phi^T \theta, \Sigma) \propto \exp \left( -\frac{1}{2} (y - \Phi^T \theta)^T \Sigma^{-1} (y - \Phi^T \theta) \right)
    $$
    這裡 $\mathcal{D} = (X, y)$，但由於 $X$ 是固定的（判別式設定），我們只關注 $p(y|\theta)$。

2.  **確認先驗分佈 (Prior distribution) $p(\theta)$**:
    $$
    p(\theta) = \mathcal{N}(\theta | 0, \Gamma) \propto \exp \left( -\frac{1}{2} \theta^T \Gamma^{-1} \theta \right)
    $$

3.  **公式化後驗分佈 $p(\theta|\mathcal{D})$**:
    使用貝葉斯法則，後驗正比於似然與先驗的乘積：
    $$
    p(\theta | \mathcal{D}) \propto p(y | \theta) p(\theta)
    $$
    代入指數部分：
    $$
    \propto \exp \left( -\frac{1}{2} (y - \Phi^T \theta)^T \Sigma^{-1} (y - \Phi^T \theta) \right) \exp \left( -\frac{1}{2} \theta^T \Gamma^{-1} \theta \right)
    $$
    將指數合併為單一算式 $E$：
    $$
    E = -\frac{1}{2} \left[ (y - \Phi^T \theta)^T \Sigma^{-1} (y - \Phi^T \theta) + \theta^T \Gamma^{-1} \theta \right]
    $$

4.  **展開並針對 $\theta$ 進行分組**:
    展開第一項（注意 $(y - \Phi^T \theta)^T = y^T - \theta^T \Phi$）：
    $$
    (y - \Phi^T \theta)^T \Sigma^{-1} (y - \Phi^T \theta) = y^T \Sigma^{-1} y - y^T \Sigma^{-1} \Phi^T \theta - \theta^T \Phi \Sigma^{-1} y + \theta^T \Phi \Sigma^{-1} \Phi^T \theta
    $$
    由於結果是純量，$y^T \Sigma^{-1} \Phi^T \theta = (\theta^T \Phi \Sigma^{-1} y)^T = \theta^T \Phi \Sigma^{-1} y$（假設 $\Sigma$ 是對稱的）。
    因此，交叉項（Cross terms）為 $-2 \theta^T \Phi \Sigma^{-1} y$。

    現在代回 $E$ 並依 $\theta$ 的次數分組：
    $$
    -2E = \theta^T \Phi \Sigma^{-1} \Phi^T \theta - 2 \theta^T \Phi \Sigma^{-1} y + y^T \Sigma^{-1} y + \theta^T \Gamma^{-1} \theta
    $$
    將二次項 ($\theta^T A \theta$) 和一次項 ($-2 \theta^T b$) 分組：
    $$
    -2E = \theta^T (\Phi \Sigma^{-1} \Phi^T + \Gamma^{-1}) \theta - 2 \theta^T (\Phi \Sigma^{-1} y) + \text{const}
    $$
    其中 "const" 包含與 $\theta$ 無關的項（例如 $y^T \Sigma^{-1} y$）。

5.  **配方 (Complete the Square)**:
    我們將其與高斯分佈 $\mathcal{N}(\theta | \hat{\mu}, \hat{\Sigma})$ 的指數進行比較：
    $$
    -\frac{1}{2} (\theta - \hat{\mu})^T \hat{\Sigma}^{-1} (\theta - \hat{\mu}) = -\frac{1}{2} [\theta^T \hat{\Sigma}^{-1} \theta - 2 \theta^T \hat{\Sigma}^{-1} \hat{\mu} + \hat{\mu}^T \hat{\Sigma}^{-1} \hat{\mu}]
    $$
    比較二次項 $\theta^T (\dots) \theta$：
    $$
    \hat{\Sigma}_\theta^{-1} = \Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T
    $$
    所以，
    $$
    \hat{\Sigma}_\theta = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1}
    $$
    比較一次項 $-2 \theta^T (\dots)$：
    $$
    \hat{\Sigma}_\theta^{-1} \hat{\mu}_\theta = \Phi \Sigma^{-1} y
    $$
    $$
    \hat{\mu}_\theta = \hat{\Sigma}_\theta (\Phi \Sigma^{-1} y) = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$

6.  **結論**:
    後驗分佈確實是高斯分佈，具有推導出的平均值和共變異數：
    $$
    p(\theta|\mathcal{D}) = \mathcal{N}(\theta|\hat{\mu}_\theta, \hat{\Sigma}_\theta)
    $$
