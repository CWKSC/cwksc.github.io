# Chapter 1 - Introduction



## Physical medium 物理介質

- Twisted-pair copper wire

- Coaxial cable

- Multimode fiber-optic cable

- Terrestrial radio spectrum

- Satellite radio spectrum



## Physical media categories

- Guided media 

- Unguided media



## Packet Switching

Send message from source end system to destination end system

Long messages breaks into smaller chunks of data called packets



### Packet Switches

- Router

- Switch

Sending `L` bits with transmission rate `R` bits/s

Time to transmit the packet is `L/R` seconds.

### Queuing Delays and Packet Loss

Packet switch has output buffer / output queue

If link is busy, packet need wait in output buffer

- Store-and-forward delays

- Queuing delays (wait to be transmitted on link)

If output buffer completely full -> packet loss (dropped)

### Forwarding Tables and Routing Protocols

[Differences Between Routing and Forwarding Tables | Baeldung on Computer Science](https://www.baeldung.com/cs/routing-vs-forwarding-tables)

Routing table for router

Forwarding table for switch or bridge



## Circuit switching

> 電路交換要求必須首先在通訊雙方之間建立連接通道
> 
> 在連接建立成功之後，雙方的通訊活動才能開始
> 
> 通訊雙方需要傳遞的信息都是通過已經建立好的連接來進行傳遞的
> 
> 而且這個連接也將一直被維持到雙方的通訊結束



### Multiplexing in Circuit-Switched Networks

-  Frequency-division multiplexing (FDM)

-  Time-division multiplexing (TDM)

[Difference between TDM and FDM - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-tdm-and-fdm/)

[FDM v.s TDM - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10298906)

### Packet Switching Versus Circuit Switching

Packet switching not suitable for real-time services 

Packet switching more efficient

Circuit switching waste the bandwidth if user inactivity



## Example

1 Gb/s link

Each user: 

- 100 Mb/s when active

- Active 10% of time

### Q: how many users can use this network under circuit-switching and packet switching?

Circuit-switching: 10 users

Packet switching:

如果有 35 users, probability > 10 active at same time approximately 0.0004

probability \<= 10 is 0.9996

二項分佈 ([wiki](https://en.wikipedia.org/wiki/Binomial_distribution)), B(N, k) 

拋硬幣，N 次試驗中有 k 次成功的概率, P(X = k)

$$
X \sim B(35, 0.1)
$$

$$
\begin{align*}
P(X = k) &= C(35, k) 0.1^k 0.9^{35 - k} \\\\
P(X <= 10) &= P(X = 0) + P(X = 1) + ... + P(X = 10)  \\
&= 0.999575702 \\\\
P(X > 10) &= 1 - P(X <= 10) \\
&= 0.000424297
\end{align*}
$$

可以做 
[Quantitative Comparison of Packet Switching and Circuit Switching](http://gaia.cs.umass.edu/kurose_ross/interactive/ps_versus_cs.php) ，題目參數會改



## Four sources of packet delay

### Processing delay

Check bit errors

Determine output link

Typically < microsecs

### Queueing delay

Time waiting at output link for transmission

Depends on congestion level of router

L: packet length (bits)

R: link bandwidth (bit transmission rate)

a: average packet arrival rate

Traffic intensity = L * a / R

La/R ~ 0: avg. queueing delay small

La/R -> 1: avg. queueing delay large

La/R > 1: more “work” arriving  is more than can be serviced, average delay infinite

### Transmission delay

L: packet length (bits) 

R: link bandwidth (bps)

d_trans = L/R

### Propagation delay

d: length of physical link

s: propagation speed in medium (~ 3x10^8 m/s)

d_prop = d/s

$$
d_{nodal} = d_{proc} + d_{quene} + d_{trans} + d_{prop}
$$



## ISO/OSI reference model

1. Application

2. Presentation

3. Session

4. Transport

5. Network Layer

6. Data Link Layer

7. Physical Layer



## Network security

### Denial of Service (DoS)

Attackers make resources (server, bandwidth) unavailable to legitimate traffic by overwhelming resource with bogus traffic

### Packet sniffing

Records all packets

Wireshark is a (free) packet-sniffer

### IP spoofing

Send packet with false source IP address


