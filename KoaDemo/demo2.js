const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyParser())
app.use(async (ctx) => {
    if (ctx.url == '/' && ctx.method == 'GET') {// 当请求是get请求时 显示表单让用户填写
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST" action="/">
                <p>username</p>
                <input name="username" />
                <br />
                <p>age</p>
                <input name="age" />
                <br />
                <p>webSite</p>
                <input name="webSite" />
                <br />
                <br />
                <button type="submit">提交</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url == '/' && ctx.method == 'POST') {// 请求时post时
        // let postData = await parsePostData(ctx);
        // ctx.body = postData;
        let postData = ctx.request.body;
        ctx.body = postData;
    } else {// 其余显示404
        ctx.body = '<h1>404!</h1>';
    }
})


function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = "";
            ctx.req.on('data', (data) => {
                postdata += data
            })
            ctx.req.addListener("end", function () {
                let parseData = parseQueryStr(postdata)
                resolve(parseData);
            })
        } catch (error) {
            reject(error);
        }
    });
}

function parseQueryStr(queryStr) {
    let queryData = {};
    let queryStrList = queryStr.split('&');
    for (let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData
}

app.listen(3001, () => {
    console.log('[demo] server is starting at port 3001')
})