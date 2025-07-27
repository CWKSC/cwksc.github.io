# 127. Word Ladder

https://www.threads.net/@cwksc/post/DEzmLr0huqV

有 word list, begin, end word

從 begin 轉變到 end word

需要的最少步驟

---

只能用 word list 中的 word

轉變指更改其中一個字元

這題明顯就 BFS

---

有可以 AC 但錯的做法  

---

首先拿到這題

第一件想的事，就是

—— 怎樣找轉換的狀態

---

1. Regex 然後 loop word list

2. Loop 26 個英文字母 查在不在 word list

兩種方法都能找到

但比較慢

---

我想到可以 loop 一次 word list

建立 n 個 hash table

`list<dict<string, set>>`

---

index 代表修改的字元位置

裏面 dict 的 key 是 string

是除了這個修改字元之外的字

---

例如 abc

```python
[0]: { "bc": set("a") }
[1]: { "ac": set("b") }
[2]: { "ab": set("c") }
```


這樣的話，如果我有 xbc

我可以去查 [0]["bc"]

就知道修改這個字元之後

存在在 word list 的 word

---

剩餘的部份就 BFS

用 deque + visited set

我看到有沒用 visited set

直接 delete word list 的做法能 AC

LeetCode 應該要再加一些Test case 在這題（

---

看到可以

- `*bc`

- `a*c`

- `ab*`

全部放入 dict 再指向一個 string list

感覺比我簡單

```json
{
    "*bc": ["abc"],
    "a*c" : ["abc"],
    "ab*" : ["abc"],
}  
```

