# 問題 1.6 多元高斯分布

多元高斯分布是實向量 $x = \begin{bmatrix} x_1 \\ \vdots \\ x_d \end{bmatrix} \in \mathbb{R}^d$ 上的概率密度，由均值向量 $\mu \in \mathbb{R}^d$ 和協方差矩陣 $\Sigma \in \mathbb{S}^d_+$（即 $d$ 維正定對稱矩陣）參數化。密度函數為

$$
p(x) = \mathcal{N}(x|\mu, \Sigma) = \frac{1}{(2\pi)^{d/2} |\Sigma|^{1/2}} e^{-\frac{1}{2} \|x-\mu\|^2_{\Sigma}},
\tag{1.12}
$$

其中 $|\Sigma|$ 是 $\Sigma$ 的行列式，並且

$$
\|x - \mu\|^2_{\Sigma} = (x - \mu)^T \Sigma^{-1} (x - \mu)
\tag{1.13}
$$

是**馬氏距離**（Mahalanobis distance）。在這個問題中，我們將探討不同的協方差矩陣如何影響密度的形狀。

首先，考慮 $\Sigma$ 為**對角矩陣**的情況，即非對角元素為 0，

$$
\Sigma = \begin{bmatrix}
\sigma_1^2 & & 0 \\
& \ddots & \\
0 & & \sigma_d^2
\end{bmatrix}.
\tag{1.14}
$$

(a) 證明當協方差矩陣為對角矩陣時，多元高斯分布等價於假設向量的元素是獨立的，並且每個元素都服從單變量高斯分布，即

$$
\mathcal{N}(x|\mu, \Sigma) = \prod_{i=1}^d \mathcal{N}(x_i|\mu_i, \sigma_i^2).
\tag{1.15}
$$

提示：對角矩陣的以下性質將會有用：

$$
|\Sigma| = \prod_{i=1}^d \sigma_i^2, \quad \Sigma^{-1} = \begin{bmatrix}
\frac{1}{\sigma_1^2} & & 0 \\
& \ddots & \\
0 & & \frac{1}{\sigma_d^2}
\end{bmatrix}.
\tag{1.16}
$$

(b) 繪製馬氏距離項和二維高斯分布的概率密度函數，其中 $\mu = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$，且 $\Sigma = \begin{bmatrix} 1 & 0 \\ 0 & 0.25 \end{bmatrix}$。對角項如何影響密度的形狀？

(c) 繪製馬氏距離項和概率密度函數，當每個維度的方差相同時，例如 $\mu = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$，且 $\Sigma = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$。這有時被稱為 i.i.d.（獨立同分布）協方差矩陣、各向同性協方差矩陣或圓形協方差矩陣。

接下來，我們將考慮協方差矩陣的一般情況。

(d) 令 $\{\lambda_i, v_i\}$ 為 $\Sigma$ 的特徵值/特徵向量對，即

$$
\Sigma v_i = \lambda_i v_i, \quad i \in \{1, \cdots, d\}.
\tag{1.17}
$$

證明 $\Sigma$ 可以寫為

$$
\Sigma = V \Lambda V^T,
\tag{1.18}
$$

其中 $V = [v_1, \cdots, v_d]$ 是特徵向量矩陣，$\Lambda = \text{diag}(\lambda_1, \cdots, \lambda_d)$ 是特徵值的對角矩陣。

(e) 令 $y = V^T(x - \mu)$。證明馬氏距離 $\|x - \mu\|^2_{\Sigma}$ 可以改寫為 $\|y\|^2_{\Lambda}$，即具有對角協方差矩陣的馬氏距離。（提示：使用問題 1.12）。因此，在 $y$ 空間中，多元高斯分布具有對角協方差矩陣。

(f) 考慮從 $y$ 到 $x$ 的變換：$x = Vy + \mu$。$V$ 和 $\mu$ 的作用是什麼？

(g) 繪製馬氏距離項和二維高斯分布的概率密度函數，其中 $\mu = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$，且 $\Sigma = \begin{bmatrix} 0.625 & 0.375 \\ 0.375 & 0.625 \end{bmatrix}$。$\Sigma$ 的特徵向量和特徵值如何影響密度的形狀？
