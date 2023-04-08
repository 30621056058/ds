var express = require('express');
var router = express.Router();
const {query} = require("express")
var connection = require("../db/db.js")
const mysql = require('mysql')
/* GET users listing. */
router.get('/a', function(req, res, next) {
  var sql = "select * from answer"
  connection.query(sql,function(err,data){
      res.send(data)
  })
});

router.get('/select',function(req,res){
  var sql = "select * from answer where keyword=?"
  var value=req.query.keywords
  connection.query(sql,value,function(err,data){
    if(err){
      res.send("错误，稍后重试")
      console.log(err)
    }else{
      res.send(data)
    }
  })
})

router.get('/selectquertion',function(req,res){
  var value = req.query.keywords
  var sql = "select * from question where keywords like " + "'" +"%"+ value + "%'"
  
  connection.query(sql,function(err,data){
    if(err){
      res.send("错误，稍后重试")
      console.log(err)
    }else{
      res.send(data)
    }
  })
})

router.get("/addvalue",function(req,res){
  var sql = "insert into question(question,keywords) value(?,?) "
  var value = [req.query.question,req.query.keywords]
  connection.query(sql,value,function(err,data){
    if(err){
      console.log(err)
      res.send(
        res.sendStatus(500)
      )
    }else{
      res.send("成功")
    }
  })
})

router.get("/addvalueanswer",function(req,res){
  var sql = "insert into answer(answer1,keyword) value(?,?) "
  var value = [req.query.answer1,req.query.keyword]
  connection.query(sql,value,function(err,data){
    if(err){
      console.log(err)
      res.send(
        res.sendStatus(500)
      )
    }else{
      res.send("成功")
    }
  })
})

module.exports = router;
