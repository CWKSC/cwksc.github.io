# Insertion Example

## Example 1

For `m` = 4  B+ tree

Insert `1, 3, 5, 7, 9, 2, 4, 6, 8, 10`

<p class="h-100">

![](./image/step-1-1-3-5.png)

</p>

Insert `7`

It is `[1, 3, 5, 7]`, medium between `3` and `5`, by default it is right biasing, use `5` as index

<p class="h-250">

![](./image/step-2-7.png)

</p>

Insert `9`, `2`

<p class="h-250">

![](./image/step-3-9-2.png)

</p>

Insert `4`. It is `[1, 2, 3, 4]`, medium between `2` and `3`, use `3` as index

<p class="h-250">

![](./image/step-4-4.png)

</p>

Insert `6`. It is `[5, 6, 7, 9]`, medium between `6` and `7`, use `7` as index

<p class="h-250">

![](./image/step-5-6.png)

</p>

Insert `8`

<p class="h-250">

![](./image/step-6-8.png)

</p>

Insert `10`, It is `[7, 8, 9, 10]`, medium between `8` and `9`, use `9` as index

In parent, It is `[3, 5, 7, 9]`, medium between `5` and `7`, use `7` as index (move as parent)

Be care in non-leaf node, the index will move upper, and replace with successor

<p class="h-350">

![](./image/step-7-10.png)

</p>


