---
sidebar_position: 3
---
# Command-line Interface

PrintNanny's CLI is the glue between components/services.

## [View Source](https://github.com/bitsy-ai/printnanny-cli)
## Overview

PrintNanny's CLI is used to interact with device/user configuration, publish events, and run PrintNanny worker/services.

The CLI is available when you SSH into your PrintNanny device.

```
printnanny 0.23.0 printnanny-cli-g193c97d
PrintNanny Command-line Interface

USAGE:
    printnanny-cli [OPTIONS] <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
    -v               Sets the level of verbosity
    -V, --version    Print version information

SUBCOMMANDS:
    config         Interact with PrintNanny device configuration and user settings
    dash           PrintNanny device dashboard and system status
    event          Run MQTT-based event pubish/subscribe workers
    help           Print this message or the help of the given subcommand(s)
    janus-admin    Interact with Janus admin/monitoring APIs https://janus.conf.meetecho.com/docs/admin.html
    remote         Run pre-configured event/command handler
```

## Config

Get, set, and sync PrintNanny device configuration.

```
printnanny 0.23.0 printnanny-cli-g193c97d
Interact with PrintNanny device configuration and user settings

USAGE:
    printnanny-cli config [SUBCOMMAND]

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    get     Print PrintNanny config to console
    help    Print this message or the help of the given subcommand(s)
    set     Sets PrintNanny config fragments from environment variables
    show    Print PrintNanny config to console
    sync    Synchronize device with PrintNanny Cloud
```

## Device dashboard

Start PrintNanny's device dashboard and status page.
```
printnanny 0.23.0 printnanny-cli-g193c97d
PrintNanny device dashboard and system status

USAGE:
    printnanny-cli dash

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information
```

## MQTT event publisher/subscriber

```
printnanny 0.23.0 printnanny-cli-g193c97d
Run MQTT-based event publish/subscribe workers

USAGE:
    printnanny-cli event <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    help         Print this message or the help of the given subcommand(s)
    publish      Publish event to MQTT topic
    subscribe    Subscribe to events from MQTT topic
```

## Janus Gateway Admin

Manage Janus WebRTC Gateway.

```
printnanny 0.23.0 printnanny-cli-g193c97d
Interact with Janus admin/monitoring APIs https://janus.conf.meetecho.com/docs/admin.html

USAGE:
    printnanny-cli janus-admin [ARGS]

ARGS:
    <endpoint>    Janus admin/monitoring API endpoint [default: add-token] [possible values: get-status, info, ping, add-token, remove-token, list-tokens, test-stun]
    <plugins>     Commaseparated list of plugins used to scope token access. [default: janus.plugin.echotest,janus.plugin.streaming]

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information
```

## Remote control

Pre-configured remote event/command handlers.
```
printnanny 0.23.0 printnanny-cli-g193c97d
Run pre-configured event/command handler

USAGE:
    printnanny-cli remote [OPTIONS] --event <event>

OPTIONS:
    -d, --dryrun           Print output but do not run. Ansible playbooks executed with --check flag
    -e, --event <event>    JSON-serialized PrintNanny Event. See /api/events schema for supported events
    -h, --help             Print help information
    -V, --version          Print version information
```