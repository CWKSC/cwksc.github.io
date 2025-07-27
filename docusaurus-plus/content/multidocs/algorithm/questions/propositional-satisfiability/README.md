# Propositional Satisfiability 布爾可滿足性問題

Given input:

```cpp
a
q + !q
p & q + r & (s + !t)
a & (b + !c) & (d + f + g) & !(d + f + g)
p & !p 
```

Output 滿足 Propositional 的可能性，只要其中一個可能使 Propositional true 就 output `YES`，else `NO`

e.g. 

`p & q & r` will true when p, q, r = true, so output YES


`p & !p` always false, no possible to make it true, so output NO

```
YES
YES
YES
NO
NO
```

用 Shunting Yard Algorithm (排程場演算法) 把中綴轉為後綴表達式 reverse polish notation 逆波蘭表示法

Shunting Yard Algorithm (排程場演算法):
https://zh.wikipedia.org/zh-hk/%E8%B0%83%E5%BA%A6%E5%9C%BA%E7%AE%97%E6%B3%95

Reverse polish notation (逆波蘭表示法):
https://zh.wikipedia.org/zh-hk/%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E7%A4%BA%E6%B3%95

e.g.

`a + b` 轉為 `a b +`

`a + b * c`  轉為 `a b + c *`

`p & q + r & (s + !t)`  轉為 `p q & r s t ! + & +`

這種形式很方便去評估表達式 with stack

最後窮舉所有變量布爾值可能，evaluate 後綴表達式，只要其中一個 true 就結束
