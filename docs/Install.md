---
title: Install
description: Install OmniEdge on Windows, macOS, iOS, Linux, Android and more.
route: Doc / Install
index: 3
---

# Installation

## 1. Get Started with OmniEdge

+ Sign up your account with your email and password: [Sign up](https://dev.omniedge.io/register)
+ Download OmniEdge
    OmniEdge offers clients from Windows, MacOS, Linux cli, Linux GUI, iOS, android, Synology and router. Download the client with the link: [Download OmniEdge Client](https://omniedge.io/download)
+ Log in and join your own network
+ Test your connection.

## 2. Installing OmniEdge on Windows
OmniEdge Windows is compatible with Windows 7,10(arm) & Windows Server 2016,2019. `Last update: Version 0.1.4, April 18, 2021.`

[Download OmniEdge Windows for 7 or later](https://github.com/omniedgeio/omniedge-windows-update/releases/download/v0.1.2/omniedge-setup-0.1.2.exe)

1. Download and run the Windows installer
2. Click on "Log in…" from the Omniedge icon now in your system tray
3. Sign in with your email address
4. Click "Connect" in the menu bar from the tray icon. After a pop up disappears, a secure VPN connection is initialized.

## 3. Installing OmniEdge on MacOS
OmniEdge MacOS is compatible with intel Macbook, macOS 10 or later Last update: Version 0.1.7, April 3, 2021.

[Download OmniEdge for macOS 10 or later](https://raw.githubusercontent.com/omniedgeio/omniedge-mac/master/Omniedge.dmg)

1. Download OmniEdge DMG and open it.
2. Install Tun/Tap Driver:

    2.1 For Intel Mac User: **Install tuntap by clicking tuntap_20150118.pkg**

    2.2. M1 Mac user: 
    ```
    Download https://github.com/Tunnelblick/Tunnelblick/tree/master/third_party/tap-notarized.kext and 
    https://github.com/Tunnelblick/Tunnelblick/tree/master/third_party/tun-notarized.kext
    then copy to **/Library/Extensions **, restart Mac after allowing the security check. 
    ```
3. Drop Omniedge to Applications folder
4. Run OmniEdge
5. Sign in with your email address
6. Click the button near 'off' to connect, then a secure VPN connection is initialized.
## 4. Installing OmniEdge on Android

OmniEdge Android is compatible with Android 6 or later mobile phone or TV. Last update: Version 0.1.3, April 27, 2021.

[Download for Android 6 or later](https://github.com/omniedgeio/omniedge-android/releases/download/v0.1.3/OmniEdge-v0.1.3.apk)

1. Download OmniEdge APK and install it
2. Run OmniEdge and Sign in with your email address
3. Click the connect button
4. Allow to install a VPN configuration
5. Enjoy the secure VPN connection
## 5. Installing OmniEdge on Linux
OmniEdge Linux Cli is Compatible with linux for AMD64,ArmV7 and Arm64V8, Archlinux, OMV(Debian 9), Synology NAS,Ubuntu 16.04/18.04/20.04, CentOS 7/8, Debian 9/10, Fedora 32 Last update: Version 0.1.0, May 10, 2021.

[Download OmniEdge Linux Cli](https://github.com/omniedgeio/omniedge-linux-cli/releases)

1. Download and install omnidge cli depend on system architecture :
    1. OmniEdge linux Cli for AMD64
    ```
    wget https://github.com/omniedgeio/omniedge-linux-cli/releases/download/v0.1.0/omniedge-amd64.zip
    ```
    2. OmniEdge linux Cli for Arm64V8

    ```
    wget https://github.com/omniedgeio/omniedge-linux-cli/releases/download/v0.1.0/omniedge-arm64v8.zip
    ```
    3. OmniEdge linux Cli for ArmV7

    ```
    wget https://github.com/omniedgeio/omniedge-linux-cli/releases/download/v0.1.0/omniedge-armv7.zip
    ```

2. Login and Join omniedge:
```
sudo omniedge login -u user@email.com &&
sudo omniedge join
```
3. Wait a second and a secure VPN will be established

## 6. Installing OmniEdge on iOS
Coming Soon
## 7. Installing OmniEdge on Raspberry Pi
OmniEdge Raspberry Pi is Compatible with Rapsberry PI 1B, 3B, 3B+ Last update: Version 0.1.0, April 25, 2021.

[OmniEdge Raspberry Pi(https://github.com/omniedgeio/omniedge-linux-cli/releases/download/v0.1.0/omniedge_arm.zip)

1. Sign up your account with your email and password: [Sign up](https://dashboard.omniedge.io/sign-up)
2. Download and install omnidge cli

```
curl https://raw.githubusercontent.com/omniedgeio/omniedge-linux-cli/main/omniedge-install-arm.sh | bash
```

3. Login and Join omniedge:

```
sudo omniedge login -u user@email.com &&
sudo omniedge join
```

4. Wait a second and a secure VPN will be established

## 8. Installing OmniEdge on Synology NAS
OmniEdge Synology is Compatible with Synology with amd64 CPU Last update: Version , April 25, 2021.

[Download OmniEdge Synology](https://github.com/omniedgeio/omniedge-synology/releases/download/v0.1.0/omniedge_0.1.0_amd64.spk)

1. Sign up your account with your email and password: Sign up
2. Download and install omniedge for synology, then open terminal
3. Login and Join omniedge:

```
sudo omniedge login -u user@email.com &&
sudo omniedge join
```

4. Wait a second and a secure VPN will be established

## 9. Installing OmniEdge on Router
Coming Soon
## 10. Unnstalling OmniEdge
## 11. Updating OmniEdge