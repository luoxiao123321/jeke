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
	pool.query('SELECT id,title,content,post FROM team', function(err, rows, fields) {
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

router.post('/insert',function(req,res,next){
	res.header('Access-Control-Allow-Origin',"*")
	var title=req.body.title;
	var content = req.body.content;
	var post = req.body.post
	console.log(post)
	pool.query(`INSERT INTO team (title,content,post) VALUES ('${title}','${content}','${post}')`, function(err, rows, fields) {
	    if(rows!=""||rows!=null){
	        pool.query("SELECT * FROM team",function(err,rows){
	        	res.send(rows)
	      	})
	    }
   });
})


router.post('/select',function(req,res,next){
	var id=req.body.id;
	pool.query(`SELECT id,title,content,post FROM team WHERE id=${id}`,function(err, rows, fields) {
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
	console.log(id,title)
	pool.query(`UPDATE team SET title='${title}',content='${content}',post='${post}' WHERE id=${id}`,function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    console.log(1)
	    res.send(rows);
	})
})

module.exports = router;
