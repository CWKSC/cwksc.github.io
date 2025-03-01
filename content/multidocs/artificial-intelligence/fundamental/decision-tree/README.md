# Decision tree 決策樹


## Misclassification

![missclass](Misclass.drawio.svg)

$$
\begin{align}
\text{Misclass}_A(D) &= \sum_j \frac{|D_j|}{|D|} \left( 1 - \max_k p_{k|j} \right) \\
&= 1 - \sum_j \frac{|D_j|}{|D|} \max_k p_{k|j}
\end{align}
$$


1. **\( D \)**: In the context of decision trees, \( D \) is the set of data points at a particular node.

2. **\( D_j \)**: In decision trees, this correspond to the data points that fall into a particular branch or leaf node j.

3. **\( |D| \)**: This denotes the total number of data points in the dataset \( D \).

4. **\( |D_j| \)**: This denotes the number of data points in the subset \( D_j \).

5. **\( p_{k|j} \)**: This represents the probability that a data point in subset \( D_j \) belongs to class \( k \). It is the conditional probability of class \( k \) given subset \( D_j \).

6. **\( \max_k p_{k|j} \)**: This is the maximum probability among all classes \( k \) for the subset \( D_j \). It indicates the probability of the most likely class for the data points in \( D_j \).

7. **Misclass_A(D)**: This is the misclassification rate for the dataset \( D \). It measures the proportion of data points that are incorrectly classified.

The formula calculates the misclassification rate by summing over all subsets \( D_j \), weighting each subset by its proportion of the total dataset, and considering the probability of the most likely class within each subset. The term \( 1 - \max_k p_{k|j} \) represents the error rate within each subset \( D_j \), and the overall misclassification rate is the weighted average of these error rates.

In summary:
- \( D \): Entire dataset.
- \( D_j \): Subset of dataset belonging to class \( j \).
- \( |D| \): Total number of data points in \( D \).
- \( |D_j| \): Number of data points in \( D_j \).
- \( p_{k|j} \): Probability of class \( k \) given subset \( D_j \).
- \( \max_k p_{k|j} \): Maximum probability of the most likely class in \( D_j \).
- Misclass_A(D): Misclassification rate for dataset \( D \).

## Classification

[Decision Tree Classification Clearly Explained! - YouTube](https://youtu.be/ZVR2Way4nwQ?si=FxysjNpS0B1HYXYU)

### Entropy

Other name like `Info`, same meaning

$$
\text{Entropy} = \sum - p_i \text{ } log_2(p_i)
$$

$$
\text{Info}(D) = \sum - p_i \text{ } log_2(p_i)
$$

If only one class, `- 1 log2(1) = 0`

For split attribute A

$$
\text{Info}_A(D) = \sum \frac{|D_j|}{|D|} \text{Info}(D_j)
$$

### Information Gain (IG)

Other name like `Gain`, same meaning

`w_i` is weight

$$
\text{Information Gain} = \text{Entropy}(\text{parent}) - \sum w_i \text{ } \text{Entropy}(\text{child}_i)
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
\text{Variance Reduction} = \text{Var}(\text{parent}) - \sum w_i \text{ } \text{Var}(\text{child}_i)
$$


