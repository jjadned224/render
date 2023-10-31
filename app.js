var http = require("http");
const port = process.env.PORT || 3001;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1 style='text-align: center'><a href='https://github.com/jjadned224/render'>Github Link!</a></h1>")
  })
  .listen(port);