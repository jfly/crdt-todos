#!/usr/bin/env bash
# Push images to GitHub's Container Registry
docker push crdt-notes-caddy:latest
docker push crdt-notes-identity:latest
docker push crdt-notes-notes:latest