---
title: Explain
---

# Explanation: MLE vs Least Squares

### Probabilistic Interpretation

Part (a) approached the problem geometrically: "minimize the distance".
Part (b) approaches the problem probabilistically: "maximize the probability of the data".

### Gaussian Noise Assumption

The crucial link is the assumption of **Gaussian noise**.
Because the Gaussian PDF involves an exponential of a squared term ($e^{-x^2}$), taking the log of the Gaussian PDF gives you back the squared term ($-x^2$).

### Why Log-Likelihood?

We almost always work with Log-Likelihood in ML because:
1. **Numerical Stability**: Multiplying many small probabilities (e.g., $0.01^{100}$) results in underflow (numbers too small for computers to represent). Summing logs (e.g., $100 \times \ln(0.01)$) is stable.
2. **Simplified Math**: Calculus is easier with sums than with products.

### Conclusion

We proved that **Least Squares is not heuristic**; it is the statistically optimal solution **IF** the noise is Gaussian. If the noise followed a different distribution (e.g., Laplace), the optimal loss function would change (e.g., to Mean Absolute Error).
