# [catena.system](https://gitlab.com/alysoid/catena-system).resolve

Manage system DNS resolver via systemd using [systemd-resolved](https://man.archlinux.org/man/systemd-resolved.8.en), a system service that provides network name resolution to local applications. It implements a caching and validating DNS/DNSSEC stub resolver, as well as an LLMNR and MulticastDNS resolver and responder.

## Role variables

### `catena_resolve`

Manage [resolved.conf.d - Network Name Resolution configuration files](https://man.archlinux.org/man/resolved.conf.5.en).

Set configuration files that control local DNS and LLMNR name resolution.

Configuration files will have the .conf extension and will be placed in the configuration snippets directory `/etc/systemd/resolved.conf.d`.

```yaml
# Example
catena_resolve:
  # /etc/systemd/resolved.conf.d/dns_server.conf
  - name: dns_server
    options:
      Resolve:
        # Cloudflare DNS
        DNS: '1.1.1.1 1.0.0.1 2606:4700:4700::1111 2606:4700:4700::1001'
```

### `catena_resolve_cleanup`

Remove existing configuration files: `/etc/systemd/resolved.conf.d/*.conf`.
