const http = require('http')
const os = require('os')
const user = os.userInfo();
const data = {
    name: [
        'Hans',
        'Frans',
        'Nigel'
    ],
    data: '10/20/30',
    numbers: [1,2,3,4,5,6,7,8,9]
}

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        console.log(`${user} visted your site`);
        res.end(`Welcome to the Home Page`)
    } else if (req.url === './about') {
        red.end(`Here nis the history of my ppl`);
    } else if (req.url === '/data') {
        res.end(JSON.stringify(data))
    } else {
        res.end(
            `
            <h1>Oops!</h1>
            <p>BoTeL oF wAteR</p>
            `
        )
    }
});

server.listen(3000);