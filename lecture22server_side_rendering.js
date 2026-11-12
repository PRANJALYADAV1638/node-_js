/*
jha pr html page server se render hotaha 
server side rendering
problem -> hum complete fronntend node ma likh skta ha but isma node bss frontend / ui ko render krta rha jaiga bss
so the best practice is  we use the engine called templeteing engine use for serverside rendering -> example ejs,pug js, handlebar


adv ->  server clean 
 seperate file so easy to change and update



 Browser sends a request.
Express fetches URL data from MongoDB.
EJS inserts data into the HTML template.
res.render() sends the generated HTML to the browser.



1. SSR: HTML is generated on the server, not in the browser.
2. Template Engine: EJS is used to generate dynamic HTML.
3. res.render(): Renders an EJS file and sends HTML to the browser.
4. res.json(): Sends JSON data, not a rendered HTML page.
5. Dynamic Data: Pass data from Express to EJS:res.render("home", { allUrls });
6. EJS Syntax:
   - <% %> → Execute JavaScript.
   - <%= %> → Display escaped data.
   - <%- %> → Display unescaped data.
7. Views Folder: EJS templates are generally stored inside the views folder.
8. SEO: SSR can help search engines access page content because HTML is generated before reaching the browser.
Most Important Interview Question
Q. What is the difference between res.render() and res.send()?
- res.render() renders a template (such as EJS) and sends the resulting HTML.
- res.send() sends a response directly, such as text or HTML.
One thing you must understand deeply: How data travels from MongoDB → Express Controller → EJS → Browser.

*/

