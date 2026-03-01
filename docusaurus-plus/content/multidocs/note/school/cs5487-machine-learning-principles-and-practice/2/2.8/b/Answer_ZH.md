---
title: Answer ZH
---
### 先備知識 (Prerequisites)
* **最大概似估計 (Maximum Likelihood Estimation, MLE)**：尋找能夠在給定參數的情況下，最大化觀察到當前數據機率的參數值。
* **高斯分佈 (Gaussian Distribution)**：常態分佈 (Normal Distribution) 的機率密度函數 (Probability Density Function)。
* **對數概似 (Log-Likelihood)**：對概似函數取對數，將乘積簡化為總和的運算技巧。

### 逐步推導 (Step-by-Step Derivation)

1. **定義機率模型 (Probability Model)**
   已知 $y_i = \phi(x_i)^T \theta + \epsilon_i$，其中 $\epsilon_i \sim \mathcal{N}(0, \sigma^2)$。
   因為對於給定的 $x_i$ 和 $\theta$，$\phi(x_i)^T \theta$ 是一個決定性 (Deterministic) 的數值，所以 $y_i$ 的分佈是一個以 $\phi(x_i)^T \theta$ 為中心的高斯分佈：
   $$
   p(y_i \mid x_i, \theta) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( - \frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right)
   $$

2. **寫下概似函數 (Likelihood Function)**
   因為樣本 $\mathcal{D} = \{(x_i, y_i)\}_{i=1}^n$ 是獨立同分布的 (i.i.d.)，所有 $n$ 個觀察值的聯合概似 (Joint Likelihood) 即為個別機率的乘積：
   $$
   \begin{aligned}
   L(\theta) &= p(y_1, \dots, y_n \mid x_1, \dots, x_n, \theta) \\
             &= \prod_{i=1}^n p(y_i \mid x_i, \theta) \\
             &= \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( - \frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right)
   \end{aligned}
   $$

3. **計算對數概似函數 (Log-Likelihood Function)**
   為了找到最大值，在數學上最大化概似函數的自然對數 $\ln L(\theta)$（通常記為 $\ell(\theta)$）會簡單得多。對數是一個單調遞增函數 (Monotonically Increasing Function)，所以最大化 $\ell(\theta)$ 就等同於最大化 $L(\theta)$。
   $$
   \begin{aligned}
   \ell(\theta) &= \ln \left( \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( - \frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right) \right) \\
                &= \sum_{i=1}^n \left( \ln\left[\frac{1}{\sqrt{2\pi\sigma^2}}\right] - \frac{(y_i - \phi(x_i)^T \theta)^2}{2\sigma^2} \right) \\
                &= - \frac{n}{2} \ln(2\pi\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2
   \end{aligned}
   $$

4. **證明與最小平方法的等價性 (Show Equivalence to Least Squares)**
   我們的目標是找到能最大化 $\ell(\theta)$ 的 $\theta$。
   請注意，第一項 $- \frac{n}{2} \ln(2\pi\sigma^2)$ 對於 $\theta$ 而言是常數，且係數 $\frac{1}{2\sigma^2}$ 是正的常數。
   因此，最大化這個負數的項就完全等同於最小化後面正數的總和 (Summation)：
   $$
   \arg\max_\theta \ell(\theta) = \arg\min_\theta \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2
   $$
   這個總和正是 (a) 小題中的誤差平方和 (Sum-Squared-Error) 目標函數 $J(\theta)$：
   $$
   \sum_{i=1}^n (y_i - \phi(x_i)^T \theta)^2 = \| y - \Phi^T \theta \|^2
   $$
   
5. **結論 (Conclusion)**
   既然這兩個最佳化問題 (Optimization Problem) 是一模一樣的，那麼最大概似估計值 (ML estimate) $\hat{\theta}_{ML}$ 必然等價於最小平方法估計值 (Least Squares estimate) $\hat{\theta}_{LS}$：
   $$
   \hat{\theta}_{ML} = (\Phi \Phi^T)^{-1} \Phi y
   $$