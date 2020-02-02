const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    let url = ctx.url;
    let res = ctx.request;
    let req_query = res.query;
    let req_querystring = res.querystring;

    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;


    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    };
});

app.listen(3003,()=>{
    console.log('starting...');
});
