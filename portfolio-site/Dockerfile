FROM node:19-alpine as build

# run npm global ass root
RUN npm i -g pnpm

# change user to be sure
USER node

RUN mkdir /home/node/app

WORKDIR  /home/node/app

COPY --chown=node:node package.json pnpm-lock.yaml ./
RUN pnpm install


COPY --chown=node:node . .
RUN pnpm build

FROM node:19-alpine as serve

USER node

RUN mkdir /home/node/app
WORKDIR  /home/node/app
COPY --from=build --chown=node:node /home/node/app ./
RUN rm -r src

ENV NODE_ENV=production
CMD [ "node", "server.js" ]

