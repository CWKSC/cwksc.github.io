# 23. Merge k Sorted Lists

這條不應該是 Hard 吧

簡單到不知道有什麼好解釋，又水一條

---

Priority Queue / Merge Sort

Python 有 heapq.heappush, heapq.heappop

可以做 Priority Queue

---

放 list 的 head node 進去

Pop 出來再把 next node push 進去

直至 heap empty

---

Merge Sort 就兩個兩個合併

