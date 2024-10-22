FROM node:14

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

RUN mkdir src
RUN mkdir src/config
RUN mkdir src/controllers
RUN mkdir src/models
RUN mkdir src/routes

COPY src/index.js ./src/
COPY src/config/database.js ./src/config/
COPY src/controllers/passwordController.js ./src/controllers/
COPY src/models/password.js ./src/models/
COPY src/routes/passwords.js ./src/routes/

EXPOSE 3000

CMD ["npm", "start"]