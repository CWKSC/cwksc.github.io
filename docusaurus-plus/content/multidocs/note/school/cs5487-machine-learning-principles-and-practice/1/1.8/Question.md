# Problem 1.8 Product of Multivariate Gaussian Distributions

Show that the product of two $d$-dimensional multivariate Gaussians distributions, $\mathcal{N}(x|a, A)$ and $\mathcal{N}(x|b, B)$, is a scaled multivariate Gaussian,

$$
\mathcal{N}(x|a, A)\mathcal{N}(x|b, B) = Z\mathcal{N}(x|c, C), \tag{1.23}
$$

where

$$
c = C(A^{-1}a + B^{-1}b), \tag{1.24}
$$

$$
C = (A^{-1} + B^{-1})^{-1}, \tag{1.25}
$$

$$
Z = \frac{1}{(2\pi)^{\frac{d}{2}}|A+B|^{\frac{1}{2}}}e^{-\frac{1}{2}(a-b)^T(A+B)^{-1}(a-b)} = \mathcal{N}(a|b, A+B). \tag{1.26}
$$

Hint: after expanding the exponent term, apply the result from [Problem 1.10](../1.10/Question.md) and (1.35).
