# [catena.system](https://gitlab.com/alysoid/catena-system).mount

Manage mount points via [systemd.mount](https://man.archlinux.org/man/systemd.mount.5) - Mount unit configuration.

Unit configuration files which name ends in `.mount` encodes information about a file system mount point controlled and supervised by systemd. Optionally, a mount unit may be accompanied by a [systemd.automount](https://man.archlinux.org/man/systemd.automount.5) unit, whose name ends in `.automount`, to allow on-demand or parallelized mounting.

### `catena_mount`

Generate `.mount` systemd unit files.

```yaml
# Mount `/dev/sda` on `/mnt/storage`:
catena_mount:
  - name: Storage
    # Dictionary of options to compile the systemd unit file
    options:
      # Define [Mount] section in `/etc/systemd/system/{mnt-storage}.mount`
      Mount:
        # Absolute path of a device node, file or other resource to mount
        What: /dev/sda
        # Absolute path of a file or directory for the mount point
        Where: /mnt/storage
        # File system type (optional)
        Type: btrfs
        # Mount options to use when mounting (optional)
        Options: defaults
```

### `catena_automount`

Generate `.automount` systemd unit files.

```yaml
# Automount `/dev/sda` on `/mnt/storage`
catena_automount:
  - name: Storage
    # Dictionary of options to compile the systemd unit file
    options:
      # Define [Automount] section in `/etc/systemd/system/{mnt-storage}.automount`
      Automount:
        # Absolute path of a file or directory for the automount point
        Where: /mnt/storage
```
