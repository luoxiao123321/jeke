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
	pool.query('SELECT id,title,content,img FROM serve', function(err, rows, fields) {
    	res.header('Access-Control-Allow-Origin',"*")
        if (err) throw err;
        	res.send(rows);
   });
})

router.post('/delete',function(req,res,next){
	var abc=req.body.id;
	pool.query('DELETE FROM serve WHERE id='+abc+' ',function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    res.send(rows);
	})
})




router.post('/select',function(req,res,next){
	var id=req.body.id;
	pool.query(`SELECT id,title,content,img FROM serve WHERE id=${id}`,function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    res.send(rows);
	})
})

router.post('/updata',function(req,res,next){
	var id=req.body.id;
	var title=req.body.title;
	var img=req.body.img;
	var content = req.body.content;
	pool.query(`UPDATE serve SET title='${title}',img='${img}',content='${content}' WHERE id=${id}`,function(err, rows, fields) {
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
	var img = req.body.img
	pool.query(`INSERT INTO serve (title,img,content) VALUES ('${title}','${aa}','${content}')`, function(err, rows, fields) {
	    if(rows!=""||rows!=null){
	        pool.query("SELECT * FROM serve",function(err,rows){
	        	res.send(rows)
	      	})
	    }
   });
})
	})
})



module.exports = router;
