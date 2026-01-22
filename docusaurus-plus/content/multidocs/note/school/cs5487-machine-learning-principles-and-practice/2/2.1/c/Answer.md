---
title: Answer
---

# Problem 2.1 (c)

## Pre-required Knowledge

- **Maximum Likelihood Estimate formula**: From part (a), we know $\hat{\lambda} = \frac{1}{N} \sum_{i=1}^{N} k_i$. This corresponds to the **total number of hits** divided by the **total number of cells**.

## Step-by-Step Answer

1. **Identify the Total Number of Cells ($N$):**
    Sum the number of cells for each category:
    $$ N = 229 + 211 + 93 + 35 + 7 + 1 = 576 $$

2. **Calculate the Total Number of Hits ($\sum k_i$):**
    Multiply the number of hits ($k$) by the count of cells with that many hits.
    *Note: For the category "5 and over", we assume the number of hits is exactly 5 based on the standard interpretation of this dataset in literature, as higher counts are extremely unlikely.*
    $$
    \begin{aligned}
    \text{Sum} &= (0 \times 229) + (1 \times 211) + (2 \times 93) + (3 \times 35) + (4 \times 7) + (5 \times 1) \\
    &= 0 + 211 + 186 + 105 + 28 + 5 \\
    &= 535
    \end{aligned}
    $$

3. **Calculate $\hat{\lambda}$:**
    $$
    \hat{\lambda} = \frac{\text{Total Hits}}{\text{Total Cells}} = \frac{535}{576} \approx 0.928819...
    $$

4. **Result:**
    $$ \hat{\lambda} \approx 0.929 $$
