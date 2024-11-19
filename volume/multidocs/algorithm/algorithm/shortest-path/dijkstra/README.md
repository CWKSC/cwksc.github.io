# Dijkstra's algorithm

單源最短路徑

## Step 

初始原點到原點距離為零，到其他節點距離無限大

選取最短距離的節點為 visited

更新原點到 visited 到其他節點的距離

重複直到所有節點都 visited

## Example

這是一個菱形。左邊是 A，中間是 BC，右邊是 D

A 到 B 的距離為 3

A 到 C 的距離為 7

B 到 D 的距離為 9

C 到 D 的距離為 1

| Visited | A  | B   | C   | D    |
|---------|----|-----|-----|------|
|         | 0  | ∞   | ∞   | ∞    |
| A       | 0  | 3/A | 7/A | ∞    |
| A,B     | 0  | 3/A | 7/A | 12/B |
| A,B,C   | 0  | 3/A | 7/A | 10/C |
| A,B,C,D | 0  | 3/A | 7/A | 10/C |


## Note

不能有負權重



