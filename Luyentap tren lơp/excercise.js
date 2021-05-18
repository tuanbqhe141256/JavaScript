document.addEventListener("DOMContentLoaded", function () {
    var array = [];
    var text = "";
    var p1 = document.getElementById("p1");

    p1.innerHTML = text;
    var p2 = document.getElementById("p2");
    
}
);
function sum() {
    var i1 = document.getElementById("i1");
    var i2 = document.getElementById("i2");
    var r = document.getElementById("i3");
    r.value = "d";
    r.value = parseInt(i1.value) + parseInt(i2.value);

}
function changeColor() {
    var se = document.getElementById("se");
    document.bgColor = se.value;
}
function countCharacter() {
    var i2 = document.getElementById("i2");
    var i3 = document.getElementById("i3");
    if (i2.value.length > 4) {
        alert("Your text can't over 4 character");
        i2.value = i2.value.substr(0, 4);
    } else
        i3.value = i2.value.length;

}
function displayRa() {
    var ar=[1,2,3,4]
    var object={name:'tuan',age:12,address:'hanoi'};
    for(let key in "asdfads"){
        document.write(key);
    }
    
}
function changeColorOut(d){
    document.getElementById(d).style.visibility='hidden';
}
function changeColorOn(d){
    document.getElementById(d).style.visibility='visible';
}
console.log("sadfd");

// for(var i=0;i<5;i++){
//     // array[i]=prompt("Enter your class name");
//     text+=i
// }

// text+="before\n";
// for(let element in array){
//     text+=element+"\n"
// }
