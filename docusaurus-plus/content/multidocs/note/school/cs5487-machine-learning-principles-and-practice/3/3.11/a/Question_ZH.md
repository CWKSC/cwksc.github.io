---
title: Question ZH
---

## 問題 3.11 具有高斯先驗的貝葉斯迴歸

在上一個習題集中，我們展示了透過最小二乘法進行線性迴歸的各種形式，實際上只是下列模型下最大似然 (ML) 估計的特例：

$$
y = \Phi^T \theta + \epsilon \quad (3.42)
$$

其中 $\theta = [\theta_1, \dots, \theta_D]^T$ 是參數向量，$y = [y_1, \dots, y_n]^T$ 是輸出向量，$\{x_1, \dots, x_n\}$ 是對應的輸入集合，$\phi(x_i)$ 是特徵轉換，且

$$
\Phi = [\phi(x_1), \dots, \phi(x_n)] \quad (3.43)
$$

而 $\epsilon = [\epsilon_1, \dots, \epsilon_n]^T$ 是一個常態隨機過程 $\epsilon \sim \mathcal{N}(0, \Sigma)$，具有某個共變異數矩陣 $\Sigma$。
考慮這個模型的貝葉斯擴展是很自然的。為此，我們只需擴展模型，考慮一個高斯先驗：

$$
p(\theta) = \mathcal{N}(\theta|0, \Gamma),
$$

其中 $\Gamma$ 是共變異數矩陣。我們首先推導一個一般結果（針對一般的共變異數矩陣 $\Sigma$ 和 $\Gamma$），然後展示它如何與其他方法相關聯。

(a) 給定訓練集 $\mathcal{D} = \{(x_1, y_1), \dots, (x_n, y_n)\}$，證明後驗分佈為：

$$
p(\theta|\mathcal{D}) = \mathcal{N}(\theta|\hat{\mu}_\theta, \hat{\Sigma}_\theta), \quad (3.44)
$$

$$
\hat{\mu}_\theta = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1} \Phi \Sigma^{-1} y, \quad (3.45)
$$

$$
\hat{\Sigma}_\theta = (\Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T)^{-1}, \quad (3.46)
$$

其中 $\hat{\mu}_\theta$ 是後驗平均值，$\hat{\Sigma}_\theta$ 是後驗共變異數。不要假設共變異數矩陣 $\Sigma$ 和 $\Gamma$ 的任何特定形式。提示：配方 (Completing the square) (問題 1.10)。
