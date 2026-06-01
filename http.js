const http = require("http");
const server = http.createServer((req,res)=>{
     switch (req.url) {
        case "/":
         res.end("home...");   
         break;
     
         case "/about":
         res.end("About page...");   
         break;
         
         case "/contact":
         res.end("contact...");   
         break;

        default:
            res.end("page not found..."); 
            break;
     }    
});
server.listen(4000,()=>{
console.log("server is running on port no. 4000");
})