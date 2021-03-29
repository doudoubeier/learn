// controller 控制器 渲染和简单的业务逻辑 路由配置的文件也需要写在这里
// public 公用文件夹 放置公用资源
// service 复杂的业务逻辑或与数据库打交道时 会把业务逻辑放到这个文件中
// view 模板文件夹 表现层的专属文件夹
// extend 扩展文件夹 需要写一些模板中使用的扩展方法时 放在这个文件夹中
// middleware 中间件文件夹 用来写中间件的 比如最常用的路由首位
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this;
    ctx.body = '<h1>hello world</h1>'
  }
}


module.exports = HomeController;
