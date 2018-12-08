// landing page script
$("#enterButton").click(function(e) {
    $("#enterButton").animate({
        up: '250px',
        opacity: '0.5',
    });
});

//Main script

//class change functions
const classChangerBar = (tag) =>{
    tag.removeClass('animated slideOutLeft');
            tag.css("display", "block");
           tag.addClass('animated slideInLeft');
           tag.addClass('active');
}

const classChangerContent = (tag) =>{
    tag.removeClass('animated fadeOutDown');
            tag.css("display", "block");
           tag.addClass('animated slideInUp');
           tag.addClass('activeContent');
}

const activeChanger = () =>{
    $('.active').removeClass('animated slideinLeft');
        $('.active').addClass('animated slideOutLeft');
        $('.activeContent').removeClass('animated slideInUp');
        $('.activeContent').addClass('animated fadeOutDown');
}

//Index page Load
$('document').ready(() =>{
   setTimeout(() => {
    $('#aboutRow').addClass('activeRow');
    $('#aboutBar').css("display", "block");
   $('#aboutBar').addClass('animated slideInLeft');
   $('#aboutBar').addClass('active');
   $('#aboutContent').css("display", "block");
   $('#aboutContent').addClass('animated slideInUp');
   $('#aboutContent').addClass('activeContent');
},
setTimeout(createChart(),2000)
,
1000
)
})

//about display
$('#aboutButton').on('click', (event) =>{
    if(haveActiveProject){
        $('.activeProject').removeClass('animated slideInRight')
        $('.activeProject').css('display', 'none')
        $('.activeProject').removeClass('activeProject')
        haveActiveProject = false;
    }
    if(!$('#aboutBar').hasClass('active')){
        activeChanger();
        setTimeout(() =>{
            $('.activeRow').css("display", "none");
            $('.active').css("display", "none");
            $('.active').removeClass('active');
            $('#aboutRow').css("display", "flex");
            classChangerBar($('#aboutBar'));
            classChangerContent($('#aboutContent'));
            $('#aboutRow').addClass('activeRow')
        },
        1000
        )
    }
    else{
        return
    }
})

//contact display
$('#contactButton').on('click', (event) =>{
    if(haveActiveProject){
        $('.activeProject').removeClass('animated slideInRight')
        $('.activeProject').css('display', 'none')
        $('.activeProject').removeClass('activeProject')
        haveActiveProject = false;
    }
    if(!$('#contactBar').hasClass('active')){
        activeChanger();
        setTimeout(() =>{
            $('.activeRow').css("display", "none");
            $('.active').css("display", "none");
            $('.active').removeClass('active');
            $('#contactRow').css("display", "flex");
            classChangerBar($('#contactBar'));
            classChangerContent($('#contactContent'));
            $('#contactRow').addClass('activeRow')
        },
        1000
        )
    }
    else{
        return
    }
})

//portfolio display
$('#portfolioButton').on('click', (event) =>{
    if(!$('#portfolioBar').hasClass('active')){
        activeChanger();
        setTimeout(() =>{
            $('.activeRow').css("display", "none");
            $('.active').css("display", "none");
            $('.active').removeClass('active');
            $('#portfolioRow').css("display", "flex");
            classChangerBar($('#portfolioBar'));
            classChangerContent($('#portfolioContent'));
            $('#portfolioRow').addClass('activeRow')
        },
        1000
        )
    }
    else{
        return
    }
})

//button animation
$( "button" ).hover(
    function() {
      $( this ).addClass('animated pulse');
    }, function() {
     $( this ).removeClass('animated pulse');
    }
  );

  $( "#enterBox" ).hover(
    function() {
    $( this ).removeClass('zoomIn');
    $( this ).addClass('rubberBand slow');
    }, function() {
    $( this ).removeClass('rubberBand slow');
    }
  );

  $( "span" ).hover(
    function() {
        $( this ).addClass('animated pulse');
      }, function() {
       $( this ).removeClass('animated pulse');
      }
  );

  $('#enterButton').click(function(event) {
    // Remember the link href
    var href = this.href;

    // Don't follow the link
    event.preventDefault();

        $( '#enterBox' ).addClass('fadeOutRightBig slow');
        // This is the completion callback for the asynchronous thing;
        // go to the link
       setTimeout(()=>{
        window.location = href;
       },300)

});

//chart
const createChart = () =>{
    var ctx = document.getElementById("myChart").getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["HTML/CSS", "Javascript", "JQuery", "Node js"],
            datasets: [{
                data: [12, 15, 10, 8],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                backgroundColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ]
            }]
        },
        options: {
            legend: {
                display: false,
                lables: {
                    display:true,
                    fontolor:'black'
                }
                },
              scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)"
                    },
                    ticks:{
                        display: false,
                        beginAtZero:true
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                        ticks: {
                            display: true,
                            reverse: true,
                            beginAtZero: true,
                            fontColor: 'black',
                            fontSize: 18,
                        }
                }]
            },
            responsiveAnimationDuration: 5000,
            events: {
                "onHover": null
            }
        }
    });
}

//Portfolio Links
let haveActiveProject = false;
const showProject = function(projectDiv) {
    if (!haveActiveProject){
        $(projectDiv).addClass('animated slideInRight')
        $(projectDiv).css('display', 'block')
        $(projectDiv).addClass('activeProject')
        haveActiveProject = true;
    }
    if (!$(projectDiv).hasClass('activeProject')){
    $('.activeProject').removeClass('animated slideInRight')
    $('.activeProject').addClass('animated slideOutRight')
    setTimeout(
        function(){
        $('.activeProject').css('display', 'none')
        $('.activeProject').removeClass('activeProject')
        setTimeout(
            function(){
                $(projectDiv).removeClass('animated slideOutRight')
                $(projectDiv).addClass('animated slideInRight')
                $(projectDiv).css('display', 'block')
                $(projectDiv).addClass('activeProject')
            }
        ,200)
        }
    ,500)
    }
};

$('.projectLink').on('click', (e) =>{
    
var link = e.target.id;
    switch(link) {
        case 'newbie':
            showProject(newbieTutorDiv)
            break;
        case 'codeHacker':
            showProject(codeHackerDiv)
            break;
        case 'giphy':
            showProject(giphyAppDiv)
            break;
        case 'rick':
            showProject(rickDiv)
            break;  
        case 'liri':
            showProject(liriDiv)
            break;  
        default:
            return
    }
})