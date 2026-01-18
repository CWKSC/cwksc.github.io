# Problem 1.8 Product of Multivariate Gaussian Distributions - Answer

## Prerequisite Knowledge

To solve this problem, you need to be familiar with the following concepts:

1.  **Multivariate Gaussian Definition**:
    $$ \mathcal{N}(x|\mu, \Sigma) = \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}} \exp\left(-\frac{1}{2}(x-\mu)^T \Sigma^{-1} (x-\mu)\right) $$
2.  **Completing the Square**: As derived in [Problem 1.10](../1.10/Question.md), a quadratic form $x^T A x - 2x^T b$ can be completed as $(x - A^{-1}b)^T A (x - A^{-1}b) - b^T A^{-1} b$.
3.  **Matrix Identities**:
    - $(A^{-1} + B^{-1})^{-1} = A(A+B)^{-1}B = B(A+B)^{-1}A$ (useful for determinant manipulation).
    - Identity for quadratic forms:
      $a^T A^{-1} a + b^T B^{-1} b - (A^{-1}a + B^{-1}b)^T (A^{-1} + B^{-1})^{-1} (A^{-1}a + B^{-1}b) = (a-b)^T (A+B)^{-1} (a-b)$.

## Step-by-Step Derivation

We evaluate the product:
$$ P(x) = \mathcal{N}(x|a, A)\mathcal{N}(x|b, B) $$

### Step 1: Expand the Exponents

Ignoring the normalization constants for a moment, let's look at the exponent term $E$ (where the total exponent is $-\frac{1}{2}E$):

$$ E = (x-a)^T A^{-1} (x-a) + (x-b)^T B^{-1} (x-b) $$

Expanding these quadratics:
$$ E = (x^T A^{-1} x - 2x^T A^{-1} a + a^T A^{-1} a) + (x^T B^{-1} x - 2x^T B^{-1} b + b^T B^{-1} b) $$

Group terms by powers of $x$:
$$ E = x^T (A^{-1} + B^{-1}) x - 2x^T (A^{-1} a + B^{-1} b) + (a^T A^{-1} a + b^T B^{-1} b) $$

### Step 2: Define New Parameters $c$ and $C$

We want to match the form of a Gaussian exponent: $(x-c)^T C^{-1} (x-c)$.
Looking at the quadratic term in $x$, we identify the precision matrix equal to the sum of the precisions:
$$ C^{-1} = A^{-1} + B^{-1} \implies C = (A^{-1} + B^{-1})^{-1} $$
This matches equation (1.25).

Looking at the linear term $-2x^T (A^{-1} a + B^{-1} b)$, we equate it to $-2x^T C^{-1} c$ from the expansion of $(x-c)^T C^{-1} (x-c)$.
$$ C^{-1} c = A^{-1} a + B^{-1} b $$
Multiplying by $C$ from the left:
$$ c = C(A^{-1} a + B^{-1} b) $$
This matches equation (1.24).

### Step 3: Complete the Square

Using the result from Problem 1.10, we can rewrite the terms involving $x$ in $E$:
$$ x^T C^{-1} x - 2x^T (C^{-1}c) = (x-c)^T C^{-1} (x-c) - c^T C^{-1} c $$

Substitute this back into the expression for $E$:
$$ E = (x-c)^T C^{-1} (x-c) - c^T C^{-1} c + (a^T A^{-1} a + b^T B^{-1} b) $$

Let $R$ be the residual scalar term:
$$ R = a^T A^{-1} a + b^T B^{-1} b - c^T C^{-1} c $$

So the product $P(x)$ can be written as:
$$ P(x) = \frac{1}{Z*{norm}} \exp\left( -\frac{1}{2} (x-c)^T C^{-1} (x-c) \right) \exp\left( -\frac{1}{2} R \right) $$
where $Z*{norm} = (2\pi)^{d/2}|A|^{1/2} (2\pi)^{d/2}|B|^{1/2} = (2\pi)^{d} |A|^{1/2} |B|^{1/2}$.

Notice that $\exp\left( -\frac{1}{2} (x-c)^T C^{-1} (x-c) \right)$ is the unnormalized kernel of $\mathcal{N}(x|c, C)$.

### Step 4: Simplify the Residual Term $R$

We need to show that $R = (a-b)^T (A+B)^{-1} (a-b)$.

Substitute $c = C(A^{-1} a + B^{-1} b)$ and $C^{-1} = A^{-1} + B^{-1}$ back into $c^T C^{-1} c$:
$$ c^T C^{-1} c = (A^{-1} a + B^{-1} b)^T C^T C^{-1} C (A^{-1} a + B^{-1} b) $$
$$ = (A^{-1} a + B^{-1} b)^T C (A^{-1} a + B^{-1} b) $$
Thus,
$$ R = a^T A^{-1} a + b^T B^{-1} b - (A^{-1} a + B^{-1} b)^T (A^{-1} + B^{-1})^{-1} (A^{-1} a + B^{-1} b) $$

Using the matrix identity (proven via Woodbury or elementary algebra) for completing the square in the exponent:
$$ x^T A^{-1} x + y^T B^{-1} y - (A^{-1}x + B^{-1}y)^T (A^{-1} + B^{-1})^{-1} (A^{-1}x + B^{-1}y) = (x-y)^T (A+B)^{-1} (x-y) $$
Substituting $x=a, y=b$:
$$ R = (a-b)^T (A+B)^{-1} (a-b) $$

This term exactly matches the exponent of $\mathcal{N}(a|b, A+B)$.

### Step 5: Determine the Scaling Factor $Z$

We have:
$$ \mathcal{N}(x|a, A)\mathcal{N}(x|b, B) = \mathcal{N}(x|c, C) \cdot \underbrace{\frac{(2\pi)^{d/2}|C|^{1/2}}{(2\pi)^{d}|A|^{1/2}|B|^{1/2}} \exp\left(-\frac{1}{2}R\right)}\_{Z} $$

We identified $\exp(-\frac{1}{2}R)$ matches the exponential part of $\mathcal{N}(a|b, A+B)$.
Now check the determinant pre-factor.
$$ \text{Prefactor} = \frac{|C|^{1/2}}{(2\pi)^{d/2} |A|^{1/2} |B|^{1/2}} $$
We want this to match the constant of $\mathcal{N}(a|b, A+B)$, which is $\frac{1}{(2\pi)^{d/2} |A+B|^{1/2}}$.

We need to check if:
$$ \frac{|C|^{1/2}}{|A|^{1/2} |B|^{1/2}} = \frac{1}{|A+B|^{1/2}} $$
Squaring both sides:
$$ \frac{|C|}{|A||B|} = \frac{1}{|A+B|} \iff |C||A+B| = |A||B| $$
Recalling $C = (A^{-1} + B^{-1})^{-1}$.
Using $|X Y| = |X| |Y|$ and $|X^{-1}| = 1/|X|$:
$$ |C| = |(A^{-1} + B^{-1})^{-1}| = \frac{1}{|A^{-1} + B^{-1}|} = \frac{1}{|A^{-1}(A+B)B^{-1}|} $$
$$ = \frac{1}{|A^{-1}| |A+B| |B^{-1}|} = \frac{|A||B|}{|A+B|} $$
Thus, the determinants match.

### Conclusion

Combining the residual exponent and the determinant factors, we get:
$$ Z = \frac{1}{(2\pi)^{d/2}|A+B|^{1/2}} \exp\left( -\frac{1}{2} (a-b)^T (A+B)^{-1} (a-b) \right) = \mathcal{N}(a|b, A+B) $$

So,
$$ \mathcal{N}(x|a, A)\mathcal{N}(x|b, B) = Z \mathcal{N}(x|c, C) $$
Q.E.D.
