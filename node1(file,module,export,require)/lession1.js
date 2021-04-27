// var cong=require('./path')
// console.log(cong);
var fs=require("fs");


// var path=require("path");
// var chamdiem=path.join(__dirname,"../path1")// ../ bo level truoc
// var data=require(chamdiem) 
// console.log(data);//data.cong(4,6);
// console.log(fs.writeFile);
// fs.appendFile("./testWrite.js","test writefile2",function (err){
//     if(err){
//         console.log(err)
//     }
// });

// fs.writeFile("./testWrite.js","test writefile2",function (err){
//     if(err){
//         console.log(err)
//     }
// });
//--Doc nd file va viet ra file khac
// var x =fs.readFile("./path.js","utf8",function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.split(" "));
//         fs.writeFile("./testWrite.js",data,function(err){
//             if(err){
//                 console.log(err);
//             }
//         })
//     }
// })
// console.log(x);
// var writ=fs.createWriteStream("./testWrite.js");
// var read=fs.createReadStream("./path.js");
// read.pipe(writ);

fs.unlink("./path1.js",function(err){
    if(err){
        console.log(err);
    }
});