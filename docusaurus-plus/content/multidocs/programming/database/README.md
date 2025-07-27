# Database 數據庫

## NoSQL (Not only SQL)

- Key-value

- Document 

- Graph

- ...

## ACID

[[極短篇] 資料庫的 ACID 是什麼？](https://lance.coderbridge.io/2021/04/24/short-what-is-acid/)

> Transaction, 一連串必須要一起進行的操作，如果一個操錯失敗，所以已經執行的操作都必須取消

- Atomicity 

- Consistency 

- Isolation 

- Durability

Just a 原子操作

## CAP theorem

[CAP定理101—分散式系統，有一好沒兩好. Cap Theorem 101 | by YH Yu | 後端新手村 | Medium](https://medium.com/%E5%BE%8C%E7%AB%AF%E6%96%B0%E6%89%8B%E6%9D%91/cap%E5%AE%9A%E7%90%86101-3fdd10e0b9a)

- Consistency: all client see all same data at same time

- Availability

- Partition tolerance: network connection

[henryr/cap-faq: The CAP FAQ](https://github.com/henryr/cap-faq)

## Eventually Consistency 最終一致性

保證最終會同步

## Strong Consistency 強一致性

N replica

W is number of write / udpate replica

R is number of read from replica

if W + R > N, Strong Consistency

it means atleast one of the W and R are overlap



