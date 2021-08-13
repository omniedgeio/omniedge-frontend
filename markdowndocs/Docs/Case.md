---
title: Cases
description: 
route: Doc / Cases 
index: 4
---
# Cases

## 1. OmniEdge with Nvidia JETSON Project
### Tools we need:
- Nvidia JETSON NAND Board
- MicroSD Card 32GB
- MicroSD Card Reader
- Micro-USB Power Supply 5V-2A
- OmniEdge for linux
### Steps
**Step 1**. Download the [Jetson Nano Developer Kit SD Card Image](https://developer.nvidia.com/jetson-nano-sd-card-image), and note where it was saved on the computer, unzip it when download is finished:

```bash
unzip -p ~/Downloads/jetson_nano_devkit_sd_card.zip
```

**Step 2**. Write the image to your microSD card on macOS. Here with the command you have to use: 

```bash
diskutil list external | fgrep '/dev/disk'
diskutil unmountDisk /dev/disk2
sudo dd if=~/Download/jetson.img of=/dev/rdisk4 bs=1m 
13071+0 records in
13071+0 records out
13705936896 bytes transferred in 691.454329 secs (19821898 bytes/sec)
```
Click `Eject` on the `popup window` when finished 

>Please notice the numder **4** in `/dev/disk4` and `/dev/rdisk4`.

**Step 3**. Insert your Micro-SD card to your Jestson Board, plug the power supply, HDMI to a Monitor and an USB-Keyboard, power on the board. Finish the system setting, and enter into the ubuntu desktop. 

**Step 4**. Open a Termnial, download [OmniEdge linux Cli for Arm64V8](hhttps://github.com/omniedgeio/omniedge-linux-cli/releases/download/v0.1.0/omniedge-arm64v8.zip), or by commandline: 

```bash
wget https://github.com/omniedgeio/omniedge-linux-cli/releases/download/v0.1.0/omniedge-arm64v8.zip
```
**Step 5**. Login and Join omniedge by:

```bash
sudo omniedge login -u user@email.com &&
sudo omniedge join
```
Wait a second and a secure VPN will be established

-----

If you have more questions, feel free to [contact us](mailto:support@omniedge.io).