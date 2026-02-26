---
title: Answer
---

### Prerequisites

* Loss Functions
* Minkowski Loss
* Function Plotting

### Step-by-Step Derivation

1. **Understand the Function:**
    We are plotting $L_q(e) = |e|^q$, where $e = g(x) - y$ is the error.
    We need to plot this for $q \in \{0.2, 1, 2, 10\}$ and the limit as $q \rightarrow 0$.

2. **Analyze the Behavior for Different $q$:**
    * **$q = 2$ (Squared Loss):** $L_2(e) = e^2$. This is a standard parabola. It heavily penalizes large errors ($|e| > 1$) and is very flat near zero, meaning small errors are penalized very little.
    * **$q = 1$ (Absolute Loss):** $L_1(e) = |e|$. This is a V-shaped curve. The penalty grows linearly with the error.
    * **$q = 10$:** $L_{10}(e) = |e|^{10}$. This curve is extremely flat for $|e| < 1$ and grows incredibly fast for $|e| > 1$. It acts almost like a barrier, strongly discouraging any error greater than 1.
    * **$q = 0.2$:** $L_{0.2}(e) = |e|^{0.2}$. This curve rises steeply near zero but then flattens out. It penalizes small errors relatively more than squared loss, but the penalty for large errors grows very slowly.
    * **$q \rightarrow 0$ (0-1 Loss equivalent for regression):** As $q \rightarrow 0$, $|e|^q \rightarrow 1$ for any $e \neq 0$. For $e = 0$, $0^q = 0$. So, $\lim_{q \to 0} L_q(e)$ approaches an indicator function: $0$ if $e=0$, and $1$ if $e \neq 0$.

3. **Plotting (Conceptual Description):**
    * The x-axis is the error $e = g(x) - y$.
    * The y-axis is the loss $L_q$.
    * All curves pass through $(0,0)$, $(1,1)$, and $(-1,1)$.
    * For $|e| < 1$: The curves with smaller $q$ are higher (e.g., $|e|^{0.2} > |e|^1 > |e|^2$).
    * For $|e| > 1$: The curves with larger $q$ are higher (e.g., $|e|^{10} > |e|^2 > |e|^1$).

4. **Comments on the Effect:**
    * **Large $q$ ($q > 1$):** Heavily penalizes outliers (large errors). The model will focus on avoiding large mistakes, even if it means making many small mistakes. It is sensitive to noise.
    * **$q = 1$:** Robust to outliers compared to $q=2$. The penalty is proportional to the error.
    * **Small $q$ ($0 < q < 1$):** Very robust to outliers because the penalty for large errors grows very slowly. However, it penalizes small errors relatively heavily.
    * **$q \rightarrow 0$:** Only cares about exact matches. Any error, no matter how small or large, is penalized equally (with a loss of 1).
