const Koa = require('koa');
const app = new Koa();
//中间件 别人造的轮子
//cnpm install koa-bodyparser
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(async (ctx) => {
    if(ctx.url === '/' && ctx.method === 'GET'){
        //显示表单
        let html = `
            <h1>request Post</h1>
            <form method='POST' action='/'>
                <p>userName</p>
                <input name='userName' /><br/>
                <p>age</p>
                <input name='age' /><br/>
                <p>website</p>
                <input name='website' /><br/>
                <button type='submit'>submit</button>
            </form>
        `;
        ctx.body = html;
    } else if(ctx.url === '/' && ctx.method === 'POST') {
        let postData = ctx.request.body;
        ctx.body = postData;
    } else {
        ctx.body = `<h1>404</h1>`;
    }
});

app.listen(3000,()=>{
    console.log('starting listen port 3000');
});