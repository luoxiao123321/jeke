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
var aa=''
router.get('/title',function(req,res,next){
	pool.query('SELECT id,title,neirong,img FROM model', function(err, rows, fields) {
    	res.header('Access-Control-Allow-Origin',"*")
        if (err) throw err;
        	res.send(rows);
   });
})

router.post('/delete',function(req,res,next){
	var abc=req.body.id;
	pool.query('DELETE FROM model WHERE id='+abc+' ',function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    res.send(rows);
	})
})




router.post('/select',function(req,res,next){
	var id=req.body.id;
	pool.query(`SELECT id,title,neirong,img FROM model WHERE id=${id}`,function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    res.send(rows);
	})
})

router.post('/updata',function(req,res,next){
	var id=req.body.id;
	var title=req.body.title;
	var neirong = req.body.neirong
	var img = req.body.img
	console.log(id,title)
	pool.query(`UPDATE model SET title='${title}',neirong='${neirong}',img='${img}' WHERE id=${id}`,function(err, rows, fields) {
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
	var neirong = req.body.neirong
	var img = req.body.img
	pool.query(`INSERT INTO model (title,neirong,img) VALUES ('${title}','${neirong}','${aa}')`, function(err, rows, fields) {
	    if(rows!=""||rows!=null){
	        pool.query("SELECT * FROM model",function(err,rows){
	        	res.send(rows)
	      	})
	    }
   });
})
	})
})
module.exports = router;
