const portfolio = {};

portfolio.topNavClicked = function () {
  $('.top-nav-button').on('click', function () {
    $(this).toggleClass('active');
    $('.slide-menu').toggleClass('active');
  });
};

portfolio.slideMenuCliked = function () {
  $('.home-nav > span').hide();
  $('.home-nav').on('click', function () {
    $('.home-nav > span').show();
    $('.home-nav').css({ color: 'orange' });

    $('.about-nav > span').hide();
    $('.about-nav').css({ color: 'inherit' });
    $('.skills-nav > span').hide();
    $('.skills-nav').css({ color: 'white' });
    $('.projects-nav > span').hide();
    $('.projects-nav').css({ color: 'white' });
    $('.contact-nav > span').hide();
    $('.contact-nav').css({ color: 'white' });
  });
  $('.about-nav > span').hide();
  $('.about-nav').on('click', function () {
    $('.about-nav > span').show();
    $('.about-nav').css({ color: 'orange' });

    $('.home-nav > span').hide();
    $('.home-nav').css({ color: 'white' });
    $('.skills-nav > span').hide();
    $('.skills-nav').css({ color: 'white' });
    $('.projects-nav > span').hide();
    $('.projects-nav').css({ color: 'white' });
    $('.contact-nav > span').hide();
    $('.contact-nav').css({ color: 'white' });
  });
  $('.skills-nav > span').hide();
  $('.skills-nav').on('click', function () {
    $('.skills-nav > span').show();
    $('.skills-nav').css({ color: 'orange' });

    $('.home-nav > span').hide();
    $('.home-nav').css({ color: 'white' });
    $('.about-nav > span').hide();
    $('.about-nav').css({ color: 'white' });
    $('.projects-nav > span').hide();
    $('.projects-nav').css({ color: 'white' });
    $('.contact-nav > span').hide();
    $('.contact-nav').css({ color: 'white' });
  });
  $('.projects-nav > span').hide();
  $('.projects-nav').on('click', function () {
    $('.projects-nav > span').show();
    $('.projects-nav').css({ color: 'orange' });

    $('.home-nav > span').hide();
    $('.home-nav').css({ color: 'white' });
    $('.about-nav > span').hide();
    $('.about-nav').css({ color: 'white' });
    $('.skills-nav > span').hide();
    $('.skills-nav').css({ color: 'white' });
    $('.contact-nav > span').hide();
    $('.contact-nav').css({ color: 'white' });
  });
  $('.contact-nav > span').hide();
  $('.contact-nav').on('click', function () {
    $('.contact-nav > span').show();
    $('.contact-nav').css({ color: 'orange' });

    $('.home-nav > span').hide();
    $('.home-nav').css({ color: 'white' });
    $('.about-nav > span').hide();
    $('.about-nav').css({ color: 'white' });
    $('.skills-nav > span').hide();
    $('.skills-nav').css({ color: 'white' });
    $('.projects-nav > span').hide();
    $('.projects-nav').css({ color: 'white' });
  });
};

portfolio.projectContainerHeight = function () {
  const projectContainerWidth = $('.project-content').width();
  $('.project-content').css({ height: projectContainerWidth * (4 / 3) + 'px' });
  $(window).resize(function () {
    const projectContainerWidth = $('.project-content').width();
    $('.project-content').css({
      height: projectContainerWidth * (4 / 3) + 'px',
    });
  });
};

// portfolio.scroll = function () {
//   $(window).scroll(function () {
//     $('.animation-test').each(function () {
//       var imagePos = $(this).offset().top;
//       var imageHeight = $(this).height();
//       var topOfWindow = $(window).scrollTop();

//       if (
//         imagePos < topOfWindow + imageHeight &&
//         imagePos + imageHeight > topOfWindow
//       ) {
//         $(this).addClass('slideRight');
//       } else {
//         $(this).removeClass('slideRight');
//       }
//     });
//   });
// };

portfolio.scroll = function () {
  $(window).scroll(function () {
    const topOfWindow = $(window).scrollTop();
    console.log(topOfWindow);
    if (topOfWindow >= 0) {
      $('.header-container h1').addClass('tracking-in-contract-bck');
    }
    if (topOfWindow > 300) {
      $('.about-me h2').addClass('slide-in-left');
    }
    if (topOfWindow > 1000) {
      $('.skills h2').addClass('slide-in-right');
    }
    if (topOfWindow > 1830) {
      $('.projects h2').addClass('slide-in-left');
    }
    if (topOfWindow > 2850) {
      $('.contact h2').addClass('slide-in-right');
    }
  });
};

portfolio.init = function () {
  portfolio.topNavClicked();
  portfolio.slideMenuCliked();
  portfolio.projectContainerHeight();
  portfolio.scroll();
};

$(document).ready(function () {
  portfolio.init();
});
