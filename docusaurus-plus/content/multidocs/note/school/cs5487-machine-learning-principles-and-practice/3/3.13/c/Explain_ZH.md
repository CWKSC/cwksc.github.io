---
title: Explain ZH
---

## 詳細解釋

一個 **二次規劃 (Quadratic Program, QP)** 是一個具有二次目標函數和線性約束的優化問題。
$$ \min_x \frac{1}{2} x^T H x + f^T x \quad \text{subject to } Ax \le b, A_{eq}x = b_{eq} $$

在我們的例子中：
*   **變量 (Variable)**: 變量大小從 $D$（對於 $\theta$）增加一倍到 $2D$（對於 $\mathbf{x} = [\theta^+; \theta^-]$）。
*   **海森矩陣 (Hessian) $H$**: 該矩陣是半正定的（如果 $\Phi \Phi^T$ 是），這確保了問題是凸的並且具有全局最小值。塊結構反映了 $\theta^+$ 和 $\theta^-$ 如何影響輸出的對稱性（僅符號不同）。
*   **線性項 (Linear term) $f$**: 調節權衡。$\lambda \mathbf{1}$ 將所有權重推向 0。數據項 $-\Phi y$ 將它們拉向擬合數據。
*   **約束 (Constraints)**: 我們有一個簡單的下界約束 $\mathbf{x} \ge 0$。

這種轉換允許使用強大的現成 QP 求解器，而不需要為不可微的 L1 代價編寫自定義的梯度下降算法。
