---
title: Explain
---

## Intuition

Imagine a map with two cities (class $i$ and class $j$). You want to draw a border line between them so that if you are on one side, you are closer to city $i$, and on the other side, you are closer to city $j$.

The decision boundary is exactly this border. It's the place where the "score" for belonging to class $i$ is exactly equal to the "score" for belonging to class $j$. You are perfectly undecided.

Because our scoring system from part (a) is just a simple linear equation (like the equation for a flat surface), when we set the two scores equal to each other, the result is another linear equation. In geometry, a linear equation describes a flat surface called a **hyperplane** (a line in 2D, a plane in 3D, etc.).

Let's break down the two parts of this border equation, $w^T x + b = 0$:

1. **The Direction ($w$)**: The vector $w$ determines the tilt or orientation of the border. It is calculated as $\Sigma^{-1}(\mu_i - \mu_j)$.
    * $(\mu_i - \mu_j)$ is an arrow pointing straight from the center of class $j$ to the center of class $i$.
    * Multiplying by $\Sigma^{-1}$ adjusts this arrow based on how the data is spread out. If the data is stretched in a certain direction, the border will tilt to account for that stretch.

2. **The Position ($b$)**: The scalar $b$ determines where the border is placed along that direction. It has two components:
    * **The Midpoint**: The term $-\frac{1}{2}(\mu_i + \mu_j)^T \Sigma^{-1} (\mu_i - \mu_j)$ essentially places the border exactly halfway between the two class centers (adjusted for the data's shape).
    * **The Popularity Shift**: The term $\log \frac{\pi_i}{\pi_j}$ shifts the border based on which class is more common. If class $i$ is much more common than class $j$ ($\pi_i > \pi_j$), this term is positive, which pushes the border *away* from class $i$ and closer to class $j$. This makes sense: if class $i$ is more likely overall, you want to claim more territory for it!
