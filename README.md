# LemonLDAP::NG in Docker for OpenPaaS with nginx

![LL::NG+Docker](http://lemonldap-ng.org/_media/documentation/lemonldap-ng-docker.png)

## Build

Use the docker build command:

    docker build --rm -t yourname/lemonldap-ng:version .

## Run

In order to run, the LemonLDAP instance must access to the ESN instance. They can be configured from the run command using these optional environment variables:

- SSODOMAIN: Single Sign On Domain, defaults to 'example.com'
- ESN_HOST: Hostname of the ESN instance, defaults to '172.17.0.1'
- ESN_PORT: Port of the ESN instance, defaults to '8080'
- ESN_SERVER_NAME: Server name of the ESN, defaults to 'openpaas.example.com'

For example:

```
docker run -d --name lmldap -e "ESN_HOST=172.17.0.1" -e "ESN_PORT=8080" -e "ESN_SERVER_NAME=op.example.com" -p 80:80 lmldap:latest
```

This will launch the LemonLDAP container, create its configuration, launch LemonLDAP and expose on port 80 on your host.

Add auth.example.com, manager.example.com, ESN_SERVER_NAME to /etc/hosts on the host

For example:

```
sudo echo "127.0.0.1 auth.example.com manager.example.com openpaas.example.com" >> /etc/hosts
```

## Authentication, users and password databases
For test, Users table is stored at [fixture.csv](./fixture.csv) file and you can modify them.
Admin account:
- Username: admin
- Password: secret

Note that admin account should not modify.
