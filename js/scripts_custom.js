// SLICK SLIDER
$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true
});


// Carousel owls
$('.sliders').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
    ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
        scrollTop: target.offset().top
        }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
        });
    }
    }
});


// scrollng up
jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 50) {
        jQuery(".scroll-top").addClass("scrolling");
    } else {
        jQuery(".scroll-top").removeClass("scrolling");
    }
});


// bootstrap select
$('.selectpicker').selectpicker({
    style: 'btn-info',
    size: 4
  });


  $('.default-demo').slickLightbox();