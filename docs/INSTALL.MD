# Getting Started with PrintNanny OS

## What You'll Need

- [ ] Raspberry Pi 4

    > ⚠️ Raspberry Pi 3 support is not available at this time, but you can subscribe to [https://github.com/bitsy-ai/printnanny-os/issues/16](https://github.com/bitsy-ai/printnanny-os/issues/16) for updates. 
    
- [ ] Power adaptor for Raspberry Pi

- [ ] Raspberry Pi Camera module
    > 📸 USB Camera support and multi-camera compositing is still experimental. Send an email to leigh@printnanny.ai with your camera make/model for setup assistance.

- [ ] Micro SD card with at least 10MB/s write speed.

    > ⚠️ If your computer doesn't have SD card slot, make sure you have a USB/SD Card adapter.

    > ⚠️ UHS Speed Class 1 or 3 is recommended for the best video streaming experience.

![SD Card Selection Guide](/images/sdcard-speeds.png)

- [ ] Heatsinks for Raspberry Pi 4. A CPU heatsink is **required**. USB, ethernet, and RAM heatsinks are optional.

    > ⚠️ Without heatsinks, your Raspberry Pi will throttle CPU usage to stay cool. This may cause degraded performance! 

![Selecting the custom menu in Raspberry Pi Imager](/images/heatsinks.jpg).

---

# How to Setup PrintNanny

1. Download & Install [Raspberry Pi Imager](https://www.raspberrypi.com/software/).
2. Download the latest PrintNanny OS image (`.wic.zip` file) from [the releases page](https://github.com/bitsy-ai/printnanny-os/releases).

> Explanation of release files
> `.wic.zip` - compressed PrintNanny OS image. Download this to install PrintNanny on a new device.
> `.swu` - software update file. Download this to update an existing PrintNanny OS installation.

See [docs/UPGRADE.md](docs/UPGRADE.md) for detailed upgrade instructions.

3. Click the **Choose OS** button and select **Use custom** at the **bottom** of the menu.

![Selecting the custom menu in Raspberry Pi Imager](/images/rpi-imager-select-custom.png).

4. Click the **Choose Storage** button and select your MicroSD Card from the menu.
5. Click the **⚙️ Gear Icon** or press ctrl + shift + x to open **Advanced Options** (cmd + shift + x on MacOS).
6. **Set the hostname** of your Raspberry Pi (must be unique on your network).
7. Check the **Enable SSH** box and **set a password for your Pi**.

    If you prefer to use SSH authentication, provide your public key instead
8. Click **Save** to save your settings and then **Write** to burn the image to your sd card.

> 💡 The SD Card image will take a few minutes to finish. 

Proceed to the next section to download `printnanny.toml`, which is used to configure PrintNanny OS. 

# Download license.json

1. Open the [PrintNanny Cloud dashboard](https://printnanny.ai/dashboard/) in your browser.
2. Click the ["+ New Connection"](https://printnanny.ai/devices/connect) button and enter your Raspberry Pi's `hostname`.

3. Download `printnanny.toml` and copy to the `boot` partition of your SD card.

![Download printnanny.toml configuration file](/images/download-config-example.png)

![Copy printnanny.toml file to boot partition, then eject drive](/images/boot-partition-example.png)


4. Eject your SD card and insert into your Raspberry Pi's SD card slot.

5. Connect your Raspberry Pi to power.