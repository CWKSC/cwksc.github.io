---
title: Question ZH
---

**問題 3.11 高斯先驗的貝葉斯迴歸 (Bayesian regression with Gaussian prior)**

在之前的作業中，我們證明了使用最小平方法 (method of least squares) 的各種線性迴歸 (linear regression) 形式實際上都只是以下模型下最大概似估計 (ML estimation) 的特例：

$$
y = \Phi^T \theta + \epsilon \tag{3.42}
$$

其中 $\theta = [\theta_1, \dots, \theta_D]^T$ 是參數向量 (parameter vector)，$y = [y_1, \dots, y_n]^T$ 是輸出向量 (vector of outputs)，$\{x_1, \cdots, x_n\}$ 是對應的輸入集合，$\phi(x_i)$ 是一個特徵轉換 (feature transformation)，且

$$
\Phi = [\phi(x_1), \cdots, \phi(x_n)] \tag{3.43}
$$

以及 $\epsilon = [\epsilon_1, \dots, \epsilon_n]^T$ 是一個常態隨機過程 $\epsilon \sim \mathcal{N}(0, \Sigma)$，具有某個共變異數矩陣 (covariance matrix) $\Sigma$。

很自然地，我們可以考慮這個模型的貝葉斯擴展 (Bayesian extension)。為此，我們只需藉由考慮一個高斯先驗 (Gaussian prior) 來擴展該模型：

$$
p(\theta) = \mathcal{N}(\theta|0, \Gamma),
$$

其中 $\Gamma$ 是共變異數矩陣。我們將首先推導出一個通用結果 (適用於一般的共變異數矩陣 $\Sigma$ 和 $\Gamma$)，然後展示它與其他方法的關聯。

**(a)** 給定一個訓練集 $\mathcal{D} = \{(x_1, y_1), \dots, (x_n, y_n)\}$，證明後驗分佈 (posterior distribution) 為

$$
\begin{align}
p(\theta|\mathcal{D}) &= \mathcal{N}(\theta|\hat{\mu}_\theta, \hat{\Sigma}_\theta), \tag{3.44} \\
\hat{\mu}_\theta &= (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y, \tag{3.45} \\
\hat{\Sigma}_\theta &= (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1}, \tag{3.46}
\end{align}
$$

其中 $\hat{\mu}_\theta$ 是後驗平均數 (posterior mean)，$\hat{\Sigma}_\theta$ 是後驗共變異數 (posterior covariance)。請不要假設共變異數矩陣 $\Sigma$ 和 $\Gamma$ 有任何特定的形式。提示：配方法 (complete the square) (請參見問題 1.10)。
