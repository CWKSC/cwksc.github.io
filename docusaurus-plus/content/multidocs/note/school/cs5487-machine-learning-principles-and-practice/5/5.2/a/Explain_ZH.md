---
title: Explain ZH
---

### 直觀理解 (Intuition)

想像**核心密度估計 (Kernel Density Estimation, KDE)** 就像是在我們觀測到的每一個資料點上，堆起一小堆沙（代表一單位的機率質量）。這堆沙的形狀與寬度是由我們選擇的**核心函數 (Kernel function)** $\tilde{k}(x)$ 來控制的。

因為我們的核心函數是完美平衡的（不偏左也不偏右，即平均值為零），所以每一個獨立沙堆的「質量中心 (Center of mass)」都會剛好落在我們放置它的資料點 $x_i$ 上。

當我們在計算整個估計分佈 $\hat{p}(x)$ 的整體平均值（或期望值）時，本質上就是在找出所有這些沙堆組合在一起後的「總質量中心」。

這裡有兩個關鍵的洞察：

- 因為每一堆沙的重量完全相同（每一堆都貢獻了總機率的 $1/n$）。
- 而且因為每一堆沙都完美地以其對應的資料點 ($x_i$) 為中心。

整體的質量中心就會完美地等同於所有原始資料點的簡單算術平均，也就是**樣本平均值 (Sample mean)**。不論我們把獨立的沙堆弄得多寬或多窄（亦即改變核心的頻寬 Bandwidth），只要它們保持對稱並以資料點為中心，就不會改變整體的平均位置。

### 圖解：核心沙堆模型

```mermaid
graph TD
    subgraph Data Points 資料點
        x1(("x₁"))
        x2(("x₂"))
        x3(("x₃"))
    end

    subgraph Kernel Contributions 核心函數貢獻
        k1["以 x₁ 為中心\n平居值: x₁"]
        k2["以 x₂ 為中心\n平居值: x₂"]
        k3["以 x₃ 為中心\n平居值: x₃"]
    end

    x1 -->|放置 Kernel| k1
    x2 -->|放置 Kernel| k2
    x3 -->|放置 Kernel| k3

    subgraph Overall Distribution 整體分佈 p̂(x)
        Average["整體平均 = (x₁ + x₂ + x₃) / 3"]
    end

    k1 --> Average
    k2 --> Average
    k3 --> Average
```
