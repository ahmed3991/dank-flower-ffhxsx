var http = require("http");
var fs = require("fs");
var path = require("path");

// Create a server object
http.createServer(function (req, res) {
  if (req.url === '/') {
    // Serve the HTML file
    var filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, function (err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Internal Server Error");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url.startsWith('/images/')) {
    // Serve images from the public directory
    var imagePath = path.join(__dirname, 'public', req.url.substring(8)); // remove /images/ part
    fs.readFile(imagePath, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("Not Found");
        res.end();
      } else {
        var ext = path.extname(imagePath).toLowerCase();
        var contentType = 'image/jpeg'; // default to jpeg
        if (ext === '.png') {
          contentType = 'image/png';
        } else if (ext === '.gif') {
          contentType = 'image/gif';
        }
        res.writeHead(200, { "Content-Type": contentType });
        res.write(data);
        res.end();
      }
    });
    }
    //Hajj-Nusuk-detials-356288601
    else if (req.url.startsWith('/Hajj-Nusuk-detials')) {
      
      var filePath = path.join(__dirname, "index.html");
      
      fs.readFile(filePath, function (err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Internal Server Error");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
     
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Not Found");
    res.end();
  }
}).listen(8080, function () {
  console.log("Server is listening on port 8080");
});

