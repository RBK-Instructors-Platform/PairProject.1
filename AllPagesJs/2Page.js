$("#img1").on('click', function() {
    $(".popup").addClass("active");
});
$(".close-btn").on('click', function() {
    $(".popup").removeclass("active");
});