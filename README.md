# WePy Template

## Tree

```
├── dist                 # build 文件输出目录
├── package.json         # 项目配置文件
├── project.config.json  # 项目配置文件
├── src                  # 代码编写目录
│   ├── app.wpy          # 小程序配置项  
│   ├── common
│   │   ├── api.js       # API
│   │   ├── http.js      # request 模块（可扩展）
│   │   ├── index.js     # 入口文件
│   │   ├── tips.js      # Tips 模块（可扩展）
│   │   └── utils.js     # Utils 模块（可扩展）
│   ├── components       # 组件目录
│   ├── config
│   │   └── index.js     # 配置文件（可扩展）
│   ├── mixins           # 混合目录
│   ├── pages            # 页面目录
│   └── styles           # 样式目录
└── wepy.config.js       # WePy 配置文件
```

## Setting

package.json

```
name: project name
description: project description
author: name & email
```
project.config.json

```
description: project description
appid: appid
projectname: project name
```

src/config/index.js

```
const domains = {
  dev: '[dev domain]',
  prod: '[prod domain]'
}
```

## Extend


```
Custom API: ./common/api.js
Custom tip: ./common/tips.js
Custom util: ./common/utils.js
Request function: ./common/http.js
```


## Start

Install wepy

```
npm install wepy-cli -g
```

Install dependencies:

```
npm install
```

Run dev:
```
npm run dev
```

> **Remind**

- 使用微信开发者工具新建项目，本地开发**选择 `dist` 目录**
- 微信开发者工具 -> 设置 -> 项目设置
    - **关闭** ES6 转 ES5
    - **关闭** 代码压缩上传
    - **关闭** 上传代码时样式文件自动补全
    - **开启** 开发环境不校验请求域名、TLS版本以及HTTPS证书


## Build

```
npm run build
```

## Optional [REST API](https://github.com/typicode/json-server)

Install

```
npm install -g json-server
```

Start JSON Server

```
npm run server
```