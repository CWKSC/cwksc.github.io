# Cyclic redundancy check (CRC)

Given G and D, find R

## Example

G = 1011, D = 110101, find R

Length of G = 4 bits

r = 4 - 1 = 3 bits

```
          111100
1011 / 110101000
       1011
       ----
        1100
        1011
        ----
         1110
         1011
         ----
          1010
          1011
          ----
             100
```

R = 100

\{D, R\} = 110101 100

