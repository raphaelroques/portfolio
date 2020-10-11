const portfolio = {};

portfolio.topNavClicked = function () {
  $('.top-nav-button').on('click', function () {
    $(this).toggleClass('active');
    $('.slide-menu').toggleClass('active');
  });
};

portfolio.init = function () {
  portfolio.topNavClicked();
};

$(document).ready(function () {
  portfolio.init();
});
