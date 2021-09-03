---
title: Compare
description: 
route: Doc / Compare
index: 5
---

# Comparisions

## OmniEdge Vs VPN

### 1. What is the difference between OmniEdge and VPNs?

A **virtual private network (VPN)** extends a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network. There is always a VPN server that provides such services. The Users connect to the server and are replayed by the server. 

**OmniEdge** doesn't need any central Sever, which creates a peer-to-peer tunnel between two nodes, builds a virtual network for all the devices which connect to each other. 

### 2. Benefits of OmniEdge vs. VPNs

With OmniEdge, you: 

- Don't need any VPN server anymore.
- Don't need any VPN gateway for your company's different branches. 
- OmniEdge provide a peer-to-peer connection between devices without severe reply, while VPN always reply your connections. 

With OmniEdge: 
![OmniEdge](/assets/OmniEdge-VPN.svg)

With VPNs: 
![Normal VPN](/assets/Legacy-VPN.svg)


### 3. Basic Information

|Software|Version|Linux/Windows/MacOS/BSD|iOS/Android|
|---|---|---|---|
|OpenVPN|2.4.11|Yes/Yes/Yes/Yes|Yes/Yes|
|Wireguard|1.0|Yes/Yes/Yes/Yes|Yes/Yes|
|OmniEdge|0.1.0|Yes/Yes/Yes/Yes|Yes/Yes|


### 4. Networking features
|Software|TUN/TAP|Auto meshing|NAT Traversal|Protocol|
|--|--|--|--|--|--|
|OpenVPN|Yes/Yes|No|(Yes)|UDP/TCP|
|Wireguard|Yes/No|No|No|UDP|
|OmniEdge|No/Yes|Yes|Yes|UDP|

### 5. Security features
|Software|Cipers|
|--|--|
|OpenVPN|AES256(OpenSSL)|
|Wireguard|ChaCha20|
|OmniEdge|Twofish,AES128,ChaCha20|

### 6. Performance

|Through put test|Bandwidth|
|--|--|
|Native Network|4970 Mbit/s|
|OpenVPN||
|Wireguard|3810 Mbit/s|
|OmniEdge|3470 Mbit/s|


## OmniEdge Vs frp/ngrok

ngrok/frp is a reverse proxy tool used for exposing your local service to the public, let you access your computer's localhost from a mobile device for example. ngrok is a free/paid service. The free service has limitations of requests per minute and only one tunnel at a time. frp is an open-source version of ngrok. 

### The big difference

- Ngrok/frp is limited to TCP webservice only, and you need to set each service before using it.

- OmniEdge is not limited to TCP and covers all the TCP and UDP services, you can access your own devices only by one fixed IP. 

Let's compare some use cases between ngrok/frp and omniedge.

|Use Cases|ngrok/frp|OmniEdge|
|--|--|--|
|**Expose local web service**|`ngrok tcp 3000` then use a public IP like: `https://greatlocalservice.ngrok.io:5565` | `http://100.100.1.1:3000`|
|**SSH**| 22 is your ssh port and 11111 is the reversed port by ngrok `ngrok tcp 22 && ssh admin@greatlocalservice.ngrok.io -p 11111` | `ssh admin@100.100.1.1` |
|**RDP**| `ngrok tcp 3389` and use `greatlocalservice.ngrok.io:15678` for RDP address | Just put the omniedge IP `100.100.1.1` into the RDP Client|
|**FTP**| `ngrok tcp 21 && ftp://greatlocalservice.ngrok.io:8877` | `ftp://100.100.1.1` |
|**VNC**|`ngrok tcp 5900` and use the `greatlocalservice.ngrok.io:9988` as the VNC address |just put the OmniEdge IP `100.100.1.1` into the VNC client|

### Security

|Accessiable|ngrok/frp|OmniEdge|
|-|---|--|
|Accessiable by default|public with free plan|Private automatically|
|Accessiable Limitation|Manually IP whitelisting setting with paid plan|Private automatically|

-----

If you have more questions, feel free to [contact us](mailto:support@omniedge.io).