---
title: Answer
---

### Prerequisites
- **Poisson Probability Calculation**
- **Expected Value of Frequencies**

### Step-by-Step Derivation

1. From part (c), we have the ML estimate $\hat{\lambda} \approx 0.9288$ and the total number of cells $N = 576$.

2. To find the expected number of cells with exactly $k$ hits, we use the formula:
   $$\text{Expected Cells} = N \times p(x = k | \hat{\lambda}) = 576 \times \frac{1}{k!}e^{-\hat{\lambda}}\hat{\lambda}^k$$

3. Calculate the expected probability and expected count for each $k$:

   - **For $k = 0$:**
     $p(x = 0 | 0.9288) = \frac{1}{0!}e^{-0.9288}(0.9288)^0 = e^{-0.9288} \approx 0.3950$
     $\text{Expected Cells} = 576 \times 0.3950 \approx 227.5$

   - **For $k = 1$:**
     $p(x = 1 | 0.9288) = \frac{1}{1!}e^{-0.9288}(0.9288)^1 = 0.9288 \times e^{-0.9288} \approx 0.3669$
     $\text{Expected Cells} = 576 \times 0.3669 \approx 211.3$

   - **For $k = 2$:**
     $p(x = 2 | 0.9288) = \frac{1}{2!}e^{-0.9288}(0.9288)^2 = \frac{0.8627}{2} \times e^{-0.9288} \approx 0.1704$
     $\text{Expected Cells} = 576 \times 0.1704 \approx 98.1$

   - **For $k = 3$:**
     $p(x = 3 | 0.9288) = \frac{1}{3!}e^{-0.9288}(0.9288)^3 = \frac{0.8013}{6} \times e^{-0.9288} \approx 0.0528$
     $\text{Expected Cells} = 576 \times 0.0528 \approx 30.4$

   - **For $k = 4$:**
     $p(x = 4 | 0.9288) = \frac{1}{4!}e^{-0.9288}(0.9288)^4 = \frac{0.7442}{24} \times e^{-0.9288} \approx 0.0123$
     $\text{Expected Cells} = 576 \times 0.0123 \approx 7.1$

   - **For $k \ge 5$ (5 and over):**
     Since the probabilities must sum to 1, we can compute this as $1 - \sum_{k=0}^4 p(x=k|\hat{\lambda})$:
     $p(x \ge 5 | 0.9288) = 1 - (0.3950 + 0.3669 + 0.1704 + 0.0528 + 0.0123) = 1 - 0.9974 = 0.0026$
     $\text{Expected Cells} = 576 \times 0.0026 \approx 1.5$

4. **Comparison Table:**

| number of hits ($k$) | 0 | 1 | 2 | 3 | 4 | 5 and over |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Observed Data | 229 | 211 | 93 | 35 | 7 | 1 |
| Expected Counts | 227.5 | 211.3 | 98.1 | 30.4 | 7.1 | 1.5 |

### Conclusion
The theoretically derived expected counts under the Poisson model fit the actual observed hit data remarkably well. Because exactly this Poisson distribution explicitly models random, independent events happening over area/time, we can conclude that the bomb hits were essentially random and uniform.

The Germans were highly unlikely to be systematically or precisely targeting specific London neighborhoods. The occurrences of "clustered" hits on particular cells are indistinguishable from what one would expect from pure chance.