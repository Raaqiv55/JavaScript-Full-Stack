// let greet = require('./greet');

// let greet2 = require('./greet2');
// greet2.greet();

let util = require('util');

let name = 'Alamgir';
let greeting = util.format('Hello, %s', name);
util.log(greeting);