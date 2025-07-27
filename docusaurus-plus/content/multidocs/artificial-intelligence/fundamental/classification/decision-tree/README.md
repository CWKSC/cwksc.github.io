# Decision tree 決策樹

## Decision Stump 樹樁

Decision tree, depth \<= 1

Choose splitting attribute, use majority voting to determine `class(𝑡)`

Problem: Overfitting, noise sensitivity (if the feature chosen is noisy or irrelevant)

Solution: Build a decision tree instread, by recursively split (divide and conquer)

## How to find good splitting attribute?

Minimizes error rate of decision stump by A

## Misclassification (Error Rate)

$$
\begin{align}
\text{Misclass}_A(D) &= \sum_j \frac{|D_j|}{|D|} \left( 1 - \max_k p_{k|j} \right) \\
&= 1 - \sum_j \frac{|D_j|}{|D|} \max_k p_{k|j}
\end{align}
$$

- $ D $: Set of data points at a particular node.

- $ D_j $: Set of data points in particular branch or leaf node j

- $ |D| $: Total number of data points in the dataset $ D $

- $ |D_j| $: Number of data points in the subset $ D_j $.

- $ p_{k|j} $: The probability that a data point in subset $ D_j $ belongs to class $ k $. It is the conditional probability of class $ k $ given subset $ D_j $.

- $ \max_k p_{k|j} $: The maximum probability among all classes $ k $ for the subset $ D_j $. It indicates the probability of the most likely class for the data points in $ D_j $.

- $ Misclass_A(D) $: The misclassification rate for the dataset $ D $. It measures the proportion of data points that are incorrectly classified.

For the above example, the misclassification rate for the dataset $ D $ is $ 1/4(1-1) + 3/4(1-2/3) = 1/4 $

Problem: Choose the splitting attribute that minimizes the misclassification rate may noy be *Global Optimal*. (Issue of greedy algorithm, a.k.a locally optimal) It neglects the distribution of the class values of misclassified instances. It only considers the majority class.

Solution: Use other metrics like Gini index, entropy, or information gain to find the best splitting attribute

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

Like Gini impurity, it quantifies the **uncertainty** or **disorder** in a dataset

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

#### Why It Works?

Comparing the Gini impurity to $ \max_k p_{k|j} $, which only care about the majority class, the Gini impurity is more sensitive to changes in the class distribution. It penalizes the nodes with a higher number of classes.


### **Comparison: Entropy vs. Gini**

| **Aspect**               | **Entropy**                                                                 | **Gini Impurity**                                                   |
|--------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------|
| **Definition**           | Measures the **uncertainty** or **disorder** in the class distribution.     | Measures the **probability of misclassification** of a random sample. |
| **Formula**              | $ \text{Entropy}(D) = \sum -p_i \log_2(p_i) $                            | $ \text{Gini}(D) = 1 - \sum p_i^2 $                              |
| **Range**                | $ 0 $ (perfect purity) to $ \log_2(C) $ (maximum disorder for $ C $ classes). | $ 0 $ (perfect purity) to $ 1 - \frac{1}{C} $ (maximum impurity for $ C $ classes). |
| **Behavior**             | More sensitive to changes in class probabilities, especially near $ 0 $ or $ 1 $. | Less sensitive to changes in class probabilities.                   |
| **Computational Cost**   | Slightly higher due to the use of logarithms.                               | Lower, as it involves only squares of probabilities.                |
| **Interpretation**       | Based on information theory (bits of information).                          | Based on probability of misclassification.                          |
| **Use in Decision Trees**| Both are commonly used; entropy is more popular in algorithms like ID3 and C4.5, while Gini is used in CART. | Simpler and faster to compute, often preferred in practice.         |

### Information Gain (IG)

Other name like `Gain`, same meaning

$w_i$ is weight

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

**Split Info** is a measure used to account for the **number of splits** and the **distribution of data points** across those splits. It quantifies the **potential information** generated by splitting the dataset $ D $ into subsets $ D_j $ based on an attribute $ A $. **$SplitInfo_A(D)$** is the potential information generated by the split.

This can also be written as:

$$
\text{SplitInfo}_A(D) = -\sum \frac{|D_j|}{|D|} \log_2\left(\frac{|D_j|}{|D|}\right)
$$

**$ \frac{|D_j|}{|D|} $** is the **proportion of data points** in subset $ D_j $ relative to the entire dataset $ D $.

#### Why is Split Info Needed?

Split Info is used to **normalize** the **Information Gain** when evaluating splits in decision trees. Here's why it's important:

1. **Problem with Information Gain**:
   - Information Gain (IG) measures the reduction in entropy (or uncertainty) after splitting the dataset based on an attribute $ A $.
   - However, IG tends to **favor attributes with many unique values** (e.g., an attribute like "ID" that has a unique value for each data point). Such attributes can create many small subsets $ D_j $, leading to artificially high IG even if the split is not meaningful.

2. **Bias Toward High-Cardinality Attributes**:
   - Without normalization, IG might prefer attributes that split the data into many small, pure subsets, even if those subsets are not useful for generalization.
   - This can lead to **overfitting**, where the decision tree becomes too complex and performs poorly on unseen data.

3. **Role of Split Info**:
   - Split Info penalizes attributes that create many subsets or unevenly distributed subsets.
   - It quantifies the **potential information** generated by the split itself, independent of the class labels.
   - By dividing the Information Gain by Split Info, we get the **Information Gain Ratio**, which balances the benefit of the split (IG) against the complexity of the split (Split Info).

### Information Gain Ratio

$$
\text{GainRatio}_A(D) = \frac{\text{Gain}_A(D)}{\text{SplitInfo}_A(D)}
$$

The **Information Gain Ratio** (IG / Split Info) ensures that decision trees are more balanced and less prone to overfitting.

The Gain Ratio ensures that the decision tree algorithm does not favor attributes with many unique values or uneven splits, leading to more balanced and generalizable trees.

## Regression 

[Decision Tree Regression Clearly Explained! - YouTube](https://www.youtube.com/watch?v=UhY5vPfQIrA)

### Variance Reduction

$$
\text{Var} = \frac{1}{n} \sum (y_i - \bar{y})^2
$$

$$
\text{Variance Reduction} = \text{Var}(\text{parent}) - \sum w_i \text{ } \text{Var}(\text{child}_i)
$$


