---
title: Answer
---

### Prerequisites

* Bayes Decision Rule (BDR)
* Conditional Risk
* Calculus (Differentiation under the integral sign)
* Expected Value

### Step-by-Step Derivation

1. **Define the Conditional Risk:**
    The conditional risk $R(x)$ for a given input $x$ and a decision function $g(x)$ is the expected loss over the conditional distribution $p(y|x)$:
    $$R(x) = \mathbb{E}_{y|x}[L(g(x), y)] = \int L(g(x), y) p(y|x) dy$$

2. **Substitute the Squared-Loss Function:**
    Given $L(g(x), y) = (g(x) - y)^2$, we substitute this into the risk equation:
    $$R(x) = \int (g(x) - y)^2 p(y|x) dy$$

3. **Minimize the Conditional Risk:**
    To find the optimal decision function $g^*(x)$ that minimizes $R(x)$, we take the derivative of $R(x)$ with respect to $g(x)$ and set it to zero.
    $$\frac{\partial R(x)}{\partial g(x)} = \frac{\partial}{\partial g(x)} \int (g(x) - y)^2 p(y|x) dy$$
    Assuming we can interchange differentiation and integration (Leibniz integral rule):
    $$\frac{\partial R(x)}{\partial g(x)} = \int \frac{\partial}{\partial g(x)} (g(x) - y)^2 p(y|x) dy$$
    $$\frac{\partial R(x)}{\partial g(x)} = \int 2(g(x) - y) p(y|x) dy$$

4. **Set the Derivative to Zero:**
    $$\int 2(g(x) - y) p(y|x) dy = 0$$
    $$2 \int g(x) p(y|x) dy - 2 \int y p(y|x) dy = 0$$
    Since $g(x)$ does not depend on $y$, we can pull it out of the first integral:
    $$g(x) \int p(y|x) dy = \int y p(y|x) dy$$

5. **Solve for $g(x)$:**
    We know that the integral of a probability density function over its entire domain is 1, so $\int p(y|x) dy = 1$.
    $$g(x) \cdot 1 = \int y p(y|x) dy$$
    The right side is the definition of the conditional expected value of $y$ given $x$.
    $$g^*(x) = \mathbb{E}[y|x]$$

Thus, the Bayes Decision Rule for the squared-loss function is to choose the conditional mean.
