# B+ Tree

[B+ tree - Wikipedia](https://en.wikipedia.org/wiki/B%2B_tree)

`m` is order

For node, `m` childs, `m - 1` keys

For example, `m` is `4`, there are `3` key and `4` children pointer

```
|    | k0 |    | k1 |    | k2 |    |
| p0 |    | p1 |    | p2 |    | p3 |
```

For children / subtree / pointer

- Maximum `m` children
- Minimum `ceil(m / 2)` children

For keys / elements

- Maximum `m - 1` keys
- Minimum `ceil(m / 2) - 1` keys (except root node)

All leaf node linked to a single linked list

All key in leaf node



## Left / right biasing

[Databases: left biasing and right biasing in B+ tree insertion](https://gateoverflow.in/91462/left-biasing-and-right-biasing-in-b-tree-insertion)

插入並且分裂時左邊 key 比較多還是右邊 key 比較多 (ceil vs floor in left right)

Compare element:

- Left biasing use \<= and >

- Right biasing use \< and \>=

Index when split

- Left biasing use left side max as index

- Right biasing use right side min as index

Wiki use left biasing, but most of the example in internet use right biasing (also in school teaching)

Result of left / right biasing with same insert order can be different (even different in depth)



## Insertion 插入 (right biasing)

[5.29 B+ Tree Insertion | B+ Tree Creation example | Data Structure Tutorials - YouTube](https://www.youtube.com/watch?v=DqcZLulVJ0M)

當節點已滿

- 用中位數切分
  - Left have `floor((m + 1) / 2)`, right have `ceil((m + 1) / 2)`
- 當分裂的是 leaf node
  - 取出右邊最小 element (中位數) 作為 index 插入到 parent
- 當分裂的是 non-leaf node (internal or root)
  - 中位數 move to parent




## Deletion 刪除 (right biasing)

[5.30 B+ Tree Deletion| with example |Data structure & Algorithm Tutorials - YouTube](https://www.youtube.com/watch?v=pGOdeCpuwpI)

[Deletion from a B+ Tree](https://www.programiz.com/dsa/deletion-from-a-b-plus-tree)

Half full 半滿 mean `ceil(m / 2) - 1`

(1) 刪除 node 後仍然多於 `ceil(m / 2) - 1` keys -> it is ok, just delete

(2) 刪除 node 後 less then `ceil(m / 2) - 1` keys
- Try and check 從 sibling node 兄弟節點 borrowing 借用, use successor as index
- If can't (after 借用 sibling node will less than half full)
  - Merge: delete index, use smallest as index

(3) 刪除 node 是 index
- Use successor (replace by next node)

Check parent layer one by one until all node status is legal



## Visualization Tool / Simulator

[B-Sketcher (also for B+ Tree)](https://projects.calebevans.me/b-sketcher/)

[B+ Tree Visualization](https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html)



## Note

> B+ 樹背後的想法是內部節點可以有在預定範圍內的可變數目的子節點
> 
> 因此，B+ 樹不需要像其他自平衡二叉搜尋樹那樣經常的重新平衡


