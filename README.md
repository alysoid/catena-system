# Ansible Collection - catena.system

Ansible Collection for managing Arch Linux systems.

## Usage

Install this collection locally in `./collections` folder:

```shell
ansible-galaxy collection install git+https://gitlab.com/alysoid/catena-system.git -p ./collections
```

## Roles

- [`catena.system.bootstrap`](roles/bootstrap)
- [`catena.system.journal`](roles/journal)
- [`catena.system.mount`](roles/mount)
- [`catena.system.network`](roles/network)
- [`catena.system.nfs_server`](roles/nfs_server)
- [`catena.system.resolve`](roles/resolve)
- [`catena.system.ssh`](roles/ssh)
- [`catena.system.sudoers`](roles/sudoers)
- [`catena.system.sysctl`](roles/sysctl)
- [`catena.system.timesync`](roles/timesync)
- [`catena.system.users`](roles/users)
- [`catena.system.wireless`](roles/wireless)
