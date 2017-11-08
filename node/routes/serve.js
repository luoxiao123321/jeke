var express = require('express');
var router = express.Router();
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
	pool.query('SELECT id,title,content FROM serve', function(err, rows, fields) {
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

router.post('/insert',function(req,res,next){
	res.header('Access-Control-Allow-Origin',"*")
	var title=req.body.title;
	var content = req.body.content;
	var img = req.body.img
	pool.query(`INSERT INTO serve (title,img,content) VALUES ('${title}','${content}','${img}')`, function(err, rows, fields) {
	    if(rows!=""||rows!=null){
	        pool.query("SELECT * FROM serve",function(err,rows){
	        	res.send(rows)
	      	})
	    }
   });
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
	var content = req.body.content;
	console.log(id,title)
	pool.query(`UPDATE serve SET title='${title}',img='${img}',content='${content}' WHERE id=${id}`,function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    console.log(1)
	    res.send(rows);
	})
})

module.exports = router;
