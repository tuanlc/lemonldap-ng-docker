#!/bin/sh

# Add reload.example.com to /etc/hosts in the container
echo "127.0.0.1 reload.example.com" >> /etc/hosts

# Configure nginx for OpenPaaS
sed -i 's,\(http://\(.*\)\),'"http://$ESN_HOST:$ESN_PORT;"',g' /etc/nginx/sites-available/openpaas.conf
sed -i 's,\(server_name \(.*\)\),'"server_name $ESN_SERVER_NAME;"',g' /etc/nginx/sites-available/openpaas.conf

/usr/bin/supervisord
