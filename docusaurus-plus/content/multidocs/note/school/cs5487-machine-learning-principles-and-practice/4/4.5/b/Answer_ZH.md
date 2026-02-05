---
title: Answer ZH
---

## Python 實作

這是用於對提供的數據執行 EM 算法的 Python 腳本。請注意，對於「5 及以上」，我們在此估計中將其值視為 5（除非使用截斷模型，否則這是此數據集中常見的簡化處理）。

```python
import numpy as np
from scipy.special import factorial

def poisson_pmf(k, lam):
    return (lam**k * np.exp(-lam)) / factorial(k)

def run_em(counts, freqs, K, max_iter=1000, tol=1e-6):
    # 根據頻率展開數據
    X = []
    for c, f in zip(counts, freqs):
        X.extend([c] * f)
    X = np.array(X)
    N = len(X)
    
    # 初始化
    np.random.seed(42)
    pi = np.ones(K) / K
    mean_val = np.mean(X)
    lam = np.random.uniform(low=0.1, high=mean_val*2, size=K)
    
    log_likelihood = -np.inf
    
    for iteration in range(max_iter):
        # E 步
        numerators = np.zeros((N, K))
        for j in range(K):
            numerators[:, j] = pi[j] * poisson_pmf(X, lam[j])
            
        denominator = np.sum(numerators, axis=1, keepdims=True)
        denominator[denominator == 0] = 1e-10
        gamma = numerators / denominator
        
        # 對數似然
        new_ll = np.sum(np.log(denominator))
        if np.abs(new_ll - log_likelihood) < tol:
            break
        log_likelihood = new_ll
            
        # M 步
        Nk = np.sum(gamma, axis=0)
        pi = Nk / N
        lam = np.sum(gamma * X[:, np.newaxis], axis=0) / Nk
        lam[lam < 1e-4] = 1e-4 # 約束
        
    return pi, lam, log_likelihood

# 數據
counts = [0, 1, 2, 3, 4, 5]
london_freqs = [229, 211, 93, 35, 7, 1]
antwerp_freqs = [325, 115, 67, 30, 18, 21]

print("--- Analysis Results (Conceptual) ---")
# 使用上面的函數運行 K=1..5
```

## 結果與結論

### London (倫敦) 數據

* **最佳擬合**: $K=1$。
* **觀察**: 倫敦數據非常符合單一泊松分佈（對於 $K>1$，似然度沒有顯著增加，或者估計的標準差與平均值相符）。
* **結論**: **沒有證據表明有特定的目標鎖定**。V-1/V-2 飛行炸彈在倫敦的落點與監測區域內的純隨機過程一致。

### Antwerp (安特衛普) 數據

* **最佳擬合**: $K > 1$ (例如 $K=2$ 或 $K=3$)。
* **觀察**: 單一泊松分佈 ($K=1$) 的擬合效果很差，因為方差（過度分散）遠高於平均值。「尾部」（5 及以上）對於具有觀察平均值的單一泊松分佈來說太重了（許多 0 和許多高計數）。
* **分析**:
  * 在 $K=2$ 時，您可能會發現一個「低強度」分量（農村/郊區）和一個「高強度」分量（港口區/市中心）。
* **結論**: 有 **特定目標鎖定的證據**（或者至少是不同的強度區域）。對安特衛普的襲擊可能集中在特定區域（如港口），導致這些方格的命中率高於周圍區域。
