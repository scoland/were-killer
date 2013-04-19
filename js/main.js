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
      }


      
  	});

    $(".fancybox").fancybox({
      helpers : {
              overlay : {
                  css : {
                      'background' : 'rgba(58, 42, 45, .2)'
                  }
              }
      },
      autoSize: false,
      width: 834,
      autoHeight: true,
      minHeight: 800
  });
});