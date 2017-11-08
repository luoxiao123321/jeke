var url='http://localhost:3000'
$.ajax({
	url:'http://localhost:3000/title',
	type:'get',
	success:function(e){
		for(var i in e){
			$('.function_buttom').append('<div><img src="" /><span>'+e[i].title+'</span><span>'+e[i].neirong+'</span></div>')
		}
	}
})
