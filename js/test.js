$(document).ready(function () {
    $(".avatar").click(function () {
        console.log("avatar clicked")
        $(".profil-box").children().slideToggle("slow");

    });
    $(".forms").on('click', function () {
        console.log("form clicked")
        $(".menu").animate({ hight: 'toggle' });
    });


//--------------------------calendar --------------------------
    $('#datetimepicker1').datetimepicker(); 
    $(".task-form").on("submit", function (e) {
        e.preventDefault()
        if (($(".title").val() == "") && ($(".datetimepicker-input").val() == "") && ($(".people").val() == "")) {
            console.log("wrong submit")
        }
        else {
            console.log("successful submit")
            $(".time-line").append("<li class='task shadow bg-white rounded m-2 p-2'><h5 class='task-title'>" + $(".title").val() + "</h5><h6 class='date-time'>" + $(".datetimepicker-input").val() + "</h6></li>")
            $(".time-line").show();
        }


    })

//-------------------------sign up -----------------------------------
$(".signUp-link").click(function () {
    console.log("signUp-link clicked")
    $(".login-form").hide()
    $(".registration-form").animate({ hight: 'toggle' });
});
//-------------------------login -----------------------------------
$(".login-link").click(function () {
    console.log("signUp-link clicked")
    $(".registration-form").hide()
    $(".login-form").animate({ hight: 'toggle' });
});    

});