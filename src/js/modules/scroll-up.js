module.exports = function () {

  // begin remove no-js class
  $(function () {
    // при нажатии на кнопку scrollup
    $('#arr-up').click(function () {
      // переместиться в верхнюю часть страницы
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
    })
  });

  // при прокрутке окна (window)
  $(window).scroll(function () {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 300) {
      // то сделать кнопку scrollup видимой
      $('#arr-up').addClass('active');
    }
    // иначе скрыть кнопку scrollup
    else {
      $('#arr-up').removeClass('active');
    }
  });

  // end remove no-js class

};