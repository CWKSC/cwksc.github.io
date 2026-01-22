---
title: Answer ZH
---

## 必備知識

1. **機率密度函數 (Probability Density Function, PDF)**：
    * 高斯分佈 (Gaussian distribution)：$p(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(x-\mu)^2}{2\sigma^2} \right)$。
2. **對數概似 (Log-Likelihood)**：
    * 對數性質：$\ln(ab) = \ln a + \ln b$，$\ln(e^x) = x$。
3. **最佳化 (Optimization)**：
    * 最大化一個函數等同於最大化其對數（因為對數是單調遞增函數）。

## 逐步解答

### 1. 概似函數 (The Likelihood Function)

我們觀察到的每一個 $y_i = \phi(x_i)^T \theta + \epsilon_i$，其中 $\epsilon_i \sim \mathcal{N}(0, \sigma^2)$。
這意味著給定 $x_i$ 和 $\theta$，$y_i$ 服從平均值 $\mu_i = \phi(x_i)^T \theta$ 且變異數 $\sigma^2$ 的高斯分佈：

$$
p(y_i | x_i, \theta) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right)
$$

由於樣本是獨立同分佈 (i.i.d) 的，整個資料集的概似性是個別機率的乘積：

$$
L(\theta) = p(\mathcal{D} | \theta) = \prod_{i=1}^n p(y_i | x_i, \theta)
$$

$$
L(\theta) = \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right)
$$

### 2. 對數概似函數 (The Log-Likelihood Function)

最大化對數概似 $\ell(\theta) = \ln L(\theta)$ 比較容易，因為它將乘積轉化為求和。

$$
\begin{aligned}
\ell(\theta) &= \ln \left( \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right) \right) \\
&= \sum_{i=1}^n \left( \ln \frac{1}{\sqrt{2\pi\sigma^2}} + \ln \exp\left( -\frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right) \right) \\
&= \sum_{i=1}^n \left( -\frac{1}{2} \ln(2\pi\sigma^2) - \frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right)
\end{aligned}
$$

簡化後：
$$
\ell(\theta) = -\frac{n}{2} \ln(2\pi\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2
$$

### 3. 最大化 (Maximization)

為了找出 ML 估計值 $\hat{\theta}_{ML}$，我們對 $\theta$ 最大化 $\ell(\theta)$。
注意第一項 $-\frac{n}{2} \ln(2\pi\sigma^2)$ 對 $\theta$ 而言是常數，可以忽略。
最大化剩餘項等同於最大化：

$$
-\frac{1}{2\sigma^2} \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2
$$

由於 $\frac{1}{2\sigma^2} > 0$，最大化這個負數等同於**最小化**求和符號內的正數：

$$
\hat{\theta}_{ML} = \arg\min_\theta \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2
$$

這個目標函數正是 (a) 部分中的平方誤差和 (Sum-Squared-Error)。
因此，在高斯雜訊的假設下，最小化平方誤差和等同於最大化概似性。其解是相同的：

$$
\hat{\theta}_{ML} = (\Phi \Phi^T)^{-1} \Phi y
$$
