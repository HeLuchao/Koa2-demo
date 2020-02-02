const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
//路由层级 前缀
// const router = new Router({
//     prefix:'/koa'
// });

// router
//     .get('/',(ctx, next)=>{
//         ctx.body = 'hello Koa2 Router';
//     })
//     .get('/todo',(ctx, next)=>{
//         ctx.body = 'todo Page';
//     })

let home = new Router();
home
    .get('/index', async (ctx)=>{
        ctx.body = 'home index page';
    })
    .get('/todo', async (ctx)=>{
        ctx.body = 'home todo page';
    });

let page = new Router();
page
    .get('/index', async (ctx)=>{
        ctx.body = 'page index';
    })
    .get('/todo', async (ctx)=>{
        ctx.body = 'page todo page';
    });


//父级路由
let router = new Router();

//子级路由上报
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());


app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('starting at port 3000'); 
});