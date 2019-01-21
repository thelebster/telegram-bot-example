FROM node:carbon-alpine

LABEL maintainer="Anton Lebedev <mailbox@lebster.me>"

WORKDIR /app

COPY package.json ./

RUN \
  npm config set unsafe-perm true && \
  npm install nodemon -g && \
  npm install

COPY . .

CMD nodemon index.js
