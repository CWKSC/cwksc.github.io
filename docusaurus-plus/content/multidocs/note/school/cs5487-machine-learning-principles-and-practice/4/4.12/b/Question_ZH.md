---
title: Question ZH
---

## 問題 4.12 (b)

(b) 考慮另一個最佳化問題，

$$
\{\hat{\pi}_j\} = \underset{\{\pi_j\}}{\text{argmax}} \sum_{j=1}^K \pi_j (N_j - \log \pi_j), \quad \text{s.t.} \sum_{j=1}^K \pi_j = 1, \quad \pi_j \ge 0. \quad (4.53)
$$

證明其解為

$$
\pi_j = \frac{\exp N_j}{\sum_{k=1}^K \exp N_k}.
$$

關於拉格朗日乘數的更多細節可以在 Bishop 的書 PRML 的附錄 E 中找到。
