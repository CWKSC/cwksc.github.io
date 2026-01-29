---
title: Question ZH
---

# Problem 3.13 L1 正則化最小平方法 (LASSO)

在這個問題中，我們將考慮另一種形式的正則化最小平方法，它使用 L1 範數來正則化權重（參數向量）。這被稱為 LASSO（"Least Absolute Shrinkage and Selection Operator" 的縮寫），是一個被廣泛研究的迴歸問題。問題設定與之前的迴歸問題（例如前一個問題）相同，除了現在我們在權重上包含了一個基於 L1 範數的正則化項，

$$
\hat{\theta} = \text{argmin}_{\theta} \frac{1}{2} \|y - \Phi^T \theta\|^2 + \lambda \|\theta\|_1, \tag{3.59}
$$

其中 $\|\theta\|_1 = \sum_{i=1}^D |\theta_i|$ 是 L1 範數，$\lambda$ 是一個控制其影響力的超參數。L1 範數的效果是強迫一些權重為零，導致參數向量是 *稀疏的 (sparse)*（幾乎沒有非零條目）。例如，這對於從 $\phi(x_i)$ 中自動選擇特徵子集，或控制多項式函數的複雜度（通過強迫一些權重為 0）非常有用。

(a) 將 (3.59) 重寫為一個 MAP 估計問題。LASSO 假設了什麼樣的先驗分佈 (prior distribution)？繪製高斯先驗（來自前一個問題）和 LASSO 先驗。這如何解釋為什麼 LASSO 傾向於讓權重接近於零？
