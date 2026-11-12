const fs = require("fs");


// // sync 
// fs.writeFileSync("./test.txt", "hello world from sync");

// // Async
// fs.writeFile("./test.txt", "hello world from Async", (err) => {});

// // sync read
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// // async read
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log(result);
//     }
// })

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

fs.appendFileSync("./test.txt", '\nHey! there');

fs.appendFileSync("./test.txt",  `\n ${Date.now()} Hey! there `);

// to make a copy of file 
fs.cpSync("./test.txt", "./copy.txt");

// to make delete a file 

fs.unlinkSync("./copy.txt");

fs.