const portfolio = {};
// portfolio.topNavButtonClicked = false;

portfolio.topNavClicked = () => {
  $(window).on('resize', function (e) {
    let windowWidth = $(window).width();
    if (windowWidth < 900) {
      $('.top-nav-button').on('click', function () {
        $('.slide-menu').toggle();
      });
    } else if (windowWidth >= 900) {
      $('.slide-menu').show();
    }
  });
};

portfolio.init = function () {
  portfolio.topNavClicked();
};

$(document).ready(function () {
  portfolio.init();
});
