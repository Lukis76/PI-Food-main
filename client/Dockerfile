FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i 
# or instalacion ligera
# RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm","run", "dev" ]

