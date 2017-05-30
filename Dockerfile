# Dockerfile for LemonLDAP::NG
# Use debian repo of LemonLDAP::NG project

# Start from Debian Jessie
FROM debian:jessie
MAINTAINER Clément OUDOT

# Change SSO DOMAIN here
ENV SSODOMAIN example.com

ENV ESN_HOST 172.17.0.1
ENV ESN_PORT 8080
ENV ESN_SERVER_NAME openpaas.example.com

# Update system
RUN apt-get -y update && apt-get -y upgrade

# Install LemonLDAP::NG repo
RUN apt-get -y install wget apt-transport-https
RUN wget -O - http://lemonldap-ng.org/_media/rpm-gpg-key-ow2 | apt-key add -
COPY lemonldap-ng.list /etc/apt/sources.list.d/

# Install LemonLDAP::NG packages
RUN apt-get -y update && apt-get -y install nginx supervisor lemonldap-ng lemonldap-ng-fastcgi-server

# Configure nginx for OpenPaaS
COPY openpaas.conf /etc/nginx/sites-available/

# Change SSO Domain
RUN sed -i "s/example\.com/${SSODOMAIN}/g" /etc/lemonldap-ng/* /var/lib/lemonldap-ng/conf/lmConf-1.js /var/lib/lemonldap-ng/test/index.pl

# Enable sites
RUN ln -s /etc/nginx/sites-available/handler-nginx.conf /etc/nginx/sites-enabled/ &&\
    ln -s /etc/nginx/sites-available/manager-nginx.conf /etc/nginx/sites-enabled/ &&\
    ln -s /etc/nginx/sites-available/portal-nginx.conf /etc/nginx/sites-enabled/ &&\
    ln -s /etc/nginx/sites-available/test-nginx.conf /etc/nginx/sites-enabled/

# Remove cached configuration
RUN rm -rf /tmp/lemonldap-ng-config

# No daemon
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf

COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf
RUN sed -i "s/\/usr\/sbin\/llng-fastcgi-server -F -u www-data -g www-data/service lemonldap-ng-fastcgi-server start/g" /etc/supervisor/conf.d/supervisord.conf

EXPOSE 80 443
VOLUME ["/etc/lemonldap-ng", "/var/lib/lemonldap-ng/conf", "/var/lib/lemonldap-ng/sessions", "/var/lib/lemonldap-ng/psessions"]

# Copy entrypoint file to container
WORKDIR /
COPY ./entrypoint.sh /
RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
