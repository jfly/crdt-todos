# syntax=docker/dockerfile:labs
FROM node:alpine3.19

WORKDIR /app

COPY --parents ./package.json ./package-lock.json ./saflib/drizzle/package.json ./saflib/env/package.json ./saflib/express/package.json ./saflib/monorepo/package.json ./saflib/node/package.json ./saflib/openapi/package.json ./saflib/utils/package.json ./services/notes/notes-db/package.json ./services/notes/notes-http/package.json ./services/notes/notes-service/package.json ./services/notes/notes-service-common/package.json ./services/notes/notes-spec/package.json ./
RUN npm install --omit=dev
COPY --parents ./saflib/drizzle ./saflib/env ./saflib/express ./saflib/monorepo ./saflib/node ./saflib/openapi ./saflib/utils ./services/notes/notes-db ./services/notes/notes-http ./services/notes/notes-service ./services/notes/notes-service-common ./services/notes/notes-spec ./

WORKDIR /app/./services/notes/notes-service
CMD ["npm", "start"]
