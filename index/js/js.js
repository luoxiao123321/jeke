$(function(){
	const url = "http://localhost:3000"
	$.ajax({
		url:url+'modelfunction',
		type:'POST',
		success:function(e){
			console.log(e)
		}
	})
	// var file;
 //        function getFiles (el) {
 //           file=el.files
 //           console.log(file)
 //        }

 //        $('button').click(function(){
 //         	var fd = new FormData();

 //       		for(var i = 0;i<file.length;i++){
 //        		fd.append('files',file[i])
 //        	}

 //       		 console.log(fd)
 //       		$.ajax({
 //       			url:'http://localhost:3000/img1/img',
 //       			type:'POST',
 //       			data:fd,
 //       			contentType:false,
 //       			processData:false,
 //       			success:function(e){
 // 					console.log(e)
 // 					for(i in e){
 // 					   $('.box').append("<img src='"+e[i].img+"' />")
 // 					}
 					
 //       			}
 //       		}) 

 //        })
    

})

		