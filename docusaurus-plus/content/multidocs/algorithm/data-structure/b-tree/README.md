# B Tree

[B樹 - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/B%E6%A0%91)

[[資料結構]B-tree - Chacha - Medium](https://medium.com/@chacha0519/%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B-b-tree-f33fdd09d5db)

[【資料結構】平衡搜索樹 - 紅黑樹、B樹(2-3,2-3-4樹)、B+樹 | Z1N's house](https://z1nhouse.github.io/post/5lQAWUQWk/#%E4%BD%95%E8%AC%82%E5%B9%B3%E8%A1%A1%E6%90%9C%E7%B4%A2%E6%A8%B9)

> Binary Search Tree 有個致命缺點，就是當這個樹狀資料結構不平衡時會使這個資料結構喪失其優勢

Use 平衡搜索樹（Balanced Search Tree）

- AVL Tree
- Red Black Tree 紅黑樹
- B Tree (Family)

For B Tree

- 每個 node 最多有 `m` 個子樹 (最多 `m - 1` 個元素) (`m` is `order`)
- 所有 leaf 在同一層上
- internal 內部節點 

> 當插入資料會超過此節點所限制數量 m 時，B-tree 會進行分裂

> 左小右大

## Insertion 插入

> 所有的插入都從根節點開始
> 
> 如果節點擁有的元素數量小於最大值 m
> 插入到這一節點，且保持節點中元素有序
> 
> 否則，這一節點已經滿了，平均地分裂成兩個節點：
> - 從該節點的原有元素和新的元素中選擇出中位數
> - 小於這一中位數的元素放入左邊節點，大於這一中位數的元素放入右邊節點，中位數作為分隔值
> - 分隔值被插入到父節點中，這可能會造成父節點分裂，分裂父節點時可能又會使它的父節點分裂，以此類推
> - 如果沒有父節點（這一節點是根節點），就建立一個新的根節點（增加了樹的高度）



