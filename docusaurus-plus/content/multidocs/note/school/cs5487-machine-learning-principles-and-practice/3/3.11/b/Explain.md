---
title: Explain
---
### Intuition

Imagine you're trying to fit a line to a few scattered data points.

1.  **Least Squares (OLS)** represents perfectly naive learning. It trusts all data points equally and just plows a line through them, only trying to minimize vertical distances.
2.  **Weighted Least Squares (WLS)** is a bit smarter. It admits, "Some measurements are noisier than others." It pays more attention to points we are highly confident in (low variance in $\Sigma$) and less to the noisy outliers.
3.  **MAP Estimate** takes WLS and adds a **Prior Belief**. Often, in machine learning, perfectly fitted models with extreme parameter values behave wildly on new data. The MAP approach says, "I'll do my best to fit the data, *but* I refuse to let my parameters get crazy large."

### The "Rubber Band" Analogy

Think of the parameters $\theta$ as a ball. 
*   The data (Weighted Least Squares part) acts like magnets trying to pull the ball towards the configuration that perfectly fits the training examples. 
*   The prior $\Gamma^{-1}$ acts like a **rubber band** anchoring the ball to the origin (zero). 

If the data is vast and overwhelming, the magnets are strong, and the ball stretches the rubber band far out. If the data is sparse or very noisy, the magnets are weak, and the rubber band keeps the ball securely close to zero.

### Why does this help?

1.  **Numerical Stability**: Sometimes, your data matrices don't have an inverse (they are singular). It's like asking "What is 1 divided by 0?" Adding the "rubber band" ($\Gamma^{-1}$) adds values to the diagonal of the matrix, ensuring it never hits exactly zero, so we can always invert it smoothly.
2.  **Generalization**: If a model over-focuses on the noise in the training set, it "memorizes" rather than "learns" (Overfitting). Regularization forces the model to ignore slight bumps in the noise because changing the parameters to fit that noise isn't worth feeling the strong pull of the rubber band.
