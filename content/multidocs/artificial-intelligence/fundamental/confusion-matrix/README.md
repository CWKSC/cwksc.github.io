# Confusion Matrix 混淆矩陣

[YC Note – 如何辨別機器學習模型的好壞？秒懂Confusion Matrix](https://ycc.idv.tw/confusion-matrix.html)

Talse / False, Positives / Negatives

T: Correct

F: Wrong

P: Predict Positive

N: Predict Negative

| Actual \ Predict | Positive | Negative |
| ---------------- | -------- | -------- |
| Positive         | TP       | FN       |
| Negative         | FP       | TN       |

TP: Predict Positive and correct

FN: Predict Negative but wrong

FP: Predict Positive but wrong

TN: Predict Negative and correct

[[統計筆記] Positive Predictive Value (PPV) & Negative Predictive Value (NPV) – Lazy Lazy programming](https://yypw.wordpress.com/2020/07/04/%E7%B5%B1%E8%A8%88%E7%AD%86%E8%A8%98-positive-predictive-value-ppv-negative-predictive-value-npv/)

## Precision 準確率 / Positive Predictive Value (PPV)

判斷陽性時，真的陽性機率

> 當一個人被「診斷出得病」時，此人「真的得病」的機率

$$
Precision = \frac{TP}{TP + FP}
$$

## Negative Predictive Value (NPV)

判斷陰性時，真的陰性機率

> 當一個人被「診斷沒得病」時，此人「真的沒得病」的機率是多少

$$
NPV = \frac{TN}{TN + FN}
$$

## Recall 召回率 / Sensitivity 靈敏度 / True Positive Rate 真陽性率

實際為陽性的樣本中，判斷為陽性的比例 

$$
Recall = \frac{TP}{TP + FN}
$$

## Specificity 特異度 / True Negative Rate 真陰性率

實際為陰性的樣本中，判斷為陰性的比例

$$
Specificity = \frac{TN}{TN + FP}
$$

## F-measure / F1-score

$$
{\displaystyle F_{\beta }=(1+\beta ^{2})\cdot {\frac {\mathrm {precision} \cdot \mathrm {recall} }{(\beta ^{2}\cdot \mathrm {precision} )+\mathrm {recall} }}} \\
$$

$$
{\displaystyle F_{1}={\frac {2}{\mathrm {recall} ^{-1}+\mathrm {precision} ^{-1}}}=2{\frac {\mathrm {precision} \cdot \mathrm {recall} }{\mathrm {precision} +\mathrm {recall} }}}
$$

## Area under curve (AUC) 

[分類器評估方法 — ROC曲線、AUC、Accuracy、PR曲線 | by 行銷資料科學 | Marketingdatascience | Medium](https://medium.com/marketingdatascience/%E5%88%86%E9%A1%9E%E5%99%A8%E8%A9%95%E4%BC%B0%E6%96%B9%E6%B3%95-roc%E6%9B%B2%E7%B7%9A-auc-accuracy-pr%E6%9B%B2%E7%B7%9A-d3a39977022c)

### Receiver operation characteristics curve (ROC)

[Receiver operating characteristic - Wikipedia](https://en.wikipedia.org/wiki/Receiver_operating_characteristic)




