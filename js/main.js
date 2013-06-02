$(document).ready(function() {
	var allPanels = $(".fan-content").hide();
	$('#fan > section > h2 > a').click(function(event) {
	  event.preventDefault();
	  $this = $(this);
    $target =  $this.parent().next();
    $plus = $('.plus')

      if(!$target.hasClass('active')){
         allPanels.removeClass('active').slideUp();
         $target.addClass('active').slideDown();
         $plus.removeClass('minus');
         $this.closest('h2').addClass('minus');
         $('#contact').removeClass('no-border');
      }

      if($this.hasClass('contact-link')){
        $('#contact').addClass('no-border');
      }
  });

    $(".fancybox").fancybox({
      autoSize: false,
      width: 834,
      minHeight: 800,
      scrolling: 'no',
    });
});