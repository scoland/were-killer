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
  	});
});