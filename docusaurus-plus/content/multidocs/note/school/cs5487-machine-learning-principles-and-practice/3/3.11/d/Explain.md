---
title: Explain
---

### Intuition

This question is about "knob turning" in Bayesian inference. How does tweaking our assumptions change our final belief?

Remember the battle:
**Data (Observation)** vs. **Prior Belief**.

- $\sigma^2$ is the dial for "How noisy is the data?"
- $\alpha$ is the dial for "How uncertain am I about my prior?"

#### 1. Turning $\alpha$ to infinity ($\alpha \to \infty$)

- **What it means:** You admit to knowing absolutely nothing before looking at the data.
- **The outcome:** The prior vanishes. The data completely takes over. Your best guess for the parameters becomes the standard Least Squares estimation that completely trusts the data, oblivious to any regularization.

#### 2. Turning $\alpha$ to zero ($\alpha \to 0$)

- **What it means:** You are stubbornly, absolutely convinced that all weights are completely zero, and no amount of evidence can sway you.
- **The outcome:** You ignore the data entirely. Your mean stays exactly at $0$, and your uncertainty (covariance) becomes zero. You are confidently wrong (unless the true weights really are zero).

#### 3. Turning $\sigma^2$ to zero ($\sigma^2 \to 0$)

- **What it means:** You believe your measuring instruments are perfect. There is absolutely zero noise in your labels $y$.
- **The outcome:** The model is forced to go exactly through every single data point (perfect interpolation). Because the data is viewed as "perfect facts", your uncertainty about the weights drops to zero ($\hat{\Sigma}_\theta \to 0$), and your best guess defaults to the Least Squares curve that connects all the dots perfectly.
