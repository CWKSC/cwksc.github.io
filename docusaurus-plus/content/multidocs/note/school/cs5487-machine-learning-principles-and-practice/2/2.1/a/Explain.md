---
title: Explain
---

### Intuition

Maximum Likelihood Estimation (MLE) is a method for finding the parameter ($\lambda$) that is most likely to have generated the observed data.

For the Poisson distribution, the parameter $\lambda$ represents the **average rate** at which events (like bomb hits) occur.

It makes intuitive sense that our best guess for the expected average rate $\lambda$ is simply the empirical average—or the **sample mean**—of the observed counts. By summing up all the bomb hits across all cells ($\sum k_i$) and dividing by the total number of cells ($N$), we calculate the average number of hits per cell.

This result perfectly aligns with our everyday intuition of finding an average rate. Rather than a complex mathematical abstraction, the MLE for a Poisson distribution simply confirms that the most logical estimate for the "true" average is the "observed" average.
