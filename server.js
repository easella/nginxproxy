

// Comes with Node
const http = require('http');

// Access dynamic Heroku port with process.env.PORT. 3001 is a fallback.
const port = process.env.PORT || 3001;

// Create a server
const server = http.createServer((req, res) => {
  // If call was made to /hello-world pathname. We aren't using REST here!
  if (req.url === '/games') {
    return res.end(
    `<iframe src="https://luckyvictoriousstack.awdrgyjil1234.repl.co/" scrolling="yes" width="1500" height="1000"></iframe>`)
   } 
  // Make sure to terminate other requests too, so they don't hang indefinedly.
if (req.url === '/') {
    return res.end(
      
    `<title>Algebra Practice Problems</title><iframe src="https://www.thatquiz.org/tq-0/math/algebra/" scrolling="yes" width="1500" height="1000"></iframe>`)
   } 
});

// Actually start the server
server.listen(port);

console.log('Running on port: ' + port)
