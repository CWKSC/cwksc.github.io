---
title: Explain
---

## Interpreting the Results

### What does $K$ represent?

$K$ represents the number of "clusters" or distinct types of regions.
* **$K=1$**: Means the whole city was treated equally. The bombs fell randomly across the entire map with a single average rate $\lambda$. Think of it like rain falling uniformly over a city.
* **$K=2$**: Means there are two types of regions. Perhaps one "Target Zone" with a high $\lambda_{target}$ and one "Non-Target Zone" (accidental misses) with a low $\lambda_{miss}$.

### Evidence of Targeting

Standard statistical theory suggests that for a purely random process (like uniformly dropping bombs), the number of hits per square should follow a **single Poisson distribution**.

1. **London**:
    * The counts (229 zeros, 211 ones...) match the mathematical prediction of a Single Poisson almost perfectly.
    * Running the EM algorithm with $K=2$ will likely result in two very similar $\lambda$ values, or one $\pi$ being very close to 0. This means the model doesn't *need* extra complexity to explain the data.
    * **Interpretation**: The Germans likely *intended* to target, but their guidance systems were not precise enough to hit specific squares, resulting in an effectively random distribution over London.

2. **Antwerp**:
    * Look at the "Zero" count (325) and the "High" count (21 with 5+).
    * A single Poisson with a low mean (to explain the many zeros) shouldn't have that many 5s.
    * A single Poisson with a high mean (to explain the 5s) shouldn't have that many zeros.
    * EM with $K=2$ will separate these into:
        1. A large group of squares with low $\lambda$ (the misses/outskirts).
        2. A small group of squares with high $\lambda$ (the actual target/port).
    * **Interpretation**: The accuracy was sufficient (or the target concentrated enough) to create a statistically distinct "Hot Zone" vs. the rest.
