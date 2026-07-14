FROM node:22-alpine AS build

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    git \
    libc6-compat

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NODE_ENV=production

RUN npm run build
RUN rm -rf node_modules


FROM node:22-alpine AS production

RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app ./

RUN npm ci --omit=dev \
    && npm cache clean --force \
    && chown -R node:node /app

USER node

EXPOSE 1337

CMD ["npm", "run", "start"]