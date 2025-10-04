# syntax=docker/dockerfile:labs
FROM node:22-slim AS builder

# Copy package.json
WORKDIR /app

COPY --parents ./package.json ./package-lock.json ./saflib/env/package.json ./saflib/links/package.json ./saflib/monorepo/package.json ./saflib/openapi/package.json ./saflib/sdk/package.json ./saflib/utils/package.json ./saflib/vite/package.json ./saflib/vue/package.json ./services/notes/notes-sdk/package.json ./services/notes/notes-spec/package.json ./clients/web-notes-links/package.json ./
RUN npm install
RUN npm install @rollup/rollup-linux-arm64-gnu

COPY --parents ./saflib/env ./saflib/links ./saflib/monorepo ./saflib/openapi ./saflib/sdk ./saflib/utils ./saflib/vite ./saflib/vue ./services/notes/notes-sdk ./services/notes/notes-spec ./clients/web-notes-links ./

# Vue app setup
WORKDIR /app/services/notes/notes-sdk