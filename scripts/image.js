$(function(){
	$(".sketch").on({
		mouseenter: function(){
			$(this).attr('src','images/visual_bl.png');
		},
		mouseleave: function(){
			$(this).attr('src','images/visual.png');
		}
	});

});

$(function(){
	$(".adobe").on({
		mouseenter: function(){
			$(this).attr('src','images/adobe_bl.png');
		},
		mouseleave: function(){
			$(this).attr('src','images/adobe.png');
		}
	});
  
});

$(function(){
	$(".html").on({
		mouseenter: function(){
			$(this).attr('src','images/html_bl.png');
		},
		mouseleave: function(){
			$(this).attr('src','images/html.png');
		}
	});
  
});