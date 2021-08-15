---
title: Cases
description: 
route: Doc / Cases 
index: 4
---
# Case
# 1. Remote connect windows without exposing public IP with Omniedge

AWS or Azure provides a standard RDP(Windows Remote Desktop Protocol) to remote connect the virtual windows Server. RDP( Windows Remote Desktop Protocol) is a great a tool to remote Windows PC or server over the internet , giving full access to the PCs. When we create a windows virtual server, system will open **3389** port for the purpose, here in AWS, the setting is done by the **Security groups**. However, RDP has some secure problems. 

- RDP exposes public IP on the public internet, everyone who knows the public IP can try to connect or do whatvere he want to pentranet the server. 
- It only allows One remote connection one time.
- RDP is an old technology, developed in 1998 for Windows NT server 4.0.

To have a secure method for the RDP connection, most admins will do: Enable NLA, Eliminate network access to the machine, install System patching, by setting Strict policy and MFA for every login, etc.

It's a very human intensive job. Fortunately We have an easy way to improve with Omniedge. With Omniedge, we can make all connection between local PC to a remote PC with a p2p VPN, keep the connection in a private network,here we will show you hwo to do it. 

### Setp 1. Join the EC2 to Team's virtual network.

First RDP connect to your windows EC2 with its public IP, install and Run OMNIEDGE windows Client, join the virtual network of your team, here we have `My Omni Network`, you will have an IP for this EC2, let's say: `100.100.0.153`. After that, your EC2 is now join the team virtual network. 

### Setp 2. Change the `Security groups` for RDP Connect.
Log into your AWS EC2 Console, selcect your windows EC2, and change the security group setting, in the `Edit Inbouds rules` setting ,change the source for RDP from `0.0.0.0/0` to `100.100.0.0/24`. 

```tips
The source CIDR blocks is 0.0.0.0/0 means every IP is allowed to conenct to the EC2. While 100.100.0.0/24 limit the connection access from 100.100.0.0 to 100.100.0.254 IP ranges.
```


![](/assets/docs/case-AWS-Security-Groups.png)

### Setp 3. RDP Connect by private IP
Connect your virutal network on your own laptop, and open your RDP and input the IP of the AWS EC2 `100.100.0.153`, your AWS EC2 only accepts your private IP ranges now. 

![](/assets/docs/case-aws-windows-1.png)

![](/assets/docs/case-aws-windows-2.png)

### Step 4. VNC Connect by private IP

We recommmend [TightVNC](https://www.tightvnc.com), specially you have requriments to copy files in between the source PC and local PC. You can follow [the docs from TightVNC](https://www.tightvnc.com/docs.php) to setup VNC for your windows.

Enjoy!! 

--------

# 2. OmniEdge with Nvidia JETSON Project
### Tools we need:
- Nvidia JETSON NAND Board
- MicroSD Card 32GB
- MicroSD Card Reader
- Micro-USB Power Supply 5V-2A
- OmniEdge for linux
### **Steps**
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

**Step 6**. Now you laptop and your Jetson has joined in the same virutal network,you can use `ssh` to connect. 

-----

If you have more questions, feel free to [contact us](mailto:support@omniedge.io).