

var hasFocus = $('#inputSearch').is(':focus');

$('.navbar__search-button').click(function () {

    $('.navbar__search').toggleClass('navbar__search--open');
})

$('.coveo-accessible-button').click(function () {

    let searchUrl = 'search.html#q='
    let searchValue = document.getElementById('inputSearch').value
    let searchHack = encodeURIComponent(searchValue)
    window.location.assign(searchUrl + searchHack, '_self')
})

$('#inputSearch').keypress(function (event) {

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        let searchUrl = 'search.html#q='
        let searchValue = document.getElementById('inputSearch').value
        let searchHack = encodeURIComponent(searchValue)
        window.location.assign(searchUrl + searchHack, '_self')
    }

});


// $(function () {
//     var btn = $('.nav-trigger-warning');
//     var btnPosTop = btn.offset().top - 450;
//     var win = $(window);
//     win.scroll(function (e) {
//         var scrollTop = win.scrollTop();
//         if (scrollTop >= btnPosTop) {
//             //we've reached the button
//             $('.updated-header').addClass('activated');
//         } else if (scrollTop <= btnPosTop) {
//             //if we scroll back up past the button's original position, and the button had previously been changed to its fixed position, we change it back
//             $('.updated-header').removeClass('activated');
//         }
//     });
// });
$(document).ready(function () {
    const playerContainers = document.querySelectorAll(".hoverEffects");
    playerContainers.forEach(container => {
        container.addEventListener("mouseover", () => {
            const player = container.querySelector("lottie-player");
            player.setDirection(1);
            player.play();
        });

        container.addEventListener("mouseleave", () => {
            const player = container.querySelector("lottie-player");
            player.setDirection(-1);
            player.play();
        });
    });
});

function triggerNetflixContent(myClass) {

    let elementContent = $(myClass)
    let splides



    if (elementContent.length) {
        let n = myClass.includes("amplified_slideshow")
        if (n) {
            splides = new Splide(myClass, {
                type: 'loop',
                keyboard: true,
                perPage: 1,


                start: 1,

                clones: 10,
                fixedWidth: '500px',
                focus: 'center',
                breakpoints: {
                    640: {
                        fixedWidth: '350px',
                    }
                },


            }).mount();


            splides

        }
    }

}

function handleLoadMore(per, targ) {
    var per_page = parseInt(per);

    event.preventDefault();

    let targetValue = targ
    let limits = jQuery('.' + targetValue + ' ' + '>.related-item:visible').length

    console.log("this is the limit", limits)
    limits += per_page;
    jQuery('.' + targetValue + ' ' + '>.related-item:lt(' + (limits) + ')').show();
    if (jQuery('.' + targetValue + ' ' + '>.related-item').length <= limits) {
        jQuery(this).hide();
        jQuery('.' + targetValue + '-button').hide();
    }
}

function loadSplide() {
    $('.slideshow-content').each(function (index) {
        let indie = index + 1
        let vari = "slideshow" + indie
        console.log("here is the vari", vari)
        new Splide('.' + vari, {
            type: 'loop',
            keyboard: true,


            pagination: true
        }).mount();
    });



}

document.addEventListener('DOMContentLoaded', function () {
    let slideShow = $('.slideshow-content').is(":visible");
    if (slideShow) {
        loadSplide()
    }

}, false);

function updateBackground() {
    $(".slider-background-image").removeClass('active')
    $(".videoBG").removeClass('active')
    $('.test-slide-in-bg').hide()
    $('.test-slide-in-bg-hack').hide();
    $('.test-slide-in-bg').removeClass('active');
    $('.test-slide-in-bg-hack').removeClass('active');
    if ($(".slider-part1").hasClass("slick-active")) {





        $(".slider-background-image").removeClass('slidey1 slidey2 slidey3 slidey4')
        $(".slider-background-image").addClass('slidey1')
        $(".videoBG").attr("src", 'https://477837.fs1.hubspotusercontent-na1.net/hubfs/477837/BMcD_Web_Assets/Home/2024-09/We-Build-Colorado-1128795.mp4');
        $(".videoBG").attr("alt", 'Building Your Infrastructure Playbook');
        $(".videoBG").attr("poster", "../img/We-Build-Colorado-Video-Still.jpg");
        $('.test-slide-in-bg.slidey1').show()
        $('.test-slide-in-bg-hack.slidey1').show()

        setTimeout(function () {
            $('.test-slide-in-bg-hack.slidey1').addClass('active')
            $('.test-slide-in-bg.slidey1').addClass('active')


        }, 300);



        setTimeout(function () {

            $(".videoBG").addClass('active')
            $(".slider-background-image").addClass('active')

        }, 1000);


    } else if ($(".slider-part2").hasClass("slick-active")) {





        $(".slider-background-image").removeClass('slidey1 slidey2 slidey3 slidey4')
        $(".slider-background-image").addClass('slidey2')
        $(".videoBG").attr("src", 'https://477837.fs1.hubspotusercontent-na1.net/hubfs/477837/BMcD_Web_Assets/Home/2024-10/842602_ConstructionMarketUpdateVideoBroll_KCM_CON_1080-HomepageFeature_v3.mp4');
        $(".videoBG").attr("alt", 'Construction Market Update');
        $(".videoBG").attr("poster", '../img/842602_ConstructionMarketUpdateVideoBroll_KCM_CON_1080-HomepageFeature_v3-still.png');
        $('.test-slide-in-bg.slidey2').show()
        $('.test-slide-in-bg-hack.slidey2').show()

        setTimeout(function () {
            $('.test-slide-in-bg-hack.slidey2').addClass('active')
            $('.test-slide-in-bg.slidey2').addClass('active')


        }, 300);

        setTimeout(function () {
            $(".slider-background-image").addClass('active')
            $(".videoBG").addClass('active')
        }, 1000);

    } else if ($(".slider-part3").hasClass("slick-active")) {



        $(".slider-background-image").removeClass('slidey1 slidey2 slidey3 slidey4')
        $(".slider-background-image").addClass('slidey3')
        $(".videoBG").attr("src", 'https://477837.fs1.hubspotusercontent-na1.net/hubfs/477837/BMcD_Web_Assets/Home/2024-10/947043_ASR2024ArticlesDesign_ANF_KCM-HomepageFeature.mp4');
        $(".videoBG").attr("alt", 'Aviation Evolution: Modern Airport Strategies');
        $(".videoBG").attr("poster", '../img/947043_ASR2024ArticlesDesign_ANF_KCM-HomepageFeature-Still.jpg');
        $('.test-slide-in-bg.slidey3').show()
        $('.test-slide-in-bg-hack.slidey3').show()

        setTimeout(function () {
            $('.test-slide-in-bg-hack.slidey3').addClass('active')
            $('.test-slide-in-bg.slidey3').addClass('active')


        }, 300);


        setTimeout(function () {
            $(".slider-background-image").addClass('active')
            $(".videoBG").addClass('active')
        }, 1000);

    } else if ($(".slider-part4").hasClass("slick-active")) {
        $('.test-slide-in-bg.slidey4').show()
        $('.test-slide-in-bg-hack.slidey4').show()

        $(".slider-background-image").removeClass('slidey1 slidey2 slidey3 slidey4')
        $(".slider-background-image").addClass('slidey4')
        $(".videoBG").attr("src", 'https://477837.fs1.hubspotusercontent-na1.net/hubfs/477837/BMcD_Web_Assets/Home/2024-10/1157146_WichitaNorthwestFacilityVideo_WTR_KCM_V1-vB.mp4');
        $(".videoBG").attr("alt", 'Saving Millions With Progressive Design-Build');
        $(".videoBG").attr("poster", '../img/1157146_WichitaNorthwestFacilityVideo_WTR_KCM_V1-vB-still.png');
        setTimeout(function () {

            $('.test-slide-in-bg.slidey4').addClass('active')
            $('.test-slide-in-bg-hack.slidey4').addClass('active')

        }, 300);

        setTimeout(function () {
            $(".slider-background-image").addClass('active')
        }, 1000);

    }





}
updateBackground();


$(".slider-homepage-hero").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 800,
    touchThreshold: 1000,
    slidesToShow: 1,
    draggable: false,

    slidesToScroll: 1
});



//ticking machine
var percentTime;
var tick;
var time = 1;
var progressBarIndex = 0;

$('.progressBarContainer .progressBar').each(function (index) {
    var progress = "<div className='inProgress inProgress" + index + "'></div>";
    $(this).html(progress);

});

function startProgressbar() {
    resetProgressbar();
    percentTime = 0;


    tick = setInterval(interval, 10);
    //        $(".description-area").removeAttr("data-aos")
    updateBackground()
}

function interval() {
    if (($('.slider-homepage-hero .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
        progressBarIndex = $('.slider-homepage-hero .slick-track div[aria-hidden="false"]').data("slickIndex");

        //alert(progressBarIndex);
        startProgressbar();
    } else {

        percentTime += 1 / (time + 5);
        $('.inProgress').parent().parent().removeClass("active-text"); // updated by Sagar
        $('.inProgress' + progressBarIndex).parent().parent().addClass("active-text"); // updated by Sagar

        $('.inProgress' + progressBarIndex).css({
            width: percentTime + "%"
        });
        if (percentTime >= 100) {
            if (progressBarIndex == 3) {
                $('.single-item').slick('slickNext');
                progressBarIndex = 0;
            }
            if (progressBarIndex < 3) {
                $('.single-item').slick('slickNext');
                progressBarIndex++;
            }
            startProgressbar();
        }
    }

}

function resetProgressbar() {
    $('.inProgress').css({
        width: 0 + '%'
    });
    clearInterval(tick);
    updateBackground()
}
startProgressbar();
// End ticking machine

$('.progressBarContainer div').click(function () {
    clearInterval(tick);
    var goToThisIndex = $(this).find("span").data("slickIndex");
    $('.single-item').slick('slickGoTo', goToThisIndex, false);
    //        alert("test")

    startProgressbar();

});

// popup video code
$(".slider_btn_area .buttonPlay").on("click", function (e) {
    e.preventDefault();
    clearInterval(tick);

    let videoClass = '.' + $(this).data('video')
    $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").fadeIn();

    $('.video-iframe').hide()
    $(videoClass).show()

    $("#video-popup-iframe").on("load", function () {
        $("#video-popup-container").show();
    });



    console.log('function triggering')
});

$("#video-popup-close, #video-popup-overlay").on("click", function (e) {
    startProgressbar()
    $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
    $('.video-iframe').hide()

});


