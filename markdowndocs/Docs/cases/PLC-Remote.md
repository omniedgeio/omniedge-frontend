---
title: Turn a GL- MIFI into a $2000 PLC remote router
route: Doc / Cases / PLC-Remote
description: Turn a GL- MIFI into a $2000 PLC remote router
thumbnail: 
index: 4
---

# Turn a GL- MIFI into a $2000 PLC remote router

Reference：

1.  [How To use LTE modem in QMI mode for WAN connection](https://openwrt.org/docs/guide-user/network/wan/wwan/ltedongle)
2. https://zsien.cn/openwrt-ltedongle/

## Router Setup

Hardware: GL.iNet GL-MiFi, with QUECTEL EC20 LTE module. 
Software: [OpenWrt 21.02.1](https://downloads.openwrt.org/releases/21.02.1/targets/ath79/generic/openwrt-21.02.1-ath79-generic-glinet_gl-mifi-squashfs-sysupgrade.bin)

Note: The reason for not using the latest version 22.03 is that it has abandoned the use of **iptables** and instead uses **ntftables** exclusively, which makes [the iptables rules](https://omniedge.io/docs/article/cases/subroute) unavailable. If you need to use the latest version of OpenWrt, you need to convert to new nft rules.

1. Install the necessary packages.   

```bash
opkg update && opkg install usb-modeswitch kmod-mii kmod-usb-net kmod-usb-wdm kmod-usb-net-qmi-wwan uqmi kmod-tun ca-bundle luci-proto-qmi iptables kmod-usb-serial-option kmod-usb-serial kmod-usb-serial-wwan kmod-usb-net-cdc-mbim umbim
```

2. Configure the network by modifying the `/etc/config/network` file and adding the following content at the end:   

```bash
    config interface 'modem'
        option ifname 'wwan0'
        option proto 'qmi'
        option device '/dev/cdc-wdm0'
        option apn 'ctnet'
```

Fill in the 'apn' field with different content according to your own carrier.

3. Configure the firewall by modifying the /etc/config/firewall file and adding the modem to the WAN section.
    
```bash
config zone
    option name wan
    ···
    list network 'modem'
    ···
```

4.  Configure the led by modifying  `/etc/config/system`

```
config led 'led_3gnet'
    ···
    option dev 'wwan0'
```

5.  Restart your device, and if there are no issues, you should be able to access the internet
6.  Install OmniEdge, set the the Router's LAN Range, for example: **192.168.1.0/24**.
7.  Download OmniEdge，the version for GL-MIFI is：https://github.com/omniedgeio/omniedge/releases/download/v0.2.4/omniedge_v0.2.4_mips_24kc.ipk, Copy the ipk to router and install it by run `opkg install omniedge*.ipk`
8.  Generate Security key and get virtual network ID form  [Omniedge Dashboard](https://omniedge.io/dashboard)
9.  Add the Security Key and Virtual Network ID to `/etc/init.d/omniedge`:

```
	security_key=OMNIEDGE_SECURITY_KEY
	virtual_network_id=OMNIEDGE_VIRUTALNETWORK_ID
```

10. Enable and Start OmniEdge：

```
/etc/init.d/omniedge enable
/etc/init.d/omniedge start
```

> After running Omniedge for the first time, modify the 'start' function in `/etc/init.d/omniedge` by removing the line 'cp /proc/sys/kernel/random/uuid /etc/machine-id' to prevent the IP address from changing each time.

11. Configure the firwall：

```
iptables -t nat -A POSTROUTING -s 100.100.100.0/24 -j MASQUERADE
iptables -A forwarding_rule -s 100.100.100.0/24 -j ACCEPT
LAN_DEV=`ubus call network.interface.lan status | jsonfilter -e '@["device"]'`
iptables -I FORWARD 1 -i $LAN_DEV -d 100.100.100.0/24 -j ACCEPT
```

Here: - **100.100.100.0/24**: is the IP of OmniEdge 

12. To start the OmniEdge automatically on boot after network

```
#vim /etc/hotplug.d/iface/99-omniedge
[ "${ACTION}" = "ifup" ] && {
    logger -t hotplug "Device: ${DEVICE} / Action: ${ACTION}"
    /etc/init.d/omniedge start &>/dev/null &
    wait 5
    iptables -t nat -A POSTROUTING -s 100.100.100.0/24 -j MASQUERADE
    iptables -A forwarding_rule -s 100.100.100.0/24 -j ACCEPT
    LAN_DEV=`ubus call network.interface.lan status | jsonfilter -e '@["device"]'`
    iptables -I FORWARD 1 -i $LAN_DEV -d 100.100.100.0/24 -j ACCEPT

}
```

## To access LAN devices from a client through OmniEdge

## Setup on Windows

1.  Install OmniEdge For Windows

Doc: [https://omniedge.io/download/windows](https://omniedge.io/download/windows)

2.  Run `cmd` as administrator, and set the route

`route add 192.168.1.0 mask 255.255.255.0 100.100.100.46`

## Setup on MacOS

1.  Install OmniEdge for macOS

Doc:  [https://omniedge.io/download/macos](https://omniedge.io/download/macos)

2.  Set the route

`sudo route -n add -net 192.168.1.0 100.100.100.46`

Here:

-   **192.168.1.0**: LAN IP range of the OpenWrt Router
-   **100.100.100.46**: OMNIEDGE IP of OpenWRT Router

-----

If you have more questions, feel free to [discuss](https://github.com/omniedgeio/omniedge/discussions).