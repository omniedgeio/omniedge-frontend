---
title: Install
description: Install OmniEdge on Windows, macOS, iOS, Linux, Android and more.
route: Doc / Install
index: 3
thumbnail: /assets/OmniEdgeall0.5.png
---

# Installing on Linux

OmniEdge Linux Cli is Compatible with linux for AMD64,Apple M1, Intel X86, ArmV7 and Arm64V8, Last update: Version 0.2.3, April 25, 2022.

+ Sign up your account: [Sign up](https://omniedge.io/register)

+ Download and install omnidge cli by running the following command:

``` bash
curl https://omniedge.io/install/omniedge-install.sh | bash
```

+ Login By Password:

``` bash
omniedge login -u yourname@youremail.com -f your_auth_file_path
```
+ Login By Secret-Key, You can generate secret-key on [omniedge web](https://omniedge.io/dashboard)

```bash
omniedge login -s yoursecuritykey -f your_auth_file_path
```

+ Join Your Network,you can just call omniedge join, it will automatically prompt the available network for you to choose. And you can also add one parameter `-n` to specify the network id manually. And then, enjoy the omniedge network.

```bash
sudo omniedge join -f your_auth_file_path
```
and select your virtual network or

``` bash
sudo omniedge join -n 'virtual-network-id'
```

with a speicified virtual network.

+ Wait a second and a secure VPN will be established
![omniedge cli ](/assets/download/OmniEdge-CLI-0.2.0.gif)

## Run OmniEdge as a Service

+ After login in omniedge, run the command `omniedge join -f .omniedge/auth.json` to get your virutal network ID.

```bash
omniedge join -f .omniedge/auth.json

INFO[0000] You are in mode: prod
INFO[2022-01-17T11:34:28] List Virtual Network response
Use the arrow keys to navigate: ↓ ↑ → ←  and / toggles search
choose the network
  🌶 Home

--------- Virtual Network ----------
Name:        Home
Cidr:        100.100.0.0/24
Role:        2
ID:          your_virtual_network_id

```

+ Change the virtual network and your_auth_file_path and create **omniedge.service**

```bash
vi /etc/systemd/system/omniedge.service
```

```
#/etc/systemd/system/omniedge.service
[Unit]
Description=omniedge process
After=network-online.target syslog.target nfw.target
Wants=network-online.target

[Service]
Type=simple
ExecStartPre=
#Replace to your real virtual network id(can be found by run omniedge join) and auth.json path
ExecStart=/usr/local/bin/omniedge join -n "your_virtual_network_id" -f your_auth_file_path
Restart=on-abnormal
RestartSec=5

[Install]
WantedBy=multi-user.target
Alias=

```

+ Activate `omniedge.service`

```bash
systemctl daemon-reload
systemctl enable omniedge.service
systemctl enable omniedge.service
```

-----

If you have more questions, feel free to [contact us](mailto:support@omniedge.io).