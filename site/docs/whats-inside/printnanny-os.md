---
sidebar_position: 2
---
# PrintNanny OS

:::note
PrintNanny OS is an operating system for Raspberry Pi, which lets you mix n' match your favorite 3D printer tools.

Our mission is to automate the annoying and tedious parts of 3D printing, so you can focus on what really matters: **growing your 3D printing business.**
:::

## Core Features

### Web-based Software Updates

Don't waste another second re-imaging SD cards to keep your Raspberry Pi up-to-date. PrintNanny OS includes a web-based update system.

[Learn how to update PrintNanny OS](/docs/update-printnanny-os/)

### Real-time monitoring & camera streaming

Designed with privacy and reliability in mind, PrintNanny's monitoring/camera system works **without an Internet connection**.

## Add-ons

:::tip

You can open a [Github Issue](https://github.com/bitsy-ai/printnanny-os/issues/new/choose) to request a new add-on for PrintNanny OS.
:::

### OctoPrint

OctoPrint is an all-in-one a web interface and API for your 3D printer, with an un-matched ecosystem of plugins.

* [Printers known to work/not work with OctoPrint](https://community.octoprint.org/t/printers-known-to-work-not-work/21147)

### Moonraker + Mainsail

Mainsail is a web interface for your 3D printer, which depends on Moonraker's API to interact with your 3D printer.

Moonraker provides an API for interacting with a 3D printer. Moonraker requires **Klipper firmware** to be flashed to your 3D printer.

### Klipper

Klipper is a 3D printer firmware. PrintNanny OS bundles all the tools needed to configure and flash Klipper firmware to your 3D printer's micro-controller.

### Tailscale

Tailscale lets you easily manage access to private resources, quickly SSH into devices on your network, and work securely from anywhere in the world.

[Learn how to configure Tailscale](/docs/addons/tailscale/)

### Syncthing

Syncthing is a file sync tool, which is like having your own personal Dropbox service. You can sync folders and files between any devices with Syncthing installed.

[Learn how to configure Syncthing](/docs/addons/file-sync/)

## Command-line Interface (CLI)