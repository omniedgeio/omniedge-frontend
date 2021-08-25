---
title: Compare
description: 
route: Doc / Compare
index: 5
---

# Comparisions

## OmniEdge Vs VPN

### 1. What is the difference between OmniEdge and VPNs?

A **virtual private network (VPN)** extends a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network. There is always a VPN server that provide such services. The Users connect to the server and are replayed by the sever. 

**OmniEdge** doesn't need any central Sever, which creates a peer-to-peer tunnel between two nodes, builds a virtual network for all the devices which connect to each others. 

### 2. Benefits of OmniEdge vs. VPNs

### 3. Basic Information

|Software|Version|OS:Linux/Windows/MacOS/BSD|Mobile: iOS/Android |TV: Apple TV/Android TV|NAS OS: FreeNAS/Synology|Raspberry PI|
|---|---|---|---|---|---|---|
|OpenVPN|2.4.11|Yes/Yes/Yes/Yes|Yes/Yes|No/No|Yes/Yes|Yes|
|Wireguard|1.0|Yes/Yes/Yes/Yes|Yes/Yes|No/No|Yes/Yes|Yes|
|OmniEdge|0.1.0|Yes/Yes/Yes/Yes|Yes/Yes|No/Yes|Yes/Yes|Yes|


### 4. Networking features
|Software|Device types: TUN/TAP|Multiple Modes|Auto meshing|NAT Traversal|Multihops|Protocol|
|--|--|--|--|--|--|--|
|OpenVPN|Yes/Yes|No|No|(Yes)|(Yes)|UDP/TCP|
|Wireguard|Yes/No|No|No|No|No|UDP|
|OmniEdge|No/Yes|No|Yes|Yes|No|UDP|

### 5. Security features
|Software|Cipers|Cipher selection|Public key Mechanism|Certificates /Shared key|PFS|
|--|--|--|--|--|--|
|OpenVPN|AES256(OpenSSL)|Auto|RSA|Yes/No|Yes|
|Wireguard|ChaCha20|fixed|Curve25519,ECDH|Yes/No|Yes|
|OmniEdge|Twofish,AES128,ChaCha20|Manual|Curve25519|Yes/Yes/Yes|

### 6. Performance

|Through put test|Bandwidth|
|--|--|
|Native Network|4970 Mbit/s|
|OpenVPN||
|Wireguard|3810 Mbit/s|
|OmniEdge|3470 Mbit/s|


## OmniEdge Vs frp,ngrok

-----

If you have more questions, feel free to [contact us](mailto:support@omniedge.io).