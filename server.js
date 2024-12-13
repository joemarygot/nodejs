import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  //This line is what type of content you want in website
  //res.setHeader("Content-type", "text/html");
  //You can add status if it is an error
  //res.statusCode = 404;

  //   console.log(req.url);
  //   console.log(req.method);

  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end("<h1>Homepage</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end("<h1>About</h1>");
      } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>Not found</h1>");
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (e) {
    res.writeHead(500, { "Content-type": "text/plain" });
    res.end("Server error");
  }

  //   res.write("Gwapo Ko!");
  //   res.end(JSON.stringify({ message: "Server Error" }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
