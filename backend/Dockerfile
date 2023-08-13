FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM node:18 AS final
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile --production
CMD [ "yarn", "start" ]
