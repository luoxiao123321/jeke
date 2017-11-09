//模板
$.ajax({
	url:'http://localhost:3000/title',
	type:'get',
	success:function(e){
		for(var i in e){
			$('.function_buttom').append('<div><img src="" /><span>'+e[i].title+'</span><span>'+e[i].neirong+'</span></div>')
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
			$('.serve_buttom').append('<div class="serve_buttom_u"><img src="" /><i>'+e[i].title+'</i><span>'+e[i].content+'</span></div>')
		}
	}
})

//团队
$.ajax({
	url:'http://localhost:3000/item/title',
	type:'get',
	success:function(e){
		for(var i in e){
			$('.nei_u li').append('<div class="jieshao"><img src="" /><p>'+e[i].title+'</p><p>'+e[i].post+'</p><div>'+e[i].content+'</div></div>')
		}
	}
})