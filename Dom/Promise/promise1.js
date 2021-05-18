var x = 0;

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 1000)

})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 3000)
})
//resovle doi nhau in ra 1 mang( khong phan biet thoi gian)
// reject va resolve in ra reject bat ke thoi gian.
Promise.all([p1, p2]).then((a) => {
    console.log(a);
    let sum = 0;
    return new Promise((res, rej) => {
        for (let key of a) sum += key;
        res(sum);
    })

    // console.log(sum);
    // return sum;
}).then((a) => {                    // return promise or gia tri
    console.log('new', a);
    return a;
}).then((a) => {
    console.log('new2', a);
})
    .catch((b) => {
        console.log('d', b);
    })
//------------------------------Hai promise ket qua phu thuoc vao nhau

let p12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 1000)

})
let p22 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        p12.then((data)=>{
          resolve(data*3)
        }).then((err)=>{
            reject(err);
        })
    },3000)
})
p22.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})