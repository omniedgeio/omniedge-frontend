---
title: Remote access to sub router devices
route: Doc / Cases / subroute
description: Power your cheap router to remote access sub router devices through OmniEdge
thumbnail: 
index: 4
---

# Remote access to sub router devices

There are a lot of WIFI devices which are not able to run omniedge or other VPN protocols, hence the remote access have a challenge sometimes. Here we offer a cheap solution for you to use OmniEdge OpenWrt and OmniEdge cli for macOS with small firewall command. 

## Requirements

- OmniEdge client for all platform
- OmniEdge openwrt ipk

## Setup on Windows

1. Install OmniEdge For Windows

Doc: [https://omniedge.io/download/windows](https://omniedge.io/download/windows)

2. Run `cmd` as administrator, and set the route 

```route add 192.168.1.0 mask 255.255.255.0 100.100.100.46```

## Setup on MacOS 

1. Install OmniEdge for macOS

Doc:  [https://omniedge.io/download/macos](https://omniedge.io/download/macos)

2. Set the route

```sudo route -n add -net 192.168.1.0 100.100.100.46```

Here:

- **192.168.1.0**: LAN IP range of the OpenWrt Router
- **100.100.100.46**: OMNIEDGE IP of OpenWRT Router

## Setup on OpenWrt

- LAN IP Range: **192.168.1.0/24**

1.  [Download](https://github.com/omniedgeio/omniedge/releases/tag/v0.2.4) omnedge ipks related to your routers arch, and copy it to your router
2. Install it by running `opkg install omniedge*.ipk`
3. Generate Security-key, and get the Virtual Network ID from [Dashboard](https://omniedge.io/dashboard)
4. Add your Security key and virtual network id to `/etc/init.d/omniedge`:

```bash
security_key=OMNIEDGE_SECURITY_KEY
virtual_network_id=OMNIEDGE_VIRUTALNETWORK_ID
```
5. running Omniedge by: 

```bash
/etc/init.d/omniedge enable
/etc/init.d/omniedge start
```

6. set firewall

```bash
iptables -t nat -A POSTROUTING -s 100.100.100.0/24 -j MASQUERADE
iptables -A forwarding_rule -s 100.100.100.0/24 -j ACCEPT
LAN_DEV=`ubus call network.interface.lan status | jsonfilter -e '@["device"]'`
iptables -I FORWARD 1 -i $LAN_DEV -d 100.100.100.0/24 -j ACCEPT
```

Here:
- **100.100.100.0/24**: your virtual network IP range

7. Add all after the network started to hotplug

```bash
#vim /etc/hotplug.d/iface/99-omniedge
[ "${ACTION}" = "ifup" ] && {
    logger -t hotplug "Device: ${DEVICE} / Action: ${ACTION}"
    /etc/init.d/omniedge start &>/dev/null &
    wait 5
    iptables -t nat -A POSTROUTING -s 100.100.100.0/24 -j MASQUERADE
    iptables -A forwarding_rule -s 100.100.100.0/24 -j ACCEPT
    LAN_DEV=`ubus call network.interface.lan status | jsonfilter -e
'@["device"]'`
    iptables -I FORWARD 1 -i $LAN_DEV -d 100.100.100.0/24 -j ACCEPT
}
```

![image](https://user-images.githubusercontent.com/93888/190896588-96007623-cabe-42f0-a49c-ef873ef29480.png)
