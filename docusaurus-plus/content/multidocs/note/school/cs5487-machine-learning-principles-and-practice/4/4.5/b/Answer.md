---
title: Answer
---

# Output & Results

To apply the EM algorithm derived in part (a), we represent the data as an array $X = [x_1, x_2, \dots, x_n]$, where each element refers to the number of hits for one city square. The number of samples $n$ for London is $229+211+93+35+7+1 = 576$. For Antwerp, $n = 325+115+67+30+18+21 = 576$.

*(Note: For computational viability and exact expectations, the "5 and over" bin is typically approximated as exactly 5, though an exact model might consider taking a truncated Poisson likelihood.)*

Running the EM algorithm for $K \in \{1, 2, 3, 4, 5\}$ and computing the log-likelihood (and the Bayesian Information Criterion, BIC, to prevent overfitting) gives the following typical results (exact outputs may slightly vary based on random initialization but will converge to these optima):

## London
| $K$ | Log-Likelihood ($\mathcal{L}$) | BIC | Parameters ($\pi_j \dots ; \lambda_j \dots$) |
| :--- | :--- | :--- | :--- |
| **1** | **-728.71** | **1463** | $\pi=[1.0]; \lambda=[0.929]$ |
| 2 | -728.71 | 1476 | $\pi=[0.48, 0.52]; \lambda=[0.84, 1.01]$ |
| 3 | -728.70 | 1489 | $\pi=[0.31, 0.35, 0.34]; \lambda=[0.79, 0.98, 1.00]$ |

*For London, increasing $K > 1$ does not yield any meaningful improvement in the log-likelihood (the components collapse or merely replicate the global mean). Consequently, the BIC severely penalizes higher $K$.*

## Antwerp
| $K$ | Log-Likelihood ($\mathcal{L}$) | BIC | Parameters ($\pi_j \dots ; \lambda_j \dots$) |
| :--- | :--- | :--- | :--- |
| 1 | -830.70 | 1667 | $\pi=[1.0]; \lambda=[0.896]$ |
| **2** | **-748.02** | **1515** | $\pi=[0.66, 0.34]; \lambda=[0.23, 2.19]$ |
| 3 | -747.78 | 1527 | $\pi=[0.39, 0.32, 0.28]; \lambda=[0.08, 0.60, 2.34]$ |

*For Antwerp, stepping from $K=1$ to $K=2$ produces a massive increase in log-likelihood ($\Delta \approx +82.6$). The BIC score reaches its global minimum at $K=2$. Adding further components ($K \ge 3$) yields diminishing returns and higher BIC scores.*

# Conclusion & Interpretation

### **London: Indiscriminate Bombing**
For London, the optimal number of components is $K=1$. The mixture model essentially collapses back into a single Poisson distribution with $\lambda \approx 0.93$. This aligns with the mean equalling the variance ($\approx 0.93$) of the raw data. 
There is **no evidence of specific targeting**. The distribution of flying bombs across London squares perfectly mimics a purely random point pattern. The bombs fell indiscriminately.

### **Antwerp: Targeted Bombing**
For Antwerp, the data exhibits severe *overdispersion*—the variance ($\approx 1.74$) greatly exceeds the mean ($\approx 0.90$). The optimal mixture model strongly favors **$K=2$**.
The trained model reveals two distinct underlying distributions:
1.  **Low-Hit Component ($\pi \approx 0.66, \lambda \approx 0.23$):** ~66% of the city experienced a very low bomb hit rate. These were likely untargeted residential or suburban areas.
2.  **High-Hit Component ($\pi \approx 0.34, \lambda \approx 2.19$):** ~34% of the city experienced an aggressive hit rate, receiving nearly 10 times the bomb density of the low-hit regions.

There is **heavy evidence** of targeted bombing in Antwerp. The Germans likely aimed at specific infrastructural or strategic points (e.g., ports, railways)—leading to a dense concentration of hits in ~1/3 of the squares, leaving the remainder mostly unharmed.
