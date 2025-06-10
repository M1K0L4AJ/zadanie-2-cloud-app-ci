FROM node:20-alpine
LABEL maintainer="Mikołaj Kozłowski"
WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
