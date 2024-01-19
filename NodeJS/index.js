
const http=require("http")
const fs=require('fs')

const PORT=2000;
const hostname='localhost'
const home=fs.readFileSync('./index.html','utf-8')



const server=http.createServer((req,res,next)=>{
    if(req.url==="/"){
        res.end(home) 
    }
    if(req.url==="/contact"){
        res.end('<h1>Contact PAGE') 
    }
    if(req.url==="/about"){
        res.end('<h1>About PAGE') 
    }
    else{
        res.end('<h1>404 PAGE NOT FOUND</h1>') 
    }
})

server.listen(PORT,hostname,()=>{
    console.log(`Server is Working on http://${hostname}:${PORT}`)
})