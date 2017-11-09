//模板
$.ajax({
	url:'http://localhost:3000/title',
	type:'get',
	success:function(e){
		for(var i in e){
			$('.function_buttom').append('<div><img src="http://localhost:3000/upload/'+e[i].img+' "/><span>'+e[i].title+'</span><span>'+e[i].neirong+'</span></div>')
		}
	}
})


//新闻
$.ajax({
	url:'http://localhost:3000/news/title',
	type:'get',
	success:function(e){
		for(var i in e){
			$('.news_bottom').append('<div class="xinwen"><P  class="title">'+e[i].title+'</p><P class="name">'+e[i].author+'</p><span class="nairong">'+e[i].content+'</span></div>')
		}
	}
})

//服务
$.ajax({
	url:'http://localhost:3000/serve/title',
	type:'get',
	success:function(e){
		for(var i in e){
			$('.serve_buttom').append('<div class="serve_buttom_u"><img src="http://localhost:3000/upload/'+e[i].img+' "/><i>'+e[i].title+'</i><span>'+e[i].content+'</span></div>')
		}
	}
})
//团队
$.ajax({
	url:'http://localhost:3000/item/title',
	type:'get',
	success:function(e){
		for(var i in e){
			$('.nei_u li').append('<div class="jieshao"><img src="http://localhost:3000/upload/'+e[i].img+' "/><p  class="zuozhe">'+e[i].title+'</p><p  class="zhiye">'+e[i].post+'</p><div  class="jianjie">'+e[i].content+'</div></div>')
		}
	}
})
//项目展示
	
	var id=$(this).attr('data-id')
	$.ajax({
	url:'http://localhost:3000/team/title',
	type:'get',
	data:{uid:id},
	dataType:'json',
	success:function(e){
		var a=''
		for(var i in e){
			if(e[i].uid==0){
				a+='<div><i  class="tui">+</i><img src="http://localhost:3000/upload/'+e[i].img+' "/></div>'
			}
			$('.tu').html(a)
		}
	}
})
	
	$('.project_buttom p span').click(function(){
	var id=$(this).attr('data-id')
	$.ajax({
	url:'http://localhost:3000/team/title',
	type:'get',
	data:{uid:id},
	dataType:'json',
	success:function(e){
		var a=''
		for(var i in e){
			if(id==e[i].uid){
				a+='<div><i  class="tui">+</i><img src="http://localhost:3000/upload/'+e[i].img+' "/></div>'
			}
			$('.tu').html(a)
		}
	}
})
})

