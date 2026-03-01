---
title: Explain
---
### Intuition

In classical (Frequentist) machine learning, making a prediction is simple: you find one "best" set of weights $\hat{\theta}$, plug in your new data point $x_*$, and spit out a single number $y_* = \phi(x_*)^T \hat{\theta}$.

However, the Bayesian framework acknowledges that **we are never 100% sure what the true weights are**. We have a whole *distribution* of possible weights (the posterior $p(\theta|\mathcal{D})$).

So, to make a mathematically rigorous prediction, we must ask *every single possible model* what it thinks the prediction should be, and then take a vote, weighted by how likely each model is. This is what the integral $\int p(y_*|x_*, \theta) p(\theta|\mathcal{D}) d\theta$ does.

### Two Types of Uncertainty

The beauty of the final formula $p(y_*|x_*, \mathcal{D}) = \mathcal{N}(y_*|\hat{\mu}_*, \sigma^2 + \hat{\sigma}^2_*)$ is that it explicitly breaks down our uncertainty about the future into two separate chunks:

1.  **Epistemic Uncertainty ($\hat{\sigma}^2_*$)**: This is the uncertainty we have because we lack knowledge or data. 
    *   Notice that $\hat{\sigma}^2_* = \phi(x_*)^T \hat{\Sigma}_\theta \phi(x_*)$ depends on $\hat{\Sigma}_\theta$ (our posterior uncertainty about the weights) and $x_*$.
    *   If you ask the model to predict a point $x_*$ that is very similar to the training data, this variance will be small.
    *   If you ask the model to predict a point wildly far away from any training data, the models will disagree wildly, and $\hat{\sigma}^2_*$ will skyrocket. This is the model saying, *"I don't know, I haven't seen anything like this before!"* As we gather more data, this uncertainty shrinks.
2.  **Aleatoric Uncertainty ($\sigma^2$)**: This is the inherent noise in the universe. Even if we had an infinite amount of training data and knew the "true" line perfectly ($f_*$), the actual observed value $y_*$ will still bounce around that line due to random noise $\epsilon$. We can never get rid of this $\sigma^2$ variance, no matter how much data we collect.
