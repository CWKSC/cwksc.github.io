---
title: Answer
---

## Pre-required Knowledge

1. **Limits involving matrices**: Understanding how $(A + kB)^{-1}$ behaves when $k \to 0$ or $k \to \infty$.
2. **Posterior Formulas**:
    $$
    \hat{\Sigma}_\theta = (\frac{1}{\alpha} I + \frac{1}{\sigma^2} \Phi \Phi^T)^{-1}
    $$
    $$
    \hat{\mu}_\theta = \hat{\Sigma}_\theta \frac{1}{\sigma^2} \Phi y
    $$

## Step-by-Step Answer

1. **Case 1: $\alpha \to \infty$ (Infinite Prior Variance)**
    * **Meaning**: The prior becomes "flat" or uninformative. We have no prior bias towards 0. $\frac{1}{\alpha} \to 0$.
    * **Covariance**:
        $$
        \hat{\Sigma}_\theta \to (0 \cdot I + \frac{1}{\sigma^2} \Phi \Phi^T)^{-1} = \sigma^2 (\Phi \Phi^T)^{-1}
        $$
        This is the standard covariance estimate for OLS.
    * **Mean**:
        $$
        \hat{\mu}_\theta \to [\sigma^2 (\Phi \Phi^T)^{-1}] \frac{1}{\sigma^2} \Phi y = (\Phi \Phi^T)^{-1} \Phi y
        $$
        The mean becomes exactly the **Least Squares (Maximum Likelihood)** estimate.

2. **Case 2: $\alpha \to 0$ (Zero Prior Variance)**
    * **Meaning**: The prior $p(\theta)$ becomes a Dirac delta function at 0. We are infinitely certain that $\theta = 0$ before seeing data. $\frac{1}{\alpha} \to \infty$.
    * **Covariance**: The term $\frac{1}{\alpha} I$ dominates the inverse. The matrix becomes "infinitely large", so its inverse goes to 0.
        $$
        \hat{\Sigma}_\theta \to 0
        $$
    * **Mean**: The prior precision dominates the data precision.
        $$
        \hat{\mu}_\theta \to 0
        $$
        The data is ignored, and the posterior remains at the prior mean (0).

3. **Case 3: $\sigma^2 \to 0$ (Zero Observation Noise)**
    * **Meaning**: We trust the data perfectly. The precision $\frac{1}{\sigma^2} \to \infty$.
    * **Covariance**: The data term dominates.
        $$
        \hat{\Sigma}_\theta = \sigma^2 (\dots)^{-1} \to 0
        $$
        Our uncertainty about $\theta$ vanishes (assuming $\Phi \Phi^T$ is full rank, i.e., we have enough data to determine $\theta$ uniquely).
    * **Mean**: The data term ($\frac{1}{\sigma^2}$) overwhelms the prior term ($\frac{1}{\alpha}$).
        $$
        \hat{\mu}_\theta \to (\Phi \Phi^T)^{-1} \Phi y
        $$
        (Assuming $\Phi \Phi^T$ is invertible). The estimate converges to the solution that interpolates the data points. If $\Phi \Phi^T$ is not invertible (more parameters than data), the limit is the minimum norm solution that fits the data exactly.
