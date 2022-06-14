# Base image
FROM alpine

# Download and install a dependency
RUN apk add apache2
RUN apk add php

# Copy files to container
COPY ./src /var/www/php-image

# Tell the image what to do when it starts
CMD  [ "/usr/sbin/httpd", "-D", "FOREGROUND"]
