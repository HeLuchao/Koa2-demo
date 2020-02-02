async function fn(){
    return 'hello async';
}

async function getSome(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('promise resolve');
        },3000);
    });
}

async function test(){
    const v = await getSome();
    console.log(v);
}

// const result = fn();
// console.log(result);
test();