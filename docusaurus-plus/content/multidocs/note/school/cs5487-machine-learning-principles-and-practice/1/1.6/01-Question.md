---
title: Question
---

# Problem 1.6 Multivariate Gaussian

The multivariate Gaussian is a probability density over real vectors, $x = \begin{bmatrix} x_1 \\ \vdots \\ x_d \end{bmatrix} \in \mathbb{R}^d$, which is parameterized by a mean vector $\mu \in \mathbb{R}^d$ and a covariance matrix $\Sigma \in \mathbb{S}^d_+$ (i.e., a $d$-dimensional positive-definite symmetric matrix). The density function is

$$
p(x) = \mathcal{N}(x|\mu, \Sigma) = \frac{1}{(2\pi)^{d/2} |\Sigma|^{1/2}} e^{-\frac{1}{2} \|x-\mu\|^2_{\Sigma}},
\tag{1.12}
$$

where $|\Sigma|$ is the determinant of $\Sigma$, and

$$
\|x - \mu\|^2_{\Sigma} = (x - \mu)^T \Sigma^{-1} (x - \mu)
\tag{1.13}
$$

is the _Mahalanobis distance_. In this problem, we will look at how different covariance matrices affect the shape of the density.

First, consider the case where $\Sigma$ is a _diagonal matrix_, i.e., the off-diagonal entries are 0,

$$
\Sigma = \begin{bmatrix}
\sigma_1^2 & & 0 \\
& \ddots & \\
0 & & \sigma_d^2
\end{bmatrix}.
\tag{1.14}
$$

(a) Show that with a diagonal covariance matrix, the multivariate Gaussian is equivalent to assuming that the elements of the vector are independent, and each is distributed as a univariate Gaussian, i.e.,

$$
\mathcal{N}(x|\mu, \Sigma) = \prod_{i=1}^d \mathcal{N}(x_i|\mu_i, \sigma_i^2).
\tag{1.15}
$$

Hint: the following properties of diagonal matrices will be useful:

$$
|\Sigma| = \prod_{i=1}^d \sigma_i^2, \quad \Sigma^{-1} = \begin{bmatrix}
\frac{1}{\sigma_1^2} & & 0 \\
& \ddots & \\
0 & & \frac{1}{\sigma_d^2}
\end{bmatrix}.
\tag{1.16}
$$

(b) Plot the Mahalanobis distance term and probability density function for a 2-dimensional Gaussian with $\mu = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$, and $\Sigma = \begin{bmatrix} 1 & 0 \\ 0 & 0.25 \end{bmatrix}$. How is the shape of the density affected by the diagonal terms?

(c) Plot the Mahalanobis distance term and pdf when the variances of each dimension are the same, e.g., $\mu = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$, and $\Sigma = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$. This is sometimes called an i.i.d. (independently and identically distributed) covariance matrix, isotropic covariance matrix, or circular covariance matrix.

Next, we will consider the general case for the covariance matrix.

(d) Let $\{\lambda_i, v_i\}$ be the eigenvalue/eigenvector pairs of $\Sigma$, i.e.,

$$
\Sigma v_i = \lambda_i v_i, \quad i \in \{1, \cdots, d\}.
\tag{1.17}
$$

Show that $\Sigma$ can be written as

$$
\Sigma = V \Lambda V^T,
\tag{1.18}
$$

where $V = [v_1, \cdots, v_d]$ is the matrix of eigenvectors, and $\Lambda = \text{diag}(\lambda_1, \cdots, \lambda_d)$ is a diagonal matrix of the eigenvalues.

(e) Let $y = V^T(x - \mu)$. Show that the Mahalanobis distance $\|x - \mu\|^2_{\Sigma}$ can be rewritten as $\|y\|^2_{\Lambda}$, i.e., a Mahalanobis distance with a diagonal covariance matrix. (Hint: use Problem 1.12). Hence, in the space of $y$, the multivariate Gaussian has a diagonal covariance matrix.

(f) Consider the transformation from $y$ to $x$: $x = Vy + \mu$. What is the effect of $V$ and $\mu$?

(g) Plot the Mahalanobis distance term and probability density function for a 2-dimensional Gaussian with $\mu = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$, and $\Sigma = \begin{bmatrix} 0.625 & 0.375 \\ 0.375 & 0.625 \end{bmatrix}$. How is the shape of the density affected by the eigenvectors and eigenvalues of $\Sigma$?
