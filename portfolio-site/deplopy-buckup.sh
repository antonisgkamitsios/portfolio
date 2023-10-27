#! /bin/bash

docker-compose -f docker-compose.backup.yaml up --build --wait --scale node-container=2 -d &&
    docker system prune -f
