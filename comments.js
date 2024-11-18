// Create web server
// 1. Require http module
// 2. Create server
// 3. Listen to port
// 4. Handle requests
// 5. Serve HTML file
// 6. Serve JSON data

// 1. Require http module
var http = require('http');

// 2. Create server
var server = http.createServer(function(request, response) {
  // 4. Handle requests
  // Log request URL
  console.log('Request URL:', request.url);

  // 5. Serve HTML file
  if (request.url === '/') {
    // Set response status and headers
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });

    // Send response body
    response.end('<h1>Welcome to comments!</h1>');
  }

  // 6. Serve JSON data
  if (request.url === '/comments') {
    // Set response status and headers
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });

    // Send response body
    response.end(JSON.stringify([
      {
        name: 'Alice',
        comment: 'Hello, world!'
      },
      {
        name: 'Bob',
        comment: 'This is awesome.'
      }
    ]));
  }
});

// 3. Listen to port
server.listen(3000);

console.log('Server running at http://localhost:3000/');