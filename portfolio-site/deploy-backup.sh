#! /bin/bash

docker-compose -f docker-compose.backup.yaml up -d --build --wait --scale node-container-backup=2 &&
    docker system prune -f
