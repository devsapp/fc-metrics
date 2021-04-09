#!/bin/bash

echo '编译静态页面'
cd ./src/ui
npm run build

cd ../
echo '清除缓存'


echo '将项目文件 cp 到部署目录'
mkdir -p ../dist/utils/static
cp -r ui/dist/static/  ../dist/utils/static