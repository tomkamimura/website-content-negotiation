## Node.js server to handle content negotiation for the OSLC website.

[![Discourse status](https://img.shields.io/discourse/https/meta.discourse.org/status.svg)](https://forum.open-services.net/)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/OSLC/chat)

## Getting started

    npm i
    npm start --dev_base=/Users/andrew/git/oslc/web/website/content/ns

## Deployment

On the server:

    cd ~/workspace/oslc-site-content-negotiation/
    git pull
    git checkout master
    npm ci
    npm i -g pm2
    pm2 update
    pm2 restart negotiation.js --update-env
    pm2 save

On the dev machine:

    ./test.sh -p