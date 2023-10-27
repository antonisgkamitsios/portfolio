#! /bin/bash

function handle_kill() {

    echo Exiting, removing remote docker context..
    docker context rm -f remote
    echo Removed remote docker context
    exit 1
}
trap handle_kill SIGINT ERR

(
    docker context create remote --docker host=ssh://antonis@fsfe &&
        docker context use remote &&
        docker-compose -f docker-compose.yaml up --build --wait --scale node-container=2 -d &&
        docker system prune -f &&
        echo Removing remote context &&
        docker context rm -f remote &&
        echo Removed remote
) || docker context rm -f remote
