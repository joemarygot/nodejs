import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  //This line is what type of content you want in website
  //res.setHeader("Content-type", "text/html");
  //You can add status if it is an error
  //res.statusCode = 404;

  console.log(req.url);
  console.log(req.method);

  res.writeHead(500, { "Content-type": "text/html" });

  //   res.write("Gwapo Ko!");
  res.end("<h1>Hatdog nga gwapo ko</h1>");
  //   res.end(JSON.stringify({ message: "Server Error" }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
