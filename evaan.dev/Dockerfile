FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG STRAPI_URL
ENV STRAPI_URL=$STRAPI_URL

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80