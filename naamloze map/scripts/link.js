$(function(){
	$(".link").on({
		mouseenter: function(){
			$(this).attr('src','images/link_red.png');
		},
		mouseleave: function(){
			$(this).attr('src','images/link_bl.png');
		}
	});

});

$(function(){
	$(".bel").on({
		mouseenter: function(){
			$(this).attr('src','images/phone_red.png');
		},
		mouseleave: function(){
			$(this).attr('src','images/phone.png');
		}
	});

});

$(function(){
	$(".email").on({
		mouseenter: function(){
			$(this).attr('src','images/mes_red.png');
		},
		mouseleave: function(){
			$(this).attr('src','images/mes.png');
		}
	});

});