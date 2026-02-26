---
title: Answer ZH
---

### 先備知識

* 貝氏決策規則 (Bayes Decision Rule, BDR)
* 0-1 損失函數 (0-1 Loss Function)
* 條件風險 (Conditional Risk)
* 眾數的定義 (Definition of Mode)

### 逐步推導

1. **分析當 $q \rightarrow 0$ 時的損失函數：**
    明可夫斯基損失為 $L_q(g(x), y) = |g(x) - y|^q$。
    讓我們看看當 $q \rightarrow 0$ 時的極限：
    * 如果 $g(x) \neq y$，則 $|g(x) - y| > 0$。任何正數的 0 次方都是 1。所以，$\lim_{q \to 0} |g(x) - y|^q = 1$。
    * 如果 $g(x) = y$，則 $|g(x) - y| = 0$。對於任何 $q > 0$，$0^q = 0$。所以，$\lim_{q \to 0} |0|^q = 0$。

    因此，當 $q \rightarrow 0$ 時，損失函數趨近於 0-1 損失函數（通常用於分類，但在這裡應用於連續空間）：
    $$L_0(g(x), y) = \begin{cases} 0 & \text{如果 } g(x) = y \\ 1 & \text{如果 } g(x) \neq y \end{cases}$$

    *注意：在嚴格的連續設定中，精確猜中 $y$ 的機率為零。更嚴謹的方法是考慮在 $g(x)$ 周圍有一個小的容差 $\epsilon$，即如果 $|g(x) - y| < \epsilon$ 則損失為 0，否則為 1，然後取 $\epsilon \rightarrow 0$ 的極限。*

2. **定義帶有 $\epsilon$-容差的條件風險：**
    讓我們定義一個損失函數 $L_\epsilon$：
    $$L_\epsilon(g(x), y) = \begin{cases} 0 & \text{如果 } |g(x) - y| \le \epsilon \\ 1 & \text{如果 } |g(x) - y| > \epsilon \end{cases}$$

    條件風險為：
    $$R(x) = \int_{-\infty}^{\infty} L_\epsilon(g(x), y) p(y|x) dy$$
    $$R(x) = \int_{|g(x)-y| > \epsilon} 1 \cdot p(y|x) dy + \int_{g(x)-\epsilon}^{g(x)+\epsilon} 0 \cdot p(y|x) dy$$
    $$R(x) = \int_{|g(x)-y| > \epsilon} p(y|x) dy$$

3. **最小化條件風險：**
    我們知道總機率為 1：
    $$\int_{-\infty}^{\infty} p(y|x) dy = 1$$
    $$\int_{|g(x)-y| > \epsilon} p(y|x) dy + \int_{g(x)-\epsilon}^{g(x)+\epsilon} p(y|x) dy = 1$$

    所以，風險可以改寫為：
    $$R(x) = 1 - \int_{g(x)-\epsilon}^{g(x)+\epsilon} p(y|x) dy$$

    為了最小化 $R(x)$，我們必須最大化積分項：
    $$\max_{g(x)} \int_{g(x)-\epsilon}^{g(x)+\epsilon} p(y|x) dy$$

4. **取 $\epsilon \rightarrow 0$ 的極限：**
    對於非常小的 $\epsilon$，積分可以近似為區間寬度乘以中心點的函數高度：
    $$\int_{g(x)-\epsilon}^{g(x)+\epsilon} p(y|x) dy \approx 2\epsilon \cdot p(g(x)|x)$$

    所以，我們想要最大化：
    $$\max_{g(x)} 2\epsilon \cdot p(g(x)|x)$$

    因為 $2\epsilon$ 是一個正常數，這等同於最大化機率密度函數本身：
    $$g^*(x) = \arg\max_{y} p(y|x)$$

5. **解釋結果：**
    使機率密度函數 $p(y|x)$ 最大化的值 $y$，根據定義，就是分佈的**眾數 (mode)**。
    因此，$g^*(x) = \text{mode}(y|x)$。
