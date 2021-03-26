const Koa = require('koa');
const Router = require('koa-router');
const Route = require('koa-router');

const app = new Koa();

// const router = new Router({
//     prefix: '/view'
// });

// router.get('/', function (ctx, next) {
//     ctx.body = "hello world";
// }).get('/todo', function (ctx, next) {
//     ctx.body = "todo page"
// })

// app.use(router.routes()).use(router.allowedMethods()).listen(3001, () => {
//     console.log('[demo] server starting at port 3001');
// })

let home = new Router();
home.get('/hello', function (ctx, next) {
    ctx.body = "hello home"
}).get("/todo", function (ctx, next) {
    ctx.body = "todo home"
})

let page = new Router();
page.get('/hello', function (ctx, next) {
    ctx.body = 'hello page'
}).get('/todo', function (ctx, next) {
    ctx.body = 'todo page'
})

// 装载所有子路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());
app.listen(3001, () => {
    console.log('[demo] server starting at port 3001');
})