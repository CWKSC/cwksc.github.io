# Decision tree 決策樹



## Classification

[Decision Tree Classification Clearly Explained! - YouTube](https://youtu.be/ZVR2Way4nwQ?si=FxysjNpS0B1HYXYU)

### Entropy

Other name like `Info`, same meaning

$$
\text{Entropy} = \sum - p_i log(p_i)
$$

$$
\text{Info}(D) = \sum - p_i log(p_i)
$$

For split attribute A

$$
\text{Info}_A(D) = \sum \frac{|D_j|}{|D|} \text{Info}(D_j)
$$

### Information Gain (IG)

Other name like `Gain`, same meaning

`w_i` is weight

$$
\text{InformationGain} = \text{Entropy}(\text{parent}) - \sum w_i \text{Entropy}(\text{child}_i)
$$

$$
\text{Gain}_A(D) = \text{Info}(D) - \text{Info}_A(D)
$$

### Split Info

$$
\text{SplitInfo}_A(D) = \sum \frac{|D_j|}{|D|} log_2(\frac{1}{\frac{|D_j|}{|D|}})
$$

### Information Gain Ratio

$$
\text{GainRatio}_A(D) = \frac{\text{Gain}_A(D)}{\text{SplitInfo}_A(D)}
$$

### Gini

$$
\begin{align}
\text{Gini}(D) &= \sum p_i (1 - p_i) \\
&= 1 - \sum p_i^2
\end{align}
$$

For split attribute A

$$
\text{Gini}_A(D) = \sum \frac{|D_j|}{|D|} \text{Gini}(D_j)
$$



## Regression 

[Decision Tree Regression Clearly Explained! - YouTube](https://www.youtube.com/watch?v=UhY5vPfQIrA)

### Variance Reduction

$$
\text{Var} = \frac{1}{n} \sum (y_i - \bar{y})^2
$$

$$
\text{Variance Reduction} = \text{Var}(parent) - \sum w_i \text{Var}(child_i)
$$



## Rule-Based Classification


