const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    proxy('/', {
      //`api`是需要转发的请求
      target: '', // 这里是接口服务器地址
      changeOrigin: true
    })
  );
 
};