---
title: Explain ZH
---

## 詳細解釋

本節建立了 **機率建模 (Probabilistic Modeling)**（貝葉斯迴歸）與 **基於優化的機器學習 (Optimization-based Machine Learning)**（嶺迴歸）之間的橋樑。

### 1. 正則化參數 $\lambda$

我們發現 $\lambda = \frac{\sigma^2}{\alpha}$。
* $\sigma^2$: 雜訊變異數。高雜訊意味著我們較不信任數據。
* $\alpha$: 先驗變異數。高變異數代表「平坦」或微弱的先驗。
* **解釋**:
  * 如果雜訊 $\sigma^2$ 很高，$\lambda$ 會增加。因為數據含有雜訊，我們更依賴先驗（正則化）。
  * 如果先驗變異數 $\alpha$ 很高，$\lambda$ 會減少。因為先驗資訊不足，我們較少依賴它。
  * 因此，$\lambda$ 平衡了「擬合數據」與「保持參數微小」之間的權衡。

### 2. 嶺迴歸 (Ridge Regression) / Tikhonov 正則化

優化問題 $\operatorname{argmin}_\theta \|y - \Phi^T \theta\|^2 + \lambda \|\theta\|^2$ 包含兩部分：
1. **數據保真度 (Data Fidelity)**: $\|y - \Phi^T \theta\|^2$。試圖準確預測 $y$。
2. **正則化 (Regularization)**: $\lambda \|\theta\|^2$。試圖保持權重 $\theta$ 微小（接近 0）。

貝葉斯的推導為為什麼我們要加上 $\lambda \|\theta\|^2$ 提供了 *理論正當性*：它在數學上對應於假設權重具有各向同性的高斯先驗。

各向同性高斯先驗 (Isotropic Gaussian Prior) $\iff$ $L_2$ 正則化 (Ridge)。
拉普拉斯先驗 (Laplace Prior) $\iff$ $L_1$ 正則化 (Lasso)。

### 3. 數值優勢

矩陣 $\Phi \Phi^T$ 通常是奇異的 (singular) 或接近奇異的。加上 $\lambda I$ 相當於在對角線元素上加上一個小的正數。這確保了所有特徵值均為正，使矩陣可逆且解更穩定。
