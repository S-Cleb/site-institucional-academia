$(function(){

    $('.mosaico .container .mosaico-wraper').slick({
        slidesToShow:5,
        centerMode: false,
        arrows:false,
        responsive: [
            {
                breakpoint:768,
                setting:{
                    dots: true,
                    infinit: true,
                    slidesToShow:2,
                    arrows:false,
                }
            }, 
            {
                breakpoint:580,
                setting:{
                    slidesToShow:1,
                    arrows: false,
                    centerMode: true
                }
            }
        ]

    });






})