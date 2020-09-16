$(function() {

    $('.myStory').waypoint(function(direction) {
        
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '55px;'
    });


// ------- SCROLL ANIMATION ------
    $('.scroll-to-myStory').click(function() {
        $('html, body').animate({scrollTop: $('.myStory').offset().top}, 1000);
    });

    $('.scroll-to-resume').click(function() {
        $('html, body').animate({scrollTop: $('.resume').offset().top}, 1000);
    });

    $('.scroll-to-skills').click(function() {
        $('html, body').animate({scrollTop: $('.skill').offset().top}, 1000);
    });

    $('.scroll-to-projects').click(function() {
        $('html, body').animate({scrollTop: $('.projects').offset().top}, 1000);
    });

    $('.scroll-to-contact').click(function() {
        $('html, body').animate({scrollTop: $('.contact').offset().top}, 1000);
    });



    $('.myStory-animation').waypoint(function(direction) {
		myfunc_slideInUp(this.element, direction); 
    },{offset:'100%'});
    
    $('.resume-animation').waypoint(function(direction) {
		myfunc_slideInUp(this.element, direction); 
    },{offset:'80%'});
    
    $('.skills-animation').waypoint(function(direction) {
		myfunc_slideInUp(this.element, direction); 
    },{offset:'100%'});
    
    
    
    function myfunc_slideInUp(target, direction){
		if(direction === "down"){
			$(target).removeClass("hidden");
			$(target).addClass("animated slideInUp");
			setTimeout(function(){
    			$(target).removeClass("animated slideInUp");
    		}, 1000);
		}
	}




    // ------- MOBILE NAVIGATION ------- 
    $('.mobile-nav-icon').click(function() {
        var nav = $('.main-nav');
        var icon = $('.mobile-nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        } 

    });


    $(window).on('resize', function() {
        var icon = $('.mobile-nav-icon i');
        if ($(this).width() >= 767) {
        $('.main-nav').css({
            'display' : 'inline-block'
        });
        } else {
        $('.main-nav').css({
            'display': 'none'
        });
        if(icon.hasClass('fa-times')) {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }

        }
    });





    showEmail = () => {
        $('#email-address').css({'opacity': '1'});
    }



});