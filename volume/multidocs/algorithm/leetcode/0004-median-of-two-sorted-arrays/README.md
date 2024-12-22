# 4. Median of Two Sorted Arrays

[Median of Two Sorted Arrays - LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)


二分搜索

以第一個陣列為主

找出分界線，滿足：

- 左邊所有元素比右邊所有元素大
- 元素數目為所有數目的一半
 
二分搜索調整第一個陣列分界線

第二個陣列分界線為 所有數目一半 減去 第一個陣列分界線的左邊元素數目 

