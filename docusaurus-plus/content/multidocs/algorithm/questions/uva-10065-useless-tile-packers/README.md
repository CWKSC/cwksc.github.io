# UVa 10065 Useless Tile Packers

https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=16&page=show_problem&problem=1006

有一塊多邊形瓷磚

給出構成這個多邊形的點，給出的順序為逆時針

---

有一個容器，形狀為瓷磚的最小凸多邊形

問有多少百分比的面積會被浪費 

---

用 Graham's scan 求出 convex hull 凸包

再用行列式求面積就可以了

---

Find Polygon Area:

https://mathworld.wolfram.com/PolygonArea.html

## Reference

[UVa 10065: Useless Tile Packers | Yeecy 程式雜筆](https://adnrs.github.io/UVa/23252.html)
