FROM node:alpine AS build

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        python3 \
        make \
        g++ \
        git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NODE_ENV=production
RUN npm run build

RUN rm -rf node_modules


FROM node:alpine AS production

WORKDIR /app

ENV NODE_ENV=productionddddddddddd

COPY --from=build /app ./

RUN npm ci --omit=dev \
    && npm cache clean --force \
    && chown -R node:node /app

USER node

EXPOSE 1337

CMD ["npm", "run", "start"]