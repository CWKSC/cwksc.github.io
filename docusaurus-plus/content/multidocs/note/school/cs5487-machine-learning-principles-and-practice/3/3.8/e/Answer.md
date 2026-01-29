---
title: Answer
---

# Problem 3.8(e) Answer

## 1. Prior Identification as Beta Distributions

First, let's map these priors to the standard Beta distribution $\text{Beta}(\alpha, \beta) \propto \pi^{\alpha-1}(1-\pi)^{\beta-1}$.

* **Prior $p_1(\pi) = 2\pi$**:
  * Proportional to $\pi^1 (1-\pi)^0$.
  * $\alpha-1 = 1 \implies \alpha = 2$
  * $\beta-1 = 0 \implies \beta = 1$
  * This is $\text{Beta}(2, 1)$.

* **Prior $p_0(\pi) = 2(1-\pi)$**:
  * Proportional to $\pi^0 (1-\pi)^1$.
  * $\alpha-1 = 0 \implies \alpha = 1$
  * $\beta-1 = 1 \implies \beta = 2$
  * This is $\text{Beta}(1, 2)$.

## 2. Calculate MAP Estimates

MAP maximizes the posterior.
Posterior $\propto$ Likelihood $\times$ Prior.
Likelihood is $\pi^s (1-\pi)^{n-s}$.

**Case 1: Prior $p_1$ ($\alpha=2, \beta=1$)**
* Posterior $\propto \pi^s (1-\pi)^{n-s} \cdot \pi^1 = \pi^{s+1} (1-\pi)^{n-s}$.
* This is proportional to $\text{Beta}(s+2, n-s+1)$.
* We maximize $f(\pi) = \pi^{s+1} (1-\pi)^{n-s}$.
* Log-posterior: $(s+1)\ln\pi + (n-s)\ln(1-\pi)$.
* Derivative = 0: $\frac{s+1}{\pi} - \frac{n-s}{1-\pi} = 0$.
* $(s+1)(1-\pi) = (n-s)\pi$.
* $s+1 - s\pi - \pi = n\pi - s\pi$.
* $s+1 = (n+1)\pi$.
* $\hat{\pi}_{MAP, 1} = \frac{s+1}{n+1}$.

**Case 2: Prior $p_0$ ($\alpha=1, \beta=2$)**
* Posterior $\propto \pi^s (1-\pi)^{n-s} \cdot (1-\pi)^1 = \pi^s (1-\pi)^{n-s+1}$.
* This is proportional to $\text{Beta}(s+1, n-s+2)$.
* We maximize $f(\pi) = \pi^{s} (1-\pi)^{n-s+1}$.
* Derivative = 0: $\frac{s}{\pi} - \frac{n-s+1}{1-\pi} = 0$.
* $s(1-\pi) = (n-s+1)\pi$.
* $s - s\pi = n\pi - s\pi + \pi$.
* $s = (n+1)\pi$.
* $\hat{\pi}_{MAP, 0} = \frac{s}{n+1}$.

## 3. Effective Estimates (Bayesian Mean)

The question also asks "What is the effective estimate...". This can be ambiguous (referring to MAP or Mean). The second part of the question ("virtual samples") applies to both, but standard Bayesian prediction uses the Mean.
Let's compute the Mean (Posterior Expectation) for completeness.

* **For $p_1$ (Posterior Beta($s+2, n-s+1$))**:
  * Mean = $\frac{\alpha_{post}}{\alpha_{post} + \beta_{post}} = \frac{s+2}{(s+2) + (n-s+1)} = \frac{s+2}{n+3}$.

* **For $p_0$ (Posterior Beta($s+1, n-s+2$))**:
  * Mean = $\frac{s+1}{(s+1) + (n-s+2)} = \frac{s+1}{n+3}$.

*(Note: The question likely asks for the MAP intuitive explanation since it asked to "Calculate the MAP estimates" specifically.)*

## 4. Intuitive Explanation ("Virtual" Samples)

We interpret the hyperparameters $\alpha, \beta$ of the prior as virtual counts added to the actual data.
$\text{Prior} \propto \pi^{\alpha-1}(1-\pi)^{\beta-1}$.
MAP estimate formula for Beta posterior: $\frac{s + (\alpha-1)}{n + (\alpha+\beta-2)}$.

**For $p_1$ ($\alpha=2, \beta=1$):**
* **Virtual Samples**: We added 1 sample, which was a success.
* Total virtual $N' = 1$. Total virtual $S' = 1$.
* MAP Estimate: $\frac{s+1}{n+1}$.
* Interpretation: The prior $2\pi$ acts like we've already observed **one Head**. This biases the result towards 1.

**For $p_0$ ($\alpha=1, \beta=2$):**
* **Virtual Samples**: We added 1 sample, which was a failure.
* Total virtual $N' = 1$. Total virtual $S' = 0$.
* MAP Estimate: $\frac{s}{n+1}$.
* Interpretation: The prior $2(1-\pi)$ acts like we've already observed **one Tail**. This biases the result towards 0.
