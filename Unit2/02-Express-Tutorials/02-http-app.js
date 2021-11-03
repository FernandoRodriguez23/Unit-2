const http = require('http');
const {readFileSync} = require('fs');

//import files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImg = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

http
    .createServer()
    .on('request', (req, res) => {
        const url = req.url;
        console.log(url);

        if(url === '/'){
            res.writeHead(200, {method: 'Get', 'content-type': 'text/html'})
            res.write(homePage);
        }else if (url === '/styles.css'){
            res.writeHead(200, {method: 'Get', 'content-type': 'text/css'})
            res.write(homeStyles);
        }else if (url === '/browser-app.js'){
            res.writeHead(200, {method: 'Get', 'content-type': 'text/javascript'})
            res.write(homeLogic);
        }else if (url === '/logo.svg'){
            res.writeHead(200, {method: 'Get', 'content-type': 'image/svg+xml'})
            res.write(homeImg);
        }

        else {
            res.writeHead(404, {'content-type': 'text/css'})
            res.write('<h1>Page Not Found</h1>')
        }

        res.end()
    })
    .listen(3000, () => {
        console.log('Server Listening at Port 3000');
    })