---
title: Explain ZH
---
### 直覺與概念 (Intuition)

在貝葉斯迴歸 (Bayesian regression) 中，我們在觀察到一些資料後，更新我們對模型參數 $\theta$ 的先驗信念 (prior beliefs)。這是由**貝氏定理 (Bayes' Theorem)** 來描述，它指出**後驗 (posterior)** (看到資料後我們的信念) 正比於**先驗 (prior)** (我們事先的信念) 乘以**概似函數 (likelihood)** (參數解釋觀察資料的程度)。

當先驗和概似函數都是高斯分佈 (Gaussian distributions) 時，情況會非常美好，因為兩個高斯分佈的乘積仍然是另一個高斯分佈！這種神奇的性質被稱為**共軛性 (conjugacy)**。因為先驗和概似函數家族「完美匹配」，所以後驗也會落在同一個分佈家族中。

### 數學推導解析 (Breaking Down the Math)

與其直接相乘龐大且令人生畏的高斯密度函數，對它們取**對數 (logarithms)** 然後相加會容易得多。我們這樣做是因為處理指數的和比相乘指數簡單很多。

1.  **對數概似 (Log-likelihood)**：代表資料擬合我們模型的程度。它本質上是我們的預測 ($\Phi^T \theta$) 與實際標籤 ($y$) 之間的馬哈拉諾比斯距離 (Mahalanobis distance)，並由雜訊共變異數矩陣 $\Sigma$ 進行縮放。
2.  **對數先驗 (Log-prior)**：代表我們認為權重不應過大的先驗信念，並由先驗共變異數 $\Gamma$ 縮放。
3.  **對數後驗 (Log-posterior)**：你只需將對數概似和對數先驗相加，這會得到一個依賴於 $\theta$ 的二次項總和。
4.  **配方法 (Completing the Square)**：這是一個代數技巧。我們強制我們得到的二次多項式看起來像是標準高斯 PDF 公式裡面的指數表示式。透過配對 $\theta^T (\dots) \theta$ 部分 (精度矩陣) 和 $\theta^T (\dots)$ 部分的係數，我們可以巧妙地讀出我們新的常態分佈的共變異數 ($\hat{\Sigma}_\theta$) 和平均數 ($\hat{\mu}_\theta$)。

### 項目的視覺化意義 (Visualizing the Terms)

*   **精度 (Precision, $\hat{\Sigma}_\theta^{-1}$)**：共變異數矩陣的反矩陣也被稱為「精度」。注意到 $\hat{\Sigma}_\theta^{-1} = \Gamma^{-1} + \Phi \Sigma^{-1} \Phi^T$。這表示：
    > 總資訊量 = 先驗資訊 + 來自資料的資訊
*   **平均數 (Mean, $\hat{\mu}_\theta$)**：後驗平均數的作用有點像先驗平均數 (這裡原本是 0) 和資料之間的「加權平均」。$\Phi \Sigma^{-1} y$ 這個項將平均數「拉」向最大概似估計 (MLE) 的解，但這又受到了我們編碼在 $\Gamma^{-1}$ 中的信念的懲罰或正則化 (regularization)。
