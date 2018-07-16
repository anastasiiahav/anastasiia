$(function(){
	$(".phone").on({
		mouseenter: function(){
			$(this).attr('src','images/phonebl.png');
		},
		mouseleave: function(){
			$(this).attr('src','images/phone.png');
		}
	});

});

$(function(){
	$(".mail").on({
		mouseenter: function(){
			$(this).attr('src','images/mailbl.png');
		},
		mouseleave: function(){
			$(this).attr('src','images/mail.png');
		}
	});
  
});

$(function(){
	$(".in").on({
		mouseenter: function(){
			$(this).attr('src','images/inbl.png');
		},
		mouseleave: function(){
			$(this).attr('src','images/in.png');
		}
	});
  
});