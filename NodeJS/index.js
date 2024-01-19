
const http=require("http")
const fs=require('fs')

const PORT=process.env.PORT;
const home=fs.readFileSync('./index.html','utf-8')



const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        return res.end(home) 
    }
    if(req.url==="/contact"){
        return res.end('<h1>Contact PAGE') 
    }
    if(req.url==="/about"){
        return res.end('<h1>About PAGE') 
    }
    else{
        return res.end('<h1>404 PAGE NOT FOUND</h1>') 
    }
})

server.listen(PORT,()=>{
    console.log(`Server is Working `)
})