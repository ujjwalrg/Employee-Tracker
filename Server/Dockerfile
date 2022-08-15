FROM node:14.15.4

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

COPY . .
EXPOSE 3001
CMD ["npm", "start"]