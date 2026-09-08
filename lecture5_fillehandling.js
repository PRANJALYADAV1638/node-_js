const fs =require("fs");
//  fs inbuilt
//  write file ||write file sync
fs.writeFileSync('/test.txt','hey there');  //=> synch call
//    ^
//    ||    create file
//     v   
fs.writeFile("./text.txt","hey asynch");  // => async


//  read file

const result=fs.readFileSync("./content.txt","utf-8");
console.log(result);



const result2=fs.readFile("./content.txt","utf-8");
console.log(result);
//   =>   error aaiga async ma ye kuch return nhi krta ye demand krta ha 
//   ki callback function excpet kraga

fs.readFile("./content.txt","utf-8",(err,response)=>{
    if(err){
        console.log("error" ,err);
    }
    else{
        console.log(response);
    }
})


//  append 

fs.appendFileSync("./test.text",`Hey There \n`);

console.log(fs.statSync("./test.txt"));  //=> sari imformation de ega create dlt and all over

fs.mkdirSync("my-doc")  //=> make flder of name my doc

/*

📘 Detailed Notes on fs Module
1. What is fs?

fs ka full form File System hai.

Ye Node.js ka built-in (core) module hai jo files aur folders ke saath kaam karne ke liye use hota hai.

Iske liye npm install karne ki zarurat nahi hoti.

Import:

const fs = require("fs");
2. What can fs do?

fs module ki help se hum:

Create file
Read file
Update file
Delete file
Rename file
Create folder
Delete folder

kar sakte hain.

3. Synchronous vs Asynchronous

Node.js me har file operation do tarike se hota hai.

A. Synchronous (Sync)

Program next line par tab tak nahi jaata jab tak current operation complete na ho.

Task 1
   ↓
Complete
   ↓
Task 2
   ↓
Complete

Example

const fs = require("fs");

fs.writeFileSync("test.txt", "Hello");

console.log("Done");

Output

Done

Pehle file banegi.

Uske baad hi Done print hoga.

Advantages
Simple
Easy to understand
Debugging easy
Disadvantages
Program block ho jata hai.
Large files me slow lag sakta hai.
B. Asynchronous

Program wait nahi karta.

File background me process hoti rehti hai.

Task 1
 \
  \
   Background
    \
Task 2

Example

const fs = require("fs");

fs.writeFile("test.txt", "Hello", (err) => {
    if (err)
        console.log(err);
    else
        console.log("File Created");
});

console.log("Done");

Output

Done
File Created

Notice:

Done pehle print hua.

4. writeFileSync()

Syntax

fs.writeFileSync(path, data);

Example

fs.writeFileSync("notes.txt", "Learning Node.js");

Agar file nahi hai

➡ create karega

Agar file already hai

➡ overwrite karega

5. writeFile()

Syntax

fs.writeFile(path, data, callback);

Example

fs.writeFile("notes.txt", "Learning Node", (err) => {
    if (err)
        console.log(err);
    else
        console.log("Success");
});

Callback tab execute hota hai jab writing complete ho jaati hai.

6. readFileSync()

Syntax

const data = fs.readFileSync(path, encoding);

Example

const data = fs.readFileSync("content.txt", "utf-8");

console.log(data);

Output

Hello World

Ye directly data return karta hai.

7. readFile()

Syntax

fs.readFile(path, encoding, callback);

Example

fs.readFile("content.txt", "utf-8", (err, data) => {

    if (err)
        console.log(err);

    else
        console.log(data);

});

Output

Hello World
8. Why doesn't readFile() return data?

Wrong

const result = fs.readFile("content.txt","utf-8");

console.log(result);

Output

undefined

Reason:

readFile() background me kaam karta hai.

Jab tak file read hogi

tab tak console.log() execute ho chuka hoga.

Isliye callback use hota hai.

Correct

fs.readFile("content.txt","utf-8",(err,data)=>{

    console.log(data);

});
9. Callback Function

Callback = Ek function jo doosre function ke complete hone ke baad execute hota hai.

Example

fs.readFile("content.txt","utf-8",(err,data)=>{

    console.log(data);

});

Yahan

(err,data)=>{
}

callback function hai.

10. Error Handling

Always error check karo.

fs.readFile("abc.txt","utf-8",(err,data)=>{

    if(err){

        console.log(err);

    }

    else{

        console.log(data);

    }

});

Agar file nahi mili

Output

ENOENT: no such file or directory
11. Sync vs Async Comparison
Feature	Sync	Async
Blocks execution	✅ Yes	❌ No
Callback required	❌ No	✅ Yes
Returns value	✅ Yes	❌ No
Easy to learn	✅ Yes	Slightly harder
Better for server	❌ No	✅ Yes
12. Interview Points ⭐
fs stands for File System.
It is a built-in/core Node.js module.
writeFileSync() blocks execution until writing finishes.
writeFile() is asynchronous and requires a callback.
readFileSync() returns file data directly.
readFile() does not return the data; it passes the result to the callback.
In production Node.js applications (like Express servers), asynchronous methods are generally preferred because they don't block the event loop and allow the server to handle other requests while file operations are in progress.
Evaluation 
*/