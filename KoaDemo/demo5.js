const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 中间件接收参数
router.get('/', function (ctx, next) {
    // ctx.body = 'hello world';
    ctx.body = ctx.query;
})

app.use(router.routes()).use(router.allowedMethods()).listen(3001, function () {
    console.log('[demo] server starting at port 3001')
})