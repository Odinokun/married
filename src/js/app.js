$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin no-JS
  require('./modules/noJs')();

  // begin change bg on scroll
  require('./modules/change-bg')();

  // begin Gallery
  require('./modules/masonry')();

  // begin scroll2ancor
  require('./modules/scroll2ancor')();

  // begin scroll up
  require('./modules/scroll-up')();

});