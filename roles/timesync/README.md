# [catena.system](https://gitlab.com/alysoid/catena-system).timesync

Manage a simple SNTP client via systemd using [systemd-timesyncd](https://man.archlinux.org/man/systemd-timesyncd.8), a system service that may be used to synchronize the local system clock with a remote Network Time Protocol server. It also saves the local time to disk every time the clock has been synchronized.

## Role variables

### `catena_timesync`

Manage [timesyncd.conf.d](https://man.archlinux.org/man/timesyncd.conf.5) - Network Time Synchronization configuration files.

Configuration files will have the .conf extension and will be placed in the configuration snippets directory `/etc/systemd/timesyncd.conf.d`.

```yaml
catena_timesync:
  # Create `/etc/systemd/resolved.conf.d/main_ntp.conf`
  - name: main_ntp
    options:
      # Space-separated list of NTP server host names or IP addresses.
      NTP: 'ntp2.hetzner.de ntp1.hetzner.de ntp3.hetzner.de'
  # Create `/etc/systemd/resolved.conf.d/fallback_ntp.conf`
  - name: fallback_ntp
    options:
      # Space-separated list of NTP server host names or IP addresses to be used as the fallback NTP servers.
      FallbackNTP: '0.it.pool.ntp.org 1.it.pool.ntp.org 2.it.pool.ntp.org 3.it.pool.ntp.org'
```

### `catena_timesync_cleanup`

Remove existing configuration files from `/etc/systemd/resolved.conf.d/*.conf`.
