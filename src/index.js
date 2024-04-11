
const { createClient } = require('redis')

const client = createClient();

client.connect();

client.on('error', err => console.log('Redis Client Error', err));

async function publish(channel, value) {
    console.log('Message sent!');
    return client.publish(channel, JSON.stringify(value));
}

async function subscribe(channel, cb) {
    client.subscribe(channel, (message, channel) => {
        console.log("Message Arrived!");
        cb(message);
    });
}


module.exports = {
    publish,
    subscribe
}