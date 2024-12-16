import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); //Directory

// console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
  //This line is what type of content you want in website
  //res.setHeader("Content-type", "text/html");
  //You can add status if it is an error
  //res.statusCode = 404;

  //   console.log(req.url);
  //   console.log(req.method);

  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
        // res.writeHead(200, { "Content-type": "text/html" });
        // res.end("<h1>Homepage</h1>");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");

        // res.writeHead(200, { "Content-type": "text/html" });
        // res.end("<h1>About</h1>");
      } else {
        throw new Error("Not Found");
        // res.writeHead(404, { "Content-type": "text/html" });
        // res.end("<h1>Not found</h1>");
      }
      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
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

//fs - File System
