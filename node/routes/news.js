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
	pool.query('SELECT id,title,content,author FROM news', function(err, rows, fields) {
    	res.header('Access-Control-Allow-Origin',"*")
        if (err) throw err;
        	res.send(rows);
   });
})

router.post('/delete',function(req,res,next){
	var abc=req.body.id;
	pool.query('DELETE FROM news WHERE id='+abc+' ',function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    res.send(rows);
	})
})

router.post('/insert',function(req,res,next){
	res.header('Access-Control-Allow-Origin',"*")
	var title=req.body.title;
	var content = req.body.content;
	var author = req.body.author
	pool.query(`INSERT INTO news (title,author,content) VALUES ('${title}','${author}','${content}')`, function(err, rows, fields) {
	    if(rows!=""||rows!=null){
	        pool.query("SELECT * FROM news",function(err,rows){
	        	res.send(rows)
	      	})
	    }
   });
})


router.post('/select',function(req,res,next){
	var id=req.body.id;
	pool.query(`SELECT id,title,author,content FROM news WHERE id=${id}`,function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    res.send(rows);
	})
})

router.post('/updata',function(req,res,next){
	var id=req.body.id;
	var title=req.body.title;
	var content = req.body.content;
	var author= req.body.author
	pool.query(`UPDATE news SET title='${title}',author='${author}',content='${content}' WHERE id=${id}`,function(err, rows, fields) {
	    res.header('Access-Control-Allow-Origin',"*")
	    if (err) throw err;
	    console.log(1)
	    res.send(rows);
	})
})

module.exports = router;
