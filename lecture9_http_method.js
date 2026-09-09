/* http method
get => when you ewant to get data from the server(browser ma kuch bi search krta ha to get request call hoti ha )
 post =>when you want to send and mutate some data in server 
 put => upload krta ha jo
 patch => kisi chiz ko chnage krna 
 delete => dlt krna ha to kuch

 *

  GET → Server se data fetch/read karna.
POST → Naya data create karna.
PUT → Puri resource ko replace/update karna.
PATCH → Resource ka partial update karna (sirf jo fields badalni hain).
DELETE → Resource ko delete karna.
Real Example (Users API)
const API = "https://jsonplaceholder.typicode.com/users";
1. GET Request (Data Fetch)
fetch(API)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

Output: Server se saare users mil jayenge.

2. POST Request (New User Create)
fetch(API, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Yash",
    email: "yash@gmail.com"
  })
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

Explanation: Server par ek naya user create karne ki request.

3. PUT Request (Pure User ko Replace)
fetch(`${API}/1`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    name: "Yash Kumar",
    email: "new@gmail.com",
    phone: "9999999999"
  })
})
  .then((response) => response.json())
  .then((data) => console.log(data));

Explanation: User id = 1 ki puri information replace ho jayegi.

4. PATCH Request (Sirf Ek Field Change)
fetch(`${API}/1`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "updated@gmail.com"
  })
})
  .then((response) => response.json())
  .then((data) => console.log(data));

Explanation: Sirf email update hogi, baaki data waise hi rahega.

5. DELETE Request
fetch(`${API}/1`, {
  method: "DELETE"
})
  .then((response) => {
    if (response.ok) {
      console.log("User Deleted Successfully");
    }
  })
  .catch((error) => console.log(error));

Explanation: User id = 1 delete karne ki request.

Easy Real-Life Analogy 🏠

Suppose tumhare paas ek Student Register hai.

GET 📖 → Register khol kar student ki details dekhna.
POST ➕ → Register me ek naya student add karna.
PUT ✏️ → Ek student ki puri entry ko nayi information se replace karna.
PATCH 🛠️ → Sirf student ka phone number ya email change karna.
DELETE 🗑️ → Student ki entry register se hata dena.
Interview Difference (PUT vs PATCH)

PUT

{
  name: "Yash",
  age: 21,
  city: "Delhi"
}

Agar tum sirf ye bhejo:

{
  name: "Yash"
}

To ideal REST semantics ke hisaab se baaki fields (age, city) replace/remove ho sakti hain, kyunki PUT puri resource ko represent karta hai.

PATCH

{
  city: "Gurgaon"
}

Sirf city update hogi. name aur age waise hi rahenge.

Interview-ready note

Production APIs hamesha strict REST rules follow nahi karti. Bahut si APIs PUT ko bhi partial update ki tarah implement kar deti hain. Lekin REST concept aur interviews ke liye yaad rakho:

GET = Read
POST = Create
PUT = Replace entire resource

*/


const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {

    console.log("Request received:", req.url);

    const myurl = url.parse(req.url, true);

    console.log(myurl);

    const log = `new request ${req.method} ${req.url}\n`;

    fs.appendFile("log.txt", log, (err) => {

        switch (myurl.pathname) {
            case "/":
                res.end("homepage");
                break;

            case "/about":
                const username=myurl.query.myname;
                res.end(`hi , ${username}`);
                break;
case "/signup":
    if(req.method==="GET") res.end("this is signup form");
    else if(req.method==="POST"){
        // db querty
        res.end("sucess");
    }
            default:
                res.end("404");
        }
    });
});

myserver.listen(8000, () => {
    console.log("server start");
});
