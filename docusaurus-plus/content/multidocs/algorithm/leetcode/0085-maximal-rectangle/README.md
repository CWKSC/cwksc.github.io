# 85. Maximal Rectangle

0 1 Matrix 中 1 的最大長方形面積

---

開三個 array

left, right, height

代表左右邊界和高度

max (left - right) * height

---

另一個做法

每一行看成 histogram

用 Monotonic Stack 找最大長方形面積

但這要原本已經知道這個做法


