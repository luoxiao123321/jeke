var express = require('express');
var router = express.Router();
var fs=require('fs'); 
var formidable=require('formidable');
var mysql = require('mysql');
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'baobei'
})

/* GET home page. */
router.post('/modelfunction', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*')
  pool.query('SELECT * FROM model',function(err,rows){
  	res.send(rows)
  })
});
router.post('/modelinsert', function(req, res, next) {
	var img = req.body.img
	var title = req.body.title
	var detail = req.body.detail
  res.header('Access-Control-Allow-Origin','*')
  pool.query('INSERT INTO model(img,title,detail) VALUES ("'+img+'","'+title+'","'+detail+'")',function(err,rows){
  	res.send(rows)
  })
})
router.post('/img',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	var form = new formidable.IncomingForm();
	form.uploadDir = 'public/upload'
	form.parse(req,function(err,fields,files){
		console.log(fields,files);
		for(i in files){
			var file = files[i];
			var fName = (new Date()).getTime();
			switch(file.type){
				case 'image/jpeg':
				fName = fName+'.jpg';
				break;
				case 'image/png':
				fName = fName + '.png';
				break;
				case 'image/gif':
				fName = fName + '.gif';
				break;
			}
			var newPath = 'public/upload/' + fName
			fs.renameSync(file.path,newPath);
		}
		 pool.query(`INSERT INTO model (img) VALUES ('http://localhost:3000/upload/${fName}')`,function(err,rows){
    	if(err) throw err;
    	if(rows){
    		pool.query('SELECT img FROM model',function(err,rows){
    			res.send(rows);
    		})
    	}
    })
	})   
})
module.exports = router;
