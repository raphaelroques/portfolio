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

portfolio.init = function () {
  portfolio.topNavClicked();
  portfolio.slideMenuCliked();
  portfolio.projectContainerHeight();
};

$(document).ready(function () {
  portfolio.init();
});
