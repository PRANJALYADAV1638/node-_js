/*Agar tum Node.js me "module" puch rahe ho, to simple language me:

Module = Code ka ek alag file ya reusable part.

Isse code ko organize aur reuse karna easy ho jata hai.

Example

math.js

function add(a, b) {
    return a + b;
}

module.exports = add;

app.js

const add = require("./math");

console.log(add(10, 20));

Output:

30

Yahan:

math.js ek module hai.
module.exports se hum function ko bahar bhej rahe hain.
require() se doosri file me use kar rahe hain.
Module ke types
1. Local Module

Jo tum khud banate ho.

const add = require("./math");
2. Core Module

Node.js ke built-in modules.

const fs = require("fs");
const path = require("path");
const os = require("os");
const http = require("http");

Inhe install karne ki zarurat nahi hoti.

3. Third-party Module

Jo npm se install karte ho.

npm install express
const express = require("express");
module.exports vs exports

Ek function export karna:

function greet() {
    console.log("Hello");
}

module.exports = greet;

Multiple values export karna:

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports = {
    add,
    sub
};

Use:

const math = require("./math");

console.log(math.add(5, 3));
console.log(math.sub(5, 3));
Interview definition 🎯

**A module is a reusable piece of code stored in a separate file. In Node.js, modules help organize code, avoid duplication, and improve maintainability. Modules are imported using require() (CommonJS) or import (ES Modules) and exported using module.exports/exports or export.`
*/

//math.js
function add(a, b) {
    return a + b;
}

module.exports = add;

// app.js
const add = require("./math");

console.log(add(10, 20)); 