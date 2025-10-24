FROM node:latest

WORKDIR /App

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node","Server.js"]