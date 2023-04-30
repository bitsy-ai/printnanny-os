---
sidebar_position: 1
---

# Required Hardware

Before you get started, make sure you have all required hardware.

:::info

[Raspberry Pi 4B (4GB) kits are now available](https://printnanny.ai/shop/raspberry-pi-4-kit), with everything you need to run PrintNanny.

Continue reading if you want to purchase your own hardware.
:::

## 1. Raspberry Pi 4, Model B 

* Minimum: 2GB RAM
* Recommended: 4GB RAM

[Search raspberrypi.com](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) to find an approved Raspberry Pi reseller.

## 2. Power Supply

* 5.1V / 3.0A DC output
* 96-264Vac operating input range

:::caution
Inadquate power will impact the quality of your prints and limit PrintNanny's ability to catch defects.

The official [Raspberry Pi 15W USB-C Power Supply](https://www.raspberrypi.com/products/type-c-power-supply/) is recommended.
:::

## 3. Camera

PrintNanny is known to work with the following cameras:

* [Raspberry Pi Camera Module 2](https://www.raspberrypi.com/products/camera-module-v2/) (IMX219)
* [Raspberry Pi High Quality Camera](https://www.raspberrypi.com/products/raspberry-pi-high-quality-camera/) (IMX477)

:::info

Do you have a camera not listed above? No problem! 

[Reply to this Github issue to request support for your camera.](https://github.com/bitsy-ai/printnanny-os/issues/38). 
:::

## 4. Heatsinks

* Minimum: CPU heatsink
* Recommended: heatsinks CPU, USB, ethernet, and RAM chip

:::info

For help installing the heatsinks, check out [How to Install Heatsinks on the Raspberry Pi 4.](https://www.youtube.com/watch?v=E-4GaAz7XNM)
:::

![Image showing dimensions and locations of heatsinks on Raspberry Pi board](./img/heatsinks.jpg).

## 5. Micro SD card

* Minimum: 10MB/s write speed

:::caution
You'll need an SD card with **UHS speed class 1** or **UHS speed class 3.**
:::

![SD Card Selection Guide](./img/sdcard-speeds.png)

## 6. USB to SD card adaptor (optional)

If your computer doesn't have SD card slot, you'll need a USB to SD card adaptor.

![SD Card Selection Guide](./img/usb-sd-adaptor.jpeg)
