$("#btn0").on('click',function(){
    window.location.href='http://127.0.0.1:5500/PairProject.1/AllPagesHtml/2Page.html'
})

$("#btn0").on({
    mouseenter: function () {
        $(this).css("color", "black")
    },
    mouseleave: function () {
        $(this).css("color", "white")
    }
});

