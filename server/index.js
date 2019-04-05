const http = require('http');
const express = require('express');
const path = require('path');


const port = process.env.PORT;
const app = express();


if(process.env.NODE_ENV !== "production"){
    app.use(express.static(path.join(__dirname, '../public')))
}else{
    app.use(express.static(path.join(__dirname, '../build')))
}

app.get('/', (req, res)=>{
    if(process.env.NODE_ENV !== "production"){
    res.sendFile(path.join(__dirname, '../public/index.html'))
}else{
    res.sendFile(path.join(__dirname, '../build/index.html'))
}
});

const server = http.createServer(app);


server.listen(port, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("you are on port" + " " +  port)
    }
})