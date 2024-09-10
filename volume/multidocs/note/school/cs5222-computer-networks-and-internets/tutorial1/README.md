# Tutorial 1

## Q3

Suppose we want to send a file of 160,000 bits from Host A to Host B over a circuit-switched network. Suppose that all links in the network use FDM with 12 frequency bands of the same bandwidth. Assume that the 12 frequency bands together can support a total bit rate of 1.536 Mbps. Also suppose that it takes 600 msec to establish an end-to-end circuit before Host A can begin to transmit the file. How long does it take to send the file?

160000 / (1.536 * 1000000 / 12) + 600 / 1000

= 1.85

## Q4

Suppose users share a 3 Mbps link. Also suppose each user requires 150 kbps when transmitting,
but each user transmits only 10 percent of the time.

### a. When circuit switching is used, how many users can be supported? 

3 * 1000 / 150

= 20

### b. For the remainder of this problem, suppose packet switching is used. Find the probability that a given user is transmitting. 

0.1 (from question)

### c. Suppose there are 120 users. Find the probability that at any given time, exactly n users are transmitting simultaneously

$$
X \sim B(120, 0.1)
$$

$$
\begin{align*}
P(X = n) &= C(120, n) 0.1^n 0.9^{120 - n}
\end{align*}
$$
