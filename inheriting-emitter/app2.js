let util = require('util');

function Person(){
    this.firstName = 'John';
    this.lastName = 'Doe';
}

Person.prototype.greet = function(){
    console.log(`Hello, ${this.firstName + this.lastName} `);
}

function Police(){
    Person.call(this);
    this.bageNumber = '1235';
}

util.inherits(Police, Person);

let policeman = new Police();
policeman.greet();