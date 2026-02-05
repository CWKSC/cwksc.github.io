---
title: Question
---

## Problem 4.12 (b)

(b) Consider another optimization problem,

$$
\{\hat{\pi}_j\} = \underset{\{\pi_j\}}{\text{argmax}} \sum_{j=1}^K \pi_j (N_j - \log \pi_j), \quad \text{s.t.} \sum_{j=1}^K \pi_j = 1, \quad \pi_j \ge 0. \quad (4.53)
$$

Show that the solution is

$$
\pi_j = \frac{\exp N_j}{\sum_{k=1}^K \exp N_k}.
$$

More details about Lagrange multipliers can be found in Appendix E of Bishop's book, PRML.
