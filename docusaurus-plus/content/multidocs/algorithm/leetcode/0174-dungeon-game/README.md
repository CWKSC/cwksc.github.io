# 174. Dungeon Game

https://www.threads.net/@cwksc/post/DEwuYvWB6pg

騎士在左上角，公主在右下角

騎士只能每一步向右或向下移動

經過格子扣除生命值

生命值 \<= 0 立即死亡

---

找左上角到右下角

起點最少需要的生命值

---

這題不是找終點時最大數值的路徑 

---

從終點反推

在終點的時候最少需要多少生命值

---

終點是 -5，最少需要 6 hp

終點是 3，最少需要 1 hp

---

然後比較 right, down

min(left, right)

減 value

負數增加需要生命值

正數減少需要生命值

最多下降到 1

---

`max(min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j], 1)`

---

一開始做了錯的做法

開 2d array

`Node {hp, minHp}`

跟蹤生命值

選擇需要最少生命值的路徑

by top and left

---

沒有考慮到

`left {hp: 1, minHp: 2}`

`top {hp: 4, minHp: 3}`

current 0


會選擇 left (minHp 2 \< 3)

然後在碰到 -3 時 minHp -> 5

如果選擇 top 有 4 hp 可以拿去抵消

---

不是最優子結構  

---
