---
title: Compare
route: Doc / Compare
index: 5
description: OmniEdge doesn't need any central Sever, which creates a peer-to-peer tunnel between two nodes, builds a virtual network for all the devices which connect to each other. 
thumbnail: /assets/OmniEdge-VPN.svg
---

# Comparisions

## VPN vs. OmniEdge

### 1. What is the difference between OmniEdge and VPNs?

A **virtual private network (VPN)** extends a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network. There is always a VPN server that provides such services. The Users connect to the server and are replayed by the server. 

**OmniEdge** doesn't need any central Sever, which creates a peer-to-peer tunnel between two nodes, builds a virtual network for all the devices which connect to each other. 

### 2. Benefits of OmniEdge vs. VPNs,dVPNs, Blockchain VPNs

With OmniEdge, you: 

- Don't need any VPN server anymore.
- Don't need any VPN gateway for your company's different branches. 
- OmniEdge provide a peer-to-peer connection between devices without server relay, while VPN always reley on your connections. 

![OmniEdge](/assets/OmniEdgeComparison.gif)


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


## frp/ngrok vs. OmniEdge

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

## ZeroTier vs. OmniEdge

When more and more enterprise services are migratig to cloud-based services, and people are more likely work from home, which drives the use of VPNs. The security concerns, which means every device should be end-to-end encrypted and authenciated. People want to connect their private resources, devices, from anywhere in a highly security method, and this is what OmniEdge and ZeroTier want to help and come in.


**ZeroTier** is a smart Ethernet switch for planet Earth. It’s a distributed network hypervisor built atop a cryptographically secure global peer to peer network. It provides advanced network virtualization and management capabilities on par with an enterprise SDN switch, but across both local and wide area networks and connecting almost any kind of app or device.[ZeroTier Doc]. In other world, the developer themsevles call ZeroTier "Virtual Distributed Network (VDN) " instead of VPN. It has two virtualization layers: 

- VL1 is the underlying peer to peer transport layer, the “virtual wire,” 
- VL2 is an emulated Ethernet layer that provides operating systems and apps with a familiar communication medium.

**OmniEdge** is a layer-2 peer-to-peer VPN, users can create and manage their own secure and geographically distributed overlay network without the need for central administration. A SaaS central coordination service which is invisible to users. Nodes are logging into a system with Google, and Email/Password. OmniEdge provides several supernode in differnet locations which will be allocated to users. The supernode coordinates the communication between nodes within the virtual network, try to eastablish a direct peer-to-peer between nodes if possible, otherwise, relay traffic between nodes if there is any firwall. Users are allowed to use their [custom supernode](/docs#6-customize-supernode) to improve the security. 


ZeroTier and OmniEdge share a similar purpose but with differenct structures. 

### Setup

ZeroTier is designed to be a “zero-configuration” technology. Users don't need to write configurations or IP address for the nodes, with the help of Virutualization Layer 2 (VL2), new nodes can be added to a Virtual Network by a secret code, which must be entered manually at connection time. 

OmniEdge's desgin is also with "zero-config" logic. The [Dashboard](/docs/article/Admin) will handle all the configurations, IP address and Nodes's name. Users connect their own private network with no concerns, no matter for the first user or the new users. A default private network will be generated automatically, or users can create more private virutal networks for different purpose. The nodes can seclect differenct private work and join, or invite others. 

### Performance

ZeroTier's latency is very low compared to legacy VPNs. The only problems for any peer-to-peer connections is when the connections are completely blocked and the packet has to rely on relaying through the supernode. 

ZeroTier 1.2.3 (pre-1.2.4)'s [benchmarking](https://www.zerotier.com/2017/04/20/benchmarking-zerotier-vs-openvpn-and-linux-ipsec/) is **484 Mbit/sec** using [iperf3](https://iperf.fr/) under a native network with speed **4760 mbps**, which was done by ZeroTier between two single-core Linux (CentOS 7) virtual machines running on VMWare Workstation on the same Core i7 at 2.8ghz. 

OmniEdge has a great latency. The [performance](https://twitter.com/omniedgeio/status/1502653680385896450?s=20&t=EL13zwfh7ps51Rmnxh3deQ) is **9.7ms** with omniedge IP vs. **8ms** with public IP, between AWS EC2 in Osaka and Tokyo. The lantecy can be improved when user use a close custome supernode. OmniEdge also have a good throughput. The [speed](https://omniedge.io/docs/article/Architecture&Performance) can reach to **3470 Mbit/s** under a native network with speed **4970 Mbit/s** between 2 AWS m5.large. 

```
Notice: the throughput test enviroment is different between ZeroTier & Omniedge, so is the result.
```

ZeroTier and OmniEdge are the new alternatives to the legacy VPNs, both are sharing the same purpose to make the connection eaiser.



## n2n vs. OmniEdge

n2n is a light VPN software which makes it easy to create virtual networks bypassing intermediate firewalls. The current OmniEdge is built on top of n2n and we think very high of it. We open source the package with use from n2n, you can found it [here](https://omniedge.io/docs/article/Opensource).

```
An OmniEdge protocol is under developing with OmniEdge's design, which takes the advantages from a lot of p2p protocls including n2n. However, all the features mentioned here will be kept.
```

We designed OmniEdge to make it easier to use p2p connectiong with n2n to secure your network connections. You can choose to use n2n directly, without OmniEdge. 

### Setup

n2n provides two tools to use to make a connection between two nodes. The first is `edge` for nodes, and the other is the `supernode` for the server, and both are necessary. By simply install the n2n package for your linux distributon, you can easily setup up by running the command. To connect two devices, you have to install `edge` on each device, create a network name, generate keys, define IPs for each device. You need to remember all of them for next time use, or you can write into a conf file for each device. The conigraution file includes the information about the device, such as: network name, secrect key, IP address, supernode address, and you need to create the similar file for the other device. Every devices need such a conf file to make a connection, so the number of configuration files grows incredibley in the number of devices, which also make it harder to manage. 

To connect devices using OmniEdge, you just need to log in to OmniEdge on each device, with GUI apps for [windows](/download/windows)，[android](/download/windows),[iOS]() or command cli for [linux](/download/linuxcli), [macOS](/download/macos),[Synology](/download/synology),[Raspberry Pi](/download/rasp), [ARM based Hardware](/download/embedded), [Nvidia Machine Learning Hardware](/download/nvidia). For command cli for all above, you can also run a simple command `curl https://omniedge.io/install/omniedge-install.sh | bash` to install omniedge cli. OmniEdge manages network name, secret key, IP address and all configrautions for you, you can also have a dashboard to manage all your devices, virtual networks and security keys. This is very helpful not only for non-technical users, but technical users to save time. 

### Bonus features

OmniEdge builds a lot of features to improve the connection with n2n. OmniEdge offers the multi virtual network control panel, users can set different IP ranges or same IP ranges for different purpose, or sharing with your virutal netowrk to allow other users to join to have access. For users who need more security, high speed and low lantency, a [custom supernode](/docs#6-customize-supernode) is also avaviable. There are also a security key feature to help login quickly for cli, a device panel to remove or rename to make managment easily. For enterprise users, we can also offer okta, microsoft or other integration authenications. And more features will be developed in the future.

-----

If you have more questions, feel free to [contact us](mailto:support@omniedge.io).