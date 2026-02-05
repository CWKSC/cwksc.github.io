---
title: Answer ZH
---

## 預備知識

* **泊松分佈 (Poisson Distribution)**：一種離散概率分佈，表示在固定時間間隔內發生給定數量事件的概率。概率質量函數 (PMF)：$P(k|\lambda) = \frac{\lambda^k e^{-\lambda}}{k!}$。
* **混合模型 (Mixture Model)**：一種概率模型，用於表示整體群體中存在的子群體。
* **期望最大化 (EM) 算法**：一種迭代方法，用於在統計模型依賴於未觀察到的潛在變量時，尋找參數的最大似然或最大後驗 (MAP) 估計。
  * **E 步**：計算給定當前參數下潛在變量的期望值。
  * **M 步**：更新參數以最大化給定預期潛在變量下的似然函數。

## 分步解答

### 1. 對數似然函數

設潛在變量 $Z = \{z_1, \dots, z_n\}$，其中 $z_i \in \{1, \dots, K\}$ 指示產生 $x_i$ 的分量，或者表示為獨熱向量 $z_i = [z_{i1}, \dots, z_{iK}]^T$。

完整數據的對數似然為：
$$
\ln p(X, Z|\theta) = \sum_{i=1}^n \sum_{j=1}^K z_{ij} \ln (\pi_j P(x_i|\lambda_j))
$$
$$
= \sum_{i=1}^n \sum_{j=1}^K z_{ij} [\ln \pi_j + \ln (\frac{1}{x_i!} e^{-\lambda_j} \lambda_j^{x_i})]
$$
$$
= \sum_{i=1}^n \sum_{j=1}^K z_{ij} [\ln \pi_j - \lambda_j + x_i \ln \lambda_j - \ln(x_i!)]
$$

### 2. E 步 (期望)

我們計算在給定觀測數據 $X$ 和當前參數 $\theta^{(t)}$ 的情況下，潛在變量 $z_{ij}$ 的期望值。這個量通常稱為 $\gamma_{ij}$ (責任度, responsibility)：

$$
\gamma_{ij}^{(t)} = E[z_{ij}|x_i, \theta^{(t)}] = P(z_{ij}=1|x_i, \theta^{(t)})
$$

使用貝葉斯定理：
$$
\gamma_{ij}^{(t)} = \frac{\pi_j^{(t)} P(x_i|\lambda_j^{(t)})}{\sum_{l=1}^K \pi_l^{(t)} P(x_i|\lambda_l^{(t)})}
$$

其中 $P(x_i|\lambda) = \frac{e^{-\lambda}\lambda^{x_i}}{x_i!}$。

### 3. M 步 (最大化)

我們針對 $\theta$ 最大化完整數據對數似然的期望。Q 函數為：
$$
Q(\theta, \theta^{(t)}) = \sum_{i=1}^n \sum_{j=1}^K \gamma_{ij}^{(t)} [\ln \pi_j - \lambda_j + x_i \ln \lambda_j + \text{常數}]
$$

**更新 $\pi_j$**:
這是在約束 $\sum \pi_j = 1$ 下最大化 $\sum_{i=1}^n \sum_{j=1}^K \gamma_{ij}^{(t)} \ln \pi_j$。使用拉格朗日乘數法，我們得到：
$$
\pi_j^{(t+1)} = \frac{1}{n} \sum_{i=1}^n \gamma_{ij}^{(t)} = \frac{N_j}{n}
$$
其中 $N_j = \sum_{i=1}^n \gamma_{ij}^{(t)}$ 是分配給分量 $j$ 的有效數據點數量。

**更新 $\lambda_j$**:
我們對 $Q$ 函數關於 $\lambda_j$ 求導數並設為 0：
$$
\frac{\partial Q}{\partial \lambda_j} = \sum_{i=1}^n \gamma_{ij}^{(t)} [-1 + \frac{x_i}{\lambda_j}] = 0
$$
$$
-\sum_{i=1}^n \gamma_{ij}^{(t)} + \frac{1}{\lambda_j} \sum_{i=1}^n \gamma_{ij}^{(t)} x_i = 0
$$

由於 $\sum_{i=1}^n \gamma_{ij}^{(t)} = N_j$:
$$
-N_j + \frac{1}{\lambda_j} \sum_{i=1}^n \gamma_{ij}^{(t)} x_i = 0
$$

$$
\lambda_j^{(t+1)} = \frac{\sum_{i=1}^n \gamma_{ij}^{(t)} x_i}{N_j} = \frac{\sum_{i=1}^n \gamma_{ij}^{(t)} x_i}{\sum_{i=1}^n \gamma_{ij}^{(t)}}
$$

### 與 ML 估計的關係 (問題 2.1)

在問題 2.1 (標準泊松 ML 估計) 中，$\lambda$ 的最大似然估計僅僅是樣本均值：
$$
\lambda_{ML} = \frac{\sum_{i=1}^n x_i}{n}
$$

分量 $j$ 的 M 步估計 $\lambda_j^{(t+1)}$ 是樣本的**加權平均值**。
* 每個樣本 $x_i$ 不是均等地貢獻（權重 $1/n$），而是根據其**責任度** $\gamma_{ij}^{(t)}$（即樣本 $i$ 屬於分量 $j$ 的概率）進行加權。
* 分母 $N_j$ 是這些權重的總和，用於歸一化估計值。

因此，M 步執行的是針對每個分量的加權最大似然估計，基於當前數據點對該分量的軟分配。
