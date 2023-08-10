

$("#Logo").on('click',function(){
    window.location.href='../AllPagesHtml/FirstPage.html'
})

$("#RBK").on('click', function(){
    window.location.href='https://www.rbktunisia.com'
})

$(document).ready(function() {
    $('.close').hover(function() {
        $(this).css('transform', 'scale(1.1)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });
});





$(".close").click(function() {
    $(".popup").css("display", "none");
});


$(document).ready(function() {
    $('#hide').hover(function() {
        $(this).css('transform', 'scale(1.1)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });
});

$("#hide").click(function() {
    var password = $("#password")[0];
    if (password.type === "password") {
        password.type = "text";
        hide.src = "..//AllPics/eye-open.png"
    } else {
        password.type = "password";
        hide.src = "..//AllPics/eye-close.png"
    }
});

$(".button").on("click",function(){
    var enteredPassword = $('#password').val();
    console.log(enteredPassword);
    if (enteredPassword === "yo") {
            window.location.href = "..//AllPagesHtml/LastPage.html"
        }else if (enteredPassword !== "yo"){
           
                alert("Wrong password")}
            
   })
 
 
 
   $("#img1").click(function() {
    $(".popup").css("display", "flex");
    $(".img1").attr("src","../AllPics/1684753598734.jpg")
    $(".Hthree1").attr("text","Dr.Haykel")

}); 

$("#img2").click(function() {
    $(".popup").css("display", "flex");
    $(".img1").attr("src","../AllPics/M (1).jpg")
    $(".Hthree1").attr("text","S.Malek")


});

$("#img3").click(function() {
    $(".popup").css("display", "flex");
    $(".img1").attr("src","../AllPics/face.jpg")
    
});


$("#img4 ").click(function() {
    $(".popup").css("display", "flex");
    $(".img1").attr("src","../AllPics/Screenshot 2023-08-09 210025.png")
    $(".Hthree1").attr("text","D.Wael")
});

 

    

