var express = require('express');
var router = express.Router();
var fs=require('fs');
var formidable=require('formidable'); 
var mysql = require('mysql');
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'jiekezuoye'
})

/* GET home page. */
// 模板功能
router.get('/title',function(req,res,next){
	pool.query('SELECT id,title,content,post,img FROM team', function(err, rows, fields) {
    	res.header('Access-Control-Allow-Origin',"*")
        if (err) throw err;
        	res.send(rows);
   });
})

router.post('/delete',function(req,res,next){
	var abc=req.body.id;
	pool.query('DELETE FROM team WHERE id='+abc+' ',function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    res.send(rows);
	})
})




router.post('/select',function(req,res,next){
	var id=req.body.id;
	pool.query(`SELECT id,title,content,post,img FROM team WHERE id=${id}`,function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    res.send(rows);
	})
})

router.post('/updata',function(req,res,next){
	var id=req.body.id;
	var title=req.body.title;
	var content = req.body.content;
	var post = req.body.post
	var img = req.body.img
	console.log(id,title)
	pool.query(`UPDATE team SET title='${title}',content='${content}',post='${post}',img='${img}' WHERE id=${id}`,function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    console.log(1)
	    res.send(rows);
	})
})


router.post('/img',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	var form = new formidable.IncomingForm();
	form.uploadDir='public/upload'
	
	form.parse(req,function(err,fields,files){
		for(var i in files){
			var file=files[i];
			var fName=(new Date()).getTime();
			
			switch(file.type){
				case 'image/jpeg':
				fName =fName+'.jpg';
				break;
				case 'image/png':
				fName =fName+'.png';
				break;
				case 'image/gif':
				fName =fName+'.gif';
				break;
			}
			
			var newPath ='public/upload/'+fName
			fs.renameSync(file.path,newPath)
			aa=fName
		}
		
router.post('/insert',function(req,res,next){
	res.header('Access-Control-Allow-Origin',"*")
	var title=req.body.title;
	var content = req.body.content;
	var post = req.body.post
	var img = req.body.img
	pool.query(`INSERT INTO team (title,content,post,img) VALUES ('${title}','${content}','${post}','${aa}')`, function(err, rows, fields) {
	    if(rows!=""||rows!=null){
	        pool.query("SELECT * FROM team",function(err,rows){
	        	res.send(rows)
	      	})
	    }
   });
})
	})
})
module.exports = router;
