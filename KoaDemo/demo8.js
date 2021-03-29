const Koa = require('koa')
const views = require('koa-views') // 引入模板
const path = require('path') // 引入路径 node原生自带
const app = new Koa()

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

app.use(async (ctx) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title
    })
})

app.listen(3001, () => {
    console.log('[demo] server is starting at port 3001')
})