---
title: Question ZH
---

(e) 給定一個新的輸入 $x_*$，證明 $f_* = f(x_*, \theta)$ 的預測分佈為：

$$
p(f_* | x_*, \mathcal{D}) = \mathcal{N}(f_* | \hat{\mu}_*, \hat{\sigma}_*^2), \quad (3.50)
$$

$$
\hat{\mu}_* = \phi(x_*)^T \hat{\mu}_\theta, \quad (3.51)
$$

$$
\hat{\sigma}_*^2 = \phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*). \quad (3.52)
$$

(提示：見問題 1.1)。假設觀測雜訊 $\sigma^2$ 與訓練集相同，證明 $y_*$ 的預測分佈為：

$$
p(y_* | x_*, \mathcal{D}) = \int p(y_* | x_*, \theta) p(\theta | \mathcal{D}) d\theta = \mathcal{N}(y_* | \hat{\mu}_*, \sigma^2 + \hat{\sigma}_*^2). \quad (3.53)
$$

提示：注意 $p(y_*|x_*, \theta)$ 僅透過 $f_* = \phi(x_*)^T \theta$ 依賴於 $\theta$。因此，我們可以將對 $\theta$ 的積分改寫為對 $f_*$ 的積分，同時將 $p(\theta|\mathcal{D})$ 替換為 $p(f_*|\mathcal{D})$。

這是高斯過程迴歸的線性版本。我們將在以後的習題集中看到如何推導非線性（核）版本。
