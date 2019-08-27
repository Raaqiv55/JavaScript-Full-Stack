let greeting = require('./greeting.json');

let greet = function(){
    console.log(greeting.en);
}

module.exports = greet;