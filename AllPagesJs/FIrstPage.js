

$("#btn0").on({
    mouseenter: function () {
        $(this).css("color", "black")
    },
    mouseleave: function () {
        $(this).css("color", "white")
    }
});

$("#btn0").on('click',function(){
    window.location.href='../AllPagesHtml/2page.html'
})

$(document).ready(function() {
    $('#btn0').hover(function() {
        $(this).css('transform', 'scale(0.99)');
    }, function() {
        $(this).css('transform', 'scale(1.1)');
    });
});


