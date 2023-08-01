
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

const fixAboutUsBackground = () => {
    if ($(".section-aboutus-inner").length > 0) {
        let offsetLeft = $(".section-aboutus-inner").offset().left;
        $(".section-aboutus-background").css("width", offsetLeft + "px");
    }
}

$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});
    
    fixAboutUsBackground();

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
        navText:['<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="10px" height="8px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)"d="M0.029,3.1000 L-0.001,4.027 L4.058,7.764 C4.226,7.917 4.451,8.001 4.690,8.001 C4.929,8.001 5.153,7.917 5.322,7.764 L5.349,7.739 C5.518,7.586 5.611,7.382 5.611,7.165 C5.611,6.948 5.518,6.745 5.349,6.592 L3.466,4.827 L9.108,4.827 C9.601,4.827 10.002,4.464 10.002,4.016 L10.002,3.981 C10.002,3.534 9.601,3.171 9.108,3.171 L3.466,3.171 L5.349,1.406 C5.518,1.253 5.611,1.050 5.611,0.833 C5.611,0.616 5.518,0.412 5.349,0.260 L5.322,0.235 C5.153,0.081 4.929,-0.003 4.690,-0.003 C4.451,-0.003 4.226,0.081 4.058,0.235 L-0.001,3.972 L0.029,3.1000 Z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="10px" height="8px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)"d="M9.971,4.000 L10.001,3.973 L5.942,0.236 C5.774,0.084 5.549,-0.001 5.310,-0.001 C5.071,-0.001 4.847,0.084 4.678,0.236 L4.651,0.261 C4.482,0.414 4.389,0.618 4.389,0.835 C4.389,1.051 4.482,1.255 4.651,1.408 L6.534,3.173 L0.892,3.173 C0.399,3.173 -0.002,3.536 -0.002,3.984 L-0.002,4.019 C-0.002,4.466 0.399,4.829 0.892,4.829 L6.534,4.829 L4.651,6.594 C4.482,6.747 4.389,6.950 4.389,7.167 C4.389,7.384 4.482,7.588 4.651,7.741 L4.678,7.765 C4.847,7.919 5.071,8.002 5.310,8.002 C5.549,8.002 5.774,7.919 5.942,7.765 L10.001,4.028 L9.971,4.000 Z"/></svg>'],
        margin:1,
        nav:true,
        dots:true
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
    fixAboutUsBackground();
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

