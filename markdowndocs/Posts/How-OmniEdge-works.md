---
title: How OmniEdge works
description: Today, remote work, industrial Internet, banking, and other scenarios require a simple, secure, and high-speed private network. Our experienced engineers tried many existing solutions to meet these requirements, but none of them could fully meet our needs and those of our customers. So, we decide to make our solution, which is OmniEdge.
thumbnail: /assets/posts-images/how-omniedge-works-meme.png
avatar: /assets/avatars/Yong.jpg
author: Yong QIAN
date: Feb 08, 2021
readtime: 6
---

# How OmniEdge works


Today, remote work, industrial Internet, banking, and other scenarios require a simple, secure, and high-speed private network. Our experienced engineers tried many existing solutions to meet these requirements, but none of them could fully meet our needs and those of our customers. So, we decide to make our solution, which is OmniEdge.

## Why not traditional VPNs?

VPNs were great, but years ago.
Since legacy VPNs allow users to log in and access the entire internal network without fine-grained control, enterprises or organizations are more vulnerable to attacks and data breaches.

## Why not WireGuard?

As a modern VPN solution, WireGuard is simple, fast, and easy to maintain. We have also tried WireGuard, and unfortunately, it is not suitable for building networks with a large number of nodes.
Nowadays, everybody needs to connect multiple devices at work, such as phones, tablets, laptops, and desktops. If we needed to build a huge peer-to-peer network between these devices, the network’s complexity would increase exponentially, and WireGuard would not be able to handle it. That’s why we don’t go with WireGuard.

## Why not n2n?

n2n is a lightweight open-source software for building a peer-to-peer private network. It’s awesome but still far from our goal.
n2n let Super Node handle a bundle of node management jobs that are heavy and possibly impact network performance. It makes n2n not suit for building a robust and stable network for enterprises and organizations.

## So, how OmniEdge makes difference?

To solve all the above issues, we designed and developed OmniEdge based upon the following objectives.
Simple enough to use for both users and network administrators.
Based on the Zero-trust security model. Users can establish a strictly secure network through authentication services such as Okta, G Suite, etc.
Try using peer-to-peer communication instead of relaying nodes to increase the network speed and reduce risks of single-point failures.

## Main Architecture

For the above design goals, we get inspired by an open-source VPN software: n2n and designed the main architecture of OmniEdge.
![](https://omniedge.io/assets/blog-images/how-omniedge-works-main-architecture.png)

Our architecture has the following components:

**Super Node**: Coordinates the communication between nodes within the virtual network.

- Coordinate the traffic transferring between nodes.
- Try to establish a direct peer-to-peer between nodes if possible; otherwise, relay traffic between nodes if there is any firewall.

**Node**: An entity within the virtual network is a proxy for devices to access the virtual network.
Keep and manage virtual local information such as keys, network node public keys, etc.
Forward TCP and UDP traffic over the virtual network, either directly or indirectly.
Provide local DNS resolution for proxied requests.

**Manager**: The orchestrator of the virtual network
Manage network node data, including device IDs, public keys, IP data, gateways, routing tables, and other information.
Verify nodes and return network data to nodes.
Coordinate changes to the virtual network such as joining and deleting nodes.
Maintain the life cycle of nodes.
Interact with the user authentication service and manages the ACL information of the nodes.

**Client**: The tool used by users to access the virtual network
Communicate with nodes and configure and manage nodes.
Handle user registration and login procedure.
