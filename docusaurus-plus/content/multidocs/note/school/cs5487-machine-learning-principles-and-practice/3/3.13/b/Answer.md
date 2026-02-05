---
title: Answer
---

## Step-by-step Answer

1. **Decomposition**:
    We decompose each weight $\theta_i$ into two non-negative parts: $\theta_i = \theta_i^+ - \theta_i^-$, where $\theta_i^+, \theta_i^- \ge 0$.
    Usually, we INTEND for $\theta_i^+ = \max(0, \theta_i)$ and $\theta_i^- = \max(0, -\theta_i)$. In this case, at least one of them is zero.

2. **The Objective Difference**:
    Eq (3.62) uses $|\theta_i^+ - \theta_i^-|$.
    Eq (3.63) uses $(\theta_i^+ + \theta_i^-)$.
    Since $\theta_i^+, \theta_i^- \ge 0$, we know that $|\theta_i^+ - \theta_i^-| \le \theta_i^+ + \theta_i^-$, with equality holding *if and only if* at least one of $\theta_i^+$ or $\theta_i^-$ is zero (i.e., $\theta_i^+ \cdot \theta_i^- = 0$).

3. **Optimization Logic**:
    Suppose we have a candidate solution where for some index $i$, both $\theta_i^+ > 0$ and $\theta_i^- > 0$.
    Let $m = \min(\theta_i^+, \theta_i^-) > 0$.
    We can create a new solution:
    $\tilde{\theta}_i^+ = \theta_i^+ - m$
    $\tilde{\theta}_i^- = \theta_i^- - m$
    The actual weight $\theta_i$ remains unchanged: $\tilde{\theta}_i^+ - \tilde{\theta}_i^- = (\theta_i^+ - m) - (\theta_i^- - m) = \theta_i^+ - \theta_i^- = \theta_i$.
    The first term (loss term) depends only on the difference, so it is unchanged.

    However, consider the penalty term in (3.63):
    Sum was $(\theta_i^+ + \theta_i^-)$.
    New sum is $(\tilde{\theta}_i^+ + \tilde{\theta}_i^-) = (\theta_i^+ - m + \theta_i^- - m) = (\theta_i^+ + \theta_i^-) - 2m$.
    Since $m > 0$, the new objective value is strictly smaller!
    Therefore, any solution where both are positive is **not optimal**. The optimizer will drive at least one of them to zero to minimize the objective.

4. **Conclusion**:
    At the optimum, for every $i$, either $\theta_i^+=0$ or $\theta_i^-=0$ (or both).
    In this case, $|\theta_i^+ - \theta_i^-| = \theta_i^+ + \theta_i^-$.
    Thus, minimizing (3.63) automatically leads to a solution satisfying this property, making it equivalent to minimalizing (3.62).
