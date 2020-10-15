const portfolio = {};
portfolio.slideMenuItems = [
  '.home-nav',
  '.about-nav',
  '.skills-nav',
  '.projects-nav',
  '.contact-nav',
];

portfolio.projectPreview = function () {
  $('.preview').magnificPopup({
    items: [
      {
        src: '../images/travel.jpg',
      },
      {
        src: '../images/jewel-hub.jpg',
      },
      {
        src: './images/star-wars-quizz.jpg',
      },
      {
        src: './images/live-weather-forecast.jpg',
      },
      {
        src: 'images/tech-challenge.jpg',
      },
      {
        src: './images/panda-sanctuary.jpg',
      },
      {
        src: './images/beachstays.jpg',
      },
      {
        src: './images/slot-machine.jpg',
      },
      {
        src: './images/movies-and-more.jpg',
      },
      {
        src: './images/running.ca.jpg',
      },
      {
        src: './images/reading-with-caffeine.jpg',
      },
    ],
    gallery: {
      enabled: true,
    },
    type: 'image', // this is default type
  });
};

// portfolio.projectPreview = function () {
//   $('.preview').on('click', function () {
//     console.log('test');
//     console.log(this);
//     // $('.project-content').hide();
//   });
// };

portfolio.topNavClicked = function () {
  $('.top-nav-button').on('click', function () {
    $(this).toggleClass('active');
    $('.slide-menu').toggleClass('active');
  });
};

portfolio.slideMenuCliked = function () {
  $.each(portfolio.slideMenuItems, function () {
    $(`${this} > span`).hide();

    $(`${this}`).on('click', () => {
      const array = [...portfolio.slideMenuItems];
      const index = array.indexOf(`${this}`);
      if (index > -1) {
        array.splice(index, 1);
      }
      $(`${this} > span`).show();
      $(`${this}`).css({ color: 'orange' });
      for (i = 0; i < array.length; i++) {
        $(`${array[i]} > span`).hide();
        $(`${array[i]}`).css({ color: 'white' });
      }
    });
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

portfolio.imageContainerHeight = function () {
  const imageContainerWidth = $('.image-container').width();
  $('.image-container').css({ height: imageContainerWidth * (4 / 3) + 'px' });
  $(window).resize(function () {
    const imageContainerWidth = $('.image-container').width();
    $('.image-container').css({
      height: imageContainerWidth * (4 / 3) + 'px',
    });
  });
};

portfolio.scroll = function () {
  $(window).scroll(function () {
    const windowwidth = $(window).width();
    // console.log('width', windowwidth);
    const topOfWindow = $(window).scrollTop();
    // console.log('top', topOfWindow);
    // console.log('----');
    if (windowwidth > 1230) {
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
    } else if (windowwidth > 900 && windowwidth < 1230) {
      if (topOfWindow >= 0) {
        $('.header-container h1').addClass('tracking-in-contract-bck');
      }
      if (topOfWindow > 600) {
        $('.about-me h2').addClass('slide-in-left');
      }
      if (topOfWindow > 1225) {
        $('.skills h2').addClass('slide-in-right');
      }
      if (topOfWindow > 2142) {
        $('.projects h2').addClass('slide-in-left');
      }
      if (topOfWindow > 3600) {
        $('.contact h2').addClass('slide-in-right');
      }
    } else if (windowwidth > 400 && windowwidth < 900) {
      if (topOfWindow >= 0) {
        $('.header-container h1').addClass('tracking-in-contract-bck');
      }
      if (topOfWindow > 600) {
        $('.about-me h2').addClass('slide-in-left');
      }
      if (topOfWindow > 1225) {
        $('.skills h2').addClass('slide-in-right');
      }
      if (topOfWindow > 2142) {
        $('.projects h2').addClass('slide-in-left');
      }
      if (topOfWindow > 7000) {
        $('.contact h2').addClass('slide-in-right');
      }
    }
  });
};

portfolio.init = function () {
  portfolio.topNavClicked();
  portfolio.slideMenuCliked();
  portfolio.projectContainerHeight();
  portfolio.imageContainerHeight();
  portfolio.scroll();
  portfolio.projectPreview();
};

$(document).ready(function () {
  portfolio.init();
});
