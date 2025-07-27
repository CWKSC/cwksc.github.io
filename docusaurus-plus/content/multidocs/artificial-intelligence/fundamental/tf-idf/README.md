# TF-IDF

## TF: Term Frequency

$$
TF(t, d) = \frac{f_{t,d}}{|d|}
$$

- $f_{t,d}$: 詞 t 在文件 d 中的出現次數
- $|d|$: 文件 d 的詞數

> 這個數字是對詞數（term count）的標準化

### Example

d: `a b c d a a b`

$|d|$ = 7

TF("a", d) = 3 / 7

TF("b", d) = 2 / 7

TF("c", d) = TF("d", d) = 1 / 7

## IDF: Inverse Document Frequency

$$
IDF(t) = log(\frac{D}{df_t})
$$

D: Total number of documents

df_t: Number of documents containing term t

### Example

$d_1$ = `a`

$d_2$ = `a b`

$d_3$ = `a b c`

$d_4$ = `a b c`

$D$ = 4

IDF("a") = log(4 / 4)

IDF("b") = log(4 / 3)

IDF("c") = log(4 / 2)

## TF-IDF

$$
TFIDF(t, d) = log(1 + TF(t, d)) \times IDF(t)
$$
