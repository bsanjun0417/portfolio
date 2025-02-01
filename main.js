
$(document).ready(function() {

    let screenWidth = window.innerWidth;
    moblie_ui(screenWidth);
    $(window).resize(function() {
        screenWidth = window.innerWidth;
        moblie_ui(screenWidth);
    });

    function moblie_ui(){
    if(screenWidth < 480){
        console.log("aaa")
        $(".box3").css("display","block")
    }
    else if(screenWidth > 479){
        $(".box3").css("display","none")
    }

    }

    $("#menu > ul > li").click(function() {

    let li_id = $(this).attr("id")
    if(li_id=="l1"){
        loc("header")
    }
    else if(li_id == "l2"){
        loc("#a1")
    }
    else if(li_id=="l3"){
        loc("#a2")
    }
    else if(li_id=="l4"){
        loc("#a3")
    }
    else{
        loc("#a4")
    }

    });

    function loc(id){
    ///이프가 l1이면 header그리고 내려서 넣어버리기
    console.log($(id).offset())
    $('html, body').animate({
                scrollTop: $(id).offset().top
        }, 1000); 
    }

    });