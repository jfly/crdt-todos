#!/bin/bash
# Push images to GitHub's Container Registry
docker push ghcr.io/sderickson/crdt-notes-caddy:latest
docker push ghcr.io/sderickson/crdt-notes-identity:latest
docker push ghcr.io/sderickson/crdt-notes-notes:latest