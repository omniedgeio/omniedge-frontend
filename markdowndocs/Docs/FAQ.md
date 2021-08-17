---
title: FAQ
description: 
route: Doc / FAQ
index: 6
---
# FAQ

**Q: Why does OmniEdge ask administrator access ?**

A: OmniEdge need adminstartor access to change the network setting. 

**Q: The window didn't show as my expectation when I run it. Check the console got below exception (the shot screen has been attached for your reference)"UNIX error exception: 17"**

A: The omniedge helpertool could be corrupted during the installation, try to remove omniedge and its related files and reinstall again.

```bash
uninstall Omniedge
$ find ~/Library -name 'io.omniedge'
$ remove all founded files
$ re-install Omniedge
```

**Q: Why can't ping my windows PC?**

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