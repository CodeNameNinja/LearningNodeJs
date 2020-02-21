const http = require('http');
const routes = require('./routes');
const server = http.createServer(routes.handler);


const PORT  = process.env.PORT || 3000
server.listen(PORT);
console.log(`server is listening on PORT ${PORT}`)