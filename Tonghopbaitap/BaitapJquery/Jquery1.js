
function getclick(a) {
    console.log($('.btn').parentElement);
   $('.btn').attr('style','border:1px solid yellow');
    $('p').html("tuan")
    $('p').append(" la toi")
}
let count = 0;
$('.event').on('click', function () {
    let lu = $("input").val();
    let b = $("body");
    console.log(this);
     $(this.parentElement).attr("style","border:1px solid yellow");
    let p = `<div><h1>${count++}</h1>
  
    <button class='delete'>Delete</button></div>
    `;
    // b.prepend(p);
    b.append(p);
    $('button').eq($('button').length - 1).on('click', function () {
    
    $('button').eq($('button').length - 1).attr("style",'color:red');
    });

}); 


console.log("hello");
