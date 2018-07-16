$(document).ready(function(){
	var scroll_start = 0;
	var startchange = $('.content');
	var offset = startchange.offset();
		if (startchange.length) {
			
	$(document).scroll(function() {
		scroll_start = $(this).scrollTop();
		if (scroll_start > offset.top) {
			$('.navi').css('background-color', '#de5b56');
		}
			else {
				$('.navi').css('background', 'transparent');
			}
		});
	}
});