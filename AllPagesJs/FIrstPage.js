
$("#btn0").on({
    mouseenter: function () {
        $(this).css("color", "black")
    },
    mouseleave: function () {
        $(this).css("color", "white")
    }
});

$("#btn0").on('click',function(){
    window.location.href='../AllPagesHtml/2Page.html'
})