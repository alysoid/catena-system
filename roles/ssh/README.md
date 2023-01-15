# [catena.system](https://gitlab.com/alysoid/catena-system).ssh

Secured and hardened [OpenSSH](https://wiki.archlinux.org/title/OpenSSH) (OpenBSD Secure Shell) client — configured with `/etc/ssh/ssh_config` and snippets in `/etc/ssh/ssh_config.d/*.conf` — and [sshd](https://wiki.archlinux.org/title/OpenSSH#Server_usage) (OpenSSH server daemon) — configured with `/etc/ssh/sshd_config`, snippets in `/etc/ssh/sshd_config.d/*.conf` and managed by `sshd.service`.

Default configuration tested with [ssh-audit](https://github.com/jtesta/ssh-audit) v2.5.0 for `OpenSSH 9.0`, compatible with `OpenSSH 7.4+`.

## Role variables

### Basic configuration

```yaml
# Remove all ssh client configuration files
# from `/etc/ssh/ssh_config.d/*.conf`
catena_ssh_client_cleanup: false

# Remove all ssh server configuration files
# from `/etc/ssh/sshd_config.d/*.conf`
catena_ssh_server_cleanup: false

# `inet` for IPv4 Only
# `inet6` for IPv6 Only
# `any` for both IPv4 and IPv6
catena_ssh_address_family: any

# Default TCP port for connections
catena_ssh_client_port: "22"

# TCP port sshd should listen on
catena_ssh_server_ports: ["22"]

# Public keys never accepted by the server
catena_ssh_server_ports: []

# Host RSA key size in bits
catena_ssh_host_rsa_key_size: 4096
```

### Client Configuration

Generate [ssh_config](https://man.archlinux.org/man/ssh_config.5.en) — OpenSSH client configuration file

Please check `defaults/main/client.yml` file.

### Server Configuration

Generate [sshd_config](https://man.archlinux.org/man/sshd_config.5.en) — OpenSSH daemon configuration file

Please check `defaults/main/server.yml` file.
