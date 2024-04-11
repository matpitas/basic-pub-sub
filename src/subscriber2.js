const { subscribe } = require("./index")

subscribe("channel2", message => {
    console.log("processing");
    console.log(message);
})