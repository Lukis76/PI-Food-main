FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i
# or instalacion ligera
# RUN npm ci --only=production

COPY . .

EXPOSE 3005

CMD [ "npm", "run", "dev" ]
