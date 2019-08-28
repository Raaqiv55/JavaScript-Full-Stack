let greet = require('./greet1');
greet();

let greet2 = require('./greet2').greet;
greet2();

let greet3 = require('./greet3');
greet3.greet();

let Greet4 = require('./greet4');
let greet4 = new Greet4();
greet4.greet();

let greet5 = require('./greet5').greet;
greet5();
