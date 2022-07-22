FROM node:alpine

WORKDIR /app

COPY ./src/ ./src/
COPY package*.json .

ENV \
  APP_PORT=3000 \
  MYSQL_HOST=localhost \
  MYSQL_PORT=3306 \
  MYSQL_USER=root \
  MYSQL_PASSWORD=root

RUN npm ci --production

EXPOSE ${APP_PORT}

CMD [ "node", "src/index.js" ]