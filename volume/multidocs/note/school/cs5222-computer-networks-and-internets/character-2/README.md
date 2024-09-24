# Character 2 - Application Layer

## Application architectures

### Client-server

Server

- Always-on host, permanent IP address
- Data centers for scaling

Client

- Do not communicate directly with each other client

### Peer-to-peer (P2P)

- No always-on server
- Higher self scalability
- Complex management

## Processes communicating

Process mean a program running within a host

## Sockets

Software interface, a process sends/receives messages to/from network

## Addressing Processes

To identify receiving process, we need to specify two info:

1. Address of host: unique 32-bit `IP address`
2. Identifier specifies receiving process in destination host: `port number`

`IP address` and `port number`

One IP is not enough to identifying process, because many processes can be running on same host

## App-layer protocol defines

Two main types of app-layer protocols:

### Open protocols

Defined in RFCs, e.g. HTTP, SMTP

### Proprietary protocols 

Not defined in RFCs or elsewhere, e.g. Skype

## What transport service does an app need?

1. Reliable data transfer
2. Throughput
3. Timing: low delay
4. Security

## Internet transport protocols services

### TCP

- Reliable
- Flow control
- Congestion control
- e.g. Email, file transfer

### UDP

- Higher throughput
- e.g. Audio streaming

## Securing TCP

TCP and UDP no encryption

Use Secure Sockets Layer (SSL)

## HTTP

[筆記一下學習網路五層#2.2.1 - 2.2.3 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10210183)

Hypertext transfer protocol, port 80

HTTP is "stateless"

- Server maintains no information about past client requests

### Question: should each request/response pair be sen over a separate or the same TCP connection?

> 開發者可以決定當送出 request/response pair 時，是透過 separet TCP connections 或者是 同一個 TCP connection 實行，若為前者則稱為 Non-Persistent 後者則為 Persistent

#### Non-persistent HTTP 非持久性

Round-trip time (RTT): time of packet travel from client to server and back

> 假使有一個 html 裡面有十張圖片
> 
> One RTT to initiate TCP connection
> 
> One RTT request message + receives response 
> 
> Then request 10 image
>
> Total 11 TCP connection, 22 RTT

#### Persistent HTTP

> One RTT to initiate TCP connection
> 
> One RTT request message + receives response 
> 
> Then 10 RTT for 10 image
>
> Total 1 TCP connection, 12 RTT

### Concurrent HTTP

Not part of the HTTP specification, but implemented by almost all web browsers

After initial HTTP connection which retrieves the HTML body, initiate multiple (4~6) HTTP sessions (per domain) to retrieve multiple objects (e.g. images) in parallel

## HTTP request message general format

[HTTP Messages - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)

- Request line
- Header lines
- Body

| method | sp | URL | sp | version | cr | lf |
| header field name | | value | cr | lf | 
| header field name | | value | cr | lf | 
...
| cr | lf | 
| entity body |

## Cookies

[使用 HTTP Cookie - HTTP | MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Cookies)

HTTP is stateless, how can identify users? Cookies

Defined in RFC 6265

> Cookies允許網站用於追蹤使用者紀錄，主要構成有四部分
> 
> - cookie header line in request message
> - cookie header line in response message
> - cookie file 存放於各個使用者的browser
> - back-end database in the Web site

Cookies can be used for:

- Authorization
- Shopping carts
- Recommendations

## Web caches (proxy server)

Reduce response time for client request

Reduce traffic 

## Electronic mail

SMTP, POP3, IMAP

### SMTP

RFC 2821, port 25

SMTP uses persistent connections

##### Comparison with HTTP:

HTTP: pull protocol (pull the information from the server)

SMTP: push protocol (sending mail server pushes the file to the receiving mail server)

### Eail access protocol

POP: Post Office Protocol

IMAP: Internet Mail Access Protocol

or use HTTP

## POP3 

Simple

TCP connection to the mail server on port 110

Three phases:

1. Authorization
  - Declare username, password
  - `+OK`, `-ERR`
2. Transaction
  - `list`, `retr`, `dele`, `quit`
3. Update
  - Two modes of operations: 
    1. download and delete
    2. download and keep

POP3 is stateless across sessions 跨會話是無狀態的

## IMAP

Keeps user state across sessions

## Domain Name System (DNS)

Application-layer protocol, distributed database

Services:
- Hostname to IP address
- Host aliasing
- Mail server aliasing
- Load distribution
  - Many IP addresses correspond to one name

### Why not centralize DNS? 

- Single point of failure

- Traffic

- Maintenance

### Top-level domain (TLD) servers

Responsible for top-level country domains, e.g.: uk, fr, ca, jp

Further delegates query to authoritative DNS servers

### Authoritative DNS servers

Organization’s own DNS server

Providing authoritative hostname to IP mappings for organization’ s named hosts (e.g., *.cityu.edu.hk), known as a DNS zone

Can further sub-divide into smaller DNS zones

### DNS caching

Once (any) name server learns mapping, it caches it

Improve delay performance and to reduce the number of DNS messages ricocheting around

Cached entries may be out-of-date 

cache entries removed after time to live (TTL)

### DNS records

