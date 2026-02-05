---
title: Question
---

## Problem 4.12 Lagrange multipliers and equality constraints

In the M-step of the EM algorithm for mixture models, we need to calculate an estimate of the component prior probabilities $\pi_j$ via the optimization problem,

$$
\{\hat{\pi}_j\} = \underset{\{\pi_j\}}{\text{argmax}} \sum_{j=1}^K N_j \log \pi_j, \quad \text{s.t.} \sum_{j=1}^K \pi_j = 1, \quad \pi_j \ge 0, \quad (4.47)
$$

for some $N_j \ge 0$. Note that this optimization problem has an equality constraint, which is $\{\pi_j\}$ must sum to 1, since they represent a probability distribution.

One method of solving an optimization problem with equality constraints is to use *Lagrange multipliers*. Consider the following problem,

$$
x^* = \underset{x}{\text{argmax}} f(x),
$$

$$
\text{s.t.} \quad g(x) = 0, \quad (4.48)
$$

where $f(x)$ is the objective function and $g(x)$ is the constraint function.

To solve the constrained optimization problem (4.48), we form the Lagrangian function, and find the stationary point w.r.t. both $x$ and $\lambda$, by simultaneously solving

$$
\frac{\partial}{\partial x} L(x, \lambda) = 0, \quad \frac{\partial}{\partial \lambda} L(x, \lambda) = 0. \quad (4.51)
$$

(a) Use Lagrange multipliers to optimize (4.47), and show that the solution is

$$
\pi_j = \frac{N_j}{\sum_{k=1}^K N_k}. \quad (4.52)
$$
