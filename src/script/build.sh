#!/bin/bash

echo '编译静态页面'

cd ./src/ui && npm i && npm run build && cd ../ && mkdir -p ../dist/utils && cp -r ui/dist/static/  ../dist/utils/static/