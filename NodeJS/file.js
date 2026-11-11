const fs = require("fs");


// sync 
fs.writeFileSync("./test.txt", "hello world from sync");

// Async
fs.writeFile("./test.txt", "hello world from Async", (err) => {});

// sync read
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

// async read
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if(err){
        console.log("Error", err);
    }else{
        console.log(result);
    }
})