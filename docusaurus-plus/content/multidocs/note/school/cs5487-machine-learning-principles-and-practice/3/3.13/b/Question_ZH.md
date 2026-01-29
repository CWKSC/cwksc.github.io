---
title: Question ZH
---

(3.59) 沒有閉式解 (closed-form solution)，因此需要迭代方法來執行優化。接下來，我們將把 (3.59) 重寫為一個等價的 *二次規劃 (quadratic programming, QP)* 問題，這可以代入標準求解器（例如 MATLAB 中的 `quadprog`）進行求解。

(b) 首先，我們將 $\theta$ 重寫為兩個具有正條目的向量之差。
$$
\theta = \theta^+ - \theta^-, \tag{3.60}
$$
$$
\theta^+ \ge 0, \quad \theta^- \ge 0. \tag{3.61}
$$

原始優化問題 (3.59) 現在可以重寫為
$$
\hat{\theta} = \text{argmin}_{\theta^+, \theta^-} \frac{1}{2} \|y - \Phi^T (\theta^+ - \theta^-)\|^2 + \lambda \sum_i |\theta_i^+ - \theta_i^-|, \tag{3.62}
$$
$$
\text{s.t. } \theta^+ \ge 0, \quad \theta^- \ge 0.
$$

使用一點優化理論的 "魔術"，我們可以將 (3.62) 重寫為
$$
\hat{\theta} = \text{argmin}_{\theta^+, \theta^-} \frac{1}{2} \|y - \Phi^T (\theta^+ - \theta^-)\|^2 + \lambda \sum_i (\theta_i^+ + \theta_i^-), \tag{3.63}
$$
$$
\text{s.t. } \theta^+ \ge 0, \quad \theta^- \ge 0.
$$

為什麼 (3.63) 中的優化問題等價於 (3.62)？提示：在最優點，我們可以對 $\theta_i^+$ 和 $\theta_i^-$ 這對數值說什麼？
