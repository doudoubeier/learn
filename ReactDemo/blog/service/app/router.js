// 项目路由配置文件 用户访问 没有中间件的情况下会直接访问router.js文件
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.home.list);
};
