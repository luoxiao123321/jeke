var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'baobei'
})

/* GET home page. */
router.get('/title',function(req,res,next){
	connection.query('SELECT id,title,detail FROM model', function(err, rows, fields) {
    	res.header('Access-Control-Allow-Origin',"*")
        if (err) throw err;
        	res.send(rows);
   });
})

router.post('/delete',function(req,res,next){
	var abc=req.body.id;
	connection.query('DELETE FROM model WHERE id='+abc+' ',function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    res.send(rows);
	})
})

router.post('/insert',function(req,res,next){
	res.header('Access-Control-Allow-Origin',"*")
	var title=req.body.title;
	var detail=req.body.detail;
	connection.query(`INSERT INTO model (title,detail) VALUES ('${title}','${detail}')`, function(err, rows, fields) {
	    if(rows!=""||rows!=null){
	        connection.query("SELECT * FROM model",function(err,rows){
	        	res.send(rows)
	      	})
	    }
   });
})


router.post('/select',function(req,res,next){
	var id=req.body.id;
	connection.query(`SELECT id,title,detail FROM model WHERE id=${id}`,function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    res.send(rows);
	})
})

router.post('/updata',function(req,res,next){
	var id=req.body.id;
	var title=req.body.title;
	var detail=req.body.detail;
	console.log(id,title,detail)
	connection.query(`UPDATE work SET title='${title}',detail='${detail}' WHERE id=${id}`,function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    console.log(1)
	    res.send(rows);
	})
})
module.exports = router;
