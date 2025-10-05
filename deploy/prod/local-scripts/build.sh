#!/bin/bash
set -e

# Build dependent images
docker build -t crdt-notes-clients:latest -f ./clients/spas/Dockerfile . --platform linux/amd64

# Build production images
docker build -t crdt-notes-caddy:latest -f ./deploy/prod/Dockerfile.prod . --platform linux/amd64
docker build -t crdt-notes-identity:latest -f ./services/identity/Dockerfile . --platform linux/amd64
docker build -t crdt-notes-notes:latest -f ./services/notes/notes-service/Dockerfile . --platform linux/amd64

# Note: sometimes need to run with --no-cache if cache got into a weird state from cancelling mid-build