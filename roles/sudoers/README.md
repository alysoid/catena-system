# [catena.system](https://gitlab.com/alysoid/catena-system).sudoers

Manage [sudoers](https://man.archlinux.org/man/sudoers.5) — default sudo security policy plugin configuration files.

## Role variables

See [`defaults/main.yml`](defaults/main.yml) for details.

### `catena_sudoers`

List of sudoers configuration files which work similar to [community.general.sudoers](https://docs.ansible.com/ansible/latest/collections/community/general/sudoers_module.html) module.

```yaml
# Example
catena_sudoers:
  # Keep EDITOR env variable when the `env_reset` flag is ON (default).
  - name: 01-keep-env-editor
    desc: Keep EDITOR environment variable
    commands:
      - Defaults env_keep += "EDITOR"
  # Allow 'backup' user to run 'sudo /usr/local/bin/backup'
  # Resulting rule: `backup ALL=NOPASSWD: /usr/local/bin/backup`
  - name: 10-allow-backup
    state: present
    user: backup
    commands: ['/usr/local/bin/backup']
  # Allow 'bob' user to run any commands as 'alice' with 'sudo -u alice'
  # Resulting rule: `bob ALL=(alice)NOPASSWD: ALL`
  - name: bob-do-as-alice
    state: present
    user: bob
    runas: alice
    commands: ['ALL']
  # Allow 'monitoring' group to run '/bin/app-metrics'
  # and 'sudo /bin/systemctl restart metrics-service', but a password is required.
  # Resulting rule: `%monitoring ALL= /bin/app-metrics, /bin/systemctl restart metrics-service`
  - name: monitor-app
    group: monitoring
    commands:
      - /bin/app-metrics
      - /bin/systemctl restart metrics-service
    nopassword: false
```
