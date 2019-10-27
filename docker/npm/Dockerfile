FROM node:11.15

ENV APP_ROOT /usr/share/nginx

WORKDIR ${APP_ROOT}

ADD . ${APP_ROOT}

RUN npm install

RUN npm run prod

ENV HOST 0.0.0.0
