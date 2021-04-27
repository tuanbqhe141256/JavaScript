//Cau 1 
var st="";
function rese(a){
    var arr=a.split('');
     arr.reverse();
      st=arr.join('');
    return st;
}
console.log(rese("nodemy"));
//Cau 2
function penta(a){
    return a*5;
}
var array=[1, 2, 3 ,4 ,5 ,6];
function sumPenta(arr,penta){
  var sum=0;
  for(let key of arr)sum+=key;
  return penta(sum);
}
console.log(sumPenta(array,penta))
//cau 3;
function countIter(a){
    var countK=0;
    var countH=0;
    for(let key of a){
        if(key=='k')countK++;
        if(key=='h')countH++;
    }
    return countK==countH;
}
console.log(countIter("nguyễn hắc trung khải"));
//cau 4;
var array2=[10, 2, 3 ,4 ,5 ,6];
var total=0;
total=array2.reduce(getSum,0);
function getSum(total,num){
 return total+num;
}
console.log(total);

function getFileExtension(a){
  return a.substring(a.indexOf('.'),a.length);
}
console.log(getFileExtension("index.html"));
//cau 6
var object1=[
    {name:'phuong',score:23},
    { name: "Duy", score: 9.5 },
    { name: "Vương", score: 7 },
    { name: "Minh", score: 11 }
];      
object1.sort(compare);
function compare(a,b){
   return a.score-b.score;
}  
var sub=object1.splice(0,3);
console.log(sub);
//cau7
var listProducts = [
    { id: 1, amountProduct: 1000, name: "Pepsi" },
    { id: 2, amountProduct: 1000, name: "Trà xanh không độ" },
    { id: 3, amountProduct: 3000, name: "Coca cola" },
    { id: 4, amountProduct: 1000, name: "7up" },
    { id: 5, amountProduct: 2000, name: "Number one" },
    { id: 6, amountProduct: 2000, name: "Mirinda" },
    { id: 7, amountProduct: 3000, name: "Nước cam Twister" },
    { id: 8, amountProduct: 1000, name: "Red bull" },
    { id: 9, amountProduct: 3000, name: "Nước tăng lực Compact" },
    { id: 100, amountProduct: 2000, name: "Trà xanh C2" },
  ];   
  var result=[];  
  function check(list,number){
    for(let key of list){
       
        if(key["amountProduct"]==3000){
             result.push(key);
        }
    }
    return result;
  }
  console.log(check(listProducts,3000)); 
//cau 9
// * 'N' hoặc 'n' -> 1
// * 'O' hoặc 'o' -> 2
// * 'D' hoặc 'd' -> 3
// * 'E' hoặc 'e' -> 4
// * 'M' hoặc 'm' -> 5
// * 'Y' hoặc 'y' -> 6
var array=['N', 'n', 'O', 'o', 'D' , 'd', 'E', 'e', 'M' , 'm' , 'Y' , 'y' , 'A'];
function switchCaseArr(ar){
    return arNew=ar.map(count)
}
function count(num){
    switch(num){
      case 'N':return 1;
      case 'n':return 1;
      case "o":return 2;
      default: return 0;
    }
}
console.log(switchCaseArr(array));
//cau 10 
console.log(Math.sin(20).toFixed(3)+"/"+Math.sqrt(20));
//cau 11
for(let i=0;i<30;i++)
console.log(Math.floor((Math.random()*3)+27));
//cau 12
function positiveNumber(arr) {
  return arr.map(function posi(num){
    return Math.abs(num);
  })
}
 console.log(positiveNumber([-2, -3, 2]));
 //cau 13
 function balanceTriangle(a, b, c) {
  var arr=[];
  arr.push(a,b,c);
  var index=arr.indexOf(Math.max(a,b,c));
  arr.splice(index,1);

  return Math.pow(Math.max(a,b,c),2)==Math.pow(arr[0],2)+Math.pow(arr[1],2);
}
 console.log(balanceTriangle(5, 12, 13));