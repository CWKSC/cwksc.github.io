---
title: Answer
---

# Problem 2.1 (d)

## Pre-required Knowledge

- **Poisson Probability**: $P(X=k) = \frac{e^{-\hat{\lambda}} \hat{\lambda}^k}{k!}$
- **Expected Count**: $E_k = N \times P(X=k)$, where $N=576$.

## Step-by-Step Answer

1. **Calculate Probabilities:**
    Using $\hat{\lambda} \approx 0.9288$ and $e^{-\hat{\lambda}} \approx 0.3950$.

    - $k=0$: $P(0) = e^{-\lambda} \frac{\lambda^0}{0!} = e^{-0.9288} \approx 0.3950$
    - $k=1$: $P(1) = e^{-\lambda} \frac{\lambda^1}{1!} = 0.3950 \times 0.9288 \approx 0.3669$
    - $k=2$: $P(2) = e^{-\lambda} \frac{\lambda^2}{2!} = 0.3669 \times \frac{0.9288}{2} \approx 0.1704$
    - $k=3$: $P(3) = e^{-\lambda} \frac{\lambda^3}{3!} = 0.1704 \times \frac{0.9288}{3} \approx 0.0527$
    - $k=4$: $P(4) = e^{-\lambda} \frac{\lambda^4}{4!} = 0.0527 \times \frac{0.9288}{4} \approx 0.0122$
    - $k \ge 5$: $P(\ge 5) = 1 - (P(0) + P(1) + P(2) + P(3) + P(4))$
        $= 1 - (0.3950 + 0.3669 + 0.1704 + 0.0527 + 0.0122) = 1 - 0.9972 = 0.0028$

2. **Calculate Expected Counts ($N \times P(k)$):**
    Using $N=576$.

    - $E_0 = 576 \times 0.3950 \approx 227.5$
    - $E_1 = 576 \times 0.3669 \approx 211.3$
    - $E_2 = 576 \times 0.1704 \approx 98.1$
    - $E_3 = 576 \times 0.0527 \approx 30.4$
    - $E_4 = 576 \times 0.0122 \approx 7.0$
    - $E_{5+} = 576 \times 0.0028 \approx 1.6$

    *(Note: The numbers might slightly vary due to rounding precision)*

3. **Comparison Table:**

| # hits ($k$) | Observed | Expected ($E_k$) |
| :--- | :--- | :--- |
| **0** | 229 | **227.5** |
| **1** | 211 | **211.3** |
| **2** | 93 | **98.1** |
| **3** | 35 | **30.4** |
| **4** | 7 | **7.0** |
| **5+** | 1 | **1.6** |

1. **Conclusion:**
    The expected counts calculated from the Poisson distribution are remarkably close to the actual observed counts.
    - Observed 229 zeros vs Expected 227.5
    - Observed 211 ones vs Expected 211.3
    - Observed 7 fours vs Expected 7.0

    This strong agreement supports the hypothesis that the bombs fell **randomly** over London, following a Poisson distribution. There is no statistical evidence to suggest that the Germans were targeting specific 144 sq km areas (or rather, within this area, they were not effectively targeting specific cells more than others). The clustering of hits (multiple hits in some cells) is fully explained by chance.
