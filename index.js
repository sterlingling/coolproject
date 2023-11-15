const express = require('express');

const server = express();

server.use(express.json());

server.get('/hello', (req, res) => {
    res.json({ message: 'hello there' })
})

const port = process.env.PORT || 7001;

server.listen(port, () => {
    console.log(`listening on port: ${port}`)
})