---
title: Question ZH
---

(c) 考慮先驗共變異數和觀測雜訊皆為 I.I.D. 的情況，即 $\Gamma = \alpha I$ 且 $\Sigma = \sigma^2 I$。證明在這些假設下的 MAP 估計值為：

$$
\hat{\theta} = (\Phi \Phi^T + \lambda I)^{-1} \Phi y, \quad (3.48)
$$

其中 $\lambda \ge 0$。證明 (3.48) 也是 *正則化最小二乘問題 (regularized least-squares problem)* 的解：

$$
\hat{\theta} = \operatorname*{argmin}_\theta \|y - \Phi^T \theta\|^2 + \lambda \|\theta\|^2. \quad (3.49)
$$

在各個領域中，這種公式也被稱為 *嶺迴歸 (ridge regression)*、*Tikhonov 正則化*、*收縮 (shrinkage)*（指收縮參數向量中的權重）或 *權重衰減 (weight decay)*。
