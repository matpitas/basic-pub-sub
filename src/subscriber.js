const { subscribe } = require("./index")

subscribe("channel1", message => {
    console.log("processing");
    console.log(message);
})