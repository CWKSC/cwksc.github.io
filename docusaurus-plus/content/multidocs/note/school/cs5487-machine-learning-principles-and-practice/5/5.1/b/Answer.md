---
title: Answer
---

# Answer (b)

## Prerequisites

- **Variance of a Sum (Independent Variables)**
- **Kernel Function Properties**

## Step-by-Step Derivation

1. **Express the KDE:**
   The KDE is defined as $\hat{p}(x) = \frac{1}{n}\sum_{i=1}^n \frac{1}{h^d} k\left(\frac{x - x_i}{h}\right)$.
2. **Apply Variance to the KDE:**
   We want to compute the variance of $\hat{p}(x)$ with respect to the random sample $X = \{x_1, \dots, x_n\}$.

   $$
   \mathrm{var}_X(\hat{p}(x)) = \mathrm{var}_X \left( \frac{1}{n h^d} \sum_{i=1}^n k\left(\frac{x - x_i}{h}\right) \right)
   $$

3. **Use Variance Properties for Independent Samples:**
   Since the samples $x_1, \dots, x_n$ are drawn independently and identically distributed (i.i.d.), the variance of their sum is the sum of their variances: $\mathrm{var}(\sum Z_i) = \sum \mathrm{var}(Z_i)$.
   Also, extracting a constant $c$ gives $\mathrm{var}(c Z) = c^2 \mathrm{var}(Z)$.

   $$
   \mathrm{var}_X(\hat{p}(x)) = \frac{1}{n^2 h^{2d}} \sum_{i=1}^n \mathrm{var}_{x_i} \left( k\left(\frac{x - x_i}{h}\right) \right)
   $$

   Since each $x_i \sim p$ identically, all terms in the sum are equal. Let $\mu \sim p$ be a dummy variable:

   $$
   \mathrm{var}_X(\hat{p}(x)) = \frac{n}{n^2 h^{2d}} \mathrm{var}_{\mu \sim p} \left( k\left(\frac{x - \mu}{h}\right) \right) = \frac{1}{n h^{2d}} \mathrm{var}_{\mu} \left( k\left(\frac{x - \mu}{h}\right) \right)
   $$

4. **Apply the Variance Upper Bound (Eq 5.3):**
   Using the hint $\mathrm{var}(Z) \le \mathbb{E}[Z^2]$:

   $$
   \mathrm{var}_{\mu} \left( k\left(\frac{x - \mu}{h}\right) \right) \le \mathbb{E}_{\mu} \left[ \left( k\left(\frac{x - \mu}{h}\right) \right)^2 \right]
   $$

   So we get:

   $$
   \mathrm{var}_X(\hat{p}(x)) \le \frac{1}{n h^{2d}} \mathbb{E}_{\mu} \left[ \left( k\left(\frac{x - \mu}{h}\right) \right)^2 \right]
   $$

5. **Apply the Kernel Maximum Bound (Eq 5.4):**
   We can split the squared kernel into two terms and bound one of them using the maximum value of the kernel function. Let $\max_z k(z)$ represent the maximum output of the kernel (equivalent to $\max_x(k(x))$ in the problem notation).

   $$
   \left( k\left(\frac{x - \mu}{h}\right) \right)^2 = k\left(\frac{x - \mu}{h}\right) \cdot k\left(\frac{x - \mu}{h}\right) \le \max_z(k(z)) \cdot k\left(\frac{x - \mu}{h}\right)
   $$

   Substitute this inequality into the expectation:

   $$
   \mathbb{E}_{\mu} \left[\left( k\left(\frac{x - \mu}{h}\right) \right)^2\right] \le \mathbb{E}_{\mu} \left[ \max_z(k(z)) \cdot k\left(\frac{x - \mu}{h}\right) \right] = \max_z(k(z)) \cdot \mathbb{E}_{\mu} \left[ k\left(\frac{x - \mu}{h}\right) \right]
   $$

   Plugging this back into the variance inequality:

   $$
   \mathrm{var}_X(\hat{p}(x)) \le \frac{1}{n h^{2d}} \max_z(k(z)) \mathbb{E}_{\mu} \left[ k\left(\frac{x - \mu}{h}\right) \right]
   $$

6. **Relate Back to Expected Density $\mathbb{E}[\hat{p}(x)]$:**
   Rearrange the right side to recover the form of $\mathbb{E}[\hat{p}(x)]$ derived in Part (a). We know $\tilde{k}(z) = \frac{1}{h^d} k(\frac{z}{h})$, so:
   $$
   \mathrm{var}_X(\hat{p}(x)) \le \frac{1}{n h^d} \max_z(k(z)) \cdot \mathbb{E}_{\mu} \left[ \frac{1}{h^d} k\left(\frac{x - \mu}{h}\right) \right]
   $$
   We proved in (a) that $\mathbb{E}_{\mu} \left[ \frac{1}{h^d} k\left(\frac{x - \mu}{h}\right) \right] = \mathbb{E}_X[\hat{p}(x)]$. Replacing this chunk:
   $$
   \mathrm{var}_X(\hat{p}(x)) \le \frac{1}{nh^d} \max_z(k(z)) \mathbb{E}_X[\hat{p}(x)]
   $$
   Using the problem's notation $\max_x(k(x))$ for the kernel maximum, we obtain:
   $$
   \mathrm{var}_X(\hat{p}(x)) \le \frac{1}{nh^d}\max_x(k(x))\mathbb{E}[\hat{p}(x)]
   $$
