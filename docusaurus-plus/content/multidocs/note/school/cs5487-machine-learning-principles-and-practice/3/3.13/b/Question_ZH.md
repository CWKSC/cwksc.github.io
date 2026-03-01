---
title: Question ZH
---

**問題 3.13 L1 正則化最小平方法 (LASSO) 續**

對於 (3.59) 沒有封閉形式的解 (closed-form solution)，因此需要使用迭代方法來執行最佳化。接下來，我們將把 (3.59) 重寫為等價的*二次規劃* (Quadratic Programming, QP) 問題，該問題可以插入標準求解器中（例如，MATLAB 中的 `quadprog`）。

(b) 首先，我們將 $\theta$ 重寫為兩個具有正元素的向量之間的差。

$$ \theta = \theta^+ - \theta^-, \qquad (3.60) $$
$$ \theta^+ \geq 0, \quad \theta^- \geq 0. \qquad (3.61) $$

原始的最佳化問題 (3.59) 現在可以重寫為

$$ \hat{\theta} = \operatorname*{argmin}_{\theta^+, \theta^-} \frac{1}{2} \|y - \Phi^T(\theta^+ - \theta^-)\|^2 + \lambda \sum_i |\theta^+_i - \theta^-_i|, \qquad (3.62) $$
$$ \text{s.t. } \theta^+ \geq 0, \; \theta^- \geq 0. $$

使用一些最佳化理論的「魔法」，我們可以將 (3.62) 重寫為

$$ \hat{\theta} = \operatorname*{argmin}_{\theta^+, \theta^-} \frac{1}{2} \|y - \Phi^T(\theta^+ - \theta^-)\|^2 + \lambda \sum_i (\theta^+_i + \theta^-_i), \qquad (3.63) $$
$$ \text{s.t. } \theta^+ \geq 0, \; \theta^- \geq 0. $$

為什麼 (3.63) 中的最佳化問題等價於 (3.62)？提示：在最佳情況下，關於對 $\{\theta^+_i, \theta^-_i\}$ 的值我們可以說些什麼？
