sudo -i
echo "Pulling latest docker images..."
docker pull ghcr.io/sderickson/crdt-notes-caddy:latest
docker pull ghcr.io/sderickson/crdt-notes-identity:latest
docker pull ghcr.io/sderickson/crdt-notes-notes:latest
echo "Done!"