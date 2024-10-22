FROM node:14

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

# Copier tout le reste du code ici

EXPOSE 3000

CMD ["npm", "start"]