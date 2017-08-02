;(function($, undefined) {
  $(function() {
    $('.choose-buttons').find('button').on('click', function() {
      $(this).parent().slideUp();
      var $slider = $('.slider');
      $slider.show();

      switch($(this).data('type')) {
        case 'js':
          $slider.Slider({
            numberOfSections: 3,
            activeClassName: 'active',
            slideOutClassName: 'slide-out',
            imageHeight: 300,
            imageWidth: 400,
            sliderType: 'js'
          });
          break;

        case 'css':
          $slider.Slider({
            numberOfSections: 3,
            activeClassName: 'active',
            slideOutClassName: 'slide-out',
            imageHeight: 300,
            imageWidth: 400,
            sliderType: 'css'
          });
          break;

        default:
          console.log('Wrong type!');
          break;
      }
    });
  });
})(jQuery);

