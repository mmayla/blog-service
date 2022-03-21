FROM node:16.13
LABEL MAINTAINER Mohamed Mayla <mohamed.mayla@gmail.com>

WORKDIR /usr/src/app
COPY package*.json ./
COPY prisma ./prisma/

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 8080

CMD ["yarn", "start:migrate:prod"]
