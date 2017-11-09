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
},4000)
$('.yi1 h').hover(function(){
	clearInterval(timer)
},function(){
	timer=setInterval(function(){
	aa()
	},4000)
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


var nummm=0,www=1180,timerrr=null
$('.nei_u').children().first().clone().appendTo('.nei_u')
$('.right').click(function(){
	if(!$('.nei_u').is(':animated')){
		nummm++
		$('.nei_u').animate({
			"left":-nummm*www+'px'
		},1000,function(){
			if(nummm==$('.nei_u li').length-1){
				nummm=0;
				$('.nei_u').css('left','0px')
			}
		})
	}
})
$('.left').click(function(){
	if(!$('.nei_u').is(':animated')){
		if(nummm==0){
			$('.nei_u').css({
				'left':-($('.nei_u>li').length-1)*www+'px'
			})
				nummm=$('.nei_u>li').length-1
		}
				nummm--;
				$('.nei_u').animate({
					'left':-nummm*www+'px'
				},1000)
	}
})






var numm=0,ww=866,timerr=null
$('.n_ul').children().first().clone().appendTo('.n_ul')
$('.r').click(function(){
	if(!$('.n_ul').is(':animated')){
		numm++
		$('.n_ul').animate({
			"left":-numm*ww+'px'
		},1000,function(){
			if(numm==$('.n_ul li').length-1){
				numm=0;
				$('.n_ul').css('left','0px')
			}
		})
	}
})
$('.l').click(function(){
	if(!$('.n_ul').is(':animated')){
		if(numm==0){
			$('.n_ul').css({
				'left':-($('.n_ul>li').length-1)*ww+'px'
			})
				numm=$('.n_ul>li').length-1
		}
				numm--;
				$('.n_ul').animate({
					'left':-numm*ww+'px'
				},1000)
	}
})

timerr=setInterval(function(){
	$('.r').click()
},4000)

$('.n_ul').hover(function(){
	clearInterval(timerr)
},function(){
	timerr=setInterval(function(){
	$('.r').click()
	},4000)
})



//$('.tu:eq(0)').show()
$('.project_buttom p span').click(function(){
	var index=$(this).index()
	$(this).addClass('checked').siblings().removeClass('checked')
//	$('.tu').hide().eq(index).show()
})