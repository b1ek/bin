#!/bin/sh

docker-compose down -t0
docker-compose build --no-cache
docker-compose up -d