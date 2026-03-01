---
title: Explain
---

### Intuition

The maximum-likelihood estimate for a Poisson distribution is simply the observed average rate. The question gives us the total number of "cells" ($N = 576$), which represents our total number of samples or observations. 

We also need to know the total number of events (bomb hits). The table provided breaks this down into categories of hits ($k$). Imagine we have a huge basket full of 576 small boxes (the cells). We pull them out one by one.
- 229 boxes are empty ($0$ hits).
- 211 boxes have $1$ hit inside.
- 93 boxes have $2$ hits inside.
- And so on.

To find the average number of hits per box, we just need to dump all the hits out of all the boxes into a single big pile, count them up, and divide by the $576$ boxes. 

The sum we calculated ($535$ total hits) confirms that there were $535$ total bombs that hit the area of interest in London. Divided by the number of geographic squares we sectioned the area into, we arrive at roughly $0.93$ hits per square. The intuition directly matches the mathematics—MLE gives us exactly the sample average.