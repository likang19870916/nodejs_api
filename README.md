# nodejs_api
centos6.8 安装nvm 使用nodejs编写api 使用apidoc生成api文档
nvm安装
cd /usr/local/src
git clone https://github.com/cnpm/nvm.git
source ./nvm/nvm.sh
nvm --version
//查看当前所有版本
nvm ls-remote
nvm install v7.0.0
node -v
> v7.0.0


express api安装

npm init;
npm install -g express-generator;
express node-api; //node-api api文件夹名称;
cd node-api;
npm install;

编写api
并且更改api的备注
npm start;

apidoc安装

npm install apidoc -g;
apidoc -i /home/www/appapi/node-api/ -o /home/www/appapi/node-api/dest; //dest apidoc的文件夹名称

forever 安装

npm install forever -g;
cd /home/www/appapi/node-api;
forever start -c 'npm start' ./ ;


nginx config

server {
    listen 80;
    server_name api.likang-web.com;//绑定api域名
    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_pass    http://127.0.0.1:3000;
    }
}

apijson

{
  "name": "node-api",
  "version": "0.1.0",
  "description": "",
  "title": "Test API",
  "description": "Test API for Web",
  "url" : "http://api.likang-web.com",
  "sampleUrl" : "http://api.likang-web.com",
  "template": {
    "withCompare": true,
    "withGenerator": true
  }
}

apis.js

/**
 * @api {post} /api/images post
 * @apiGroup images
 *
 * @apiParam {Int} id
 * @apiParam {String} user
 * @apiParam {String} email
 *
 * @apiSuccess {Object} result
 *
 */
