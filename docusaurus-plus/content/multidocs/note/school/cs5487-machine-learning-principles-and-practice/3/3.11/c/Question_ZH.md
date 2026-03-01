---
title: Question ZH
---
**(c)** 考慮一種情況，我們假設先驗共變異數和觀察雜訊都是獨立同分佈 (i.i.d.) 的，即 $\Gamma = \alpha I$ 且 $\Sigma = \sigma^2 I$。證明在這些假設下，最大後驗 (MAP) 估計值為

$$
\hat{\theta} = (\Phi \Phi^T + \lambda I)^{-1} \Phi y, \tag{3.48}
$$

其中 $\lambda \geq 0$。證明 (3.48) 也是*正則化 (regularized)* 最小平方法問題的解，

$$
\hat{\theta} = \underset{\theta}{\text{argmin}} \, \lVert y - \Phi^T \theta \rVert^2 + \lambda \lVert \theta \rVert^2. \tag{3.49}
$$

在不同的領域中，這種公式也稱為*嶺迴歸 (ridge regression)*、*Tikhonov 迴歸 (Tikhonov regression)*、*收縮 (shrinkage)*（意指縮小參數向量中的權重），或*權重衰減 (weight decay)*。
