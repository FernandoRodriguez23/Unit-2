const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('request', (name, id) => {
    console.log(`Data for ${name} : id ${id}`);
})

customEmitter.on('testing', (id) => {
    console.log(`Another function here ${id}`);
})
customEmitter.emit('testing', 'Chad', 12345);