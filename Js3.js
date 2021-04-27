var user = [
    {
      idUser: 1,
      name: "Duc",
      idClass: 11,
      role: "student",
    },
    {
      idUser: 2,
      name: "Binh",
      idClass: 11,
      role: "student",
    },
    {
      idUser: 3,
      name: "Nam",
      idClass: 12,
      role: "student",
    },
    {
      idUser: 4,
      name: "Long",
      idClass: 11,
      role: "student",
    },
    {
      idUser: 5,
      name: "Phuong",
      idClass: 12,
      role: "student",
    },
    {
      idUser: 6,
      name: "Phuc",
      idClass: 11,
      role: "student",
    },
    {
      idUser: 7,
      name: "Manh",
      idClass: 13,
      role: "student",
    },
    {
      idUser: 8,
      name: "Huy",
      idClass: 12,
      role: "student",
    },
    {
      idUser: 9,
      name: "Hoang",
      idClass: 12,
      role: "teacher",
    },
    {
      idUser: 10,
      name: "Thai",
      idClass: 11,
      role: "teacher",
    },
    {
      idUser: 11,
      name: "Nam",
      idClass: 13,
      role: "teacher",
    },
  ];
//Cau 1
// var unduplicate=[];
// user.forEach(check);
// function check(value){
//    if(unduplicate.indexOf(value.role)!=-1)return;
//    unduplicate.push(value.role);
    // count =user.reduce((total,content)=>{
    //     if(value.role==content.role)return ++total;
    //     return total;
    // },0);

// }
// for(let key of unduplicate){
//     var newArray=[];
//     for(let key1 of user){
//         if(key1.role==key)newArray.push(key1.name)
//     }
//     console.log(key+"="+newArray);
// }

// console.log(unduplicate)

var unduplicate=[];
user.forEach(check);
function check(value){
   if(unduplicate.indexOf(value.idClass)!=-1)return;
   unduplicate.push(value.idClass);
    // count =user.reduce((total,content)=>{
    //     if(value.role==content.role)return ++total;
    //     return total;
    // },0);

}
// var arr3=[];
// for(let key of unduplicate){
//     ob1[key];
  
// }  arr3[0]=ob1;


// var ob1={idClass:"",student:[],teacher:[]};
// ob1["idClass"]="2";
// ob1['student'].push("ad0");
// ob1["student"].push("ad");
var arr4=[];
for(let key of unduplicate){
    var ob1={idClass:"",student:[],teacher:[]}
    var newArray=[];

    var newArray2=[];
    for(let key1 of user){
        if(key1.idClass==key){
            ob1["idClass"]=key1.idClass;
            if(key1.role=='student'){
            ob1['student'].push(key1.name);continue;}
            ob1['teacher'].push(key1.name);
            
        }
    }
    arr4.push(ob1);
    
}

console.log(arr4)
