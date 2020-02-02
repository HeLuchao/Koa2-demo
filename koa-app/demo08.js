const Koa = require('koa');
const app = new Koa();

app.use(async (ctx)=>{
    if(ctx.url === '/index'){
        ctx.cookies.set('myCookie','setCookie',{
            domain:'127.0.0.1',
            // path:'index',
            maxAge:1000*60*60*24,
            expires:'2020-12-31',
            httpOnly:false,
            overwrite:false
        });
    } else {
        if(ctx.cookies.get('myCookie')){
            ctx.body = ctx.cookies.get('myCookie');
        } else {
            ctx.body = 'hello koa';
        }
    }
});

app.listen(3000,()=>{
    console.log('starting at port 3000');
});