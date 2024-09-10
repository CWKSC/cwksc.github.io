# Character 2 - Application Layer

## Application architectures

Client-server
- Server
  - Always-on host, permanent IP address
  - Data centers for scaling
- Client
  - Do not communicate directly with each other client

Peer-to-peer (P2P)
- No always-on server
- Higher self scalability
- Complex management

## Processes communicating

Process: program running within a host

## Sockets

Software interface through which a process sends/receives messages to/from the network

## Addressing Processes

To identify the receiving process, we need to specify two info:

1. the address of the host: unique 32-bit IP address
2. an identifier that specifies the receiving process in the destination host: port number

IP address and port number

One IP is not enought to identifying process, because many processes can be running on same host

## App-layer protocol defines

Two main types of app-layer protocols:

1. Open protocols
  - Defined in RFCs
  - e.g. HTTP, SMTP

2. Proprietary protocols 
- Not defined in RFCs or elsewhere
- e.g. Skype

## What transport service does an app need?

1. Reliable data transfer
2. Throughput
3. Timing: low delay
4. security

## Internet transport protocols services

- TCP
  - Reliable
  - Flow control
  - Congestion control
  - e.g. Email, file transfer
- UDP
  - Higher throughput
  - e.g. Audio streaming

## Securing TCP

TCP and UDP no encryption

Use Secure Sockets Layer (SSL)

## HTTP

Hypertext transfer protocol

Port 80

HTTP is "stateless"
- Server maintains no information about past client requests


