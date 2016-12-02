$(function() {
    $('.people__person').on('click', function(e) {
        e.preventDefault();
        var that = $(this);
        var data = that.data('person');
        $('.people__slider').animate({ opacity: 0 })
        $('.people__overlay[data-person=' + data + ']').animate({ opacity: 1 })
        $('.people__overlay[data-person=' + data + ']').css('zIndex', '10000000');
    });
    $('.people__overlay__wrap__close').on('click', function(e) {
        e.preventDefault();
        var that = $(this);
        var parentOverlay = that.parents('.people__overlay');
        parentOverlay.animate({ opacity: 0 });
        parentOverlay.css('zIndex', '1');
        $('.people__slider').animate({ opacity: 1 })
    });

    $(".people__slider").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });
    $(".openIframe").on('click', function(e) {
        e.preventDefault();
        var that = $(this);
        lity(that.attr('href'));
    })
    var $btns = $('.four__sort__button').click(function(e) {
        e.preventDefault();
        var thatText = $(this).text()

      if (this.id == 'all') {
        $('.four__wrap > a').fadeIn(450);
      } else {
        var $el = $('.' + this.id).fadeIn(450);
        $('.four__wrap > a').not($el).hide();
        $('.four__heading').text(thatText);
      }
      $btns.removeClass('active');
      $(this).addClass('active');
    })

});
