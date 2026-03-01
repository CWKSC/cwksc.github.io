---
title: Answer
---

### Prerequisites
- **Maximum Likelihood Estimation (MLE)**
- **Weighted Average Calculation**

### Step-by-Step Derivation

1. Recall the formula for the ML estimator of the Poisson parameter $\lambda$ derived in part (a):
   $$\hat{\lambda} = \frac{1}{N}\sum_{i=1}^N k_i$$

2. From the problem description, the total area was divided into $144 \text{ km}^2 / 0.25 \text{ km}^2 = 576$ grid cells. We can also verify this by summing up the observed number of cells in the table:
   $$N = 229 + 211 + 93 + 35 + 7 + 1 = 576$$

3. Next, we calculate the total number of hits across all $N$ cells. This is given by the sum of $k$ multiplied by the number of cells that had exactly $k$ hits. For the category "5 and over", we will assume the value is $5$ for this calculation, as it's the minimum possible value and only $1$ cell observed it.
   $$\text{Total Hits} = \sum_{k} (k \times \text{number of cells with } k \text{ hits})$$
   $$\text{Total Hits} = (0 \times 229) + (1 \times 211) + (2 \times 93) + (3 \times 35) + (4 \times 7) + (5 \times 1)$$
   $$\text{Total Hits} = 0 + 211 + 186 + 105 + 28 + 5 = 535$$

4. Substitute these values back into the ML estimator formula:
   $$\hat{\lambda} = \frac{\text{Total Hits}}{N} = \frac{535}{576}$$

5. Compute the final numerical value:
   $$\hat{\lambda} \approx 0.9288$$