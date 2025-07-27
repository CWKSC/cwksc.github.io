# Distributed hash table 分佈式哈希表

## Chord protocol 和弦協議

> MIT 2001 年發表的一種 DHT 演算法

[Day 24 - Data Partitioning - Distributed Hash Table and Consistent Hashing - CHORD(上) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10226592)

[Understanding Distributed Hash Tables: An In-Depth Guide to Chord | by Sutanu Dutta | Medium](https://medium.com/@sutanu3011/uncover-the-mystery-of-chord-56f8d216b7e0)

[Key lookup in Chord with finger table | by Jing Yang | Medium](https://medium.com/@jingyang_56841/key-lookup-in-chord-with-finger-table-c0179bafae13)

存在一個環

有 `2^m` 個 `ID` 可用

---

每一個 `ID` 代表一個伺服器 `N`

每一個 `Key` 會儲存在最接近的 `N`，按照 `ID`，順時針

Client 會隨意連接上其中一個 `N`，詢問某一個 `Key` 放在哪一個伺服器

---

原始方法是一直尋找 `N` 的 Successor，直至到達儲存 `K` 的 `N`

`O(n)`，太慢

---

Chord 協議在每一個 `N` 之中儲存了一個表，去儲存更加多的 Successor

這個表稱為 Finger Table

`Successor(k)` 會返回 `k` 儲存在順時針最接近的 `N`

Finger Table 的第 `i` 個 row 會包含 `Successor((n + 2^{i - 1}) mod 2^m)`

注意 `i` start from `1` (according to ppt, I find some website start with `0`)

例如第 `1` 個 row，`Successor((n + 2^{1 - 1}) mod 2^m) = Successor(n + 1)`，即係 N 的下一格

例如第 `2` 個 row，`Successor((n + 2^{2 - 1}) mod 2^m) = Successor(n + 2)`

例如第 `3` 個 row，`Successor((n + 2^{3 - 1}) mod 2^m) = Successor(n + 4)`

例如第 `4` 個 row，`Successor((n + 2^{4 - 1}) mod 2^m) = Successor(n + 8)`

---

尋找在 Finger Table 中最近 `K` 的 `N`，直至到達儲存 `K` 的 `N`

### Example

`m = 4`, `2^4 = 16` 個 `ID`, 假設全部 `ID` 都被使用，`16` 個伺服器

Client 連接 `N2`，尋找 `K7`

Finger Table in `N2`:

```
1    N3
2    N4
3    N6
4    N10
```

`N6` 最近 `K7` (`7 - 6` > `7 - 4` > `7 - 3`)

Go `N6`

Finger Table in `N6`:

```
1    N7
2    N8
3    N10
4    N14
```

`N7` 最近 `K7`

Go `N7`

Found `K7`

---

注意他是一個 Circle 環

所以如果 Client 連接 `N8`，尋找 `K1`

Finger Table in `N8`:

```
1    N9
2    N10
3    N12
4    N16
```

`N16` 會是最近 `K1`，請考慮循環兜圈的距離

---

這樣的搜尋方式等於二分搜索

`O(log n)`

### Node 加入 / 刪除

[Day 25 - Data Partitioning - Distributed Hash Table and Consistent Hashing - CHORD(下) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10226984)



