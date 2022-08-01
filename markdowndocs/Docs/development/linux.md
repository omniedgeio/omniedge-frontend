---
title: Build OmniEdge for Linux
description: OmniEdge is building with a lot of open source projects,and open source as well.
route: Doc / build-linux
index: 8
thumbnail: 
---

# Build OmniEdge for Linux

## Install golang for your distribution

Follow the instruction to install golang, we use 1.16.6 here: https://go.dev/doc/install

## Build for Ubuntu/Debian

```bash
sudo -E apt-get -y update
sudo -E apt-get install -y openssl
sudo -E apt-get install -y build-essential
sudo -E apt-get install -y libssl-dev
sudo -E apt-get install -y zip
git clone https://github.com/omniedgeio/omniedge-cli
cd omniedge-cli
go mod download
go generate
BUILD_ENV=prod make build
```

The compiled omniedge-cli will be found in **/out/**

-----

If you have more questions, feel free to [discuss](https://github.com/omniedgeio/omniedge/discussions).
