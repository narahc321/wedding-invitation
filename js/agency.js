(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  var engagementDate = new Date('2018-08-19 11:00 AM');
  var bridesReceptionDate = new Date('2018-08-28 07:00 PM');
  var marriageDate = new Date('2018-08-29 08:20 AM');
  var groomsReceptionDate = new Date('2018-09-02 12:00 AM');

  var clock = $('.engagementClock').FlipClock((engagementDate - new Date())/ 1000, {
    clockFace: 'DailyCounter',
    countdown: true,
    callbacks : {
      stop: function() {
        $('.engagementClock').html('<b>Event is Done. Please check the gallery for Images.</b>');
      }
    }
  });
  var clock = $('.bridesReceptionClock').FlipClock((bridesReceptionDate - new Date())/ 1000, {
    clockFace: 'DailyCounter',
    countdown: true,
    callbacks : {
      stop: function() {
        $('.bridesReceptionClock').html('<b>Event is Done. Please check the gallery for Images.</b>');
      }
    }
  });
  var clock = $('.marriageClock').FlipClock((marriageDate - new Date())/ 1000, {
    clockFace: 'DailyCounter',
    countdown: true,
    callbacks : {
      stop: function() {
        $('.marriageClock').html('<b>Event is Done. Please check the gallery for Images.</b>');
      }
    }
  });
  var clock = $('.groomsReceptionClock').FlipClock((groomsReceptionDate - new Date())/ 1000, {
    clockFace: 'DailyCounter',
    countdown: true,
    callbacks : {
      stop: function() {
        $('.groomsReceptionClock').html('<b>Event is Done. Please check the gallery for Images.</b>');
      }
    }
  });

})(jQuery); // End of use strict
