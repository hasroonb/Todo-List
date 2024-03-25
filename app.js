const express = require('express')
const mongose = require('mongoose')
const bodyparser = require('body-parser')
const ejs = require('ejs')
const  app = express()
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs')

//    <--------Get-------------------->
app.get('/',(req,res)=>{
        let option = {weekday:'long' ,year:'numeric',month:'long',day:'numeric'}
        let now= new Date().toLocaleDateString("en-US",option)
       res.render('list',{date :now,newlistitem:newitems});
   
})

// <------post----------------->

let newitems = [];
app.post('/',(req,res)=>{
   newitem   = req.body.taskInput
   newitems.push(newitem)
  res.redirect('/');
})
//server configuration
app.listen(4000,()=>
console.log("Server started on port: 4000")
)