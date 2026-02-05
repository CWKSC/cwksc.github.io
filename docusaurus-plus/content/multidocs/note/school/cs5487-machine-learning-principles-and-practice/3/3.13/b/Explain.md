---
title: Explain
---

## Detailed Explanation

This technique is a standard trick in **Convex Optimization** to handle the absolute value function $|x|$. The absolute value is convex but not differentiable at $x=0$, which can be troublesome for some gradient-based solvers.

By introducing two non-negative variables $u, v \ge 0$ and setting $x = u - v$, we can represent any real number.
Ideally, we want $x=5 \rightarrow u=5, v=0$ and $x=-3 \rightarrow u=0, v=3$.
However, the representation is not unique. $x=5$ could also be $u=105, v=100$.
In the optimization problem, we are minimizing the **sum** $u+v$.
* Case 1 ($u=5, v=0$): Sum = 5.
* Case 2 ($u=105, v=100$): Sum = 205.
Since we are minimizing, the solver will always prefer Case 1 (the disjoint support).
This ensures that at the optimum, $u+v = |u-v| = |x|$.

This transforms a non-differentiable $|x|$ term into a smooth linear term $(u+v)$ subject to simple linear constraints ($u,v \ge 0$). This is much easier for QP solvers to handle.
