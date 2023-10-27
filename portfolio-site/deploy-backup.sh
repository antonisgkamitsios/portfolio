#! /bin/bash

cd /var/www/myportfolio/portfolio-site/
docker-compose -f docker-compose.backup.yaml up -d --build --scale node-container-backup=2 &&
    docker system prune -f
