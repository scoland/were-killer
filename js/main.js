$(document).ready(function() {
	var allPanels = $(".fan-content").hide();
	$('#fan > section > h2 > a').click(function(event) {
	  event.preventDefault();
	  $this = $(this);
      $target =  $this.parent().next();

      if(!$target.hasClass('active')){
         allPanels.removeClass('active').slideUp();
         $target.addClass('active').slideDown();
      }
      // if ($target.hasClass('active')) {
      //   $('.active-h2').removeClass('active-h2');
      //   $this.parent().addClass('active-h2');
      // }
  	});

    $(".fancybox").fancybox({
      helpers : {
              overlay : {
                  css : {
                      'background' : 'rgba(58, 42, 45, 0)'
                  }
              }
      },
      autoSize: false,
      width: 834,
      autoHeight: true,
      minHeight: 800
  });
});