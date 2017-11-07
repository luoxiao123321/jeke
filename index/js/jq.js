//吸顶条

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


//轮播图

var num=0,w=1349,timer=null
$('.lun').children().first().clone().appendTo('.lun')
function aa(){
	if(!$('.lun').is(':animated')){
		num++
		changNum(num)
		$('.lun').animate({
			"left":-num*w+'px'
		},1000,function(){
			if(num==$('.lun li').length-1){
				num=0;
				$('.lun').css('left','0px')
			}
		})
	}
}
function changNum(a){
	if(a==$('.lun li').length-1){
		a=0
	}
		$('.yuan li').eq(a).addClass('checked').siblings().removeClass('checked')
}
timer=setInterval(function(){
	aa()
},3000)
$('.yi1 h').hover(function(){
	clearInterval(timer)
},function(){
	timer=setInterval(function(){
	aa()
	},3000)
})
$('.yuan li').click(function(){
	var now=num
	num=$(this).index()
		if(num>now){
			$('.lun').css('left',-(num-1)*w+'px')
		}else if(num<now){
			$('.lun').css('left',-(num+1)*w+'px')
		}
			$('.lun').animate({
				'left':-num*w+'px'
			},1000)
			changNum(num)
})
