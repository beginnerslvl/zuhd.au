var education_slider = $("#education_slider");
var blogs_slide = $("#blogs-slide");
var leader_slide = $("#leader_slide");
education_slider.owlCarousel({
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
blogs_slide.owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    // center: true,
    autoWidth: true,
    touchDrag: true,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            autoplay: true,
            autoplayTimeout: 7000,
            autoplayHoverPause: true,
            loop: true,
        },
        600: {
            items: 2,
            autoplay: true,
            autoplayTimeout: 7000,
            autoplayHoverPause: true,
            loop: true,
        },
        1000: {
            items: 4

        }
    }
});
leader_slide.owlCarousel({
    loop: true,
    margin: 30,
    autoWidth: true,
    nav: false,
    dots: true,
    // center: true,
    touchDrag: true,
    mouseDrag: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            autoWidth: false
        },
        600: {
            items: 2,
            autoWidth: false
        },
        1000: {
            items: 4,
            dots: true
        }
    }
});
$('.community .item').click(function () {
    var clickid = ($(this).attr('id')) + '-content';
    $('.community .item-content').removeClass(' d-flex');
    $('#' + clickid).addClass(' d-flex');
});

$(".course-bullet .q").click(function(){
    $(this).next().toggle();
});