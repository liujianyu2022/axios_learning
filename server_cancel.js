const express = require("express")
// const cors = require("cors")      //允许跨域解决方式1

const app = express()
// app.use(cors())

app.all('*',function (req, res, next) {         //允许跨域解决方式2
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});


app.get("/products1", function(request, response){
    setTimeout(function(){
        response.send(
            [
                {id:"3", name:"three"},
                {id:"4", name:"four"}
            ]
        )
    }, 3000)
})
app.get("/products2", function(request, response){
    setTimeout(function(){
        response.send(
            [
                {id:"3", name:"three"},
                {id:"4", name:"four"}
            ]
        )
    }, 5000)
})






app.listen(4000, function(){
    console.log("the server is running at 4000")
})