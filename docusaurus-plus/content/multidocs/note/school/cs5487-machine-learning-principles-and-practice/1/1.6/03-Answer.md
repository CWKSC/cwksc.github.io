---
title: Answer
---

# Problem 1.6 Multivariate Gaussian - Answer

## (a) Diagonal Covariance Matrix

### Pre-required Knowledge

- **Determinant of a diagonal matrix**: The determinant of a diagonal matrix is the product of its diagonal elements.
- **Inverse of a diagonal matrix**: The inverse of a diagonal matrix is a diagonal matrix with the reciprocals of the original diagonal elements.
- **Exponential rules**: $e^{a+b} = e^a e^b$ and $\exp(\sum x_i) = \prod \exp(x_i)$.
- **Univariate Gaussian PDF**: $\mathcal{N}(x_i|\mu_i, \sigma_i^2) = \frac{1}{\sqrt{2\pi\sigma_i^2}} e^{-\frac{(x_i-\mu_i)^2}{2\sigma_i^2}}$.

### Step-by-step Answer

1.  **Analyze the Determinant term**:
    Given the diagonal covariance matrix $\Sigma = \text{diag}(\sigma_1^2, \dots, \sigma_d^2)$, the determinant is:

    $$
    |\Sigma| = \prod_{i=1}^d \sigma_i^2
    $$

    Taking the square root:

    $$
    |\Sigma|^{1/2} = \left(\prod_{i=1}^d \sigma_i^2\right)^{1/2} = \prod_{i=1}^d \sigma_i
    $$

2.  **Analyze the Mahalanobis distance term**:
    The inverse of the diagonal matrix $\Sigma$ is:

    $$
    \Sigma^{-1} = \text{diag}\left(\frac{1}{\sigma_1^2}, \dots, \frac{1}{\sigma_d^2}\right)
    $$

    Expanding the inner term $\|x - \mu\|^2_{\Sigma} = (x - \mu)^T \Sigma^{-1} (x - \mu)$:

    $$
    \begin{aligned}
    (x - \mu)^T \Sigma^{-1} (x - \mu) &= \begin{bmatrix} x_1 - \mu_1 & \cdots & x_d - \mu_d \end{bmatrix}
    \begin{bmatrix}
    \frac{1}{\sigma_1^2} & & 0 \\
    & \ddots & \\
    0 & & \frac{1}{\sigma_d^2}
    \end{bmatrix}
    \begin{bmatrix} x_1 - \mu_1 \\ \vdots \\ x_d - \mu_d \end{bmatrix} \\
    &= \sum_{i=1}^d \frac{(x_i - \mu_i)^2}{\sigma_i^2}
    \end{aligned}
    $$

3.  **Substitute back into the full PDF**:

    $$
    p(x) = \frac{1}{(2\pi)^{d/2} \prod_{i=1}^d \sigma_i} \exp\left( -\frac{1}{2} \sum_{i=1}^d \frac{(x_i - \mu_i)^2}{\sigma_i^2} \right)
    $$

4.  **Factorize the expression**:
    Distribute the $(2\pi)^{d/2}$ as $\prod_{i=1}^d (2\pi)^{1/2}$ and separate the exponential sum into a product:
    $$
    \begin{aligned}
    p(x) &= \left( \prod_{i=1}^d \frac{1}{(2\pi)^{1/2}\sigma_i} \right) \prod_{i=1}^d \exp\left( -\frac{(x_i - \mu_i)^2}{2\sigma_i^2} \right) \\
    &= \prod_{i=1}^d \left( \frac{1}{\sqrt{2\pi}\sigma_i} e^{-\frac{(x_i-\mu_i)^2}{2\sigma_i^2}} \right) \\
    &= \prod_{i=1}^d \mathcal{N}(x_i|\mu_i, \sigma_i^2)
    \end{aligned}
    $$
    This shows that the joint density is the product of independent univariate marginal densities.

---

## (b) 2D Gaussian with Diagonal Covariance

### Pre-required Knowledge

- **Contour plots**: Visualizing 3D functions on 2D planes using isolines.
- **Equation of an ellipse**: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.

### Step-by-step Answer

Given $\mu = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$ and $\Sigma = \begin{bmatrix} 1 & 0 \\ 0 & 0.25 \end{bmatrix}$.

1.  **Variances**:
    $\sigma_1^2 = 1 \implies \sigma_1 = 1$.
    $\sigma_2^2 = 0.25 \implies \sigma_2 = 0.5$.

2.  **Mahalanobis Distance**:

    $$
    \|x - \mu\|^2_{\Sigma} = \frac{x_1^2}{1} + \frac{x_2^2}{0.25} = x_1^2 + 4x_2^2
    $$

    The level sets (contours) where density is constant satisfy $x_1^2 + 4x_2^2 = C$. This is the equation of an ellipse centered at $(0,0)$.

3.  **Shape Description**:
    - The ellipse has a semi-major axis along $x_1$ (length proportional to $\sigma_1 = 1$).
    - The semi-minor axis is along $x_2$ (length proportional to $\sigma_2 = 0.5$).
    - **Effect**: The density is "axis-aligned". Because $\sigma_1 > \sigma_2$, the distribution is stretched along the $x_1$ axis and compressed along the $x_2$ axis. It looks like a flattened oval.

---

## (c) Isotropic Covariance Matrix

### Pre-required Knowledge

- **Isotropic**: Having a physical property which has the same value when measured in different directions.
- **Identity Matrix**: A matrix with 1s on the diagonal and 0s elsewhere.

### Step-by-step Answer

Given $\Sigma = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$.

1.  **Variances**:
    $\sigma_1^2 = 1, \sigma_2^2 = 1$.

2.  **Mahalanobis Distance**:

    $$
    \|x - \mu\|^2_{\Sigma} = x_1^2 + x_2^2
    $$

    The contours satisfy $x_1^2 + x_2^2 = C$, which is the equation of a circle.

3.  **Shape Description**:
    The contours are perfect circles. The probability density falls off at the same rate in every direction from the center. The spread is symmetric (spherical in higher dimensions).

---

## (d) Eigendecomposition of Covariance Matrix

### Pre-required Knowledge

- **Spectral Theorem**: Any symmetric real matrix can be diagonalized by an orthogonal matrix of its eigenvectors.
- **Matrix Multiplication**: Associative properties.

### Step-by-step Answer

1.  **Eigenvalue Equation**:
    We are given $\Sigma v_i = \lambda_i v_i$ for $i=1,\dots,d$.

2.  **Matrix Form**:
    We can stack the vectors $v_i$ into a matrix $V = [v_1, \dots, v_d]$ and the scalars into a diagonal matrix $\Lambda = \text{diag}(\lambda_1, \dots, \lambda_d)$.
    The set of equations $\Sigma v_i = \lambda_i v_i$ becomes:

    $$
    \Sigma V = V \Lambda
    $$

3.  **Orthogonality**:
    Since $\Sigma$ is a symmetric matrix (covariance matrices are symmetric), its eigenvectors $v_i$ can be chosen to be orthonormal (mutually orthogonal and unit length).
    Therefore, $V$ is an orthogonal matrix, meaning $V^T V = I$ or $V^{-1} = V^T$.

4.  **Diagonalization**:
    Right-multiply the equation $\Sigma V = V \Lambda$ by $V^T$:
    $$
    \Sigma V V^T = V \Lambda V^T
    $$
    Since $V V^T = I$:
    $$
    \Sigma = V \Lambda V^T
    $$

---

## (e) Tranformation to Diagonal Space

### Pre-required Knowledge

- **Inverse of decomposed matrix**: $(ABC)^{-1} = C^{-1} B^{-1} A^{-1}$.
- **Vector properties**: $(Ax)^T = x^T A^T$.

### Step-by-step Answer

1.  **Inverse of $\Sigma$**:
    Using the decomposition from (d):

    $$
    \Sigma^{-1} = (V \Lambda V^T)^{-1} = (V^T)^{-1} \Lambda^{-1} V^{-1}
    $$

    Since $V$ is orthogonal ($V^{-1} = V^T$ and $(V^T)^{-1} = V$):

    $$
    \Sigma^{-1} = V \Lambda^{-1} V^T
    $$

2.  **Substitute into Mahalanobis Distance**:

    $$
    \|x - \mu\|^2_{\Sigma} = (x - \mu)^T V \Lambda^{-1} V^T (x - \mu)
    $$

3.  **Define $y$**:
    Let $y = V^T (x - \mu)$. Then its transpose is $y^T = (x - \mu)^T V$.
    Substitute $y$ into the distance equation:

    $$
    \|x - \mu\|^2_{\Sigma} = y^T \Lambda^{-1} y
    $$

4.  **Result**:
    Since $\Lambda$ is diagonal, $y^T \Lambda^{-1} y = \|y\|^2_{\Lambda}$.
    This shows that in the coordinate system defined by $y$, the variables are uncorrelated (diagonal covariance $\Lambda$).

---

## (f) Geometric Effect of V and $\mu$

### Pre-required Knowledge

- **Change of Basis**: Projecting a vector onto new basis vectors.
- **Affine Transformation**: Linear transformation followed by translation.

### Step-by-step Answer

The relationship is $x = Vy + \mu$ (derived from $y = V^T(x-\mu)$ by multiplying by $V$ and adding $\mu$).

1.  **Effect of transformation $V$ (Rotation)**:
    $V$ contains the eigenvectors of $\Sigma$. Multiplying a vector $y$ by an orthogonal matrix $V$ performs a **rotation** (or reflection) of the coordinate system.
    Specifically, the standard axes in $y$-space (where the Gaussian is axis-aligned) are rotated to align with the eigenvectors $v_i$ in $x$-space.

2.  **Effect of transformation $\mu$ (Translation)**:
    Adding $\mu$ shifts the origin. The center of the distribution moves from $0$ (in $y$-space if we consider centered $y$) to $\mu$ in $x$-space.

3.  **Summary**:
    To generate sample $x$, you take a sample $y$ from an axis-aligned Gaussian, **rotate** it by $V$, and **translate** it by $\mu$.

---

## (g) General Covariance Matrix Plot

### Pre-required Knowledge

- **Characteristic Equation**: $\det(\Sigma - \lambda I) = 0$ to find eigenvalues.
- **Eigenvectors**: Solving $(\Sigma - \lambda I)v = 0$.

### Step-by-step Answer

Given $\Sigma = \begin{bmatrix} 0.625 & 0.375 \\ 0.375 & 0.625 \end{bmatrix}$.

1.  **Find Eigenvalues**:

    $$
    \det \begin{bmatrix} 0.625 - \lambda & 0.375 \\ 0.375 & 0.625 - \lambda \end{bmatrix} = 0
    $$

    $$
    (0.625 - \lambda)^2 - 0.375^2 = 0
    $$

    $$
    0.625 - \lambda = \pm 0.375
    $$

    $$
    \lambda_1 = 0.625 + 0.375 = 1.0
    $$

    $$
    \lambda_2 = 0.625 - 0.375 = 0.25
    $$

2.  **Find Eigenvectors**:
    - For $\lambda_1 = 1$:
      $\begin{bmatrix} -0.375 & 0.375 \\ 0.375 & -0.375 \end{bmatrix} \begin{bmatrix} v_{11} \\ v_{12} \end{bmatrix} = 0 \implies v_{11} = v_{12}$.
      Normalized eigenvector: $v_1 = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix} \approx \begin{bmatrix} 0.707 \\ 0.707 \end{bmatrix}$. (Direction of $45^\circ$ line).

    - For $\lambda_2 = 0.25$:
      $\begin{bmatrix} 0.375 & 0.375 \\ 0.375 & 0.375 \end{bmatrix} \begin{bmatrix} v_{21} \\ v_{22} \end{bmatrix} = 0 \implies v_{21} = -v_{22}$.
      Normalized eigenvector: $v_2 = \begin{bmatrix} -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix} \approx \begin{bmatrix} -0.707 \\ 0.707 \end{bmatrix}$. (Direction of $135^\circ$ line).

3.  **Shape Description**:
    - The eigenvalues are $1$ and $0.25$, which are identical to the variances in part (b).
    - **Effect of Eigenvalues**: They determine the lengths of the major and minor axes of the uncertainty ellipse. (Major axis length proportional to $\sqrt{1}$, minor to $\sqrt{0.25}$).
    - **Effect of Eigenvectors**: They determine the **orientation**. The ellipse from part (b) is rotated by $45^\circ$ counter-clockwise. The distribution is elongated along the line $x_1 = x_2$.
