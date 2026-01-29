---
title: Explain
---

# Problem 3.8(e) Explanation

## Why $2\pi$ and $2(1-\pi)$?

These are linear functions.
* $2\pi$ is a line going from $0$ to $2$. The area under the triange is $0.5 \times \text{base} \times \text{height} = 0.5 \times 1 \times 2 = 1$. So it is a valid PDF. It puts most weight on $\pi=1$.
* $2(1-\pi)$ is a line going from $2$ to $0$. Area is also 1. It puts most weight on $\pi=0$.

## Mapping to Pseudocounts

The crucial insight is writing the polynomial in the form $\pi^{\alpha-1}(1-\pi)^{\beta-1}$.
* For $2\pi$, exponent of $\pi$ is 1. Since $\alpha-1=1$, $\alpha=2$. Exponent of $(1-\pi)$ is 0. Since $\beta-1=0$, $\beta=1$.
* Usually, we say $\alpha$ counts success and $\beta$ counts failures.
* However, for MAP estimates, the "neutral" point is not $\alpha=0, \beta=0$ (which is improper) or $\alpha=1, \beta=1$ (Uniform).
* Wait, let's look at the MAP formula again:
    $$ \hat{\pi}_{MAP} = \frac{s + \alpha - 1}{n + \alpha + \beta - 2} $$
  * If $\alpha=2, \beta=1$ (Prior $p_1$):
        $$\text{Numerator} = s + 1$$
        $$\text{Denominator} = n + 2 + 1 - 2 = n+1$$
        Result: $\frac{s+1}{n+1}$.
        This looks like we added **1 success** to the numerator, and **1 trial** to the denominator.
        So: **1 Virtual Success, 0 Virtual Failures**.

  * If $\alpha=1, \beta=2$ (Prior $p_0$):
        $$\text{Numerator} = s + 0$$
        $$\text{Denominator} = n + 1 + 2 - 2 = n+1$$
        Result: $\frac{s}{n+1}$.
        This looks like we added **0 successes** to the numerator, and **1 trial** to the denominator.
        So: **0 Virtual Successes, 1 Virtual Failure**.

## Summary of Bias

* $p_1$ encodes a belief that "I have seen one success already".
* $p_0$ encodes a belief that "I have seen one failure already".
* Uniform (from previous parts) encodes "I have seen nothing? Or 1 of each?"
  * MAP for Uniform ($\alpha=1, \beta=1$): $\frac{s}{n}$. (0 added samples).
  * So, relative to the Uniform MAP, $p_1$ adds a success, $p_0$ adds a failure.
