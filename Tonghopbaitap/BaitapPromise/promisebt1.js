let p1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(1);
    },3000)
})
let p2=new Promise((res,rej)=>{
    
    setTimeout(()=>{
        res(2);
    },2000)
})
let p3=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej(3);
    },2000)
})
Promise.all([p1,p2,p3]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})