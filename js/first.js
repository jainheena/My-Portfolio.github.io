$(document).ready(function(){
    $('#home').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#home').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).screenTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();

        $('html,body').animate({
            screenTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear');
    });
});

