---
title: Answer
---

## Prerequisites

* **Bayes Decision Rule (BDR) for 0-1 Loss**: The optimal decision rule that minimizes the probability of misclassification is to choose the class that maximizes the posterior probability: $g(x)^* = \text{argmax}_j p(y=j|x)$.
* **Bayes' Theorem**: $p(y=j|x) = \frac{p(x|y=j)p(y=j)}{p(x)}$.
* **Multivariate Gaussian Distribution**: The probability density function is $p(x|y=j) = \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}} \exp\left(-\frac{1}{2}(x-\mu_j)^T\Sigma^{-1}(x-\mu_j)\right)$.
* **Log-Likelihood**: Maximizing a function is equivalent to maximizing its logarithm, as the logarithm is a monotonically increasing function.

## Step-by-Step Derivation

1. **Start with the BDR**:
    To minimize the 0-1 loss, we maximize the posterior probability:
    $$g(x)^* = \text{argmax}_j p(y=j|x)$$

2. **Apply Bayes' Theorem**:
    $$p(y=j|x) = \frac{p(x|y=j)p(y=j)}{p(x)}$$
    Since the evidence $p(x)$ is the same for all classes $j$, it does not affect the $\text{argmax}$ operation. We can instead maximize the joint probability:
    $$g(x)^* = \text{argmax}_j [p(x|y=j)p(y=j)]$$

3. **Take the Logarithm**:
    To simplify the exponential terms in the Gaussian distribution, we take the natural logarithm of the objective function. Let this be our discriminant function $g_j(x)$:
    $$g_j(x) = \log(p(x|y=j)p(y=j)) = \log p(x|y=j) + \log p(y=j)$$

4. **Substitute the Gaussian Density and Prior**:
    Given $p(x|y=j) = \mathcal{N}(x|\mu_j, \Sigma)$ and $p(y=j) = \pi_j$:
    $$g_j(x) = \log \left( \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}} \exp\left(-\frac{1}{2}(x-\mu_j)^T\Sigma^{-1}(x-\mu_j)\right) \right) + \log \pi_j$$
    $$g_j(x) = -\frac{d}{2}\log(2\pi) - \frac{1}{2}\log|\Sigma| - \frac{1}{2}(x-\mu_j)^T\Sigma^{-1}(x-\mu_j) + \log \pi_j$$

5. **Remove Class-Independent Terms**:
    The terms $-\frac{d}{2}\log(2\pi)$ and $-\frac{1}{2}\log|\Sigma|$ are constants with respect to the class index $j$ (because all classes share the same covariance matrix $\Sigma$). We can drop them from the discriminant function:
    $$g_j(x) = -\frac{1}{2}(x-\mu_j)^T\Sigma^{-1}(x-\mu_j) + \log \pi_j$$

6. **Expand the Quadratic Term**:
    $$(x-\mu_j)^T\Sigma^{-1}(x-\mu_j) = x^T\Sigma^{-1}x - x^T\Sigma^{-1}\mu_j - \mu_j^T\Sigma^{-1}x + \mu_j^T\Sigma^{-1}\mu_j$$
    Since $\Sigma$ is a covariance matrix, it is symmetric, which means its inverse $\Sigma^{-1}$ is also symmetric. Therefore, the scalar $x^T\Sigma^{-1}\mu_j$ is equal to its transpose $\mu_j^T\Sigma^{-1}x$.
    $$(x-\mu_j)^T\Sigma^{-1}(x-\mu_j) = x^T\Sigma^{-1}x - 2\mu_j^T\Sigma^{-1}x + \mu_j^T\Sigma^{-1}\mu_j$$

7. **Substitute Back and Simplify**:
    $$g_j(x) = -\frac{1}{2} \left( x^T\Sigma^{-1}x - 2\mu_j^T\Sigma^{-1}x + \mu_j^T\Sigma^{-1}\mu_j \right) + \log \pi_j$$
    $$g_j(x) = -\frac{1}{2}x^T\Sigma^{-1}x + \mu_j^T\Sigma^{-1}x - \frac{1}{2}\mu_j^T\Sigma^{-1}\mu_j + \log \pi_j$$
    The term $-\frac{1}{2}x^T\Sigma^{-1}x$ is independent of $j$, so we can drop it as well. The simplified discriminant function becomes:
    $$g_j(x) = \mu_j^T\Sigma^{-1}x - \frac{1}{2}\mu_j^T\Sigma^{-1}\mu_j + \log \pi_j$$

8. **Formulate as a Linear Function**:
    We can rewrite this in the form $g_j(x) = w_j^T x + b_j$.
    Let $w_j = \Sigma^{-1}\mu_j$. Then $w_j^T = (\Sigma^{-1}\mu_j)^T = \mu_j^T(\Sigma^{-1})^T = \mu_j^T\Sigma^{-1}$.
    Let $b_j = -\frac{1}{2}\mu_j^T\Sigma^{-1}\mu_j + \log \pi_j$.
    Substituting these into our equation yields:
    $$g_j(x) = w_j^T x + b_j$$
    This completes the proof.
