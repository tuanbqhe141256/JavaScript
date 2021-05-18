var x=0;

let p1= new Promise((resolve,reject)=>{
    reject(4);
})
p1.then((a)=>{
    console.log(a);
}).catch((b)=>{
    console.log(b);
})
console.log(5);