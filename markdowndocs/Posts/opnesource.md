---
title: Open Source Evaluation version and Introduce 1.0 plan
description: OmniEdge is a project we started from a single tweet, a group of network experts from 9 cites across 5 countries gathering together to build a paradigm shift for next generation peer-to-peer VPN infrastructure. 
thumbnail: /assets/posts-images/OmniEdge-Dashboard.png
avatar: /assets/Yong.jpg
author: Yong QIAN
date: July 08, 2021
readtime: 6
---

OmniEdge is a project we started from a single tweet, a group of network experts from 9 cites across 5 countries gathering together to build a paradigm shift for next generation peer-to-peer VPN infrastructure. 
The project is [started in Post-Covid19(we thought 2021 is post-Covid19)](/blog/startups-in-post-covid19-for-remote-workforce), and [we released our first Evaluation version on 15, March, 2021](https://twitter.com/brucebot/status/1373865927943450625?s=20). 

Everyone can who knows how to use computer can use our app to create their own private intranet on the internet, connects all of his/her devices with an OS from anywhere without concern. The compatible devices are not only including the IT devices such as
Laptops, Desktops, Mobile Phones, Cloud instances, Routers, NAS, Raspberry Pi, but also industrial machines including industrial robotics, AGVs, MES system and Motion control system. 
We are surprised to see the Evaluation products going popular across the world and attracting users from 26 countries and regions. 
However, we also faced a lot of requirements from our users. 
## The OmniEdge Evaluation Version 

The OmniEdge evaluation protocol is developed based on [n2n](https://github.com/ntop/n2n). n2n is a light VPN software which makes it easy to create virtual network bypassing intermediate firewalls which is developed by [ntop](http://ntop.org) leaded by [Luca](https://github.com/lucaderi), and the active developer
now is [Logan007](https://github.com/ntop/n2n/commits?author=Logan007).The default protocol is great, however, it is difficult for people to use. When OmniEdge starts building the service, we [did a lot test including WireGuard and n2n](/blog/how-omniedge-works).And we found some limitation. We want to make the connectivity
more simple and secure. What's more, we need an evaluation version to test our idea, to check if our customers like our products. So we decided to develop the evaluation version based on n2n. And we are now open source our clients one by one, the first open sourced client is OmniEdge Evaluation Android Client:[https://github.com/omniedgeio/omniedge-android](https://github.com/omniedgeio/omniedge-android).

## The OmniEdge 1.0 Plan

The OmniEdge 1.0 is designed to be a high performance peer-to-peer mesh VPN over UDP, supporting strong encryption, hole punching and zero-config.It is a fully-meshed VPN network in a peer-to-peer connectivity with strong end-to-end encryption based on elliptic curve keys and AES-256. 
![OmniEdge Dashboard](/assets/posts-images/OmniEdge-Dashboard.png)
OmniEdge 1.0 features the following functionality but will not limited: 
- Automatic peer-to-peer meshing, no central servers
- Zero-config and single click to use
- Login with Google
- Security Key for embedded devices 
- Multi virtual network
- Multi Users
- Dashboard to manage the virtual network.
- Auto allocate the closed server
- The configs are signed with the private key which only hold by the users
- Automatic reconnecting when connections are lost
- Connecting hundreds of nodes with the VPN
- High throughput and low additional latency
- Creating virtual network interfaces based on Ethernet (TAP) and IP (TUN)
- Strong end-to-end encryption using Curve25519 key pairs and AES methods
- Support for different forwarding/routing behaviors (Hub, Switch, Router)
- NAT and firewall traversal using hole punching
- Automatic port forwarding via UPnP
- Websocket proxy mode for restrictive environments
- Support for tunneled VLans (TAP devices)
- Support for publishing beacons to help nodes find each others
- Support for statsd monitoring
- Low memory footprint
- Single binary, no dependencies, no kernel module

Thanks to the team, specially our architect [Dr. Dennis Schwerdel](https://omniedge.io/about), we can make it happen. Dr. Dennis is a peer-to-peer network expert, he is also the author of [vpncloud](https://github.com/dswd/vpncloud) which is an open source p2p vpn project. 

## Performance test between OmniEdge evaluation version and OmniEdge 1.0

Test runs between 2 AWS EC2 nodes type `m5.large` in `us-east-2`. The **m5.large ** nodes specifications :
- Intel Xeon Platinum 8000 CPU (64 bit)
- 2 vCPUs
- 8 GiB Ram
- Up to 10 Gbps network
- OS: AWS Linux 2 AMI

We use [iperf3](https://iperf.fr/iperf-download.php) to do the test. And here with the result:
![OmniEdge Performance Test](/assets/posts-images/OmniEdge-Performance-Test.png)

||Throughput|Bandwidth|
|--|--|--|
||Native Network|**4970 Mbit/s**|
||OmniEdge Evaluation|**554 Mbit/s**|
||OmniEdge 1.0|**3470 Mbit/s**|

We can see that the OmniEdge 1.0 can reach 3470 Mbit/s and is **more than 6 times faster** than the evaluation version. 
