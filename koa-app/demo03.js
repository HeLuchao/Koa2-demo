const Koa = require('koa');
const app = new Koa();

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
        // 
        let postData = await(parsePost(ctx));
        ctx.body = postData;
    } else {
        ctx.body = `<h1>404</h1>`;
    }
});

function parsePost (ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = '';
            ctx.req.addListener('data', (data) => {
                postdata += data;
            });
            ctx.req.on('end', () => {
                let postData = parseQueryStr(postdata);
                resolve(postData);
            });
        } catch (error) {
            reject(error);
        }
    });
}

function parseQueryStr (queryStr) {
    let queryData = {};
    let queryStrList = queryStr.split('&');
    for(let [index,item] of queryStrList.entries()) {
        let itemList = item.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}

app.listen(3000,()=>{
    console.log('starting listen port 3000');
});