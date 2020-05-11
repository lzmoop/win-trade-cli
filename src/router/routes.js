/*
 * @Author: zhangkuangwen
 * @Date: 2020-04-03 15:17:22
 * @LastEditors: zhangkuangwen
 * @LastEditTime: 2020-04-03 15:21:49
 * @Description:
 */

const modules = require.context('page', true, /\.\/[\w-]+\/view\/index\.js$/);
let routes = [];
modules.keys().forEach(key => {
  routes.push({
    path: key.replace(/\.(\/[\w-]+)\/view\/index\.js$/, '$1'),
    component: modules(key).default
  });
});
export default routes.filter(r => r);
