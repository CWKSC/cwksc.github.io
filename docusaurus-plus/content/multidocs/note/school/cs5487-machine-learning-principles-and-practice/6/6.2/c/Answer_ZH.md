---
title: Answer ZH
---

### 先備知識

* 貝氏決策規則 (Bayes Decision Rule, BDR)
* 絕對損失函數 (Absolute Loss Function, $L_1$ loss)
* 條件風險 (Conditional Risk)
* 萊布尼茲積分法則 (Leibniz Integral Rule)
* 中位數的定義 (Definition of Median)

### 逐步推導

1. **定義 $q=1$ 時的條件風險：**
    當 $q=1$ 時，損失函數為絕對損失：$L_1(g(x), y) = |g(x) - y|$。
    條件風險為：
    $$R(x) = \int_{-\infty}^{\infty} |g(x) - y| p(y|x) dy$$

2. **拆分積分：**
    為了解決絕對值，我們在 $y = g(x)$ 處拆分積分：
    $$R(x) = \int_{-\infty}^{g(x)} (g(x) - y) p(y|x) dy + \int_{g(x)}^{\infty} (y - g(x)) p(y|x) dy$$

3. **最小化條件風險：**
    我們對 $R(x)$ 關於 $g(x)$ 取導數並將其設為零。我們使用萊布尼茲積分法則，其陳述如下：
    $$\frac{d}{dz} \int_{a(z)}^{b(z)} f(y, z) dy = f(b(z), z) \cdot b'(z) - f(a(z), z) \cdot a'(z) + \int_{a(z)}^{b(z)} \frac{\partial f(y, z)}{\partial z} dy$$

    將此應用於我們的風險函數（令 $g(x)$ 為我們求導的變數）：
    $$\frac{\partial R(x)}{\partial g(x)} = \frac{\partial}{\partial g(x)} \left[ \int_{-\infty}^{g(x)} (g(x) - y) p(y|x) dy \right] + \frac{\partial}{\partial g(x)} \left[ \int_{g(x)}^{\infty} (y - g(x)) p(y|x) dy \right]$$

    第一項：
    $$(g(x) - g(x))p(g(x)|x) \cdot 1 - 0 + \int_{-\infty}^{g(x)} 1 \cdot p(y|x) dy = \int_{-\infty}^{g(x)} p(y|x) dy$$

    第二項：
    $$0 - (g(x) - g(x))p(g(x)|x) \cdot 1 + \int_{g(x)}^{\infty} (-1) \cdot p(y|x) dy = -\int_{g(x)}^{\infty} p(y|x) dy$$

    將它們合併：
    $$\frac{\partial R(x)}{\partial g(x)} = \int_{-\infty}^{g(x)} p(y|x) dy - \int_{g(x)}^{\infty} p(y|x) dy$$

4. **將導數設為零：**
    $$\int_{-\infty}^{g^*(x)} p(y|x) dy - \int_{g^*(x)}^{\infty} p(y|x) dy = 0$$
    $$\int_{-\infty}^{g^*(x)} p(y|x) dy = \int_{g^*(x)}^{\infty} p(y|x) dy$$

5. **解釋結果：**
    該方程式指出，$g^*(x)$ 左側的機率質量必須等於 $g^*(x)$ 右側的機率質量。因為總機率為 1，所以每一側都必須等於 0.5：
    $$\int_{-\infty}^{g^*(x)} p(y|x) dy = 0.5$$
    這正是條件分佈 $p(y|x)$ 的中位數定義。
    因此，$g^*(x) = \text{median}(y|x)$。
