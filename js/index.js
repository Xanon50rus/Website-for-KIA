$(document).ready(function() {

  var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  var mobileMenu = document.querySelector("#mobile-menu"),
    closeButton = document.querySelector("#mobile-menu__close-button"),
    openButton = document.querySelector("#mobile-menu__open-button"),
    link = document.querySelectorAll("li")[2];

  openButton.addEventListener("click", function() {
    mobileMenu.classList.toggle("closed");
    $('body').css('overflow', 'hidden');
    function disableScroll() {
      if (window.addEventListener) // older FF
          window.addEventListener('DOMMouseScroll', preventDefault, false);
      document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
      window.onwheel = preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
      window.ontouchmove  = preventDefault; // mobile
      document.onkeydown  = preventDefaultForScrollKeys;
    }
  })


  closeButton.addEventListener("click", function() {
    mobileMenu.classList.toggle("closed");
    $('body').css('overflow', 'auto');
    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
        document.addEventListener('wheel', preventDefault, {passive: false});
    }
  });

  $(document).on('click', 'a', function () {
    if ($('body').css('overflow') === 'hidden') {
      $('body').css('overflow', 'auto');
      function enableScroll() {
          if (window.removeEventListener)
              window.removeEventListener('DOMMouseScroll', preventDefault, false);
          document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
          window.onmousewheel = document.onmousewheel = null;
          window.onwheel = null;
          window.ontouchmove = null;
          document.onkeydown = null;
          document.addEventListener('wheel', preventDefault, {passive: false});
      }
    }
});



// Small check for empty input

  // Form check:
  // $('.form__field').change(function() {
  //   if ($(this).val() != '') {
  //     $('.form__submit').removeAttr('disabled');
  //   }
  // });

  $('.main__first-section__credit__btn').click(function() {
    if ($('.main__first-section__credit__input').val() != '') {
      $('.main__first-section__credit__input').val('');
      alert('Ваш номер успешно отправлен!')
    } else {
      $('.main__first-section__credit__input').css('border', '1px solid red');
      setTimeout(function() {
        $('.main__first-section__credit__input').css('border', '1px solid #8d8d8d');
      }, 600)
    }
  });

  $('.main__third-section__contacts__btn').click(function() {
    if ($('.main__third-section__contacts__input').val() != '') {
      $('.main__third-section__contacts__input').val('');
      alert('Ваш номер успешно отправлен!')
    } else {
      $('.main__third-section__contacts__input').css('border', '1px solid black');
      setTimeout(function() {
        $('.main__third-section__contacts__input').css('border', '1px solid white');
      }, 600)
    }
  });
});
