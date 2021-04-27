// cau1
function multiply(a, b) {
  var st = 1;
  for (let i = a; i < b; i++) {
    st *= i
  }
  return st
}
console.log(multiply(2, 5))
// cau2
function display(a, b) {
  var n1 = a.charCodeAt(0);
  var n2 = b.charCodeAt(0);
  var txt = "";
  for (let i = n1; i <= n2; i++) {
    txt += String.fromCharCode(i) + ",";
  }
  txt = txt.substring(0, txt.length - 1)
  return txt;
}
console.log(display('a', 'z'))
//cau 3
var arr = [404, 11, 2];
var st = 1;
function multiply1(ar) {
  console.log(27, ar)
  for (const i of ar) {
    console.log(i)
    st *= i;
  }
  return st;
}
console.log(multiply1(arr))
// console.log(st)
//cau4
var student = { name: 'tuan', age: 23, class: "class1", point: 3.4 };
var bool = false;
function checkExist(key) {
  for (let attribute in student) {
    if (key == attribute) {
      bool = true;
      break;
    }
  }
}
checkExist("point");
console.log(bool)
//cau 5
var array5 = [];
var sum = 0;
function sumAll(array5) {
  for (var attri of array5) sum += attri
  return sum;
}
if (array5.length != 0) {
  console.log(sumAll(array5));
} else {
  console.log(0);
}
// test

function fu(ar){
  var c=ar.splice();
   c.push(323);
}
// var k=[1,3,32];
// fu(k);
// console.log(k);

// var da=setInterval(function(){
//   console.log(Date());
// },1000);
// setTimeout(function(){
//   clearInterval(da)
// },6000);

// i=0;
// var No=setInterval(()=>{
 
//   i+=Math.floor(Math.random()*9+1);
//   if(i<=100)
//   console.log(i,"%");
//   else{
//      console.log(100,"%");
//      clearInterval(No);
//   }
 
// },1000)

var arr=[1,123,123,23,533];
console.log(Math.max.apply(null,arr));
console.log(Math.min.apply(null,arr));



