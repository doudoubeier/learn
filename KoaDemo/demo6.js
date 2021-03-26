const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    if (ctx.url == '/index') {
        ctx.cookies.set('myName', 'doudoubeier', {
            domain: '127.0.0.1', // 写入cookie所在域名
            path: '/index', // 写入cookie所在的路径
            maxAge: 1000 * 60 * 60 * 24, // cookie最大的有效时长
            expires: new Date('2020-01-01'), // cookie失效时间
            httpOnly: false, // 是否只用于http请求中
            overwrite: false, // 是否允许重写
        });
        ctx.body = 'cookies is ok';
    } else {
        if (ctx.cookies.get('myName')) {
            ctx.body = ctx.cookies.get('myName')
        } else {
            ctx.body = 'hello world';
        }
    }
})

app.listen(3001, () => {
    console.log('[demo] server is starting at port 3001')
})