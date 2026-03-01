---
title: Answer
---
### Prerequisites
- Properties of Covariance
- Linearity of Integrals
- Matrix Expansion

### Step-by-Step Derivation

1. Start with the geometric definition of covariance for the distribution $\hat{p}(x)$:
   $$ \hat{\Sigma} = \operatorname{cov}_{\hat{p}}(x) = \int \hat{p}(x) (x - \hat{\mu})(x - \hat{\mu})^T dx $$

2. Substitute the definition of $\hat{p}(x)$ from Equation (5.5):
   $$ \hat{\Sigma} = \int \left( \frac{1}{n} \sum_{i=1}^n \tilde{k}(x - x_i) \right) (x - \hat{\mu})(x - \hat{\mu})^T dx $$

3. Rearrange the sum and integral via linearity:
   $$ \hat{\Sigma} = \frac{1}{n} \sum_{i=1}^n \int \tilde{k}(x - x_i) (x - \hat{\mu})(x - \hat{\mu})^T dx $$

4. We can strategically rewrite the term $(x - \hat{\mu})$ by adding and subtracting $x_i$:
   $$ x - \hat{\mu} = (x - x_i) + (x_i - \hat{\mu}) $$

5. Apply the change of variables $u = x - x_i$, meaning $du = dx$ and $x - \hat{\mu} = u + (x_i - \hat{\mu})$:
   $$ \int \tilde{k}(x - x_i) (x - \hat{\mu})(x - \hat{\mu})^T dx = \int \tilde{k}(u) \Big(u + (x_i - \hat{\mu})\Big)\Big(u + (x_i - \hat{\mu})\Big)^T du $$

6. Expand the quadratic term out:
   $$ \Big(u + (x_i - \hat{\mu})\Big)\Big(u^T + (x_i - \hat{\mu})^T\Big) $$
   $$ = u u^T + u(x_i - \hat{\mu})^T + (x_i - \hat{\mu})u^T + (x_i - \hat{\mu})(x_i - \hat{\mu})^T $$

7. Substitute this expansion back into the integral and separate into four distinct integrals:
   $$ \int \tilde{k}(u) u u^T du + \int \tilde{k}(u) u(x_i - \hat{\mu})^T du + \int \tilde{k}(u) (x_i - \hat{\mu}) u^T du + \int \tilde{k}(u) (x_i - \hat{\mu})(x_i - \hat{\mu})^T du $$

8. Evaluate each of the four integral terms separately:
   - **Term 1**: By Equation (5.7) and given the mean of $\tilde{k}$ is 0:  
     $$ \int \tilde{k}(u) u u^T du = H $$
   - **Term 2**: Since $(x_i - \hat{\mu})^T$ is a constant respect to $u$, we pull it out. From (5.6), $\int \tilde{k}(u) u du = 0$:  
     $$ \left(\int \tilde{k}(u) u du\right) (x_i - \hat{\mu})^T = 0 \cdot (x_i - \hat{\mu})^T = 0 $$
   - **Term 3**: Similarly:  
     $$ (x_i - \hat{\mu}) \left(\int \tilde{k}(u) u^T du\right) = (x_i - \hat{\mu}) \cdot 0^T = 0 $$
   - **Term 4**: Since $\tilde{k}(u)$ is a PDF, it integrates to 1:  
     $$ (x_i - \hat{\mu})(x_i - \hat{\mu})^T \int \tilde{k}(u) du = (x_i - \hat{\mu})(x_i - \hat{\mu})^T \cdot 1 = (x_i - \hat{\mu})(x_i - \hat{\mu})^T $$

9. Summing these terms, the integral inside the sum becomes:
   $$ H + (x_i - \hat{\mu})(x_i - \hat{\mu})^T $$

10. Substitute this evaluated integral back into the overall sum from step 3:
    $$ \hat{\Sigma} = \frac{1}{n} \sum_{i=1}^n \Big( H + (x_i - \hat{\mu})(x_i - \hat{\mu})^T \Big) $$

11. Distribute the sum over the two terms:
    $$ \hat{\Sigma} = \frac{1}{n} \sum_{i=1}^n H + \frac{1}{n} \sum_{i=1}^n (x_i - \hat{\mu})(x_i - \hat{\mu})^T $$

12. Since $H$ does not depend on the index $i$, summing it $n$ times and dividing by $n$ leaves exactly $H$:
    $$ \hat{\Sigma} = H + \frac{1}{n} \sum_{i=1}^n (x_i - \hat{\mu})(x_i - \hat{\mu})^T $$

This proves Equation (5.9).