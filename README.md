# PrintNanny OS

PrintNanny OS provides monitoring, alerts, and automation for 3D Printers.

> 👋  This repo is used to publish images, change logs, and track issues related to PrintNanny OS.

![Discord](https://img.shields.io/discord/773452324692688956)
![Github Followers](https://img.shields.io/github/followers/leigh-johnson?style=social)
![Release](https://img.shields.io/github/release-date-pre/bitsy-ai/printnanny-os)

![PrintNanny Header](https://github.com/bitsy-ai/printnanny-os/raw/main/images/header.png)

# Learn More

### [Demo](https://printnanny.ai/)
### [Join the Waitlist](https://printnanny.ai/invite/)
### [Become a Founding Member to Get Early Access](https://printnanny.ai/subscriptions/signup?next=/subscriptions/checkout)

# Editions
| Variant | OctoPrint | Mainsail | Raspberry Pi 4 | Raspberry Pi 3 |
|---------|-----------|----------|----------------|----------------|
| Desktop | ✅         | 🚧        | ✅              | ❌           |
| Lite    | 🚧         | 🚧        | 🚧              | 🚧           |

✅ supported
🚧 work-in-progress
❌ no support planned


# Installation & Upgrades

Please refer to [docs/INSTALL.MD](docs/INSTALL.MD) to get started with a new PrintNanny system.

To upgrade an older version of PrintNanny, follow [docs/UPGRADE.MD](docs/UPGRADE.MD).

---

## What's inside PrintNanny OS?

* PrintNanny Linux, a custom embedded Linux distribution based on the [Yocto Project](https://www.yoctoproject.org/).
* [OctoPrint](https://octoprint.org/) pre-installed.
* WebRTC video streaming stack based on [Janus Gateway](https://github.com/meetecho/janus-gateway), [gstreamer](https://gstreamer.freedesktop.org/), and [libcamera](https://libcamera.org/).
* [TensorFlow & TensorFlow Lite](https://www.tensorflow.org/).
* MQTT event publish/subscribe system.

_Coming soon!_
* Klipper & Mainsail Edition
* Repetier Edition
* Remote s ccess from anywhere, with [WireGuard VPN](https://www.wireguard.com/).

> ℹ️ Tip: For the full list of software packaged in PrintNanny OS, check the `.manifest` [file in any release.](https://github.com/bitsy-ai/printnanny-os/releases)


![PrintNanny Logo](https://github.com/bitsy-ai/octoprint-nanny-plugin/raw/main/docs/images/logo.jpg)

# Code Signing

See [docs/CODE_SIGNING.MD](docs/CODE_SIGNING.MD).

# License

Copyright 2022 Bitsy AI Labs. All rights reserved. Source code available under GNU AFFERO GENERAL PUBLIC LICENSE v3.

# Credits

[OctoPrint is a registered trademark](https://octoprint.org/) - a portion of OctoPrint subscriptions are donated to support OctoPrint's development.

[Raspberry Pi is a trademark of Raspberry Pi Trading](https://www.raspberrypi.com/)

Google supported this work by providing Google Cloud credit.
