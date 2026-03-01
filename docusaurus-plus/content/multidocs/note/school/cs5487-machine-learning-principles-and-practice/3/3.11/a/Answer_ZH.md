---
title: Answer ZH
---

### 具備知識 (Prerequisites)

- 貝氏定理 (Bayes' Theorem)
- 多元高斯分佈 (Multivariate Gaussian Distribution)
- 矩陣配方法 (Completing the Square for Matrices)

### 逐步推導 (Step-by-Step Derivation)

1.  **貝氏定理 (Bayes' Theorem)**：
    參數 $\theta$ 在給定資料 $\mathcal{D}$ 下的後驗分佈 (posterior distribution) 可以根據貝氏法則求得：

    $$
    p(\theta | \mathcal{D}) = \frac{p(y | \theta, X) p(\theta)}{p(y | X)} \propto p(y | \theta, X) p(\theta)
    $$

    其中 $y$ 包含了目標值，$X$ 包含了所有特徵。為了求解後驗分佈，我們可以處理未歸一化的對數後驗 (unnormalized log-posterior)：

    $$
    \ln p(\theta | \mathcal{D}) = \ln p(y | \theta, X) + \ln p(\theta) + \text{const}
    $$

2.  **概似函數與先驗 (Likelihood and Prior)**：
    根據模型方程式 $y = \Phi^T \theta + \epsilon$ 以及 $\epsilon \sim \mathcal{N}(0, \Sigma)$，概似函數為 $y|\theta, X \sim \mathcal{N}(\Phi^T \theta, \Sigma)$。因此：

    $$
    \ln p(y | \theta, X) = -\frac{1}{2} (y - \Phi^T \theta)^T \Sigma^{-1} (y - \Phi^T \theta) + \text{const}
    $$

    先驗為 $p(\theta) = \mathcal{N}(0, \Gamma)$，因此：

    $$
    \ln p(\theta) = -\frac{1}{2} \theta^T \Gamma^{-1} \theta + \text{const}
    $$

3.  **對數後驗 (Log-Posterior)**：
    將對數概似和對數先驗相加：

    $$
    \begin{align*}
    \ln p(\theta | \mathcal{D}) &= -\frac{1}{2} \left( (y - \Phi^T \theta)^T \Sigma^{-1} (y - \Phi^T \theta) + \theta^T \Gamma^{-1} \theta \right) + \text{const} \\
    &= -\frac{1}{2} \left( y^T \Sigma^{-1} y - y^T \Sigma^{-1} \Phi^T \theta - \theta^T \Phi \Sigma^{-1} y + \theta^T \Phi \Sigma^{-1} \Phi^T \theta + \theta^T \Gamma^{-1} \theta \right) + \text{const}
    \end{align*}
    $$

    注意到 $y^T \Sigma^{-1} y$ 對於 $\theta$ 是一個常數，且 $y^T \Sigma^{-1} \Phi^T \theta = (\theta^T \Phi \Sigma^{-1} y)^T$ 是一個純量 (所以兩者完全相等)，我們收集關於 $\theta$ 的二次項與一次項：

    $$
    \ln p(\theta | \mathcal{D}) = -\frac{1}{2} \left[ \theta^T (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T) \theta - 2 \theta^T \Phi \Sigma^{-1} y \right] + \text{const}
    $$

4.  **配方法 (Completing the Square)**：
    我們希望將它表達為一般常態分佈對數機率密度函數 (log-pdf) 的形式：

    $$
    \ln \mathcal{N}(\theta | \hat{\mu}_\theta, \hat{\Sigma}_\theta) = -\frac{1}{2} (\theta - \hat{\mu}_\theta)^T \hat{\Sigma}_\theta^{-1} (\theta - \hat{\mu}_\theta) + \text{const}'
    $$

    展開此形式可得：

    $$
    -\frac{1}{2} \left( \theta^T \hat{\Sigma}_\theta^{-1} \theta - 2 \theta^T \hat{\Sigma}_\theta^{-1} \hat{\mu}_\theta + \hat{\mu}_\theta^T \hat{\Sigma}_\theta^{-1} \hat{\mu}_\theta \right) + \text{const}'
    $$

    對比關於 $\theta$ 的二次項（$ \theta^T \dots \theta $）：

    $$
    \hat{\Sigma}_\theta^{-1} = \Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T \implies \hat{\Sigma}_\theta = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1}
    $$

    對比關於 $\theta$ 的一次項（$ \theta^T \dots $）：

    $$
    \hat{\Sigma}_\theta^{-1} \hat{\mu}_\theta = \Phi \Sigma^{-1} y \implies \hat{\mu}_\theta = \hat{\Sigma}_\theta \Phi \Sigma^{-1} y = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y
    $$

5.  **結論 (Conclusion)**：
    因此，後驗分佈為一個高斯分佈 $p(\theta|\mathcal{D}) = \mathcal{N}(\theta|\hat{\mu}_\theta, \hat{\Sigma}_\theta)$，並且具有要求的平均數和共變異數。
