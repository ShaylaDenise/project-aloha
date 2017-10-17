// Calls the function to display alert upon submitting email within Sign Up Form
$( document ).ready(function() {
$('.subscriptionForm').on('submit', function(event) {
   event.preventDefault();
   if ( $('#email').val() === '' ) {
      alert('Please enter your email address.');
   } else {
      alert('Thank you for your submission!');
   }
});
});

// Justifies the number of min and max slides
$(document).ready(function(){
  var width = $(window).width();
  var numOfSlides;
  if (width <= 600) { numOfSlides = 1; }
  else if (width <= 1240) { numOfSlides = 2; }
  else {numOfSlides = 4; }

  $('.bxslider').bxSlider({
  minSlides: 1,
  maxSlides: numOfSlides,
  slideWidth: 300,
  slideMargin: 10
});
});

// Adjusts the number of slides in bxSlider when window is resized for tablet and laptop/desktop
$(document).ready(function(){
  $(window).on('resize', function(){
        var win = $(this);
        var width = $(window).width();
        var numOfSlides;
        if (width <= 600) { numOfSlides = 1; }
        else if (width <= 1024) { numOfSlides = 2; }
        else if (width >1025){numOfSlides = 4; }

        $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: numOfSlides,
        slideWidth: 300,
        slideMargin: 10
      });
      });
});

//Applying smooth scroll effect
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
