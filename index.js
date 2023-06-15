const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((request, response) => {
  const fileContent = fs.readFileSync("./dummy.txt");
  console.log('file', fileContent, request.url)
  response.end(fileContent);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
