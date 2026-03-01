---
title: Question
---

**Problem 4.12 Lagrange multipliers and equality constraints**

In the M-step of the EM algorithm for mixture models, we need to calculate an estimate of the component prior probabilities $\pi_j$ via the optimization problem,

$$
\{\hat{\pi}_j\} = \underset{\{\pi_j\}}{\text{argmax}} \sum_{j=1}^K N_j \log \pi_j, \quad \text{s.t.} \quad \sum_{j=1}^K \pi_j = 1, \quad \pi_j \ge 0,
$$

(4.47)

for some $N_j \ge 0$. Note that this optimization problem has an equality constraint, which is $\{\pi_j\}$ must sum to 1, since they represent a probability distribution.

One method of solving an optimization problem with equality constraints is to use _Lagrange multipliers_. Consider the following problem,

$$
x^* = \underset{x}{\text{argmax}} \, f(x),
$$

$$
\text{s.t.} \quad g(x) = 0,
$$

(4.48)

where $f(x)$ is the objective function and $g(x)$ is the constraint function. Let's look at two properties of these functions,

- First, the gradient $\nabla g(x)$ is orthogonal to the constraint surface, since $g(x)$ should be constant along the direction of the constraint surface (otherwise it would not be 0).
- Second, at the optimum, the gradient $\nabla f(x)$ must also be orthogonal to the constraint surface. Otherwise, we could move along the constraint surface to increase $f(x)$.

This is illustrated in the following figure:

\_(Figure description: A contour plot showing concentric circles representing the level curves of an objective function $f(x) = 1 - x_1^2 - x_2^2$. A straight red line represents the constraint function $g(x) = x_1 + x_2 - 1 = 0$. The optimal point $(x_1^*, x_2^*) = (0.5, 0.5)$ is where the level curve of $f(x)$ represents the highest reachable value while being tangent to the constraint line $g(x)$. An arrow pointing towards the center represents the gradient $\nabla f(x)$, which is orthogonal to the constraint line at the optimal point.)\_

Hence, $\nabla f(x)$ and $\nabla g(x)$ must be parallel or anti-parallel, and by extension,

$$
\nabla f(x) + \lambda \nabla g(x) = 0,
$$

(4.49)

for some $\lambda \neq 0$. Define the _Lagrangian function_,

$$
L(x, \lambda) = f(x) + \lambda g(x).
$$

(4.50)

The optimality condition in (4.49) is obtained by setting $\frac{\partial L}{\partial x} = 0$. Furthermore, setting $\frac{\partial L}{\partial \lambda} = 0$ yields the equality constraint, $g(x) = 0$. Hence, to solve the constrained optimization problem (4.48), we form the Lagrangian function, and find the stationary point w.r.t. both $x$ and $\lambda$, by simultaneously solving

$$
\frac{\partial}{\partial x} L(x, \lambda) = 0, \quad \frac{\partial}{\partial \lambda} L(x, \lambda) = 0.
$$

(4.51)

**(b)** Consider another optimization problem,

$$
\{\hat{\pi}_j\} = \underset{\{\pi_j\}}{\text{argmax}} \sum_{j=1}^K \pi_j(N_j - \log \pi_j), \quad \text{s.t.} \quad \sum_{j=1}^K \pi_j = 1, \quad \pi_j \ge 0.
$$

(4.53)

Show that the solution is $\pi_j = \frac{\exp N_j}{\sum_{k=1}^K \exp N_k}$.

More details about Lagrange multipliers can be found in Appendix E of Bishop's book, PRML.
$$
