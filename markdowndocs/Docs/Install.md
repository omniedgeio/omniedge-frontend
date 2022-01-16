---
title: Install
description: Install OmniEdge on Windows, macOS, iOS, Linux, Android and more.
route: Doc / Install
index: 3
thumbnail: /assets/OmniEdgeall0.5.png
---
# Installation

## 1. Get Started

+ Sign up your account: [Sign up](https://omniedge.io/register)
+ Download OmniEdge with the link: [Download OmniEdge](https://omniedge.io/download)


## 2. Installing on Windows

OmniEdge Windows is compatible with Windows 7,10(arm) & Windows Server 2016,2019. `Last update: Version 0.2.2, January 16,2022.`

[Download OmniEdge Windows for 7 or later](https://github.com/omniedgeio/app-release/releases/download/v0.2.2/omniedge-setup-0.2.2.exe)

+ Download and run the Windows installer

+ Click on "Log in…" from the Omniedge icon now in your system tray

+ Sign in with your email address

+ Click "Connect" in the menu bar from the tray icon. After a pop-up disappears, a secure VPN connection is initialized.

## 3. Installing on MacOS

OmniEdge MacOS Cli is compatible with intel Macbook, macOS 10 or later Last update: Version 0.2.1, January 15, 2022.

*To use OmniEdge on MacOS, please instal Tun/Tap Driver first*

### 3.1 Install Tun/Tap Driver:

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


### 3.2 Use OmniEdge cli on MacOS

+ Sign up your account: [Sign up](https://omniedge.io/register)

+ Download and install omnidge cli by running the following command:

``` bash
curl https://omniedge.io/install/omniedge-install.sh | bash
```

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
![](/assets/download/OmniEdge-CLI-0.2.0.gif)

## 4. Installing on Android

OmniEdge Android is compatible with Android 6 or later mobile phone or TV. Last update: Version 0.2.1, January 15,2022.

[Download for Android 6 or later](https://github.com/omniedgeio/app-release/releases/download/v0.2.1/omniedge-release-v0.2.1.apk)

+ Download OmniEdge APK and install it
+ Run OmniEdge and Sign in with your email address
+ Click the connect button
+ Allow installing a VPN configuration
+ Enjoy the secure VPN connection

## 5. Installing on Linux

OmniEdge Linux Cli is Compatible with linux for AMD64,Apple M1, Intel X86, ArmV7 and Arm64V8, Last update: Version 0.2.1, January 15, 2022.

+ Sign up your account: [Sign up](https://omniedge.io/register)

+ Download and install omnidge cli by running the following command:

``` bash
curl https://omniedge.io/install/omniedge-install.sh | bash
```

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
![omniedge cli ](/assets/download/OmniEdge-CLI-0.2.0.gif)

## 6. Installing on Synology

OmniEdge Synology is Compatible with ArmV7 and Arm64V8, Last update: Version 0.2.1, January 15, 2022.

+ Sign up your account: [Sign up](https://omniedge.io/register)

+ Download and install omniedge synology from: [https://github.com/omniedgeio/omniedge-synology/releases](https://github.com/omniedgeio/omniedge-synology/releases)

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
![omniedge cli ](/assets/download/OmniEdge-CLI-0.2.0.gif)


## 7. Installing on iOS

OmniEdge iOS is still under development and tested in testflight, we will open for public test soon.


-----

If you have more questions, feel free to [contact us](mailto:support@omniedge.io).