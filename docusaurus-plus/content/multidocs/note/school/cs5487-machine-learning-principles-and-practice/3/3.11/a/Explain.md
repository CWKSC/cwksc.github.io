---
title: Explain
---
### Intuition

In Bayesian regression, we update our prior beliefs about the model parameters $\theta$ after observing some data. This is described by **Bayes' Theorem**, which states that the **posterior** (what we believe after seeing the data) is proportional to the **prior** (what we believed beforehand) multiplied by the **likelihood** (how well the parameters explain the observed data).

When both the prior and the likelihood are Gaussian distributions, life is wonderful because the product of two Gaussians is yet another Gaussian! This is a magical property known as **conjugacy**. Because the prior and likelihood families "match" nicely, the posterior lands in the same family.

### Breaking Down the Math

Instead of multiplying massive and scary Gaussian density functions directly, it's easier to add their **logarithms**. We do this because working with sums of exponents is far simpler than multiplying exponentials.

1.  **Log-likelihood**: Represents how the data fits our model. It's simply the Mahalanobis distance between our predictions ($\Phi^T \theta$) and actual labels ($y$), scaled by the noise covariance matrix $\Sigma$.
2.  **Log-prior**: Represents our prior belief that the weights shouldn't be too large, scaled by the prior covariance $\Gamma$.
3.  **Log-posterior**: You simply sum together the log-likelihood and log-prior. This gives a sum of quadratic terms dependent on $\theta$.
4.  **Completing the Square**: This is an algebraic trick. We force our resulting polynomial to look like the exponent expression found inside a standard Gaussian PDF formula. By matching up the coefficients for the $\theta^T (\dots) \theta$ part (the precision matrix) and the $\theta^T (\dots)$ part, we can magically read off our new normal distribution's covariance ($\hat{\Sigma}_\theta$) and mean ($\hat{\mu}_\theta$).

### Visualizing the Terms

*   **Precision ($\hat{\Sigma}_\theta^{-1}$)**: The matrix inverse of covariance is also known as "precision." Notice that $\hat{\Sigma}_\theta^{-1} = \Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T$. This says:
    > Total Information = Prior Information + Information from Data 
*   **Mean ($\hat{\mu}_\theta$)**: The posterior mean acts somewhat like a weighted average between the prior mean (which was 0) and the data. The terms $\Phi \Sigma^{-1} y$ "pull" the mean toward the Maximum Likelihood (MLE) solution, but it's regularized or restrained by our belief encoded in $\Gamma^{-1}$.
