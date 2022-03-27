#

#
FROM node:alpine
WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

COPY ormconfig.docker.json ./ormconfig.json
COPY .env .

EXPOSE 3001

CMD ["npm", "start"]
