---
title: Answer ZH
---

## 先決條件 (Prerequisites)
- 最大後驗機率估計 (MAP Estimation)
- 線性迴歸的概似函數 (Likelihood Function for Linear Regression)
- 拉普拉斯分佈 (Laplace Distribution)
- 高斯分佈 (Gaussian Distribution)

## 逐步推導 (Step-by-Step Derivation)

1. **MAP 估計框架：**
   在 MAP 估計中，我們尋求最大化後驗分佈 (Posteriori Distribution) $p(\theta | y, X)$ 的參數 $\theta$：
   $$ \hat{\theta}_{MAP} = \operatorname*{argmax}_{\theta} p(\theta | y, X) = \operatorname*{argmax}_{\theta} \frac{p(y | X, \theta) p(\theta)}{p(y | X)} $$
   因為 $p(y | X)$ 獨立於 $\theta$，這等價於最大化概似函數和先驗的乘積：
   $$ \hat{\theta}_{MAP} = \operatorname*{argmax}_{\theta} [\ln p(y | X, \theta) + \ln p(\theta)] $$
   這也等價於最小化負對數後驗 (Negative Log-Posterior)：
   $$ \hat{\theta}_{MAP} = \operatorname*{argmin}_{\theta} [-\ln p(y | X, \theta) - \ln p(\theta)] $$

2. **概似函數 (Likelihood Function)：**
   假設獨立的高斯雜訊且變異數 $\sigma^2 = 1$（為了簡單起見，這對應於沒有縮放變異數因子的 $\frac{1}{2} \|y - \Phi^T\theta\|^2$ 項），概似函數為：
   $$ p(y | X, \theta) = \prod_{i=1}^N \mathcal{N}(y_i | \phi(x_i)^T \theta, 1) \propto \exp \left( -\frac{1}{2} \| y - \Phi^T \theta \|^2 \right) $$
   因此，負對數概似為：
   $$ -\ln p(y | X, \theta) = \frac{1}{2} \|y - \Phi^T\theta\|^2 + \text{const} $$

3. **LASSO 的先驗 (Prior for LASSO)：**
   為了重建方程式 (3.59)，負對數先驗必須對應 L1 懲罰項：
   $$ -\ln p(\theta) = \lambda \|\theta\|_1 + \text{const} $$
   $$ \ln p(\theta) = -\lambda \|\theta\|_1 + \text{const}' $$
   $$ p(\theta) \propto \exp(-\lambda \|\theta\|_1) = \prod_{j=1}^D \exp(-\lambda |\theta_j|) $$
   這表示每個權重 $\theta_j$ 都服從位置參數 $\mu = 0$ 且尺度參數 $b = \frac{1}{\lambda}$ 的獨立拉普拉斯分佈 (Laplace Distribution)：
   $$ p(\theta_j) = \frac{\lambda}{2} \exp(-\lambda |\theta_j|) $$
   因此，**LASSO 所假設的先驗分佈是以零為中心的拉普拉斯分佈**（或雙指數分佈）。

4. **圖形與解釋：**
   高斯先驗（用於脊迴歸 Ridge Regression，L2 正則化）是 $p(\theta_j) \propto \exp(-\frac{\lambda}{2} \theta_j^2)$。
   拉普拉斯先驗（用於 LASSO，L1 正則化）是 $p(\theta_j) \propto \exp(-\lambda |\theta_j|)$。

   ```mermaid
   graph TD
     subgraph Prior Distributions
       direction LR
       G[高斯先驗 Gaussian Prior: 鐘形，0 處平滑圓潤]
       L[拉普拉斯先驗 Laplace Prior: 0 處尖峰，長尾]
     end
   ```
   *圖片說明：高斯分佈在 0 附近具有平滑、圓潤的鐘形。拉普拉斯分佈具有尖銳的特徵「帳篷」形狀，正好在 0 處達到峰值。*

   **稀疏性的解釋 (Explanation for Sparsity)：**
   拉普拉斯先驗在 $\theta_j = 0$ 處有一個尖銳的點（不可微），這意味著與在原點平滑的高斯先驗相比，它為精確值 $0$ 分配了嚴格更多的機率質量。當我們計算 MAP 時，拉普拉斯先驗的尖峰會將參數精確拉向零，除非數據概似強烈地將其拉開。因此，LASSO 透過將許多權重精確設置為零，自然地執行特徵選擇 (Feature Selection)。
