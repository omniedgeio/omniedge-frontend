---
title: Build OmniEdge for FreeBSD
description: OmniEdge is building with a lot of open source projects,and open source as well.
route: Doc / build-freebsd 
index: 8
thumbnail: 
---

# Build OmniEdge for FreeBSD


```bash
su
pkg update && pkg install go gmake git openssl zip autoconf automake libtool
git clone https://github.com/omniedgeio/omniedge-cli
cd omniedge-cli
go mod download
go generate
BUILD_ENV=prod make build-freebsd
```

The compiled omniedge-cli will be found in **/out/**

-----

If you have more questions, feel free to [discuss](https://github.com/omniedgeio/omniedge/discussions).