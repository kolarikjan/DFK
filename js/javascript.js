
const checkVisible = (elm) => {

    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);

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

const containerRight = () => {
    if ($('.container-no-right').length ) {
        let left = $('.header .container').offset().left;
        $('.container-no-right').css("max-width", "calc(100% - "+left+"px)");
    }
}

$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    window.onclick = e => {
        if (!e.target.closest(".theme-dropdown")) {
            $(".theme-dropdown").removeClass("active");
        }
    }

    $(".theme-dropdown-header").click(function (e) { 
        e.preventDefault();
        let parent = $(this).parent();
        if (parent.hasClass("active")) {
            parent.removeClass("active");
        } else {
            parent.addClass("active");
        }
    });

    $(".popup-activator").click(function (e) {

        $(this).closest(".popup-custom").children(".popup-content").css("display", "block");

    });

    $(".popup-content--close").click(function (e) { 

        e.preventDefault();
        
        $(this).closest(".popup-content").css("display", "none");
        
    });

    $('.banner-homepage-owl').owlCarousel({
        items:1,
        loop:true,
        rewind:true,
        navText:['<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="14px" height="9px"><path fill-rule="evenodd"  fill="rgb(16, 54, 131)"d="M0.247,4.200 L0.226,4.224 L4.041,8.202 C4.162,8.330 4.322,8.401 4.492,8.401 C4.662,8.401 4.822,8.330 4.942,8.202 L4.961,8.181 C5.082,8.052 5.148,7.882 5.148,7.700 C5.148,7.519 5.082,7.348 4.961,7.219 L2.695,4.894 L13.281,4.894 C13.632,4.894 13.918,4.590 13.918,4.215 L13.918,4.186 C13.918,3.811 13.632,3.506 13.281,3.506 L2.695,3.506 L4.961,1.181 C5.082,1.053 5.148,0.882 5.148,0.700 C5.148,0.519 5.082,0.348 4.961,0.220 L4.942,0.199 C4.822,0.070 4.662,0.001 4.492,0.001 C4.321,0.001 4.162,0.070 4.041,0.199 L0.225,4.178 L0.247,4.200 Z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="14px" height="9px"><path fill-rule="evenodd"  fill="rgb(16, 54, 131)"d="M0.247,4.200 L0.226,4.224 L4.041,8.202 C4.162,8.330 4.322,8.401 4.492,8.401 C4.662,8.401 4.822,8.330 4.942,8.202 L4.961,8.181 C5.082,8.052 5.148,7.882 5.148,7.700 C5.148,7.519 5.082,7.348 4.961,7.219 L2.695,4.894 L13.281,4.894 C13.632,4.894 13.918,4.590 13.918,4.215 L13.918,4.186 C13.918,3.811 13.632,3.506 13.281,3.506 L2.695,3.506 L4.961,1.181 C5.082,1.053 5.148,0.882 5.148,0.700 C5.148,0.519 5.082,0.348 4.961,0.220 L4.942,0.199 C4.822,0.070 4.662,0.001 4.492,0.001 C4.321,0.001 4.162,0.070 4.041,0.199 L0.225,4.178 L0.247,4.200 Z"/></svg>'],
        margin:1,
        nav:true,
        dots:false
    });

    $('.theme-services-owl').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:['<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="14px" height="9px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)"d="M13.753,4.800 L13.774,4.776 L9.959,0.798 C9.838,0.671 9.678,0.599 9.508,0.599 C9.338,0.599 9.178,0.671 9.058,0.798 L9.039,0.819 C8.918,0.948 8.852,1.118 8.852,1.300 C8.852,1.482 8.918,1.652 9.039,1.781 L11.305,4.105 L0.719,4.105 C0.368,4.105 0.082,4.410 0.082,4.786 L0.082,4.815 C0.082,5.189 0.368,5.494 0.719,5.494 L11.305,5.494 L9.039,7.819 C8.918,7.948 8.852,8.118 8.852,8.300 C8.852,8.481 8.918,8.652 9.039,8.780 L9.058,8.801 C9.178,8.930 9.338,8.1000 9.508,8.1000 C9.679,8.1000 9.838,8.930 9.959,8.801 L13.775,4.823 L13.753,4.800 Z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="14px" height="9px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)"d="M13.753,4.800 L13.774,4.776 L9.959,0.798 C9.838,0.671 9.678,0.599 9.508,0.599 C9.338,0.599 9.178,0.671 9.058,0.798 L9.039,0.819 C8.918,0.948 8.852,1.118 8.852,1.300 C8.852,1.482 8.918,1.652 9.039,1.781 L11.305,4.105 L0.719,4.105 C0.368,4.105 0.082,4.410 0.082,4.786 L0.082,4.815 C0.082,5.189 0.368,5.494 0.719,5.494 L11.305,5.494 L9.039,7.819 C8.918,7.948 8.852,8.118 8.852,8.300 C8.852,8.481 8.918,8.652 9.039,8.780 L9.058,8.801 C9.178,8.930 9.338,8.1000 9.508,8.1000 C9.679,8.1000 9.838,8.930 9.959,8.801 L13.775,4.823 L13.753,4.800 Z"/></svg>'],
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });

    $('.theme-gallery-owl').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:['','<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="14px" height="9px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)"d="M13.753,4.800 L13.774,4.776 L9.959,0.798 C9.838,0.671 9.678,0.599 9.508,0.599 C9.338,0.599 9.178,0.671 9.058,0.798 L9.039,0.819 C8.918,0.948 8.852,1.118 8.852,1.300 C8.852,1.482 8.918,1.652 9.039,1.781 L11.305,4.105 L0.719,4.105 C0.368,4.105 0.082,4.410 0.082,4.786 L0.082,4.815 C0.082,5.189 0.368,5.494 0.719,5.494 L11.305,5.494 L9.039,7.819 C8.918,7.948 8.852,8.118 8.852,8.300 C8.852,8.481 8.918,8.652 9.039,8.780 L9.058,8.801 C9.178,8.930 9.338,8.1000 9.508,8.1000 C9.679,8.1000 9.838,8.930 9.959,8.801 L13.775,4.823 L13.753,4.800 Z"/></svg>'],
        margin:30,
        nav:true,
        stagePadding: 30,
        dots:false,
        responsive:{
            0:{
                items:1,
                stagePadding: 60,
                margin:10,
            },
            768:{
                items:2,
                stagePadding: 30,
                margin:30,
            },
            993:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });



    document.querySelector('.navbar-toggler').addEventListener('click', function () {

        document.querySelector('.animated-icon').classList.toggle('open');

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
    
    $(".header-message-close").click(function (e) { 
        e.preventDefault();
        $(".header-message").addClass("d-none");
    });

    containerRight();

    if(localStorage.getItem('header-message') != null)
    {
        $(".header-message").addClass("d-none");
    }

    $(".header-message-close").click(function (e) { 

        e.preventDefault();
        $(".header-message").addClass("d-none");

        localStorage.setItem('header-message', false);

        var now = new Date().getTime();
        var setupTime = localStorage.getItem('header-message-time');

        if (setupTime == null) {
            localStorage.setItem('header-message-time', now)
        } else {
            if(now-setupTime > 72*60*60*1000) {
                localStorage.clear()
                localStorage.setItem('header-message-time', now);
            }
        }

    });
    
    if($(window).width() < 768) {
        $(".nav-item.dropdown-hover > a").click(function (e) { 
            e.preventDefault();
        });
    }

});
$(window).resize(function () { 
    containerRight();
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

