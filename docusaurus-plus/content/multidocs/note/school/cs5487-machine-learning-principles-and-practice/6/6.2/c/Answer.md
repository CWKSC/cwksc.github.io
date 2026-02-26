---
title: Answer
---

### Prerequisites

* Bayes Decision Rule (BDR)
* Absolute Loss Function ($L_1$ loss)
* Conditional Risk
* Leibniz Integral Rule
* Definition of Median

### Step-by-Step Derivation

1. **Define the Conditional Risk for $q=1$:**
    For $q=1$, the loss function is the absolute loss: $L_1(g(x), y) = |g(x) - y|$.
    The conditional risk is:
    $$R(x) = \int_{-\infty}^{\infty} |g(x) - y| p(y|x) dy$$

2. **Split the Integral:**
    To handle the absolute value, we split the integral at $y = g(x)$:
    $$R(x) = \int_{-\infty}^{g(x)} (g(x) - y) p(y|x) dy + \int_{g(x)}^{\infty} (y - g(x)) p(y|x) dy$$

3. **Minimize the Conditional Risk:**
    We take the derivative of $R(x)$ with respect to $g(x)$ and set it to zero. We use the Leibniz integral rule, which states:
    $$\frac{d}{dz} \int_{a(z)}^{b(z)} f(y, z) dy = f(b(z), z) \cdot b'(z) - f(a(z), z) \cdot a'(z) + \int_{a(z)}^{b(z)} \frac{\partial f(y, z)}{\partial z} dy$$

    Applying this to our risk function (letting $g(x)$ be the variable we differentiate with respect to):
    $$\frac{\partial R(x)}{\partial g(x)} = \frac{\partial}{\partial g(x)} \left[ \int_{-\infty}^{g(x)} (g(x) - y) p(y|x) dy \right] + \frac{\partial}{\partial g(x)} \left[ \int_{g(x)}^{\infty} (y - g(x)) p(y|x) dy \right]$$

    First term:
    $$(g(x) - g(x))p(g(x)|x) \cdot 1 - 0 + \int_{-\infty}^{g(x)} 1 \cdot p(y|x) dy = \int_{-\infty}^{g(x)} p(y|x) dy$$

    Second term:
    $$0 - (g(x) - g(x))p(g(x)|x) \cdot 1 + \int_{g(x)}^{\infty} (-1) \cdot p(y|x) dy = -\int_{g(x)}^{\infty} p(y|x) dy$$

    Combining them:
    $$\frac{\partial R(x)}{\partial g(x)} = \int_{-\infty}^{g(x)} p(y|x) dy - \int_{g(x)}^{\infty} p(y|x) dy$$

4. **Set the Derivative to Zero:**
    $$\int_{-\infty}^{g^*(x)} p(y|x) dy - \int_{g^*(x)}^{\infty} p(y|x) dy = 0$$
    $$\int_{-\infty}^{g^*(x)} p(y|x) dy = \int_{g^*(x)}^{\infty} p(y|x) dy$$

5. **Interpret the Result:**
    The equation states that the probability mass to the left of $g^*(x)$ must equal the probability mass to the right of $g^*(x)$. Since the total probability is 1, each side must equal 0.5:
    $$\int_{-\infty}^{g^*(x)} p(y|x) dy = 0.5$$
    This is the exact definition of the median of the conditional distribution $p(y|x)$.
    Therefore, $g^*(x) = \text{median}(y|x)$.
