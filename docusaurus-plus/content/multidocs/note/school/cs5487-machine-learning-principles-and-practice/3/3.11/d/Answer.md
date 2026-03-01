---
title: Answer
---

### Prerequisites

- Posterior Distribution formulas from (a)
- Limits and Asymptotic Behavior

### Step-by-Step Derivation

From part (a) and substituting $\Gamma = \alpha I$ and $\Sigma = \sigma^2 I$:
Posterior Covariance: $\hat{\Sigma}_\theta = (\frac{1}{\alpha}I + \frac{1}{\sigma^2}\Phi\Phi^T)^{-1}$
Posterior Mean: $\hat{\mu}_\theta = \frac{1}{\sigma^2} \hat{\Sigma}_\theta \Phi y$

Let's analyze the limits:

1.  **Case $\alpha \to \infty$ (Uninformative/Flat Prior)**:
    - As the prior variance approaches infinity, our prior belief becomes extremely weak (we are totally uncertain about $\theta$ before seeing data).
    - $\frac{1}{\alpha} \to 0$.
    - Covariance: $\hat{\Sigma}_\theta \to (\frac{1}{\sigma^2}\Phi\Phi^T)^{-1} = \sigma^2 (\Phi\Phi^T)^{-1}$.
    - Mean: $\hat{\mu}_\theta \to \frac{1}{\sigma^2} [\sigma^2 (\Phi\Phi^T)^{-1}] \Phi y = (\Phi\Phi^T)^{-1}\Phi y$.
    - _Result_: The posterior mean becomes the standard Ordinary Least Squares (MLE) estimate. The prior has no regularizing effect.

2.  **Case $\alpha = 0$ (Absolute Prior Configuration)**:
    - (Taking the limit as $\alpha \to 0$ from the positive side)
    - The precision $\frac{1}{\alpha} \to \infty$. The prior becomes a Dirac delta function at zero.
    - Covariance: $\hat{\Sigma}_\theta \to (\infty I + \frac{1}{\sigma^2}\Phi\Phi^T)^{-1} \to 0$.
    - Mean: $\hat{\mu}_\theta \to 0 (\dots) \to 0$.
    - _Result_: The data has no effect. We are absolutely certain that $\theta = 0$ regardless of the observations.

3.  **Case $\sigma^2 \to 0$ (Noise-free Observations)**:
    - As the observation noise goes to zero, we trust the data completely.
    - The term $\frac{1}{\sigma^2}\Phi\Phi^T$ dominates the $\frac{1}{\alpha}I$ term. Let's rewrite using the Woodbury matrix identity or by factoring.
    - Actually, using the form from part (c): $\hat{\mu}_\theta = (\Phi\Phi^T + \lambda I)^{-1}\Phi y$ where $\lambda = \frac{\sigma^2}{\alpha}$.
    - If $\sigma^2 \to 0$, then $\lambda \to 0$.
    - Mean: $\hat{\mu}_\theta \to (\Phi\Phi^T)^{-1}\Phi y$ (assuming $\Phi\Phi^T$ is invertible). The model perfectly interpolates the training data.
    - Covariance: $\hat{\Sigma}_\theta = (\frac{1}{\alpha}I + \frac{1}{\sigma^2}\Phi\Phi^T)^{-1} = \sigma^2(\frac{\sigma^2}{\alpha}I + \Phi\Phi^T)^{-1}$. As $\sigma^2 \to 0$, $\hat{\Sigma}_\theta \to 0 \cdot (\Phi\Phi^T)^{-1} = 0$.
    - _Result_: We become perfectly certain about parameters that fit the data exactly (zero posterior uncertainty), provided the data can be perfectly fit.
