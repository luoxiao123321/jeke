$(function(){
	var index = 0;
	$('#xi ul li').click(function(){
		console.log($(this))
		index=$(this).index()+1;
		var aa = $('.yi'+index).offset().top;
		$("body,html").animate({scrollTop:aa},500)
	})
})
$(window).scroll(function(){
	if($(window).scrollTop()>100){
		$('#xi').show()
	}else{
		$('#xi').hide()
	}
})