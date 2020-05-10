$(document).ready(function(){
    $(window).scroll(function(event){
            var scroll=$(this).scrollTop();
            var wight=$(this).outerWidth();
            var height=$('.content').outerHeight();
            var height_paralax=$('.parallax').outerHeight();
            var percent = scroll/height*100;
            var percent_height_parallax = scroll/height_paralax*100;
            var opacity = 1-1/100*percent_height_parallax;

            var z_1=1+(wight/10000*percent_height_parallax);
        $('.parallax_fog').css('transform','scale('+z_1+')');
        $('.parallax_fog').css('opacity', opacity);

        var z_2 = 1 + (wight/5000000*percent);
        $('.parallax_montain_1').css('transform', 'scale('+z_2+')');

        var hr = wight/2000*percent_height_parallax;
        var z_3 = 1+(wight*0.000005*percent_height_parallax);
        $('.parallax_montain_2').css('transform','translate3d('+hr+'px,0,0) scale('+z_3+')');
        
        var hr_2 = wight/1500*percent_height_parallax;
        var z_4 = 1+(wight*0.00001*percent_height_parallax);
        $('.parallax_montain_3').css('transform','translate3d('+-hr_2+'px,0,0) scale('+z_4+')');

        var z_5 = 1 + (wight/5000000*percent);
        $('.parallax_city').css('transform', 'scale('+z_2+')');

    });
}); 