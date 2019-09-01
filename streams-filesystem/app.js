let fs = require('fs');
let zlib = require('zlib');

let readable = fs.createReadStream(__dirname + '/greet.txt');

let writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.pipe(writable);

let  compress = fs.createWriteStream(__dirname + '/greet.txt.gz');

let gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compress);