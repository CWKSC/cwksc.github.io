# 習題 1.8 多變量高斯分佈的乘積

證明兩個 $d$ 維多變量高斯分佈，$\mathcal{N}(x|a, A)$ 和 $\mathcal{N}(x|b, B)$ 的乘積，是一個縮放的多變量高斯分佈，

$$
\mathcal{N}(x|a, A)\mathcal{N}(x|b, B) = Z\mathcal{N}(x|c, C), \tag{1.23}
$$

其中

$$
c = C(A^{-1}a + B^{-1}b), \tag{1.24}
$$

$$
C = (A^{-1} + B^{-1})^{-1}, \tag{1.25}
$$

$$
Z = \frac{1}{(2\pi)^{\frac{d}{2}}|A+B|^{\frac{1}{2}}}e^{-\frac{1}{2}(a-b)^T(A+B)^{-1}(a-b)} = \mathcal{N}(a|b, A+B). \tag{1.26}
$$

提示：在展開指數項後，應用 [習題 1.10](../1.10/Question_ZH.md) 和 (1.35) 的結果。
