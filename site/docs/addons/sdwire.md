---
sidebar_position: 4
---

# PrintNanny SDWire

## What does an SDWire board do?

SDWire's design is dead simple. The board fits a micro SD card slot, for example, the micro SD slot on a Raspberry Pi.

I use the SDWire board to "re-image" an SD card over a USB connection. This helps me smoke test a PrintNanny OS release candidate without physically inserting/removing the SD card from a Raspberry Pi.

The board's main feature is a USB mux (multiplexer) with two modes:

"Test server" mode, which allows you to write data to an SD card over a USB connection.
"Device-under-test" or "DUT" mode, which allows another device (like Raspberry Pi) to read/write to the SD card.

For more info, check out the [blog post](https://bitsy.ai/preorder-printnanny-sdwire/) about PrintNanny SDWire's development.

## Installation

This section will show you how to install the `printnanny-sdwire` command-line tool.

### MacOS

### Linux

### Windows

**Coming soon**

### Build from Source

If there isn't a pre-built binary available for your platform/distribution, you can build from source.

#### 1. Clone Github Repo

```
$ git clone https://github.com/bitsy-ai/printnanny-sdwire

```
#### 2. Install Pre-requisites

You'll need the following pre-requisites:

1. GNU Make / GCC
2. `libusb`
3. `libftdi1`

Run the following commands to build from source:
```
$ cd src/
$ make
```

## Usage

```
$ printnanny-sdwire --help
Usage: sdwire command
  -l, --list                     lists all sd-mux devices connected to PC
  -i, --info                     displays info about device
  -o, --show-serial              displays serial number of given device
  -r, --set-serial=STRING        writes serial number to given device
  -t, --init                     initialize target board
  -d, --dut                      connects SD card and USB to the target board
  -s, --ts                       connects SD card and USB to the test server
  -p, --pins=INT                 write pin state in bitbang mode
  -c, --tick                     turn off and on power supply of DUT
  -u, --status                   show current status: DUT or TS or NOINIT
  -y, --dyper1=STRING            Connect or disconnect terminals of 1st dynamic jumper;
                                 STRING = "on" or "off"
  -z, --dyper2=STRING            Connect or disconnect terminals of 2nd dynamic jumper;
                                 STRING = "on" or "off"
  -m, --tick-time=INT            set time delay for 'tick' command
  -v, --device-id=INT            use device with given id
  -e, --device-serial=STRING     use device with given serial number
  -k, --device-type=STRING       make the device of this type
  -x, --vendor=INT               use device with given vendor id
  -a, --product=INT              use device with given product id
  -n, --invert                   invert bits for --pins command

Help options:
  -?, --help                     Show this help message
      --usage                    Display brief usage message
```




## Links

* [Github Repo](https://github.com/bitsy-ai/printnanny-sdwire)
* [Blog Post](https://bitsy.ai/preorder-printnanny-sdwire/)