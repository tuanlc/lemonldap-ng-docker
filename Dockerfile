# Dockerfile for LemonLDAP::NG
# Use debian repo of LemonLDAP::NG project

# Start from Debian Jessie
FROM debian:jessie
MAINTAINER Clément OUDOT

# Change SSO DOMAIN here
ENV SSODOMAIN example.com

# Update system
RUN apt-get -y update && apt-get -y dist-upgrade

# Install LemonLDAP::NG repo
RUN apt-get -y install wget apt-transport-https
RUN wget -O - http://lemonldap-ng.org/_media/rpm-gpg-key-ow2 | apt-key add -
COPY lemonldap-ng.list /etc/apt/sources.list.d/

# Install LemonLDAP::NG packages
RUN apt-get -y update && apt-get -y install apache2 libapache2-mod-perl2 libapache2-mod-fcgid lemonldap-ng lemonldap-ng-fr-doc

# Change SSO Domain
RUN sed -i "s/example\.com/${SSODOMAIN}/g" /etc/lemonldap-ng/* /var/lib/lemonldap-ng/conf/lmConf-1.js /var/lib/lemonldap-ng/test/index.pl

# Comment CGIPassAuth directive
RUN sed -i 's/CGIPassAuth on/#CGIPassAuth on/g' /etc/lemonldap-ng/portal-apache2.conf

# Enable sites
RUN a2ensite handler-apache2.conf
RUN a2ensite portal-apache2.conf
RUN a2ensite manager-apache2.conf
RUN a2ensite test-apache2.conf

RUN a2enmod fcgid perl alias rewrite

# Remove cached configuration
RUN rm -rf /tmp/lemonldap-ng-config

EXPOSE 80 443
VOLUME ["/var/log/apache2", "/etc/apache2", "/etc/lemonldap-ng", "/var/lib/lemonldap-ng/conf", "/var/lib/lemonldap-ng/sessions", "/var/lib/lemonldap-ng/psessions"]
ENTRYPOINT ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
