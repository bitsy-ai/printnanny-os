# PrintNanny OS

Image repository, change logs, and issue tracking for Print Nanny OS.

Print Nanny OS provides monitoring, alerts, and automation for 3D Printers.

![Discord](https://img.shields.io/discord/773452324692688956)
![Github Followers](https://img.shields.io/github/followers/leigh-johnson?style=social)
![Release](https://img.shields.io/github/release-date-pre/bitsy-ai/printnanny-os)

![Print Nanny Header](https://github.com/bitsy-ai/printnanny-os/raw/main/images/header.png)

## Learn More

### [Demo](https://www.print-nanny.com/)
### [Feature Comparison](https://print-nanny.com/devices/releases/)
### [View the Roadmap](https://bitsy-ai.notion.site/Print-Nanny-Roadmap-7b48a2c8d83248eea2de14edfeaf52ee)
### [Join the Early Access Program](https://www.print-nanny.com/subscriptions/checkout)
### [Getting Started Guide](https://bitsy-ai.notion.site/Getting-Started-with-Print-Nanny-OS-817bc65297ff44a085120c663dced5f3)


| Edition | OctoPrint | Mainsail | Raspberry Pi 4 | Raspberry Pi 3 | Stable                                                                    | Nightly                                                                    |
|---------|-----------|----------|----------------|----------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Desktop | ✅         | 🚧        | ✅              | ❌              | 🚧 | [Link](https://dl.printnanny.ai/printnanny-os/octoprint-bullseye-arm64/nightly/) |
| Lite    | 🚧         | 🚧        | 🚧              | 🚧              |   🚧                                                                        | 🚧                                                                           | 

✅ supported
🚧 work-in-progress
❌ no support planned

## Install Guide

* [Download the latest release](https://github.com/bitsy-ai/printnanny-os/releases)
* [Follow the Welcome/Install Guide](https://www.print-nanny.com/devices/welcome/) (requires Print Nanny membership)

## What's inside Print Nanny OS?

* Based on Debian Bullseye (arm64)
* [OctoPrint](https://octoprint.org/) pre-installed (Mainsail coming soon)
* WebRTC video streaming stack based on [Janus Gateway](https://github.com/meetecho/janus-gateway), [gstreamer](https://gstreamer.freedesktop.org/), and [libcamera](https://libcamera.org/)
* [TensorFlow & TensorFlow Lite](https://www.tensorflow.org/)
* MQTT event publish/subscribe system
* [WireGuard VPN](https://www.wireguard.com/)

![Print Nanny Logo](https://github.com/bitsy-ai/octoprint-nanny-plugin/raw/main/docs/images/logo.jpg)

## Signature

Releases include a signed `sha256.checksum.gpg` to verify authenticity.
```
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

Signed off by Leigh Johnson <leigh@print-nanny.com>
-----BEGIN PGP SIGNATURE-----

iQIzBAEBCgAdFiEEguz1vgL11LEzckzNnjsqsV2wduQFAmH4QaMACgkQnjsqsV2w
duT4cRAAj1U7TSf2khLmxUb1XPKi0uLo6YaMss/7NOzkJetNBwK9M6oM8JGG2KM1
0o+VhVHkN9ZZ7OZwZ8VPNU6spZ7erLmbhLZ1dJTUB4QNjqWUXl4MKkuHIUej9iIO
EM4YqwJFEUWGw5zB66WFDTS2Zmt3l073L4R2QRzp9CsE4sg9RlnUBOAOriNSZp52
06gxusKHWkis0KEZVAI0VBF0NSfU5LLtIq5eDRjmhwHxUrowDFTMw2irR65aFbPb
FUyBm3L9CmRcPrg22/fEkXm3ghOAq+7mDQIlh1H9PsMiXhjo9h9IDVxP19C1ckjU
OEhTADyURL1RaaNEEa2XgrPQBYFYIrTG1V5xsBmdju2ao1iYmElHNC6Q2NE3SKbV
B88jvuTQVqcc1JhzsXBb3STMsfFwPdL7ULKw0QcoKaAoqBfefgpDGbg7mdt6PohR
u1hgph9DHUImK9CHHwEbkY/bMdlUalE5DhZcd2svBn8r3fgHkHXJGkEvy6WaZ4lO
/3P7rK8GI8XGMT2rbBXiTGxOlmMbEQP6cBypprh3vqw4K7ekJa9rZ+wE0i+UoFAV
GuI2n7sBpHkqOqE3UgjBqsw6hYKGgHSv4y5la7ia8oIm8idJv+ENll9qxLeQ0mvv
XCjIMxkdH5w5kJ1thUG6cVyBflnhIwrFBAsyvAITKJfWDX1VXmw=
=FOPz
-----END PGP SIGNATURE-----
```
```
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
2Zzm4Q==
=TNuw
-----END PGP PUBLIC KEY BLOCK-----
```

## License

Copyright 2022 Bitsy AI Labs. All rights reserved. Source code available under the AGPLv3.

## Credits

[OctoPrint is a registered trademark](https://octoprint.org/) - a portion of OctoPrint subscriptions are donated to support OctoPrint's development.

[Raspberry Pi is a trademark of Raspberry Pi Trading](https://www.raspberrypi.com/)

Google supported this work by providing Google Cloud credit
