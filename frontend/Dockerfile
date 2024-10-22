# Build l'application React

FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./




RUN npm install --silent

COPY src/components/PasswordForm.js ./src/components/
COPY src/components/PasswordManager.js ./src/components/
COPY src/components/PasswordTable.js ./src/components/
COPY src/App.js ./src/
COPY src/index.js ./src/

#
RUN npm run build

# Configuration de NGINX

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]