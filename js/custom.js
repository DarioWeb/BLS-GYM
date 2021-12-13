var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    grabCursor: true,
    effect: "creative",
    loop:true,
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
        },
        next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
        },
    },
});


let year = new Date().getFullYear();
document.getElementById("year").innerText = year;

$(document).ready(function(){

    $(".hamburger").click(()=>{
       $("header nav").css("width","240px");
       $("header nav").css("overflow","auto");
    });
    $(".close_menu").click(()=>{
        $("header nav").css("overflow","hidden");
        $("header nav").css("width","0");
    });
    $(".close_menu2").click(()=>{
        $("header nav").css("overflow","hidden");
        $("header nav").css("width","0");
    });

    $(".scroll_to_top").click(()=>{
        $("html, body").animate({scrollTop:0})
    })

    $(".logo").click(()=>{
       location.reload();
    })
});


function validate_form(){
    let error = "";
    let name = $("#name").val();
    let email = $("#email").val();
    let subject = $("#subject").val();
    let msg = $("#msg").val();

    if (name == "" || email == "" || subject == "" || msg == ""){
        $(".error").html("Pleas fill in all fields!");
        setTimeout(()=>{
            $(".error").html("");

        },5500);
        return false;
    }else{
        return true;
    }
}

$(window).scroll(()=>{

    if ($(this).scrollTop() > 200){
        $(".scroll_to_top").fadeIn();
    }else{
        $(".scroll_to_top").fadeOut();
    }

})
