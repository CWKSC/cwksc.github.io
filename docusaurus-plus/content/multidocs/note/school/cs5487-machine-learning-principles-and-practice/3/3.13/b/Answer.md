---
title: Answer
---

## Prerequisites
- Constrained Optimization
- Objective Functions

## Step-by-Step Derivation

1. **Analyzing the Constraints:**
   Let $\theta_i = \theta^+_i - \theta^-_i$ with the constraints $\theta^+_i \geq 0$ and $\theta^-_i \geq 0$. We want to show that minimizing $\lambda |\theta^+_i - \theta^-_i|$ is equivalent to minimizing $\lambda (\theta^+_i + \theta^-_i)$ under the optimization objective.

2. **Absolute Value Representation:**
   Note that by definition:
   $$ |\theta_i| = |\theta^+_i - \theta^-_i| $$
   We know that for any positive numbers, $|\theta^+_i - \theta^-_i| \leq \theta^+_i + \theta^-_i$, because the right-hand side is the sum of two positive numbers and the left hand side is their absolute difference. The equality holds if and only if $\theta^+_i = 0$ or $\theta^-_i = 0$ (or both).

3. **Behavior at the Optimum:**
   Suppose at the optimum, there is an index $i$ such that both $\theta^+_i > 0$ and $\theta^-_i > 0$. Let $c = \min(\theta^+_i, \theta^-_i) > 0$.
   We can define a new pair of variables:
   $$ (\theta^+_i)_{new} = \theta^+_i - c $$
   $$ (\theta^-_i)_{new} = \theta^-_i - c $$
   
   Notice two things:
   - The value of $\theta_i$ remains unchanged:
     $$ (\theta^+_i)_{new} - (\theta^-_i)_{new} = (\theta^+_i - c) - (\theta^-_i - c) = \theta^+_i - \theta^-_i = \theta_i $$
     Hence, the squared loss term $ \frac{1}{2} \|y - \Phi^T(\theta^+ - \theta^-)\|^2 $ remains exactly the same.
   - However, the regularization sum in (3.63) drops strictly:
     $$ (\theta^+_i)_{new} + (\theta^-_i)_{new} = \theta^+_i - c + \theta^-_i - c = (\theta^+_i + \theta^-_i) - 2c < (\theta^+_i + \theta^-_i) $$

   Because our objective is to *minimize* the cost function, any solution where both $\theta^+_i > 0$ and $\theta^-_i > 0$ simultaneously cannot be the true minimum. The optimizer will always prefer to subtract $c$ from both until at least one of them hits zero to strictly lower the objective value.

4. **Conclusion:**
   Therefore, at the optimal solution, for every $i$, either $\theta^+_i = 0$ or $\theta^-_i = 0$.
   When at least one is zero, the absolute value becomes:
   $$ |\theta^+_i - \theta^-_i| = \theta^+_i + \theta^-_i $$
   Because of this property at the optimum, we can safely replace the non-differentiable term $|\theta^+_i - \theta^-_i|$ in (3.62) with the simple linear summation $(\theta^+_i + \theta^-_i)$ in (3.63). This converts the problem into a much easier form without changing the optimal answer.
