# 41. First Missing Positive

尋找列表中不存在的最小正整數

---

樸素做法是

sort, loop

match 到不 match 就 return

但這是 O(nlog(n))

---

有個巧妙做法 O(n)

利用負數標記存不存在

---

先把所有負整數 = 0

loop nums

nums[abs(n) - 1] *= -1

---

反轉 abs(n) - 1 index 的元素去 negative

超出 len(nums) 無視

---

如果 nums[i] 負數

代表存在 i + 1

如果 nums[i] 正數

代表不存在 i + 1

---

另外考慮 0 不能被反轉為 negative

所以把數值設定為 - len(nums) - 1

去代表存在  

