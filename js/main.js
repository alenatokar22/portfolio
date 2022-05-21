$(function () {

  $(".menu, a, .go-top").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  // $('.reviews').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   adaptiveHeight: true
  // });

  $('.burger, .menu a').on('click', function () {
      $('.menu').toggleClass('menu--active');
      $('.burger').toggleClass('burger--active');
      $('body').toggleClass('lock');
    });

    $(document).ready(function () {
      $(".picture__link").fancybox({
        openEffect: 'none',
        closeEffect: 'none'
      });
    });

    var mixer = mixitup('.works__content');

  });