module.exports = function() {

  // begin change bg on scroll
  const winHeight = $(window).height() / 2;
  const bgSection = $('#bg');

  $(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() >= $("#header").position().top - winHeight) {
      $(bgSection).css('background-color', $("#header").attr("data-color"));
    }

    if ($(document).scrollTop() >= $("#schedule").position().top - winHeight) {
      $(bgSection).css('background-color', $("#schedule").attr("data-color"))
    }

    if ($(document).scrollTop() >= $("#info").position().top - winHeight) {
      $(bgSection).css('background-color', $("#info").attr("data-color"))
    }

    if ($(document).scrollTop() >= $("#dress").position().top - winHeight) {
      $(bgSection).css('background-color', $("#dress").attr("data-color"))
    }

    if ($(document).scrollTop() >= $("#gallery").position().top - winHeight) {
      $(bgSection).css('background-color', $("#gallery").attr("data-color"))
    }

    if ($(document).scrollTop() >= $("#video").position().top - winHeight) {
      $(bgSection).css('background-color', $("#video").attr("data-color"))
    }

    if ($(document).scrollTop() >= $("#footer").position().top - winHeight) {
      $(bgSection).css('background-color', $("#footer").attr("data-color"))
    }
  });
  // end change bg on scroll

};