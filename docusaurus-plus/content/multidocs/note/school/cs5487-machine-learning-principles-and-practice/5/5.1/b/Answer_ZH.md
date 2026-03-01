---
title: Answer ZH
---

# 解答 (b)

## 預備知識 (Prerequisites)
- **和的變異數 (Variance of a Sum - 獨立變數)**
- **核心函數的性質 (Kernel Function Properties)**

## 逐步推導 (Step-by-Step Derivation)

1. **寫出 KDE 函數 (Express the KDE):**
   KDE (核心密度估計) 定義為 $\hat{p}(x) = \frac{1}{n}\sum_{i=1}^n \frac{1}{h^d} k\left(\frac{x - x_i}{h}\right)$。
   
2. **對 KDE 取變異數 (Apply Variance to the KDE):**
   我們希望計算 $\hat{p}(x)$ 關於隨機樣本 $X = \{x_1, \dots, x_n\}$ 的變異數。
   $$
   \mathrm{var}_X(\hat{p}(x)) = \mathrm{var}_X \left( \frac{1}{n h^d} \sum_{i=1}^n k\left(\frac{x - x_i}{h}\right) \right)
   $$

3. **利用獨立樣本的變異數性質 (Use Variance Properties for Independent Samples):**
   由於樣本 $x_1, \dots, x_n$ 是獨立同分配 (i.i.d.) 抽取出來的，其和的變異數等於各別變異數的和：$\mathrm{var}(\sum Z_i) = \sum \mathrm{var}(Z_i)$。
   此外，提出常數 $c$ 會給出 $\mathrm{var}(c Z) = c^2 \mathrm{var}(Z)$。
   $$
   \mathrm{var}_X(\hat{p}(x)) = \frac{1}{n^2 h^{2d}} \sum_{i=1}^n \mathrm{var}_{x_i} \left( k\left(\frac{x - x_i}{h}\right) \right)
   $$
   因為每個 $x_i \sim p$ 都具有相同的分佈，連加符號中的所有項都是相等的。令 $\mu \sim p$ 作為虛擬變數 (dummy variable)：
   $$
   \mathrm{var}_X(\hat{p}(x)) = \frac{n}{n^2 h^{2d}} \mathrm{var}_{\mu \sim p} \left( k\left(\frac{x - \mu}{h}\right) \right) = \frac{1}{n h^{2d}} \mathrm{var}_{\mu} \left( k\left(\frac{x - \mu}{h}\right) \right)
   $$

4. **套用變異數上界限制 (Apply the Variance Upper Bound, Eq 5.3):**
   使用提示中的 $\mathrm{var}(Z) \le \mathbb{E}[Z^2]$：
   $$
   \mathrm{var}_{\mu} \left( k\left(\frac{x - \mu}{h}\right) \right) \le \mathbb{E}_{\mu} \left[ \left( k\left(\frac{x - \mu}{h}\right) \right)^2 \right]
   $$
   因此我們得到：
   $$
   \mathrm{var}_X(\hat{p}(x)) \le \frac{1}{n h^{2d}} \mathbb{E}_{\mu} \left[ \left( k\left(\frac{x - \mu}{h}\right) \right)^2 \right]
   $$

5. **套用核心函數的最大值限制 (Apply the Kernel Maximum Bound, Eq 5.4):**
   我們可以將核心函數的平方拆成兩項，並利用核心函數的最大值來限制其中一項。令 $\max_z k(z)$ 表示核心函數輸出的最大值 (這等同於題目符號中的 $\max_x(k(x))$)。
   $$
   \left( k\left(\frac{x - \mu}{h}\right) \right)^2 = k\left(\frac{x - \mu}{h}\right) \cdot k\left(\frac{x - \mu}{h}\right) \le \max_z(k(z)) \cdot k\left(\frac{x - \mu}{h}\right)
   $$
   將這個不等式代入期望值中：
   $$
   \mathbb{E}_{\mu} \left[\left( k\left(\frac{x - \mu}{h}\right) \right)^2\right] \le \mathbb{E}_{\mu} \left[ \max_z(k(z)) \cdot k\left(\frac{x - \mu}{h}\right) \right] = \max_z(k(z)) \cdot \mathbb{E}_{\mu} \left[ k\left(\frac{x - \mu}{h}\right) \right]
   $$
   將此結果代回變異數的不等式中：
   $$
   \mathrm{var}_X(\hat{p}(x)) \le \frac{1}{n h^{2d}} \max_z(k(z)) \mathbb{E}_{\mu} \left[ k\left(\frac{x - \mu}{h}\right) \right]
   $$

6. **與期望密度 $\mathbb{E}[\hat{p}(x)]$ 建立關聯 (Relate Back to Expected Density):**
   重新整理右側的式子，使其恢復到在 Part (a) 所推導出來的 $\mathbb{E}[\hat{p}(x)]$ 形式。我們知道 $\tilde{k}(z) = \frac{1}{h^d} k(\frac{z}{h})$，所以：
   $$
   \mathrm{var}_X(\hat{p}(x)) \le \frac{1}{n h^d} \max_z(k(z)) \cdot \mathbb{E}_{\mu} \left[ \frac{1}{h^d} k\left(\frac{x - \mu}{h}\right) \right]
   $$
   我們在 (a) 中已經證明過 $\mathbb{E}_{\mu} \left[ \frac{1}{h^d} k\left(\frac{x - \mu}{h}\right) \right] = \mathbb{E}_X[\hat{p}(x)]$。替換這整個區塊：
   $$
   \mathrm{var}_X(\hat{p}(x)) \le \frac{1}{nh^d} \max_z(k(z)) \mathbb{E}_X[\hat{p}(x)]
   $$
   使用題目要求的核心最大值符號 $\max_x(k(x))$，我們就得到了：
   $$
   \mathrm{var}_X(\hat{p}(x)) \le \frac{1}{nh^d}\max_x(k(x))\mathbb{E}[\hat{p}(x)]
   $$
