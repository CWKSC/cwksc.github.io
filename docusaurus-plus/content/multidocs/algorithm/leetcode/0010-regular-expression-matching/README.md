# 10. Regular Expression Matching

實現簡化版 Regex，只支援 . *

用內置 library 可以 AC，笑死

Regex 通常是用 FSM (Finite State Machine) 或者 NFA (Nondeterministic Finite Automaton)

但解這題不需要，不要做得太複雜

---

Recursion + DP

---

兩個 pointer i, j

i 指住 string s

j 指住 pattern p

---

Case 1: char / .

直接 == match

---

Case 2: 後面有 star

- Match，i 向右一格 -> `(i + 1, j)`

- Not match，i 不動，j + 2 跳兩格 -> `(i, j + 2)`

---

DFS 每一條分支

---

考慮 test case

```
string = "aaa"
pattern = "a*b*a"
output = true
```

Match `(aa)()(a)`

2 個 a，0 個 b，1 個 a

---

DP 的部分

每次選擇分支會縮減問題

消耗 string 和 pattern，變成子問題

這些子問題都是獨立的

---

解 `("aaa", "a*b*a")` 需要解下面這些子問題：
- `("aaa", "b*a")`
- `("aa", "a*b*a")`
- `("aa", "b*a")`
- `("a", "a*b*a")`
- `("a", "b*a")`
- `("a", "a")`

