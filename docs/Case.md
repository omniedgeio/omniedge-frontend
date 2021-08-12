---
title: Cases
description: 
route: Doc / Cases 
index: 4
---
# Cases

##  Device Management
##  Remote Access
##  How we use OmniEdge with a cloud-deployed Mautic for internal use
##  How we use OmniEdge for remote deploying your Nvidia AI based machines
### Tools we need:
- Nvidia JETSON NAND Board
- MicroSD Card 32GB
- MicroSD Card Reader
- Micro-USB Power Supply 5V-2A
- OmniEdge for linux
### Steps
1. Download the [Jetson Nano Developer Kit SD Card Image](https://developer.nvidia.com/jetson-nano-sd-card-image), and note where it was saved on the computer.
2. Write the image to your microSD card by following the instructions below according to your computer’s operating system: Windows, macOS, or Linux. I have macOS, so the example will do on macOS. 

```bash
diskutil list external | fgrep '/dev/disk'
diskutil unmountDisk /dev/disk2
```

```bash
/usr/bin/unzip -p ~/Downloads/jetson_nano_devkit_sd_card.zip

```bash
sudo dd if=~/Download/jetson.img of=/dev/rdisk4 bs=1m 
13071+0 records in
13071+0 records out
13705936896 bytes transferred in 691.454329 secs (19821898 bytes/sec)
```

![](/assets/docs/case-jeston.png)
Click `Eject` when finished 

>Please notice the numder`4`in `/dev/disk4` and `/dev/rdisk4`.


