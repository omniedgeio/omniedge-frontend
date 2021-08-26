---
title: FAQ
description: 
route: Doc / FAQ
index: 6
---
# FAQ

----

# General 

## What is Omniedge ? 

OmniEdge makes communication easy and safe, brings the intranet on the internet by distrubted VPN solutions, helps connecting users who wants connect their devices anywhere, anytime. OmniEdge's solution is not only a great and affordable network solution for small team, but also for big companies with thousands of devices all around the world.

## How long does it take to set up OmniEdge?

OmniEdge can be set up in 5 minutes or less, by installing an OmniEdge Apps for your devices on [iOS](/download/ios), [Android](/download/android), [Windows](/download/windows), [macOS](/download/macos) for Intel Mac and **Apple M1 Mac**, and [Linux platforms](/download/linuxcli).

## How much technical knowledge do I need to have to use Omniedge ? 

Using OmniEdge does not require technical expertise in networking. If you know how to install software on Windows, macOS, iOS, android and linux, you can use it by simplily download OmniEdge Apps and follow the [instructions](/download) to install and use OmniEdge.

## Is my privacy secure with OmniEdge?" 

We take privacy security very seriously. please read our [privacy Policy](/privacy) for Details.

## How do I change my existing subscription plan?"

If you already have a OmniEdge plan, please contact us to change your plan or your billing period, or you can do it by yourself at the dashboard.


## When will I be billed?"

Our plans are generally prepaid, so you pay for them in advance. Annual Enterprise plans can be invoiced with net 30 payment terms upon request.

## What payment methods do you offer?

We support payment by credit card through [Stripe](https://stripe.com). Customers with Enterprise plans can request payment by other methods, such as wire or ACH. At this time, we can only receive payment in US Dollars ($).

## Where can I find your terms of service and privacy policy?

View the OmniEdge [Terms of Service](/terms) and [Privacy Policy](/privacy).

## How can I learn more about OmniEdge?

Learn more about OmniEdge by reading [documentation](/doc).

----

# Technical


## Why does OmniEdge ask administrator access ?

OmniEdge need adminstartor access to change the network setting. 

## The window didn't show as my expectation when I run it. Check the console got below exception (the shot screen has been attached for your reference)"UNIX error exception: 17"

The omniedge helpertool could be corrupted during the installation, try to remove omniedge and its related files and reinstall again.

```bash
uninstall Omniedge
$ find ~/Library -name 'io.omniedge'
$ remove all founded files
$ re-install Omniedge
```

## Why can't ping my windows PC?

A: It is because the setting of `Windows Firewall`
Search for Windows Firewall, and click to open it.

```note
For help navigating, see Get around in Windows.
Click Advanced Settings on the left.
From the left pane of the resulting window, click Inbound Rules.
In the right pane, find the rules titled File and Printer Sharing (Echo Request - ICMPv4-In).
Right-click each rule and choose Enable Rule.
```

-----

If you have more questions, feel free to [contact us](mailto:support@omniedge.io).