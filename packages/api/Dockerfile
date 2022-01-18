FROM node:16.13-alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY ./package.json .

RUN npm install

COPY ./dist .

CMD ["node", "index.js"]
