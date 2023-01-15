# [catena.system](https://gitlab.com/alysoid/catena-system).network

Manage system network with systemd using [systemd-networkd](https://man.archlinux.org/man/systemd-networkd.8.en), a system service that manages networks. It detects and configures network devices as they appear, as well as creating virtual network devices. Low-level link settings can be set independently of networks.

## Role variables

### `catena_network`

Manage [systemd.network - Network configuration](https://man.archlinux.org/man/systemd.network.5) files.

Apply a network configuration for a matching device.

Configuration files will have the .network extension and will be placed in the local administration network directory `/etc/systemd/network`.

```yaml
# Example
catena_network:
  # /etc/systemd/network/eth0.network
  - name: eth0
    options:
      Match:
        Name: eth0
      Network:
        Address: 192.168.0.1/24
        Gateway: 192.168.0.254
        MulticastDNS: 'yes'
```

### `catena_network_netdev`

Manage [systemd.netdev - Virtual Network Device configuration](https://man.archlinux.org/man/systemd.netdev.5) files.

Create a virtual network device for a matching environment.

Configuration files will have the .netdev extension and will be placed in the local administration network directory `/etc/systemd/network`.

```yaml
# Example
catena_network_netdev:
  # /etc/systemd/network/25-bridge.netdev
  - name: 25-bridge
    options:
      NetDev:
        Name: bridge0
        Kind: bridge
```

### `catena_network_link`

Manage [systemd.link - Network device configuration](https://man.archlinux.org/man/systemd.link.5) files.

When a network device appears, udev will look for the first matching.

Configuration files will have the .link extension and will be placed in the local administration network directory `/etc/systemd/network`.

```yaml
# Example
catena_network_link:
  # /etc/systemd/network/10-dmz.link
  - name: 10-dmz
    options:
      Match:
        MACAddress: 00:a0:de:63:7a:e6
      Link:
        Name: dmz0
```

### `catena_network_cleanup`

Remove existing configuration files: `/etc/systemd/network/{*.network}{*.netdev}{*.link}`
