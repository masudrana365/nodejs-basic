const events = require("events");

const eventEmitter = new events.EventEmitter();

//register a listener for cricket event
eventEmitter.on("cricket", ()=>{
    console.log("start playing cricket now");
})

//raise an event
eventEmitter.emit("cricket");
