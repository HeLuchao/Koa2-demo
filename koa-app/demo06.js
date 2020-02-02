const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

router
    .get('/',(ctx, next)=>{
        ctx.body = 'hello Koa2 Router';
    })
    .get('/todo',(ctx, next)=>{
        ctx.body = 'todo Page';
    })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('starting at port 3000'); 
});