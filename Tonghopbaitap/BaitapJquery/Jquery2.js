$(function () {
    $(".sortable").sortable({
        revert: true
    });
    $(".draggable").draggable({
        connectToSortable: ".sortable",
        // helper: "clone",
        revert: "invalid"
    });
    $(".sortable").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });
    $("ul, li").disableSelection();
    let listSpe;
    $('li').dblclick(function(){
    //    $('#id01').atrr('style','display:block');
       document.getElementById('id01').style.display='block';
       $('.update').val($(this).html());
       listSpe=this;
    })
    $('.confirm').click(function(){
       $(listSpe).html($('.update').val());
       document.getElementById('id01').style.display='none';
    })
    $('.sortable button').click(function(){
        this.parentElement.remove();
        // this.parentElement.atrr('style','background-color:red');
    })
});
