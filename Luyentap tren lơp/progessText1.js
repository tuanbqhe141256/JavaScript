//Cau1 bai 1
var array = [1, 9, 5, 9, 3, 4, 7, 6, 0, 2, 1, 3];

function getNumber(ar) {
    var result = [];
    for (let key of array) {
        if (array.indexOf(key) == array.lastIndexOf(key)) {
            result.push(key);
        }
    }
    return result;
}
console.log(getNumber(array));
//--------bai 2

var nhanVien = [
    { name: "Thuan", khuVuc: 10, boPhan: "ke toan" },
    { name: "Tuan", khuVuc: 11, boPhan: "sale" },
    { name: "Thuan", khuVuc: 13, boPhan: "van tai" },
    { name: "Tuan", khuVuc: 12, boPhan: "marketing" },
    { name: "Nam", khuVuc: 11, boPhan: "marketing" },
    { name: "Hung", khuVuc: 11, boPhan: "sale" },
    { name: "Ha", khuVuc: 13, boPhan: "van tai" },
    { name: "Trung", khuVuc: 12, boPhan: "marketing" },
];

var diaPhan = [
    { khuVuc: 10, tinh: "Ha Noi" },
    { khuVuc: 11, tinh: "Ha Nam" },
    { khuVuc: 12, tinh: "HCM" },
    { khuVuc: 13, tinh: "Hai Phong" },
];
//cau 2;
function CountNhanvien(nhanVien) {
    var result2 = [];
    var count;
    for (let i = 0; i < diaPhan.length; i++) {  
         count=1;
        for (let j = i + 1; j < nhanVien.length; j++) {           
            if (diaPhan[i].khuVuc == nhanVien[j].khuVuc) {
                count++;
            }
        }
        result2.push({khuVuc:diaPhan[i].khuVuc,Soluong:count})
    }
    return result2;

};
console.log(CountNhanvien(nhanVien));
//cau 3
function add(nhanVien,diaPhan){
   for(let i=0;i<nhanVien.length;i++)
   for(let key2 of diaPhan){
       if(nhanVien[i].khuVuc==key2.khuVuc){
           nhanVien[i]["tinh"]=key2.tinh;
           console.log(true);
       }
   }
   return nhanVien;
}
console.log(add(nhanVien,diaPhan));
//cau4
// function CountBoPhan(nhanVien) {
//     var result3 = [];
//     var count;
//     var bool;
//     for (let i = 0; i < nhanVien.length; i++) {  
//         bool=false; 
//         count = 1;      
//         for(let key of result3){
//             for(x in key)
//             if(x==nhanVien[i].boPhan){
//                  bool=true;
//                  break;
//             }
//         }
//         if(bool)continue;
//         for (let j = i + 1; j < nhanVien.length; j++) {           
//             if (nhanVien[i].boPhan == nhanVien[j].boPhan) {
//                 count++;
//             }
//         }
//         var k=nhanVien[i].boPhan;
//         var obj= {}
//         obj[k]=count
//         result3.push(obj);
//     }
//     return result3;

// };
// console.log(CountBoPhan(nhanVien));
// var ke=[{tuan:2},{hai:3}]
// console.log(ke[0]["tuan"])

// //--Bai3 
// var text = "E:/K8-nodemy/Khải 246 sang/Nop bai/debai.txt";
// //cau 1
// console.log(text.substring(text.lastIndexOf("/")+1,text.length));
// //cau 2
// function change(text){
//   var sub=text.substring(0,text.lastIndexOf("/")+1);
//   sub+="debai.js";
//   return sub;
// }
// console.log(change(text));
//cau 3 // ví dụ link('../../lopK11/test.js') trả về "E:/K8-nodemy/lopK11/test.js"
function change(ab,re){
    arrr=re.split('/');
    if(arrr[arrr.length-1].indexOf(".")!=-1)arrr.pop();
    var ab1=ab.split('/');
    for(let key of ab1){
        if(key=='..'){
            arrr.pop();
            continue;
        }
        if(key=='.')continue;
        arrr.push(key);
        var arr1=arrr.join("/");
        
    }
    console.log(arr1);
}
change('../../lopK11/test.js','E:/K8-nodemy/lopK11/test.js')
// cau 4;
var nhanVien1 = [
    { name: "Thuan", khuVuc: 10, boPhan: "ke toan" },
    { name: "Tuan", khuVuc: 11, boPhan: "sale" },
    { name: "Thuan", khuVuc: 13, boPhan: "van tai" },
    { name: "Tuan", khuVuc: 12, boPhan: "marketing" },
    { name: "Nam", khuVuc: 11, boPhan: "marketing" },
    { name: "Hung", khuVuc: 11, boPhan: "sale" },
    { name: "Ha", khuVuc: 13, boPhan: "van tai" },
    { name: "Trung", khuVuc: 12, boPhan: "marketing" },
];

var diaPhan1 = [
    { khuVuc: 10, tinh: "Ha Noi" },
    { khuVuc: 11, tinh: "Ha Nam" },
    { khuVuc: 12, tinh: "HCM" },
    { khuVuc: 13, tinh: "Hai Phong" },
];
var ob3={};
for(let key3 of nhanVien1){
    if(ob3[key3.boPhan]==undefined){
        ob3[key3.boPhan]=1; 
    }else{
        ob3[key3.boPhan]++;
    }
}
console.log(ob3);