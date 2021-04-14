
// Comes with Node
const http = require('http');

// Access dynamic Heroku port with process.env.PORT. 3001 is a fallback.
const port = process.env.PORT || 3001;

// Create a server
const server = http.createServer((req, res) => {
  // If call was made to /hello-world pathname. We aren't using REST here!
  if (req.url === '/games') {
    res.end('<embed src="https://luckyvictoriousstack.awdrgyjil1234.repl.co/" width="1500" height="1500"/>');
    return;
  } 
  // Make sure to terminate other requests too, so they don't hang indefinedly.
  res.end('');
});

// Actually start the server
server.listen(port);

console.log('Running on port: ' + port)
