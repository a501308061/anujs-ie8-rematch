# anujs-ie8-rematch
一个关于anujs的脚手架,兼容ie8+

## 那么本脚手架和其他又有什么不一样呢

1. 摒弃低版本的react@0.14采用更高性能和React 16 api保持一致的anujs
2. 引入rematch，减少Redux让人深恶痛绝的模版语法。
3. 路由方面引入最后一个支持ie8+的react-router版本2.3.0，并且做了按需加载
4. 网络请求方面用了fetch-ie8 补充了ie8没有promise对象的缺陷。同时支持fetch-jsonp。（如果不喜欢可以自行修改为axios）
5. 通过高阶组件引入国际化，完全适合国际化的需要。
6. 组件库方面，引入优秀的组件库antd@1.X的版本（当然，某些特性可能会有些变化）
7. 当然，最厉害的就是ie8的兼容性啦！！！合理的polyfill使得开发者可以随心所欲的使用高级语法如async、await，Object.assign等。

## 如何使用
1. git clone
2. 推荐使用yarn安装依赖，否则node-sass会有一定的几率安装不上。
3. npm run start
3. 前往http://localhost:3000/#/home?_k=qp72h2

## 更多
1. 一直没有找到webpack4的方案，相同的配置选项webpack4中就会无限循环，如果有大神知道，请不吝赐教。
2. 如果不需要ie8的兼容性，推荐使用阿里的umi，这个会有更多更好的选择。
3. 欢迎pr
4. 感谢以下两个脚手架，本脚手架是主要参考了它们的代码
https://gitee.com/menhal/React_IE8_boilerplate
https://github.com/wslx520/anujs-ie78-redux-router
