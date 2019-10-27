FROM php:7.3-fpm

RUN apt-get update && apt-get install -y \
    curl \
    git \
    libzip-dev \
    zip \
    unzip


RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get update \
 && apt-get install -y \
 nodejs

RUN docker-php-ext-configure zip --with-libzip
RUN docker-php-ext-install pdo_mysql zip
RUN curl --silent --show-error https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer
