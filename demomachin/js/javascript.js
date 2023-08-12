
const checkVisible = (elm) => {

    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);

}

const galleryFix = () => {
    if($(window).width() > 993) {
        $('.section-block-gallery2').each(function(i, obj) {
            let number = $(this).attr("data-number");
            let container = $(".container").css("max-width");
            container = container.slice(0, -2);
            if($(window).width() > 1600) {
                container = container - 30;
            }
            console.log(container);
            $(this).find('.row > div').css('max-width',container / number + 'px');
        });
    }
}

const numbersAnimation = () => {
    
    const counters = document.querySelectorAll('.numbers-col-number');
    let speed = 500;

    counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-value');
        if (value < 100) {
            speed = 500;
        } else if (value < 200) {
            speed = 75;
        } else {
            speed = 50;
        }
        const data = +counter.innerText;
        
        const time = value / speed;
        if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 20);
            }
            else{
            counter.innerText = value;
            }
        }
        
        animate();

    });
}

$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    $('.section-block-textimage').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:["<img src='www/web/demomachin//img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-prev'>","<img src='www/web/demomachin//img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-next'>"],
        margin:1,
        nav:false,
        dots:true
    });

    $('.section-block-team-carousel').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:["<img src='www/web/demomachin//img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-prev'>","<img src='www/web/demomachin//img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-next'>"],
        margin:24,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            993:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    $('.section-block-services-carousel').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:["<img src='www/web/demomachin//img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-prev'>","<img src='www/web/demomachin//img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-next'>"],
        margin:24,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            993:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    $('.section-block-gallery').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:["<img src='www/web/demomachin//img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-prev'>","<img src='www/web/demomachin//img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-next'>"],
        margin:24,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            993:{
                items:3
            },
            1200:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });

    $(".section-block-dropdowns-header").click(function (e) { 
        e.preventDefault();
        let body = $(this).parent();
        if (body.hasClass("active")) {
            body.removeClass("active");
        }else {
            body.addClass("active");
        }
    });
    
    galleryFix();
    
});

$(window).resize(function () { 

    galleryFix();

});

var run = false;
$(window).scroll(function () { 

    if ($('.numbers-col-text').length) {
        if (checkVisible(document.querySelector('.numbers-col-text')) && !run) {
            run = true;
            setTimeout(function(){
            numbersAnimation();
            }, );
        }
    }

});

