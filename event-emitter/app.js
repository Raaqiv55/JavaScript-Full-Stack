let Emitter = require('events');
let eventConfig = require('./config').events;

let emr = new Emitter();

emr.on(eventConfig.GREET, function(){
    console.log('First One');
});
emr.on(eventConfig.GREET, function(){
    console.log('Second One');
});
console.log('Hello');
emr.emit(eventConfig.GREET);