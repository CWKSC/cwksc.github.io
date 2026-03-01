---
title: Question ZH
---

**問題 3.13 L1 正則化最小平方法 (LASSO)**

在這個問題中，我們將考慮另一種形式的正則化最小平方法 (Regularized Least-Squares)，它使用 L1 範數 (L1-norm) 來對權重（參數向量）進行正則化。這被稱為 LASSO（代表「最小絕對收縮和選擇運算符」(Least Absolute Shrinkage and Selection Operator)），並且是一個被廣泛研究的迴歸問題。問題的設定和之前的迴歸問題（例如上一個問題）相同，只不過現在我們在權重上加入了一個基於 L1 範數的正則化項，

$$ \hat{\theta} = \operatorname\*{argmin}\_{\theta} \frac{1}{2} \|y - \Phi^T\theta\|^2 + \lambda \|\theta\|\_1, \qquad (3.59) $$

其中 $\|\theta\|_1 = \sum_{i=1}^D |\theta_i|$ 是 L1 範數，而 $\lambda$ 是一個控制其影響力的超參數 (Hyperparameter)。L1 範數的效果是強迫部分權重變為零，從而導致參數向量變得 _稀疏 (sparse)_（只有很少的非零元素）。例如，這可能有助於自動從 $\phi(x_i)$ 中選擇特徵的子集，或是控制多項式函數的複雜度（透過強制將某些權重設為 0）。

(a) 將 (3.59) 改寫為最大後驗機率 (MAP, Maximum A Posteriori) 估計問題。LASSO 所假設的先驗分佈 (Prior Distribution) 是什麼？繪製高斯先驗 (Gaussian prior)（來自上一個問題）和 LASSO 先驗的圖形。這如何解釋為什麼 LASSO 傾向於使權重接近於零？
