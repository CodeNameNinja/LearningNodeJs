const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write(`
            <html>
            <head>
                <title>Greetings</title>
            </head>

            <body>
                <h1>Greatings from Mitchell</h1>
                <form action="/create-user"  method = "POST">
                <input type="text" name="username" placeholder = "username"><button type="submit">Create Users</button>

                </form>
            </body> 
            </html>
        `);
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head>
            <title>Greetings</title>
        </head>
    
        <body>
            <ul>
                <li> User1 </li>
            </uL>
        </body> 
        </html>
    `);
    res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      res.statusCode = 302; // status code for redirect
            res.setHeader('Location', '/');
            return res.end();
    });   
    
  }
};

exports.handler = requestHandler;
