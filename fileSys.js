const fs = require("fs");
// fs.readFile("./text.txt",(err,data) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// } );


// const data = "\n tghnedfvwsdwertyuiohjk...."
// fs.appendFile("./text.txt", data, (err) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("data append...");
//     }
// })



fs.unlink("./text.txt", data, (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("data deleted.....");
    }
})

