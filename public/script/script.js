// landing page script
$("#enterButton").click(function(e) {
    $("#enterButton").animate({
        up: '250px',
        opacity: '0.5',
    });
});

//Main script
const classChangerBar = (tag) =>{
    tag.removeClass('animated slideOutLeft');
            tag.css("display", "block");
           tag.addClass('animated slideInLeft');
           tag.addClass('active');
}

const classChangerContent = (tag) =>{
    tag.removeClass('animated slideOutLeft');
            tag.css("display", "block");
           tag.addClass('animated slideInRight');
           tag.addClass('active');
}

$('document').ready(() =>{
   setTimeout(() => {
    $('#aboutBar').css("display", "block");
   $('#aboutBar').addClass('animated slideInLeft');
   $('#aboutBar').addClass('active');
   },1000)
})

$('#aboutButton').on('click', (event) =>{
    if(!$('#aboutBar').hasClass('active')){
        $('.active').removeClass('animated slideinLeft');
        $('.active').addClass('animated slideOutLeft');
        setTimeout(() =>{
            $('.active').css("display", "none");
            $('.active').removeClass('active');
            classChangerBar($('#aboutBar'));
            classChangerContent($('#aboutContent'));
        },
        1000
        )
    }
    else{
        return
    }
})

$('#contactButton').on('click', (event) =>{
    if(!$('#contactBar').hasClass('active')){
        $('.active').removeClass('animated slideinLeft');
        $('.active').addClass('animated slideOutLeft');
        setTimeout(() =>{
            $('.active').css("display", "none");
            $('.active').removeClass('active');
            classChangerBar($('#contactBar'));
            classChangerContent($('#contactContent'));
        },
        1000
        )
    }
    else{
        return
    }
})

$('#portfolioButton').on('click', (event) =>{
    if(!$('#portfolioBar').hasClass('active')){
        $('.active').removeClass('animated slideinLeft');
        $('.active').addClass('animated slideOutLeft');
        setTimeout(() =>{
            $('.active').css("display", "none");
            $('.active').removeClass('active');
            classChangerBar($('#portfolioBar'));
            classChangerContent($('#portfolioContent'));
        },
        1000
        )
    }
    else{
        return
    }
})