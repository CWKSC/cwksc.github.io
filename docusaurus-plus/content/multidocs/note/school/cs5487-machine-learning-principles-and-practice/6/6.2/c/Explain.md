---
title: Explain
---

### Intuition

Imagine you have a group of people lined up by their weight. You need to pick one single weight to represent the group, and your goal is to minimize the *total absolute difference* between your chosen weight and everyone else's weight.

If you pick a weight and there are more people heavier than your pick than lighter, you can decrease the total error by moving your pick slightly higher. Why? Because moving it higher increases the error for the lighter people, but it decreases the error for *all* the heavier people. Since there are more heavier people, the net change is a decrease in total error.

You keep moving your pick until the number of people heavier than your pick is exactly equal to the number of people lighter than your pick. At this point, moving in either direction will increase the error for one half of the group more than it decreases it for the other half.

The point where exactly half the people are lighter and half are heavier is, by definition, the **median**.

Therefore, when using the absolute loss function ($q=1$), the best prediction to minimize your expected error is the conditional median.
