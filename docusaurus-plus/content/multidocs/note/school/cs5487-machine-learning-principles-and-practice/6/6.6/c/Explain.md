---
title: Explain
---

## Intuition

In part (b), we found the equation for the border between two classes: $w^T x + b = 0$. While mathematically correct, it's a bit abstract. Part (c) asks us to rewrite this equation into a form that is much easier to visualize: $w^T(x - x_0) = 0$.

Think of it like describing a wall. You can describe a wall by a complex mathematical formula, or you can simply say: "The wall passes exactly through *this specific point* ($x_0$), and it faces *this specific direction* ($w$)."

Let's break down what these two pieces mean:

### 1. The Direction ($w$)

The vector $w$ is the "normal vector". Imagine standing on the border; $w$ is an arrow pointing straight out from the border, directly towards class $i$. It tells us how the border is tilted. It's calculated by looking at the difference between the two class centers ($\mu_i - \mu_j$) and adjusting for the shape of the data ($\Sigma^{-1}$).

### 2. The Anchor Point ($x_0$)

This is the really interesting part. $x_0$ is a specific point that sits exactly on the border. Let's look at its formula:
$$x_0 = \text{Midpoint} - \text{Shift based on Popularity}$$

* **The Midpoint**: The first part is $\frac{\mu_i + \mu_j}{2}$. This is exactly halfway between the center of class $i$ and the center of class $j$. If both classes are equally common, the border passes right through this halfway point.
* **The Shift**: The second part involves $\log \frac{\pi_i}{\pi_j}$. This is a "tug-of-war" based on which class is more popular (the priors).
  * If class $i$ and class $j$ are equally likely, $\log(1) = 0$, so there is no shift. The anchor point stays in the middle.
  * If class $i$ is much more common than class $j$, the log term is positive. Because of the minus sign in the formula, the anchor point $x_0$ is pushed *away* from class $i$ and *towards* class $j$.

**Why does it shift towards the less common class?**
Imagine you are a doctor diagnosing a rare disease (class $j$) versus a common cold (class $i$). If a patient's symptoms are exactly borderline, you are more likely to guess the common cold, simply because it's much more common. By moving the decision border closer to the rare disease's center, you are effectively making the "territory" for the common cold larger. A data point has to be *very* close to the rare disease's center to be classified as such. The priors shift the border to give the more probable class a larger decision region.
