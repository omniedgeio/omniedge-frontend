---
title: OmniEdge for OpenWrt
description: Bring OpenWrt into intranet
route: Doc / Install / OmniEdge for OpenWrt
index: 3
thumbnail: 
---

# OmniEdge for OpenWrt

Bring OpenWrt into intranet, access your OpenWrt routers from everywhere.

We are offering ipks for **armv8(aarch64_generic,aarch64_cortex-a53,aarch64_cortex-a72), arm(arm_cortex-a7_neon-vfpv4,arm_cortex-a8_vfpv3, arm_cortex-a9), i386_pentium4, x86_64(amd64),mipsel_24kc & mips_24kc**.

Last update: Version 0.2.4, September,15, 2022.

## Use OmniEdge on OpenWrt

1. [Download](https://github.com/omniedgeio/omniedge/releases/tag/v0.2.4) omnedge ipks related to your routers arch, and copy it to your router
2. Install it by running `opkg install omniedge*.ipk`
3. Generate Security-key, and get the Virtual Network ID from [Dashboard](https://omniedge.io/dashboard)
4. Add your Security key and virtual network id to `/etc/init.d/omniedge`, run `chmod +x /etc/init.d/omniedge` if you system missing the script:

```bash
security_key=OMNIEDGE_SECURITY_KEY
virtual_network_id=OMNIEDGE_VIRUTALNETWORK_ID
```

5. running Omniedge by: 

```bash
/etc/init.d/omniedge enable
/etc/init.d/omniedge start
```



-----

If you have more questions, feel free to [discuss](https://github.com/omniedgeio/omniedge/discussions).