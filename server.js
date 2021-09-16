const express = require('express');

const server = express();
const port = "8080"

server.use(express.static('frontend'))

server.listen(port, () => {
    console.log("Backend listening on port: "+port)
})