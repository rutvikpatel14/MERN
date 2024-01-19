
const http=require("http")
const fs=require('fs')

const PORT=process.env.PORT;
const home=fs.readFileSync('./Home.html');
const Contact=fs.readFileSync('./Contact.html');
const About=fs.readFileSync('./About.html');


const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        return res.end(home) 
    }
    if(req.url==="/contact"){
        return res.end(Contact) 
    }
    if(req.url==="/about"){
        return res.end(About) 
    }
    else{
        return res.end("<h1>404 PAGE NOT FOUND</h1>") 
    }
})

server.listen(PORT,()=>{
    console.log(`Server is Working `)
})