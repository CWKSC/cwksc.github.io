# Regex 正則表達式

[Regex教學：3分鐘快速了解正規表達式是什麼 - ALPHA Camp](https://tw.alphacamp.co/blog/regex)

[2. 正則表達式(Regular Expression). 正則表達式是用來檢查一個字串中是否含有某個字串，例如要找gmail的電子信箱，就… | by 柯頌竹 | Programming with Data | Medium](https://medium.com/programming-with-data/2-%E6%AD%A3%E5%89%87%E8%A1%A8%E9%81%94%E5%BC%8F-regular-expression-26b9b9b908c6)


## Predefined Character Classes

`\d` 任何數字

`\D` 任何非數字

`\w` 任何單字字元 (字母、數字、底線) 

`\W` 任何非單字字元

`\s` 任何空白字元

`\S` 任何非空白字元


## Capture Group

[Regex 群組與環顧 Groups & Lookaround - 正規表示法教學 Regular Expression Tutorial](https://www.fooish.com/regex-regular-expression/groups-lookaround.html)


## Lookahead

[Lookahead and lookbehind](https://javascript.info/regexp-lookahead-lookbehind)

- `(?=)`


## \b \B

[Java - Regular Expression - \b 與 \B 在regex中的分別 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10229585)



## Note 

```
(.)(?!\1)(.)\2(?!\2)(.)\3{2}(?!\3)
```

```
abbccc
122333
```




