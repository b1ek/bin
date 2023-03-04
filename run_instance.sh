#!/bin/bash

if ! [ -f .env ]; then
    echo -e '\033[31m.env not found.'
    exit -1
fi

. .env
if [ "$APP_DEBUG" == "true" ]; then
    npm run dev
else
    npm run prod
fi