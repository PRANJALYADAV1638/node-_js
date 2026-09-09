//  url => uniform resourse locator

//  https://  ,hypertext ,transfer ,protocol,secure

// url path nested path query parameter  

const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {

    console.log("Request received:", req.url);

    const myurl = url.parse(req.url, true);

    console.log(myurl);

    const log = `new request ${req.url}\n`;

    fs.appendFile("log.txt", log, (err) => {

        switch (myurl.pathname) {
            case "/":
                res.end("homepage");
                break;

            case "/about":
                const username=myurl.query.myname;
                res.end(`hi , ${username}`);
                break;

            default:
                res.end("404");
        }
    });
});

myserver.listen(8000, () => {
    console.log("server start");
});

/*What is a URL?

URL = Uniform Resource Locator

A URL is the address of a resource on the internet.

Example:

https://www.google.com/search?q=nodejs&page=2#images
2. Parts of a URL

Consider:

https://www.google.com:443/search/node?name=yash&age=20#top
https://www.google.com:443/search/node?name=yash&age=20#top
│      │              │   │          │                  │
│      │              │   │          │                  └── Fragment (Hash)
│      │              │   │          └──────────────────── Query Parameters
│      │              │   └────────────────────────────── Path
│      │              └────────────────────────────────── Port
│      └──────────────────────────────────────────────── Domain (Host)
└─────────────────────────────────────────────────────── Protocol
(A) Protocol

It tells the browser how to communicate.

Examples:

http://
https://
ftp://
HTTP
HyperText Transfer Protocol
HTTPS
HyperText Transfer Protocol Secure

HTTPS encrypts communication between client and server.

(B) Domain (Host)
www.google.com

It identifies the server.

Examples

localhost
github.com
openai.com
amazon.in
(C) Port

Example

http://localhost:8000

Port =

8000

Common ports

80  -> HTTP
443 -> HTTPS
3000 -> Express
8000 -> Node Server
5000 -> Backend APIs
(D) Path

Example

/about

or

/products/mobile

The path tells the server which resource is requested.

Example

/

Home page

/about

About page

/contact

Contact page

(E) Nested Path
/products/mobile/samsung
products
   │
 mobile
   │
 samsung

Used for organizing resources.

(F) Query Parameters

Everything after ?

Example

/about?name=yash&age=20
name = yash
age = 20

Used for sending data.

Examples

?page=2

?sort=price

?search=laptop

?color=black
(G) Hash / Fragment
#top

Browser scrolls to that section.

It is not sent to the server.

Complete URL Example
https://localhost:8000/products/mobile?brand=samsung&page=2#details
Protocol : https

Host : localhost

Port : 8000

Path : /products/mobile

Query :
brand = samsung
page = 2

Hash :
details
URL Handling in Node.js

Node provides the url module.

const url = require("url");
Parsing URL
const myUrl = url.parse(req.url, true);

Second argument

true

means:

Convert query parameters into an object.

Without true

query:
'name=yash&age=20'

With true

query:
{
    name: 'yash',
    age: '20'
}
Example

Browser

http://localhost:8000/about?name=yash&age=20

Node

const myUrl = url.parse(req.url, true);

console.log(myUrl);

Output

Url {
  pathname: '/about',
  query: {
      name:'yash',
      age:'20'
  },
  search:'?name=yash&age=20'
}
Important Properties
req.url
/about?name=yash

Contains complete URL after hostname.

myUrl.pathname
/about

Only route.

Used for routing.

myUrl.query
{
    name:'yash'
}

Contains query parameters.

myUrl.search
?name=yash

Query as string.

myUrl.path
/about?name=yash
Access Query Parameters

URL

http://localhost:8000/about?name=yash&age=20

Code

const myUrl = url.parse(req.url, true);

console.log(myUrl.query.name);
console.log(myUrl.query.age);

Output

yash

20
Routing

Wrong

switch(req.url)

Reason

req.url

/about?name=yash

It does not equal

/about

Correct

switch(myUrl.pathname)

Now

pathname

/about

matches correctly.

Complete Example
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const myUrl = url.parse(req.url, true);

    switch (myUrl.pathname) {

        case "/":
            res.end("Home Page");
            break;

        case "/about":
            const username = myUrl.query.name;
            res.end(`Hello ${username}`);
            break;

        case "/contact":
            res.end("Contact Page");
            break;

        default:
            res.end("404 Not Found");
    }

});

server.listen(8000);
Testing

Open

http://localhost:8000/

Output

Home Page

Open

http://localhost:8000/about?name=yash

Output

Hello yash

Open

http://localhost:8000/contact

Output

Contact Page

Open

http://localhost:8000/random

Output

404 Not Found
Modern Way (Recommended)

The url.parse() API is legacy. Modern Node.js uses the built-in URL class.

const myUrl = new URL(req.url, "http://localhost:8000");

console.log(myUrl.pathname);
console.log(myUrl.searchParams.get("name"));

This is the approach you'll see in newer codebases.

Interview Questions
1. What is a URL?

A URL (Uniform Resource Locator) is the address of a resource on the internet.

2. What is the difference between req.url and pathname?
req.url contains the path plus query string (e.g. /about?name=yash).
pathname contains only the route (e.g. /about).
3. Why pass true to url.parse()?

To parse query parameters into a JavaScript object.

4. Why use pathname for routing?

Because query parameters change the full URL, but the route itself remains the same.

5. How do you access a query parameter?
myUrl.query.name
6. Which API should you use in new Node.js projects?

Use the URL class instead of url.parse(), as url.parse() is maintained mainly for backward compatibility.

Key Takeaways 📝
A URL consists of protocol, host, port, path, query parameters, and fragment.
Use req.url to get the raw incoming URL.
Use url.parse(req.url, true) (or preferably new URL()) to extract its parts.
Use pathname for routing and query (or searchParams) for request data.
Query parameter names in the URL must exactly match the property names you access in code.*/