const express=require("express");
//console.log(express)

const app=express();
//console.log(app)
const port=4000;

app.get("/home",(req,res)=>{

    console.log("Hello Assigement")

    res.send("Hello Don")

});

app.get("/books",(req,res)=>{

    res.send("content ")



});

app.listen(port,()=>{
    console.log("port listening on 4000")
});
