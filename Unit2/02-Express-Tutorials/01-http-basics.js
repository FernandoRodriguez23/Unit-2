const http = require('http');

http.createServer()
    .on('request', (req, res) => {
        const url = req.url;

        if(url === '/'){
            res.writeHead(404, {method: 'Get', 'content-type': 'text/html'})
            res.write('<h1>Home Page</h1>');
        }

        res.end()
    })
    .listen(3000, () => {
        console.log('Server Listening at Port 3000');
    })