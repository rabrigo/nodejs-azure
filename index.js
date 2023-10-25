// const express = require('express');
// const PORT = 3000;
// const app = express();

// app.get('/', (req, res) => {
//     res.json({ hi: 'it works' })
// })

// app.get('/test', (req, res) => {
//     res.json({ ok: true })
// })

// app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end('Do changes reflect on this web app? This is a test of that.');
});

const port = process.env.PORT || 3000;
server.listen(port);

console.log(`Server running at http://localhost:${port}`);