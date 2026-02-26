---
title: Answer
---

### Prerequisites

* Bayes Decision Rule (BDR)
* 0-1 Loss Function
* Conditional Risk
* Definition of Mode

### Step-by-Step Derivation

1. **Analyze the Loss Function as $q \rightarrow 0$:**
    The Minkowski loss is $L_q(g(x), y) = |g(x) - y|^q$.
    Let's look at the limit as $q \rightarrow 0$:
    * If $g(x) \neq y$, then $|g(x) - y| > 0$. Any positive number raised to the power of 0 is 1. So, $\lim_{q \to 0} |g(x) - y|^q = 1$.
    * If $g(x) = y$, then $|g(x) - y| = 0$. $0^q = 0$ for any $q > 0$. So, $\lim_{q \to 0} |0|^q = 0$.

    Therefore, as $q \rightarrow 0$, the loss function approaches the 0-1 loss function (often used in classification, but here applied to a continuous space):
    $$L_0(g(x), y) = \begin{cases} 0 & \text{if } g(x) = y \\ 1 & \text{if } g(x) \neq y \end{cases}$$

    *Note: In a strictly continuous setting, the probability of guessing exactly $y$ is zero. A more rigorous approach considers a small tolerance $\epsilon$ around $g(x)$, i.e., loss is 0 if $|g(x) - y| < \epsilon$ and 1 otherwise, and then takes the limit as $\epsilon \rightarrow 0$.*

2. **Define the Conditional Risk with $\epsilon$-tolerance:**
    Let's define a loss function $L_\epsilon$:
    $$L_\epsilon(g(x), y) = \begin{cases} 0 & \text{if } |g(x) - y| \le \epsilon \\ 1 & \text{if } |g(x) - y| > \epsilon \end{cases}$$

    The conditional risk is:
    $$R(x) = \int_{-\infty}^{\infty} L_\epsilon(g(x), y) p(y|x) dy$$
    $$R(x) = \int_{|g(x)-y| > \epsilon} 1 \cdot p(y|x) dy + \int_{g(x)-\epsilon}^{g(x)+\epsilon} 0 \cdot p(y|x) dy$$
    $$R(x) = \int_{|g(x)-y| > \epsilon} p(y|x) dy$$

3. **Minimize the Conditional Risk:**
    We know that the total probability is 1:
    $$\int_{-\infty}^{\infty} p(y|x) dy = 1$$
    $$\int_{|g(x)-y| > \epsilon} p(y|x) dy + \int_{g(x)-\epsilon}^{g(x)+\epsilon} p(y|x) dy = 1$$

    So, the risk can be rewritten as:
    $$R(x) = 1 - \int_{g(x)-\epsilon}^{g(x)+\epsilon} p(y|x) dy$$

    To minimize $R(x)$, we must maximize the integral term:
    $$\max_{g(x)} \int_{g(x)-\epsilon}^{g(x)+\epsilon} p(y|x) dy$$

4. **Take the Limit as $\epsilon \rightarrow 0$:**
    For a very small $\epsilon$, the integral can be approximated by the width of the interval times the height of the function at the center:
    $$\int_{g(x)-\epsilon}^{g(x)+\epsilon} p(y|x) dy \approx 2\epsilon \cdot p(g(x)|x)$$

    So, we want to maximize:
    $$\max_{g(x)} 2\epsilon \cdot p(g(x)|x)$$

    Since $2\epsilon$ is a positive constant, this is equivalent to maximizing the probability density function itself:
    $$g^*(x) = \arg\max_{y} p(y|x)$$

5. **Interpret the Result:**
    The value $y$ that maximizes the probability density function $p(y|x)$ is, by definition, the **mode** of the distribution.
    Therefore, $g^*(x) = \text{mode}(y|x)$.
