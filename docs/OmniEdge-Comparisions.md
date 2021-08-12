---
title: Comparisions
description: 
route: Doc / Comparision
index: 5
---

# Comparisions

## OmniEdge Vs VPN

## Basic Information

|Software|Version|OS:Linux/Windows/MacOS/BSD|Mobile Apps: iOS/Android |TV Apps: Apple TV/Android TV|NAS OS: FreeNAS/Synology|Raspberry PI|
|---|---|---|---|---|---|---|
|OpenVPN|2.4.11|Yes/Yes/Yes/Yes|Yes/Yes|No/No|Yes/Yes|Yes|
|Wireguard|1.0|Yes/Yes/Yes/Yes|Yes/Yes|No/No|Yes/Yes|Yes|
|Nebula|1.3.1|Yes/Yes/Yes/Yes|Yes/Yes|No/No|Yes/Yes|Yes|
|TailScale||Yes/Yes/Yes/Yes|Yes/Yes|No/No|Yes/Yes|Yes|
|ZeroTire||Yes/Yes/Yes/Yes|Yes/Yes|No/No|Yes/Yes|Yes|
|OmniEdge Evaluation|0.1.0|Yes/Yes/Yes/Yes|Yes/Yes|No/Yes|Yes/Yes|Yes|
|OmniEdge Offical|1.0|Yes/No/No/No|No/No|No/No|No/No|No|


## Networking features
|Software|Device types: TUN/TAP|Multiple Modes|Auto meshing|NAT Traversal|Multihops|Protocol|
|--|--|--|--|--|--|--|
|OpenVPN|Yes/Yes|No|No|(Yes)|(Yes)|UDP/TCP|
|Wireguard|Yes/No|No|No|No|No|UDP|
|Nebula|Yes/No|No|(Yes)|Yes|No|UDP|
|TailScale|--|--|--|--|--|--|
|ZeroTire|--|--|--|--|--|--|
|OmniEdge Evaluation|No/Yes|No|Yes|Yes|No|UDP|
|OmniEdge Offical|Yes/Yes|Yes/Yes|Yes|Yes|No|UDP|

## Security features
|Software|Cipers|Cipher selection|Public key Mechanism|Certificates /Shared key|PFS|
|--|--|--|--|--|--|
|OpenVPN|AES256(OpenSSL)|Auto|RSA|Yes/No|Yes|
|Wireguard|ChaCha20|fixed|Curve25519,ECDH|Yes/No|Yes|
|Nebula|AES256,ChaCha20|manual|ECDH|Yes/No|Yes|
|TailScale|--|--|--|--|--|--|
|ZeroTire|--|--|--|--|--|--|
|OmniEdge Evaluation|Twofish,AES128,ChaCha20|Manual|Curve25519|Yes/Yes/Yes|
|OmniEdge Offical|AES256,AES128,ChaCha20|auto|Curve25519,ECDH|Yes/Yes/Yes|

## Performance

|Through put test|Bandwidth|
|--|--|
|Native Network|4970 Mbit/s|
|OpenVPN||
|Wireguard|3810 Mbit/s|
|Nebula||
|Tailscae||
|ZeroTire||
|OmniEdge Evalution|554 Mbit/s|
|OmniEdge 1.0|3470 Mbit/s|


## OmniEdge Vs frp,ngrok