---
title: Cases
route: Doc / Cases 
description: Use cases with OmniEdge, Remote connect windows without exposing public IP with Omniedge,OmniEdge with Nvidia JETSON Project
thumbnail: /assets/docs/case-aws-windows-2.png
index: 4
---

# Case

# 1. Remote connect windows without exposing public IP with Omniedge

AWS or Azure provides a standard RDP(Windows Remote Desktop Protocol) to remotely connect the virtual Windows Server. RDP( Windows Remote Desktop Protocol) is a great tool to remote Windows PC or server over the internet, giving full access to the PCs. When we create a window virtual server, the system will open the **3389** port for the purpose, here in AWS, the setting is done by the **Security groups**. However, RDP has some security problems. 

- RDP exposes public IP on the public internet, everyone who knows the public IP can try to connect or do whatever he wants to pentranate the server. 
- It only allows One remote connection one time.
- RDP is an old technology, developed in 1998 for Windows NT server 4.0.

To have a secure method for the RDP connection, most admins will do: Enable NLA, Eliminate network access to the machine, install System patching, by setting Strict policy and MFA for every login, etc.

It's a very human-intensive job. Fortunately, We have an easy way to improve with Omniedge. With Omniedge, we can make all connections between a local PC to a remote PC with a p2p VPN, keep the connection in a private network, here we will show you how to do it. 

### Step 1. Join the EC2 Team's virtual network.

First RDP connects to your windows EC2 with its public IP, install and Run OMNIEDGE windows Client, join the virtual network of your team, here we have `My Omni Network`, you will have an IP for this EC2, let's say: `100.100.0.153`. After that, your EC2 now joins the team virtual network. 

### Setp 2. Change the `Security groups` for RDP Connect.

Log into your AWS EC2 Console, select your windows EC2, and change the security group setting, in the `Edit Inbouds rules` setting,change the source for RDP from `0.0.0.0/0` to `100.100.0.0/24`. 

```tips
The source CIDR blocks are 0.0.0.0/0 means every IP is allowed to connect to the EC2. While 100.100.0.0/24 limit the connection access from 100.100.0.0 to 100.100.0.254 IP ranges.
```


![](/assets/docs/case-AWS-Security-Groups.png)

### Step 3. RDP Connect by private IP
Connect your virtual network on your own laptop, and open your RDP and input the IP of the AWS EC2 `100.100.0.153`, your AWS EC2 only accepts your private IP ranges now. 

![](/assets/docs/case-aws-windows-1.png)

![](/assets/docs/case-aws-windows-2.png)

### Step 4. VNC Connect by private IP

We recommend [TightVNC](https://www.tightvnc.com), especially you have requirements to copy files in between the source PC and local PC. You can follow [the docs from TightVNC](https://www.tightvnc.com/docs.php) to set up VNC for your windows.

Enjoy!! 

--------

# 2. OmniEdge with Nvidia JETSON Project

### 2.1 Tools we need:
- Nvidia JETSON NAND Board
- MicroSD Card 32GB
- MicroSD Card Reader
- Micro-USB Power Supply 5V-2A
- OmniEdge for Linux

### 2.2 **Steps**

**Step 1**. Download the [Jetson Nano Developer Kit SD Card Image](https://developer.nvidia.com/jetson-nano-sd-card-image), and note where it was saved on the computer, unzip it when download is finished:

```bash
unzip -p ~/Downloads/jetson_nano_devkit_sd_card.zip
```

**Step 2**. Write the image to your microSD card on macOS. Herewith the command, you have to use: 

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

**Step 3**. Insert your Micro-SD card into your Jetson Board, plug the power supply, HDMI to a Monitor, and a USB-Keyboard, power on the board. Finish the system setting, and enter into the ubuntu-desktop. 

**Step 4**. Download and install omnidge cli by running the following command:

``` bash
curl https://omniedge.io/install/omniedge-install.sh | bash
```

**Step 5**. Login OmniEdge and Join Virtual Network

+ Login By Password:

``` bash
omniedge login -u yourname@youremail.com -f your_auth_file_path
```
+ Login By Secret-Key, You can generate secret-key on omniedge web

```bash
omniedge login -s yoursecuritykey -f your_auth_file_path
```

+ Join Your Network,you can just call omniedge join, it will automatically prompt the available network for you to choose. And you can also add one parameter -n to specify the network id manually. And then, enjoy the omniedge network.

```bash
sudo omniedge join -f your_auth_file_path
```
and select your virtual network or

``` bash
sudo omniedge join -n 'virtual-network-id'
```
with a speicified virtual network.

+ Wait a second and a secure VPN will be established

![omniedge cli](/assets/download/OmniEdge-CLI-0.2.0.gif)


**Step 6**. Now your laptop and your Jetson have joined in the same virtual network, you can use `ssh` to connect. 


# 3. Display and control your Android device with Omniedge from anywhere on MacOS, Windows and Linux

[Scrcpy, pronounced "screen copy"](https://github.com/Genymobile/scrcpy), is an application provides display and control of Android devices connected via USB (or over TCP/IP). It does not require any root access. It works on GNU/Linux, Windows and macOS. 

With [OmniEdge](https://omniedge.io/download), Scrcpy can have a wonderful feature, remote display and control of android devices over OmniEdge's peer-to-peer network from anywhere. 

![](/assets/docs/Scrply-OmniEdge.jpg)

Scrcpy's features include:

- recording
- mirroring with device screen off
- copy-paste in both directions
- configurable quality
- device screen as a webcam (V4L2) (Linux-only)
- physical keyboard simulation (HID) (Linux-only)
- physical mouse simulation (HID) (Linux-only)
- OTG mode (Linux-only)

### 3.1 Requirements

- The Android device requires at least API 21 (Android 5.0).
- Make sure you [enabled adb debugging](https://developer.android.com/studio/command-line/adb.html#Enabling) on your device(s).
- On some devices, you also need to enable [an additional option](https://github.com/Genymobile/scrcpy/issues/70#issuecomment-373286323) to control it using keyboard and mouse.
- Install OmniEdge for your [macOS](https://omniedge.io/download/macOS), [linux](https://omniedge.io/download/linuxcli), or [windows](https://omniedge.io/download/windows), and on your [android](https://omniedge.io/download/android) devices. Read the [OmniEdge Installation Instruction](https://omniedge.io/docs/article/Install) to install OmniEdge. The below example is on macOS. 

### 3.2 Install Scrcpy for macOS

The application is available in Homebrew. Just install it:

``` bash
brew install scrcpy
```

You need adb, accessible from your PATH. If you don't have it yet:

```bash
brew install android-platform-tools
```

### 3.3 Install OmniEdge for MacOS

OmniEdge MacOS Cli is compatible with intel Macbook, macOS 10 or later Last update: Version 0.2.2, January 15, 2022.

*To use OmniEdge on MacOS, please instal Tun/Tap Driver first*

#### 3.3.1 Install Tun/Tap Driver:

#### For Intel Mac: 

  - Download tuntap driver from [https://sourceforge.net/projects/tuntaposx/files/latest/download](https://sourceforge.net/projects/tuntaposx/files/latest/download) 
  - Extract `tuntap_20150118.tar.gz` and Install tuntap by running **tuntap_20150118.pkg**

#### For M1 Mac user: 

  - Download `https://github.com/Tunnelblick/Tunnelblick/tree/master/third_party/tap-notarized.kext`
  - Download `https://github.com/Tunnelblick/Tunnelblick/tree/master/third_party/tun-notarized.kext`
  - Change the name to **tap.kext** and **tap.kext**, 
  - Copy to **/Library/Extensions**
  - add `net.tunnelblick.tap.plist` and `net.tunnelblick.tun.plist` to `/Library/LaunchDaemons/`

  ```bash
    #net.tunnelblick.tap.plist
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
        <key>Label</key>
        <string>net.tunnelblick.tap</string>
        <key>ProgramArguments</key>
        <array>
            <string>/sbin/kextload</string>
            <string>/Library/Extensions/tap.kext</string>
        </array>
        <key>KeepAlive</key>
        <false/>
        <key>RunAtLoad</key>
        <true/>
        <key>UserName</key>
        <string>root</string>
    </dict>
    </plist>

  ```

  ```bash
    #net.tunnelblick.tun.plist
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
        <key>Label</key>
        <string>net.tunnelblick.tun</string>
        <key>ProgramArguments</key>
        <array>
            <string>/sbin/kextload</string>
            <string>/Library/Extensions/tun.kext</string>
        </array>
        <key>KeepAlive</key>
        <false/>
        <key>RunAtLoad</key>
        <true/>
        <key>UserName</key>
        <string>root</string>
    </dict>
    </plist>
  ```
- restart Mac after allowing the security check. 


### 3.3.2 Use OmniEdge cli on MacOS

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
![](/assets/download/OmniEdge-CLI-0.2.0.gif)


### 3.4 Installing OmniEdge on Android

OmniEdge Android is compatible with Android 6 or later mobile phone or TV. Last update: Version 0.2.1, January 15,2022.

[Download for Android 6 or later](https://github.com/omniedgeio/app-release/releases/download/v0.2.1/omniedge-release-v0.2.1.apk)

+ Download OmniEdge APK and install it
+ Run OmniEdge and Sign in with your email address
+ Click the connect button
+ Allow installing a VPN configuration
+ Enjoy the secure VPN connection

### 3.5 Display and control Android with OmniEdge

Run scrcpy in the termial: 
```bash
$scrcpy --tcpip=100.100.100.2:5555
```

Then you will see the following output, and a popup-window will open to show your android device's screen: 

```bash
scrcpy 1.22 <https://github.com/Genymobile/scrcpy>
2022-02-10 17:03:25.249 scrcpy[41700:1349554] INFO: Connected to 100.100.100.2:5555
/opt/homebrew/Cellar/scrcpy/1.22_1/share/scrcpy/scrcpy-server: 1 file pushed, 0 skipped. 15.5 MB/s (40955 bytes in 0.003s)
[server] INFO: Device: OnePlus HD1900 (Android 11)
2022-02-10 17:03:34.824 scrcpy[41700:1349549] INFO: Renderer: metal
2022-02-10 17:03:34.848 scrcpy[41700:1349549] INFO: Initial texture: 1080x2400
2022-02-10 17:05:13.675 scrcpy[41700:1349549] TSM AdjustCapsLockLEDForKeyTransitionHandling - _ISSetPhysicalKeyboardCapsLockLED Inhibit
```

Enjoy !!

# 4. Air Drop Any Files between MacOS, Windows, Routers, Linux and Android with Omniedge from anywhere

[LANDrop](https://landrop.app), is an application provides drop any files to any devices on your LAN,  No need to use instant messaging for that anymore. It works on GNU/Linux, Windows, macOS, iOS and Android. 

With [OmniEdge](https://omniedge.io/download), LANDrop can have a wonderful feature, drop files to remote devices over OmniEdge's peer-to-peer network from anywhere. 


![](/assets/docs/Case-OmniEdge-LanDrop.jpg)

Scrcpy's features include:

- Intuitive UI. You know how to use it when you see it.
- Secure. Uses state-of-the-art cryptography algorithm. No one else can see your files.
- No Compression.Doesn't compress your photos and videos when sending.
- And More

### 4.1 Requirements

- Install LANDrop for your Devices, Download Here: [https://github.com/LANDrop/LANDrop-releases](https://github.com/LANDrop/LANDrop-releases)
- Install OmniEdge for your [macOS](https://omniedge.io/download/macOS), [linux](https://omniedge.io/download/linuxcli), or [windows](https://omniedge.io/download/windows), and on your [android](https://omniedge.io/download/android) devices. Read the [OmniEdge Installation Instruction](https://omniedge.io/docs/article/Install) to install OmniEdge. The below example is on macOS and Android. Air Drop files between macOS and Android.

### 4.2 Install LANDrop for Android and macOS

### 4.2.1 Install LANDrop for macOS

Download macOS LANDrop from [LANDrop macOS](https://github.com/LANDrop/LANDrop/releases/download/v0.4.0/LANDrop-0.4.0-macos.dmg), the latest version is 0.4.0. 

Install and run it after downloading. 

### 4.2.2 Install LANDrop for Android

Download macOS LANDrop from [LANDrop Android](https://releases.landrop.app/LANDrop-flutter-latest-android.apk), the latest version is 0.4.0. 

Install and run it after downloading. 

![](/assets/docs/Case-LANDrop-Setting.png)

### 4.3 Install OmniEdge for MacOS

OmniEdge MacOS Cli is compatible with intel Macbook, macOS 10 or later Last update: Version 0.2.2, February 27, 2022.

*To use OmniEdge on MacOS, please instal Tun/Tap Driver first*

#### 4.3.1 Install Tun/Tap Driver:

#### For Intel Mac: 

  - Download tuntap driver from [https://sourceforge.net/projects/tuntaposx/files/latest/download](https://sourceforge.net/projects/tuntaposx/files/latest/download) 
  - Extract `tuntap_20150118.tar.gz` and Install tuntap by running **tuntap_20150118.pkg**

#### For M1 Mac user: 

  - Download `https://github.com/Tunnelblick/Tunnelblick/tree/master/third_party/tap-notarized.kext`
  - Download `https://github.com/Tunnelblick/Tunnelblick/tree/master/third_party/tun-notarized.kext`
  - Change the name to **tap.kext** and **tap.kext**, 
  - Copy to **/Library/Extensions**
  - add `net.tunnelblick.tap.plist` and `net.tunnelblick.tun.plist` to `/Library/LaunchDaemons/`

  ```bash
    #net.tunnelblick.tap.plist
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
        <key>Label</key>
        <string>net.tunnelblick.tap</string>
        <key>ProgramArguments</key>
        <array>
            <string>/sbin/kextload</string>
            <string>/Library/Extensions/tap.kext</string>
        </array>
        <key>KeepAlive</key>
        <false/>
        <key>RunAtLoad</key>
        <true/>
        <key>UserName</key>
        <string>root</string>
    </dict>
    </plist>

  ```

  ```bash
    #net.tunnelblick.tun.plist
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
        <key>Label</key>
        <string>net.tunnelblick.tun</string>
        <key>ProgramArguments</key>
        <array>
            <string>/sbin/kextload</string>
            <string>/Library/Extensions/tun.kext</string>
        </array>
        <key>KeepAlive</key>
        <false/>
        <key>RunAtLoad</key>
        <true/>
        <key>UserName</key>
        <string>root</string>
    </dict>
    </plist>
  ```
- restart Mac after allowing the security check. 


#### 4.3.2 Use OmniEdge cli on MacOS

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
![](/assets/download/OmniEdge-CLI-0.2.0.gif)


### 4.3.3 Installing OmniEdge on Android

OmniEdge Android is compatible with Android 6 or later mobile phone or TV. Last update: Version 0.2.1, January 15,2022.

[Download for Android 6 or later](https://github.com/omniedgeio/app-release/releases/download/v0.2.1/omniedge-release-v0.2.1.apk)

+ Download OmniEdge APK and install it
+ Run OmniEdge and Sign in with your email address
+ Click the connect button
+ Allow installing a VPN configuration
+ Enjoy the secure VPN connection

### 4.4 Drop Files between Android and macOS

Open LANDrop on Android and macOS, you will see your Android Phone from your macOS, your macbook pro from Android. Select fiels and send them. 

![](/assets/docs/Case-OmniEdge-LanDrop.jpg)

Enjoy !!

# 5.Display and control macOS, Linux and Windows with Omniedge 

In computing, Virtual Network Computing (VNC) is a graphical desktop-sharing system that uses the Remote Frame Buffer protocol (RFB) to remotely control another computer. It transmits the keyboard and mouse input from one computer to another, relaying the graphical-screen updates, over a network. VNC is platform-independent – there are clients and servers for many GUI-based operating systems and for Java. 

Multiple clients may connect to a VNC server at the same time. Popular uses for this technology include remote technical support and accessing files on one's work computer from one's home computer, or vice versa.

With [OmniEdge](https://omniedge.io/download), VNC can have a wonderful feature, replace expensive tools by OmniEdge's peer-to-peer network, remote control computres from anywhere, anytime.

VNC's features include:

- Remote Control
- Cross-platformm, PC to PC, Mobile to PC across Windows, Mac, Linux, iOS, and Android.
- File transfer
- And More

![](/assets/docs/case-omniedge-vnc.png)

### 5.1 Requirements

- Install OmniEdge for your [macOS](https://omniedge.io/download/macOS), [linux](https://omniedge.io/download/linuxcli), or [windows](https://omniedge.io/download/windows), and on your [android](https://omniedge.io/download/android) devices. Read the [OmniEdge Installation Instruction](https://omniedge.io/docs/article/Install) to install OmniEdge. 

- Install VNC Servers and Clients, you can use [TightVNC](https://www.tightvnc.com) or [REALVNC](https://www.realvnc.com/en/)for windows. 


### 5.2 Install TightVNC for Windows

Download [TightVNC](https://www.tightvnc.com/download.php), and install it. TightVNC runs on any version of Windows. 

You can refer the Doc: [TightVNC for Windows: Installation and Getting Started (PDF)](https://www.tightvnc.com/doc/win/TightVNC_for_Windows-Installation_and_Getting_Started.pdf) to install and get TightVNC running. 

### 5.2.1: Install TightVNC。

For Windows 64bit：[tightvnc-2.8.27-gpl-setup-64bit.msi](https://www.tightvnc.com/download/2.8.27/tightvnc-2.8.27-gpl-setup-64bit.msi)

For Windows 32bit: [tightvnc-2.8.27-gpl-setup-32bit.msi](https://www.tightvnc.com/download/2.8.27/tightvnc-2.8.27-gpl-setup-32bit.msi)

Double click and follow the instructions to install. 


### 5.2.2: Run and Setup TightVNC Server。

After run TightVNC Server, you can see a tray icon,：

![](/assets/docs/case-VNC-omniedge-1.png)

Setup the password for remote control by right clicking the tray icon of TightVNC Server：

![](/assets/docs/case-VNC-omniedge-2.png)

Click Configuration Menu, Set the password and remember

![](/assets/docs/case-VNC-omniedge-3.png)


### 5.3. Installing OmniEdge Windows

You need install omniedge on every machine you want to connect, here we take windows for example. If you remote computer is using a different OS, please refer [OmniEdge Download](https://omniedge.io/download) to download related version of OmniEdge. 

OmniEdge Windows is compatible with Windows 7,10(arm) & Windows Server 2016,2019. `Last update: Version 0.2.2, January 16,2022.`

[Download OmniEdge Windows for 7 or later](https://github.com/omniedgeio/app-release/releases/download/v0.2.2/omniedge-setup-0.2.2.exe)

+ Download and run the Windows installer

+ Click on "Log in…" from the Omniedge icon now in your system tray

+ Sign in with your email address

+ Click "Connect" in the menu bar from the tray icon. After a pop-up disappears, a secure VPN connection is initialized.


### 5.4. Remote Control a friend's Computer

You can invite your friend to your virtual network, and remote support and control your friend's computer through VNC. You friend's computer needs to install VNC and running OmniEdge as well. 

![](/assets/docs/case-Omniedge-Invite.png)


# 6. Talk to your family and share photos in a LAN on the internet

![](/assets/docs/case-lanmessenger-omniedge.jpeg)

[LAN messenger](https://www.lanmessenger.net/), is a secure network messaging software application for corporate LANs (local area networks). It does not require a server and is very easy to install and use. An application comes with a variety of handy features, like message notification alarms, personal or group messaging, and an intuitive interface.. It works on Windows, macOS, and Android. 

With [OmniEdge](https://omniedge.io/download), LAN messenger can have a wonderful feature, users can talk and share files over OmniEdge's peer-to-peer network from anywhere, LAN messenger now becomes worldwide. 

### 6.1 Requirements

- Install OmniEdge for your [macOS](https://omniedge.io/download/macOS),  or [windows](https://omniedge.io/download/windows), and on your [android](https://omniedge.io/download/android) devices. Read the [OmniEdge Installation Instruction](https://omniedge.io/docs/article/Install) to install OmniEdge. 

- Download and Install [LAN messenger](https://www.lanmessenger.net/instant-messenger-download.html)


### 6.2 Invite your friend to your private network

With the share private network feature, you can invite your friends, teammate, or anyone you trust to your own Virtual Network. 

Select your private network, switch to the **Users** panel, press **invite** button and then click **+** and put your friend email in the invitation form, after click invite you friend will receive an email, accept the invitation and your private network will be displayed in his/her virtual network list.

![](/assets/docs/case-Omniedge-Invite.png)

### 6.3. Talk to your frind and share files with them

[LAN messenger](https://www.lanmessenger.net/) will detect your friends devices as long as you and they are connected in the same private work. 

![](/assets/docs/Case-Lanmessenger-Omniedge.gif)


Enjoy!! 


-----

If you have more questions, feel free to [contact us](mailto:support@omniedge.io).