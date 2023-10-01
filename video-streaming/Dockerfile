FROM node:18.16.0-alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm i --omit=dev
COPY . .
CMD npm run dev