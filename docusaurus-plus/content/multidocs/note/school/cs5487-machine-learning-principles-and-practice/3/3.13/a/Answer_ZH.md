---
title: Answer ZH
---

## 預備知識

*   **MAP 估計 (MAP Estimation)**: 最大後驗概率估計 (Maximum A Posteriori) 尋找最大化後驗概率 $p(\theta|D) \propto p(D|\theta)p(\theta)$ 的參數。這等價於最小化 $-\log p(D|\theta) - \log p(\theta)$。
*   **線性迴歸似然 (Linear Regression Likelihood)**: 假設高斯雜訊 $y \sim \mathcal{N}(\Phi^T \theta, \sigma^2 I)$，負對數似然成正比於平方誤差 $\frac{1}{2}\|y - \Phi^T \theta\|^2$。
*   **拉普拉斯分佈 (Laplace Distribution)**: 機率分佈定義為 $Laplace(x|\mu, b) = \frac{1}{2b} \exp(-\frac{|x-\mu|}{b})$。

## 逐步解答

1.  **似然項 (Likelihood Term)**:
    最小化式中的第一項是 $\frac{1}{2} \|y - \Phi^T \theta\|^2$。這對應於假設目標值是由高斯雜訊生成的情況下，數據的負對數似然：$y_i = \phi(x_i)^T \theta + \epsilon_i$，其中 $\epsilon_i \sim \mathcal{N}(0, \sigma^2)$。
    具體來說，$p(y|X, \theta) \propto \exp(-\frac{1}{2\sigma^2} \|y - \Phi^T \theta\|^2)$，取負對數後得到該項。

2.  **先驗項 (Prior Term)**:
    第二項是 $\lambda \|\theta\|_1 = \lambda \sum_i |\theta_i|$。我們希望這對應於負對數先驗：$-\log p(\theta)$。
    因此，$\log p(\theta) \propto -\lambda \sum_i |\theta_i|$。
    這可以分離為每個權重的獨立先驗：$p(\theta) = \prod_i p(\theta_i)$，其中 $\log p(\theta_i) \propto -\lambda |\theta_i|$。
    這意味著 $p(\theta_i) \propto \exp(-\lambda |\theta_i|)$。

3.  **識別分佈**:
    分佈 $p(\theta_i) \propto \exp(-\lambda |\theta_i|)$ 是中心在 0 的 **拉普拉斯分佈 (Laplace Distribution)**（或雙指數分佈）。
    因此，LASSO 假設權重服從 **拉普拉斯先驗 (Laplacian Prior)**。

4.  **繪圖比較**:
    *   **高斯先驗 (L2 正則化)**: $p(\theta_i) \propto \exp(-\alpha \theta_i^2)$。這是一個鐘形曲線，在峰值 0 處是平滑的。
    *   **拉普拉斯先驗 (L1 正則化)**: $p(\theta_i) \propto \exp(-\lambda |\theta_i|)$。這在 0 處有一個尖峰。

    高斯分佈在 0 附近是平坦的，這意味著它對 0 和很小的數值（如 0.001）之間的區別不大。
    拉普拉斯分佈在 0 處很尖銳，意味著與小的非零值相比，概率密度更集中在 0 這一點。

5.  **稀疏性的解釋**:
    因為拉普拉斯先驗在零點有一個尖峰（導數不連續），後驗概率的模式 (mode) 更有可能恰好落在零點。
    在對數域中，懲罰項 $|\theta_i|$ 即使在 $\theta_i \to 0$ 時也具有恆定的梯度 $\pm \lambda$。這種恆定的「拉力」可以迫使最佳權重恰好為零。
    相比之下，平方懲罰 $\theta_i^2$ 具有梯度 $2\theta_i$，當 $\theta_i \to 0$ 時梯度也消失。隨著權重變小，向零的拉力變得微不足道，因此它很少精確地穩定在零。
