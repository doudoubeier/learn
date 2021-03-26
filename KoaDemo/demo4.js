const Koa = require('koa');
const Router = require('koa-router');
const Route = require('koa-router');

const app = new Koa();
const router = new Router({
    prefix: '/view'
});

router.get('/', function (ctx, next) {
    ctx.body = "hello world";
}).get('/todo', function (ctx, next) {
    ctx.body = "todo page"
})

app.use(router.routes()).use(router.allowedMethods()).listen(3001, () => {
    console.log('[demo] server starting at port 3001');
})