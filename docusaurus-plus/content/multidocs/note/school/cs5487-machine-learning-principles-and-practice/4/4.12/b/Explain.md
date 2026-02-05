---
title: Explain
---

## Explanation

In part (a), the objective function $\sum N_j \log \pi_j$ led to a solution where $\pi_j$ was linearly proportional to $N_j$. This is characteristic of the standard MLE for multinomial distributions.

In part (b), the objective function is slightly different: $\sum \pi_j (N_j - \log \pi_j)$. This looks like an entropy term ($\pi \log \pi$) combined with a linear term ($\pi N$).

When we maximize this function subject to the sum constraint $\sum \pi_j = 1$:

1. **Likelihood vs Entropy**: The term $-\pi_j \log \pi_j$ is the entropy. Maximizing entropy usually tends towards a uniform distribution. The term $\pi_j N_j$ weights the probabilities by $N_j$.
2. **Exponential Relationship**:
    * The derivative of $\log x$ is $1/x$.
    * The derivative of $x \log x$ is $1 + \log x$.
    * Because the objective function has the $\pi \log \pi$ form, the derivative has a $\log \pi$ term (without the $1/\pi$ scaling seen in part (a)).
    * To solve $\log \pi = C$ (where C is some constant derived from other terms), we must use the exponential function: $\pi = e^C$.
3. **Softmax Function**: The resulting form $\pi_j = \frac{\exp(N_j)}{\sum \exp(N_k)}$ is famously known as the **Softmax function**. It takes a vector of real numbers $N$ and turns them into a probability distribution proportional to the exponentials of the input numbers. This is widely used in neural networks and machine learning to convert logits into probabilities.
