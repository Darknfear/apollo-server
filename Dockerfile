FROM node:14-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json /app

COPY . /app

RUN npm install

CMD [ "npm", "run", "start:dev" ]
