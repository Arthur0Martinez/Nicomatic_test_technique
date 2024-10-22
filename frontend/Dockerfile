FROM node:14-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

COPY src/ ./src/
# COPY src/App.js ./src/
# COPY src/index.js ./src/
COPY public/ ./public/

# Build the application
RUN npm run build

# Configure NGINX
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]