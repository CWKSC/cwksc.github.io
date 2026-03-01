---
title: Explain
---

### Intuition

This problem elegantly bridges two completely different philosophies in statistics and machine learning: the **Bayesian** view and the **Frequentist** view.

#### The Mathematical Connection

In part (a) and (b), we used pure probability. We assigned a Gaussian distribution to our weights (a prior belief) and used Bayes' theorem. We found the most probable weights given the data.

In part (c), we show that doing a specific algebra optimization—**Ridge Regression**—gives the exact same formula.

1.  **The Objective Function (3.49)**: Imagine you want to fit a line ($y = \Phi^T \theta$), but you want to keep the weights ($\theta$) small. You set up a penalty function. The first part ($\lVert y - \Phi^T \theta \rVert^2$) is the standard error (how badly the line misses the points). The second part ($\lambda \lVert \theta \rVert^2$) is the penalty. If your weights get too big, this part blows up.
2.  **The Hyperparameter $\lambda$**: This number controls the trade-off.
    - If $\lambda = 0$, you don't care about the size of the weights; you just want to fit the data perfectly. (Standard Least Squares).
    - If $\lambda$ is huge, the penalty is so severe that the model forces all weights to be near zero, ignoring the data almost entirely.

#### The Magic Link

Here is the amazing part: the trade-off parameter $\lambda$ in Ridge Regression is directly equivalent to the ratio of noise variance to prior variance ($\frac{\sigma^2}{\alpha}$) in the Bayesian Bayesian framework!

- **High Noise ($\sigma^2$ is large)**: The data is messy. You shouldn't trust it perfectly. In the Bayesian view, you rely more on your prior. In Ridge Regression, $\lambda$ becomes large, meaning you heavily penalize complex models to avoid fitting the noise.
- **Strong Prior ($\alpha$ is small)**: You are very confident your weights should be near zero. Again, $\lambda$ becomes large, reinforcing the penalty.
- **Low Noise / Weak Prior**: $\lambda$ becomes very small. You trust the data completely and let the weights grow as needed to fit the points.

This equivalence is profound. When you add an $L_2$ penalty (Ridge Regression) to a neural network or a linear model, you are implicitly stating: _"I believe my unobserved weights follow a zero-mean Gaussian distribution."_
