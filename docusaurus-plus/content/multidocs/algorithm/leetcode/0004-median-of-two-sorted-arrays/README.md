# 4. Median of Two Sorted Arrays

[Median of Two Sorted Arrays - LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)

找出兩個 sorted array 合併後的 median

難點在於 O(log(m + n))

直接合併是 O(n + m)，不夠快

---

二分搜索

以第一個陣列為主

找出分界線，滿足：

- 左邊所有元素比右邊所有元素大
- 元素數目為所有數目的一半
 
二分搜索調整第一個陣列分界線

第二個陣列分界線為 所有數目一半 減去 第一個陣列分界線的左邊元素數目 

---

左邊界 i = 0

右邊界 j = len(nums1) - 1

---

第一個 array 分界線切在中間

因為 median 所在的位置一定是 total / 2

第二個 array 分界線是第一個分界線用剩的數目

---

切分完檢查滿不滿足條件

（左邊所有 value > 右邊）

---

右邊 > 左邊代表切的位置太右邊

把二分搜索的右邊界移去中間

反之亦然

---

Edge case

其中一個 array 完全大於另一個 array

檢測頭尾  


