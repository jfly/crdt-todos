sudo -i
echo "Pulling latest docker images..."
docker pull crdt-notes-caddy:latest
docker pull crdt-notes-identity:latest
docker pull crdt-notes-notes:latest
echo "Done!"