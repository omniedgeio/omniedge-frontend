---
title: Install
description: Install OmniEdge on Windows, macOS, iOS, Linux, Android and more.
route: Doc / Install
index: 3
thumbnail: /assets/OmniEdgeall0.5.png
---
# Installation

## 1. Get Started

+ Sign up your account with your email and password: [Sign up](https://dev.omniedge.io/register)
+ Download OmniEdge
    OmniEdge offers clients from Windows, MacOS, Linux cli, Linux GUI, iOS, android, Synology and router. Download the client with the link: [Download OmniEdge Client](https://omniedge.io/download)
+ Login and join your own network
+ Test your connection.

## 2. Installing on Windows
OmniEdge Windows is compatible with Windows 7,10(arm) & Windows Server 2016,2019. `Last update: Version 0.1.4, April 18, 2021.`

[Download OmniEdge Windows for 7 or later](https://github.com/omniedgeio/omniedge-windows-update/releases/download/v0.1.2/omniedge-setup-0.1.2.exe)

1. Download and run the Windows installer
2. Click on "Log in…" from the Omniedge icon now in your system tray
3. Sign in with your email address
4. Click "Connect" in the menu bar from the tray icon. After a pop-up disappears, a secure VPN connection is initialized.

## 3. Installing on MacOS
OmniEdge `MacOS Cli` is compatible with intel Macbook, macOS 10 or later Last update: Version 0.2.0, December, 6, 2021.

[Download OmniEdge Cli for macOS 10 or later]()

1. Download OmniEdge Cli and copy to `/usr/local/bin`, and exectue command `sudo chmod +x /usr/local/bin/omniedge`
2. Install Tun/Tap Driver:

For Intel Mac: 

  - run **Install tuntap by clicking tuntap_20150118.pkg**

For M1 Mac user: 

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

3. Use OmniEdge CLi in the terminal, 
## Login

Login By Password: `sudo omniedge login -u xxx@xxx.com`
Login By Secret-Key: `sudo omniedge login -s xxxxxx`

add ` -f /yourfolder/auth.json` to specify the auth file

You can generate secret-key on [omniedge dashboard](https://dev.omniedge.io/dashboard).

## Join

you can just call omniedge join, it will automatically prompt the available network for you to choose. And you can also add one parameter -n to specify the network id manually. And then, enjoy the omniedge network.

```
omniedge join 
// or
omniedge join -n "virtual-network-id" 
```
6. A secure VPN connection is initialized after you press the `Enter`.

## 4. Installing on Android

OmniEdge Android is compatible with Android 6 or later mobile phone or TV. Last update: Version 0.2.0, Sepember 9, 2021.

[Download for Android 6 or later](https://github.com/omniedgeio/omniedge-android/releases/download/v0.1.3/OmniEdge-v0.1.3.apk)

1. Download OmniEdge APK and install it
2. Run OmniEdge and Sign in with your email address
3. Click the connect button
4. Allow installing a VPN configuration
5. Enjoy the secure VPN connection

## 5. Installing on Linux

OmniEdge Linux Cli is Compatible with linux for AMD64,ArmV7 and Arm64V8, Archlinux, OMV(Debian 9), Synology NAS,Ubuntu 16.04/18.04/20.04, CentOS 7/8, Debian 9/10, Fedora 32 Last update: Version 0.1.0, May 10, 2021.

[Download OmniEdge Linux Cli](https://github.com/omniedgeio/omniedge-linux-cli/releases)

1. Download and install omnidge cli depend on system architecture :

2. `curl -s install-omniedge.sh | bash`
    
3. Use OmniEdge CLi in the terminal, 
## Login

Login By Password: `sudo omniedge login -u xxx@xxx.com`
Login By Secret-Key: `sudo omniedge login -s xxxxxx`

add ` -f /yourfolder/auth.json` to specify the auth file

You can generate secret-key on [omniedge dashboard](https://dev.omniedge.io/dashboard).

## Join

you can just call omniedge join, it will automatically prompt the available network for you to choose. And you can also add one parameter -n to specify the network id manually. And then, enjoy the omniedge network.

```
omniedge join 
// or
omniedge join -n "virtual-network-id" 
```
4. A secure VPN connection is initialized after you press the `Enter`.


## 6. Installing on iOS
Coming Soon

## 10. Uninstalling OmniEdge
## 11. Updating OmniEdge

-----

If you have more questions, feel free to [contact us](mailto:support@omniedge.io).