const fs = require("fs");

const os = require("os");
console.log( " cpu lengyh " + os.cpus().length);



// // syncronous call to write "Hello, World!" to test.txt
// //fs.writeFileSync("./test.txt", "Hello, World!");

// //console.log("File written successfully.");

// // asynchronous call to write "Hello, World! Asynchronous" to test.txt
// // fs.writeFile("./test.txt", "Hello, World! Asynchronous", (err) => {});
// // console.log("Asynchronous file write initiated.");

// const result = fs.readFileSync("./contact.txt", "utf8");
// console.log(result);

// // asynchronous call to read the content of test.txt
// fs.readFile("./test.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log("Error reading file:", err);
//   } else {
//     console.log(result);
//   }
// });

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", " hey hello\n");
// fs.copyFileSync("./test.txt", "./test_copy.txt");
// console.log("File copied successfully.");

// fs.unlinkSync("./test_copy.txt");
// console.log("File deleted successfully.");

//fs.statSync("./test.txt");
// const stats = fs.statSync("./test.txt").isDirectory();
// console.log(stats);

// //fs.mkdirSync("new_directory/a/b/c", { recursive: true });


// //fs.unlinkSync("new_directory/a/b/c");
//   fs.rmdirSync("new_directory/a/b", { recursive: true });



// sync ..... blocking request
// fs.writeFileSync("./test.txt","Hello, World!");

// // async ..... non-blocking request
// fs.writeFile("./test.txt","Hello, World! Asynchronous", (err) => {});

console.log("Start");

//blocking call
//const result = fs.readFileSync("contact.txt", "utf8");
//console.log(result);


//non-blocking call
fs.readFile("contact.txt", "utf8", (err, result) => {
  console.log(result);
});
console.log("End");

console.log("Other work");

const result2 = fs.readFileSync("contact.txt", "utf8");
console.log(result2);
console.log("Other work 2");



// default  thread pool size is 4
// MAX ? - 8core cpu -8
