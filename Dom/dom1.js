document.querySelector(".div1").innerHTML="adf";
document.querySelector("#id");
var all=document.querySelectorAll(".div1");
var div2=document.querySelector(".div2");

// div2.outerHTML="outer";            //outerHTML
// div2.append("ad")                 // append
// div2.prepend("ads")                //prepend

let newDiv=document.createElement("div");  // createElement("div")
newDiv.append("new");        
console.log(newDiv);           
 div2.append(newDiv);                       // append(the)
//  div3.style.border="1px solid red";

var div2=document.querySelector(".div2");
div2.style.border="1px solid red";

 var n=document.querySelector("a");

 n.href="https://fullstack.edu.vn/courses/javascript-co-ban";
 n.setAttribute("style","border:1px solid red");
 var b=document.querySelector("#rt");
 b.onclick(change())
function change(){
    div2.style.color="red";
}