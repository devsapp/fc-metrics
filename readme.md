# 帮助文档

通过该组件，可以查看阿里云函数计算的Metrics信息

## 参数

|  参数   |  必填  |  类型  | 取值  |  描述  |  备注  |    
|  ----  | ----  |  ----  | ----  |  ----  |  ----  |
| region  | true |  string |  cn-beijing、cn-hangzhou、cn-shanghai、cn-qingdao、cn-zhangjiakou、cn-huhehaote、cn-shenzhen、cn-chengdu、 cn-hongkong、ap-southeast-1、 ap-southeast-2、ap-southeast-3、 ap-southeast-5、ap-northeast-1、eu-central-1、eu-west-1、us-west-1、us-east-1、ap-south-1  |  地域 |   |
| ServiceName  | true | string  | - | 服务名  |  -  |
| FunctionName  | true | string  | - | 函数名  |  type为fc时必填  |

------- 

# 其它

组件开发者：


1.在当前package.json目录下
````
$ npm i
````
cd src/ui目录的package.json目目录下
````
$ npm i 
````
9.回到项目根目录
````
$ npm run build:ts
````
cd example目录下
````
s metrics
````
